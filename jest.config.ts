export default {
  testEnvironment: 'jest-fixed-jsdom',
  globals: {
    __DEV__: true,
  },
  testMatch: ['**/src/**/?(*.)+(spec|test).[jt]s?(x)'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  setupFilesAfterEnv: ['jest-plugin-context/setup', '<rootDir>/src/testUtils/setupTests.ts'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['@swc/jest'],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'd.ts'],
  moduleNameMapper: {
    '@assets(.*)$': '<rootDir>/src/assets/$1',
    '@types(.*)$': '<rootDir>/src/types/$1',
    '@shared(.*)$': '<rootDir>/src/shared/$1',
    '@components(.*)$': '<rootDir>/src/components/$1',
    '@graphql(.*)$': '<rootDir>/src/graphql/$1',
    '@config(.*)$': '<rootDir>/src/config/$1',
    '@store(.*)$': '<rootDir>/src/store/$1',
    '@mocks(.*)$': '<rootDir>/src/mocks/$1',
    '@test/(.*)$': '<rootDir>/src/testUtils/$1',
    '@service/(.*)$': '<rootDir>/src/service/$1',
    '^react$': '<rootDir>/node_modules/react',
    '^react-dom$': '<rootDir>/node_modules/react-dom',
    '^msw/node$': '<rootDir>/node_modules/msw/lib/node/index.js',
    '^msw/browser$': '<rootDir>/node_modules/msw/lib/browser/index.js',
    collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}'],
    // static assets
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|css)$':
      '<rootDir>/__mocks__/fileMock.js',
  },
  transformIgnorePatterns: ['/node_modules/(?!(lodash-es|uuid|@react-hook|emoji-mart|msw|@mswjs))'],
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
};
