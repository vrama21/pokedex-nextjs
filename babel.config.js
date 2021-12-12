module.exports = {
  presets: [
    '@babel/preset-typescript',
    [
      'env',
      {
        targets: {
          browsers: ['last 2 Chrome versions'],
        },
      },
    ],
    ['@babel/preset-env', { targets: { node: 'current' } }],
  ],
  plugins: [
    [
      '@babel/plugin-transform-react-jsx',
      {
        runtime: 'automatic',
      },
    ],
  ],
};
