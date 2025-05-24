module.exports = {
  clearMocks: true,
  transform: {
    '\\.m?[jt]sx?$': 'babel-jest',
  },
  testEnvironment: 'jsdom',
};
