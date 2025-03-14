module.exports = {
  rootDir: './',
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
  },
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/jest.setup.js'],
  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy',
  },
};
