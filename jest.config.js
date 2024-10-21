module.exports = {
  preset: 'ts-jest/presets/js-with-ts', // 使用 ts-jest 预设，支持 TypeScript 和 JavaScript 测试
  testEnvironment: 'jsdom', // 使用 jsdom 作为测试环境，模拟浏览器环境
  clearMocks: true, // 在每次测试后清除模拟数据
  testPathIgnorePatterns: ['/.history/'], // 忽略匹配指定模式的测试文件路径
  modulePathIgnorePatterns: ['<rootDir>/package.json'], // 忽略匹配指定模式的模块路径
  resetMocks: false, // 不重置模拟数据
  setupFiles: ['./jest.setup.js', 'jest-localstorage-mock'], // 在 Jest 环境初始化之前运行的脚本文件，包括 jest.setup.js 和 jest-localstorage-mock
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'], // 在 Jest 环境初始化之后运行的脚本文件，用于扩展 Jest 的 expect 函数
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { tsconfig: 'tsconfig.json' }], // 使用 ts-jest 转换 TypeScript 和 TSX 文件
  },
  collectCoverageFrom: [
    '<rootDir>/**/src/**/*.{js,jsx,ts,tsx}', // 收集指定模式的文件的覆盖率信息
    '!**/demo/**', // 排除匹配指定模式的文件
    '!**/example/**',
    '!**/es/**',
    '!**/lib/**',
    '!**/dist/**',
  ],
  transformIgnorePatterns: ['^.+\\.js$'], // 忽略匹配指定模式的文件的转换
};