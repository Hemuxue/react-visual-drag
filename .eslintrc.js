module.exports = {
  extends: [
    'alloy',
    'alloy/react',
    'alloy/typescript',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  env: {
    browser: true,
    node: true,
    mocha: true,
    jest: true,
  },
  rules: {
    'no-dupe-class-members': 'error',
    'no-shadow': 'error',
    'react-hooks/exhaustive-deps': 'off',
  },
}
