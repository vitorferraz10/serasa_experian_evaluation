const nextJest = require('next/jest')
 
const createJestConfig = nextJest({ dir: './' })
 
const customJestConfig = {
  moduleNameMapper: {
    '^test/(.*)$': '<rootDir>/src/test/$1', 
    '^styles/(.*)$': '<rootDir>/src/styles/$1', 
    '^store/(.*)$': '<rootDir>/src/store/$1',
    '^service/(.*)$': '<rootDir>/src/service/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/src/test/jest.setup.ts'],
  coveragePathIgnorePatterns: [
    'node_modules',
  ],

  testEnvironment: 'jest-environment-jsdom'
}
 
module.exports = createJestConfig(customJestConfig)