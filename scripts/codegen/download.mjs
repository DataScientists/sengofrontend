import path from 'path'
import dotenv from 'dotenv'
import consola from 'consola'
import { fileURLToPath } from 'url'
import { downloadSchema } from './downloadSchema.mjs' // assume this has its own TS types
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
dotenv.config({ path: path.resolve(__dirname, '../../.env') })

const ENDPOINT = process.env.API_GRAPHQL_ENDPOINT
if (!ENDPOINT) {
  consola.error('Environment variable API_GRAPHQL_ENDPOINT is not defined')
  process.exit(1)
}

consola.success(`Using GraphQL endpoint: ${ENDPOINT}`)

async function download() {
  try {
    await downloadSchema(
      ENDPOINT,
      path.resolve(__dirname, '../../schema.json'),
      {}
    )
    consola.success('Schema download succeeded')
  } catch (err) {
    // Normalize the error message
    const message =
      err instanceof Error
        ? err.stack ?? err.message
        : String(err)

    // Handle auth/introspection failures specially
    if (
      message.includes('Auth response is status code: 401') ||
      message.includes(
        'No introspection query result data found, server responded with:'
      )
    ) {
      consola.warn('Auth response is status code: 401')
    } else {
      consola.error(err)
    }
  }
}

download()

