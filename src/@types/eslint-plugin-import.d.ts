declare module 'eslint-plugin-import' {
  import { type ESLint } from 'eslint';

  interface Plugin {
    rules: Record<string, ESLint.Rule.RuleModule>;
    configs: Record<string, any>;
  }

  const plugin: Plugin;
  export = plugin;
}
