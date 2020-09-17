import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

const genDefaultConfig = require('@storybook/angular/dist/server/config/defaults/webpack.config.js');

// module.exports = (baseConfig, env) => {
//   const config = genDefaultConfig(baseConfig, env);

//   // Add .scss rule
//   config.module.rules.unshift({
//     test: /\.scss$/,
//     loaders: ['raw-loader', 'sass-loader'],
//   });

//   // Overwrite default .css rule
//   const cssRule = config.module.rules.find(rule => rule.test && rule.test.toString() === '/\\.css$/');
//   if (cssRule) cssRule.exclude = /\.component\.css$/;

//   return config;
// };
