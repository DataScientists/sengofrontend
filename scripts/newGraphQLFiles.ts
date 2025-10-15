import { hideBin } from 'yargs/helpers';
import yargs from 'yargs/yargs';
import { spawnSync } from './util/spawnSync';

const argv = yargs(hideBin(process.argv)).argv as unknown as { file: string };

if (!argv.file) {
  throw new Error('Please provide name of fragment file');
}

spawnSync('yarn tsc:scripts');
spawnSync(`node scripts/graphql/createGrapqhlFiles.ts --file ${argv.file}`);
