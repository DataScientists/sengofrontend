import consola from 'consola';
import fs from "fs";
import path from 'path';
import { hideBin } from 'yargs/helpers';
import yargs from 'yargs/yargs';
import { spawnSync } from '../util/spawnSync';

const argv = yargs(hideBin(process.argv)).argv as unknown as { file: string }

const createGrapqhlFiles = async () => {
  if (argv.file) {
   
    const file = path.resolve('src/graphql/queries/fragments', argv.file as string)
    if (!fs.existsSync(file)) {
        throw new Error(`File ${file} does not exist`);
    }
    spawnSync(`npx hygen new graphqlFiles --file ${file}`)
    consola.success('Succeed!')
    return
  }

  
}

createGrapqhlFiles()
