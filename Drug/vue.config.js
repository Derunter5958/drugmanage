module.exports = {
  lintOnSave: false,
  runtimeCompiler: true,
  publicPath: '/drugmis',
  outputDir: '/drugmis',
  productionSourceMap:true,
  devServer:{
    port:80,
    proxy:{
      '/api/*':{
        target:'http://localhost:5000',
        changeOrigin:true,
        ws:true,
        pathRewrite:{
          '^/api':''
        }
      }
    }
  },
}