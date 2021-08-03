// module.exports = { presets: ['@babel/preset-env'] };
module.exports = {
  presets: [
    [
      'env',
      {
        targets: {
          browsers: ['last 2 Chrome versions'],
        },
      },
      '@babel/preset-react ',
    ],
  ],
};
