import {
  defineConfig,
  loadEnv,
  searchForWorkspaceRoot,
  type ConfigEnv,
  type PluginOption,
  type UserConfig,
} from 'vite';
import react from '@vitejs/plugin-react';
import { copyFileSync, mkdirSync } from 'fs';
import path from 'path';
import { createHtmlPlugin } from 'vite-plugin-html';
import { sentryVitePlugin } from '@sentry/vite-plugin';
import nodePolyfills from 'rollup-plugin-polyfill-node';
const copyNoopSW = (): PluginOption => ({
  name: 'copy-noop-sw',
  apply: 'build',
  writeBundle: () => {
    mkdirSync(path.resolve('build', 'dashboard'), { recursive: true });
    copyFileSync(path.resolve('assets', 'sw.js'), path.resolve('build', 'dashboard', 'sw.js'));
  },
});

const copyOgImage = (): PluginOption => ({
  name: 'copy-og-image',
  apply: 'build',
  writeBundle: () => {
    mkdirSync(path.resolve('build', 'dashboard'), { recursive: true });
    copyFileSync(
      path.resolve('assets', 'beyul_labs_cover.jpeg'),
      path.resolve('build', 'dashboard', 'beyul_labs_cover.jpeg')
    );
  },
});

export default defineConfig(({ command, mode }: ConfigEnv): UserConfig => {
  const isDev = command !== 'build';
  const env = loadEnv(mode, process.cwd(), '');
  const {
    NODE_ENV,
    APP_MOUNT_URI,
    API_URL,
    API_GRAPHQL_ENDPOINT,
    STATIC_URL,
    SKIP_SOURCEMAPS,
    DEMO_MODE,
    SENTRY_AUTH_TOKEN,
    SENTRY_DSN,
    SENTRY_RELEASE,
    SENTRY_ORG,
    SENTRY_PROJECT,
    npm_package_version,
  } = env;
  const base = STATIC_URL ?? '/';

  const sourcemap = !SKIP_SOURCEMAPS;
  const plugins: PluginOption[] = [
    react(),
    createHtmlPlugin({
      entry: path.resolve(__dirname, 'src', 'index.tsx'),
      template: 'index.html',
      inject: {
        data: {
          API_URL,
          APP_MOUNT_URI,
          API_GRAPHQL_ENDPOINT,
          injectOgTags:
            DEMO_MODE &&
            `
            <meta property="og:type" content="website">
            <meta property="og:title" content="Sign in to the  Dashboard">
            <meta property="og:description" content="Sign in to the  Dashboard ">
            <meta property="og:image" content="${base}beyul_labs_cover.jpeg">
            <meta name="twitter:card" content="summary_large_image">
            <meta name="twitter:title" content="Sign in to the  Dashboard.">
            <meta name="twitter:description" content="Sign in to the  Dashboard.">
            <meta name="twitter:image" content="${base}beyul_labs_cover.jpeg">
            <meta property="og:url" content="https://demo.beyul.io/dashboard/">
            <meta property="twitter:domain" content="demo.beyul.io">
            <meta property="twitter:url" content="https://demo.beyul.io/dashboard/">
          `,
        },
      },
    }),
    copyOgImage(),
    copyNoopSW(),
  ];
  if (!isDev) {
    console.log('Enabling service worker...');

    plugins.push(
      sentryVitePlugin({
        authToken: SENTRY_AUTH_TOKEN,
        org: SENTRY_ORG,
        project: SENTRY_PROJECT,
      })
    );
  }
  const globals = {
    /*
      "qs" package uses 'get-intrinsic' whish refers to the global object, we need to recreate it.
      Issue presents only on development mode.
    */
    ...(isDev ? { global: {} } : {}),
    // Keep all feature flags from env in global variable
  };
  return {
    root: 'src',
    base,
    envDir: '..',
    server: {
      port: 9000,
      fs: {
        allow: [searchForWorkspaceRoot(process.cwd()), '../..'],
      },
    },
    define: {
      ...globals,
      'process.env': {
        NODE_ENV,
        APP_MOUNT_URI,
        API_URL,
        API_GRAPHQL_ENDPOINT,
        SKIP_SOURCEMAPS,
        DEMO_MODE,
        SENTRY_DSN,
        SENTRY_RELEASE,
        SENTRY_AUTH_TOKEN,
        SENTRY_ORG,
        SENTRY_PROJECT,
        RELEASE_NAME: npm_package_version,
      },
    },
    build: {
      sourcemap,
      minify: false,
      emptyOutDir: true,
      outDir: '../build/dashboard',
      assetsDir: '.',
      commonjsOptions: {
        /*
          Fix dynamic imports by "require", Necessary for react-editor-js
          Ref: https://github.com/Jungwoo-An/react-editor-js/blob/e58b7ba5e66d07912bb78f65ac911e4018d363e1/packages/react-editor-js/src/factory.ts#L5
         */
        transformMixedEsModules: true,
      },
      rollupOptions: {
        plugins: [nodePolyfills()],
        maxParallelFileOps: 2,
        cache: false,
        output: {
          sourcemap,
          manualChunks: (id) => {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          },
        },
      },
    },
    resolve: {
      dedupe: ['react', 'react-dom', 'clsx'],
      alias: {
        '@assets': path.resolve(__dirname, './assets'),
        '@locale': path.resolve(__dirname, './locale'),
        '@dashboard': path.resolve(__dirname, './src'),
        '@shared': path.resolve(__dirname, './src/shared'),
        '@config': path.resolve(__dirname, './src/config'),
        '@store': path.resolve(__dirname, './src/store'),
        '@service': path.resolve(__dirname, './src/service'),
        '@graphql': path.resolve(__dirname, './src/graphql'),
        '@components': path.resolve(__dirname, './src/components'),
        src: path.resolve(__dirname, './src'),
        /*
          Moment.js/react-moment does not fully suport ES modules.
          Vite resolves it by using jsnext:main https://github.com/moment/moment/blob/develop/package.json#L26.
          We enforce to use a different path, ignoring jsnext:main field.
        */
        moment: path.resolve(__dirname, './node_modules/moment/min/moment-with-locales.js'),
      },
    },
    plugins,
    esbuild: { jsx: 'automatic' },
  };
});
