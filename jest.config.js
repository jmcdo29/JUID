module.exports = {
  rootDir: './src',
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/../tsconfig.spec.json'
    }
  },
  testMatch: ['**/*.spec.ts'],
  moduleFileExtensions: ['ts', 'js', 'json'],
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  testEnvironment: 'node',
  coverageDirectory: '../coverage',
  collectCoverage: true,
  coverageReporters: ['lcov', 'text']
};