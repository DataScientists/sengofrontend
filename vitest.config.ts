import { mergeConfig, coverageConfigDefaults, ViteUserConfig, ConfigEnv } from 'vitest/config';
import viteConfigFn from './vite.config';

const baseConfig: ViteUserConfig = viteConfigFn({ command: 'serve', mode: 'test' } as ConfigEnv);

export default mergeConfig(
  { ...baseConfig },
  {
    test: {
      name: 'node',
      environment: 'happy-dom',
      include: ['**/*.test.ts'],
      coverage: {
        exclude: [
          ...coverageConfigDefaults.exclude,
          'storybook.setup.ts',
          '**/*.stories.*',
          '.storybook',
          'src/docs',
          'build',
          'public',
          'functions',
          '**/serviceWorker.ts',
        ],
      },
    },
  }
);
