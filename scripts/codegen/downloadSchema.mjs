import fs from 'fs'
import https from 'https'
import { getIntrospectionQuery } from 'graphql/utilities/index.mjs'
import fetch from 'node-fetch'

const defaultHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
}

/**
 * Fetches the GraphQL schema via introspection and writes it to disk.
 *
 * @param url             The GraphQL endpoint URL
 * @param outputPath      Where to write the downloaded schema (e.g. "./schema.json")
 * @param additionalHeaders  Any extra HTTP headers to include
 * @param insecure        If true, disables TLS certificate verification
 */
export async function downloadSchema(
  url,
  outputPath,
  additionalHeaders,
  insecure
) {
  const headers = { ...defaultHeaders, ...additionalHeaders }
  const agent= insecure
    ? new https.Agent({ rejectUnauthorized: false })
    : undefined

  let result
  try {
    // node-fetch's RequestInit doesn't include `agent`, so we extend it here
    const init = {
      method: 'POST',
      headers,
      body: JSON.stringify({ query: getIntrospectionQuery() }),
      agent,
    }

    const response = await fetch(url, init)
    result = await response.json()
  } catch (error) {
    throw new Error(
      `Error while fetching introspection query result: ${error.message}`
    )
  }

  if (result.errors) {
    throw new Error(
      `Errors in introspection query result: ${JSON.stringify(
        result.errors
      )}`
    )
  }

  if (!result.data) {
    throw new Error(
      `No introspection query result data found, server responded with: ${JSON.stringify(
        result
      )}`
    )
  }

  fs.writeFileSync(outputPath, JSON.stringify(result, null, 2))
}
