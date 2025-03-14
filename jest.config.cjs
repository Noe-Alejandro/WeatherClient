module.exports = {
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
  },
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
  testEnvironment: 'jest-environment-jsdom',
  setupFiles: ['<rootDir>/src/__tests__/jest.setup.js'],
};
