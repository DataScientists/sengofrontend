import { hideBin } from 'yargs/helpers';
import yargs from 'yargs/yargs';
import { spawnSync } from './util/spawnSync';

const argv = yargs(hideBin(process.argv)).argv as unknown as { component: string };
if (!argv.component) {
  throw new Error('Please provide name of component');
}
spawnSync('yarn tsc:scripts');
spawnSync(`node scripts/components/createAtomComponent.js --component ${argv.component}`);

spawnSync('eslint ./src/components/ui/atoms/ --fix');
spawnSync('eslint ./src/components/ui/atoms/index.ts --fix');
