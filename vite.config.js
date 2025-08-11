// vite.config.js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import postcssPxtorem from 'postcss-pxtorem';

export default defineConfig({
  plugins: [vue()],
  css: {
    postcss: {
      plugins: [
        postcssPxtorem({
          rootValue: 16,
          propList: ['*'],
          selectorBlackList: ['no-rem'],
          exclude: /node_modules/i
        })
      ]
    }
  }
});