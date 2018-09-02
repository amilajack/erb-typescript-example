module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 10 }, useBuiltIns: 'usage' }],
    '@babel/preset-typescript'
  ],

  plugins: [
    '@babel/plugin-proposal-function-bind',
    '@babel/plugin-proposal-do-expressions'
  ],

  env: {
    production: {
      presets: ['@babel/preset-react'],

      plugins: [
        'dev-expression',
        '@babel/plugin-transform-react-constant-elements',
        '@babel/plugin-transform-react-inline-elements',
        ['transform-react-remove-prop-types', { removeImport: true }],
        'transform-react-pure-class-to-function'
      ]
    },

    development: {
      presets: [['@babel/preset-react', { development: true }]],

      plugins: [
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-transform-classes',
        [
          'flow-runtime',
          {
            assert: true,
            annotate: true
          }
        ]
      ]
    }
  }
};
