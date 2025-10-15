import { hideBin } from 'yargs/helpers';
import yargs from 'yargs/yargs';
import { spawnSync } from '../util/spawnSync';

/**
 * usage: node createAtomComponent.js --file Bleed.tsx
 */
async function main() {
  const argv = yargs(hideBin(process.argv))
    .option('component', {
      type: 'string',
      demandOption: true,
      description: 'Name of your component file, e.g. Bleed.tsx',
    })
    .help()
    .parseSync() as { component: string };

  console.log(`🛠  Generating atom component "${argv.component}"…`);

  // run your hygen template
  spawnSync(`npx hygen new chakrauiAtomComponent --componentName ${argv.component}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
