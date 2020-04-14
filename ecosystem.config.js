module.exports = {
    apps: [{
      name: 'Monargent - Finantial API',
      script: './bin/www',
      args: [
        '--color',
      ],
      node_args: [
        '--inspect=0.0.0.0:9229',
      ],
      watch: [
        '.',
        'ecosystem.config.js',
        'package.json',
      ],
      ignore_watch: [
        'node_modules',
      ],
    }],

  };
  