const nextJest = require('next/jest')
 
const createJestConfig = nextJest({ dir: './' })
 
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/test/jest.setup.ts'],
  coveragePathIgnorePatterns: [
    'node_modules',
  ],

  testEnvironment: 'jest-environment-jsdom'
}
 
module.exports = createJestConfig(customJestConfig)