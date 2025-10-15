import './enableImportGraphql'

import { getFragmentDefinition } from '@apollo/client/utilities'
import consola from 'consola'
import { readFileSync } from 'fs'
import * as fs from 'fs/promises'
import { parse } from 'graphql'
import * as path from 'path'

export const getFragmentFilenames = async () => {
  const dir = path.resolve(__dirname, '../../src/graphql/queries/fragments')
  const filenames = (await fs.readdir(dir)) as string[]
  if (!filenames) {
    consola.error('Not found:', dir)
    return { abs: [], filenames: [] }
  }

  const files = filenames
    .filter((f) => isGraphqlFile(f))
    .map((f) => {
      const parsed = parse(readFileSync(`${dir}/${f}`, 'utf-8'))
      const definition = getFragmentDefinition(parsed)

      return {
        file: f,
        type: definition.name.value,
        abs: `${dir}/${f}`,
      }
    })

  return {
    filenames: files,
  }
}

const isGraphqlFile = (file: string) => {
  return ['.gql', '.graphql'].includes(path.extname(file))
}
