export const clearMocks = true;
export const roots = ['<rootDir>/tests'];
export const setupFilesAfterEnv = ['<rootDir>/setupTests.js'];
export const testEnvironment = 'node';
export const transform = {
    '^.+\\.jsx?$': 'babel-jest'
};
export const testMatch = [
    '**/tests/**/*.test.js'
];
export const collectCoverage = true;
export const collectCoverageFrom = [
    'src/**/*.js',
    '!src/index.js',
    '!src/server.js',
    '!src/config/**',
    '!src/middleware/**'
];
export const coverageDirectory = 'coverage';
export const coverageReporters = ['text', 'lcov'];
  