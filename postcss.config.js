// postcss.config.js（独立文件，不要用 defineConfig）
module.exports = {
  plugins: [
    require('postcss-pxtorem')({
      rootValue: 16,
      propList: ['*'],
      selectorBlackList: ['no-rem'],
      exclude: /node_modules/i
    })
  ]
};