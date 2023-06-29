module.exports = {
  moduleFileExtensions: ['js', 'jsx'],
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.js?$': 'babel-jest',
  },
  transformIgnorePatterns: [
    '/node_modules/(?!(axios|redux-mock-store)/)',
    '/node_modules/(?!(axios)/)',
  ],
  extensionsToTreatAsEsm: ['.js'],
};
