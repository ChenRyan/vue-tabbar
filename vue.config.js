module.exports = {
    publicPath: process.env.NODE_ENV === 'development' ? './' : '././',
    outputDir: 'dist',
    configureWebpack:{
        resolve:{
            alias:{
                'assets': "@/assets",
                'common': "@/common",
                'components': "@/components",
            }
        }
    },
   
}