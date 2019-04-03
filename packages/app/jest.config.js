const { defaults: tsjPreset } = require('ts-jest/presets')
const { pathsToModuleNameMapper } = require('ts-jest/utils')

/**
 * @see https://github.com/jpavon/react-scripts-ts/blob/master/scripts/test.js#L43
 */
const setupJestConfig = (dirName = '<rootDir>') => {
  const jestConfig = {
    verbose: true,
    transformIgnorePatterns: [
      '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|ts|tsx)$',
    ],
    setupFilesAfterEnv: ['./jest.setup.js'],
    collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
    testMatch: [
      dirName + '/__tests__/**/*.(j|t)s?(x)',
      dirName + '/src/**/__tests__/**/*.(j|t)s?(x)',
      dirName + '/src/**/?(*.)(test).(j|t)s?(x)',
    ],
    testPathIgnorePatterns: [
      dirName + '/__tests__/deps/*.(j|t)s?(x)',
      dirName + '/__tests__/fixtures/*.(j|t)s?(x)',
    ],
    testEnvironment: 'node',
    transform: {
      ...tsjPreset.transform,
    },
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths /*, { prefix: '<rootDir>/' } */ ),
    moduleFileExtensions: [
      'web.ts',
      'ts',
      'web.tsx',
      'tsx',
      'web.js',
      'js',
      'web.jsx',
      'jsx',
      'mjs',
      'json',
      'node',
    ],
    /**
     * @see https://kulshekhar.github.io/ts-jest/user/config/
     */
    globals: {
      'ts-jest': {
        tsConfig: require('./tsconfig.test.json'),
        diagnostics: {
          warnOnly: true,
        },
      },
    },
  }

  return jestConfig
}

module.exports = setupJestConfig()
