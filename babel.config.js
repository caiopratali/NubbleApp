module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: '.',
        alias: {
          '@theme': './src/theme',
          '@hooks': './src/hooks',
          '@routes': './src/routes',
          '@domain': './src/domain',
          '@screens': './src/screens',
          '@components': './src/components',
          '@brand': './src/brand',
          '@api': './src/api',
          '@types': './src/types',
          '@utils': './src/utils',
          '@infra': './src/infra',
        },
      },
    ],
  ],
};
