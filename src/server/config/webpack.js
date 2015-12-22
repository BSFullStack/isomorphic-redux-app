import webpack from 'webpack';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../../../webpack.config';
import webpackDevMiddleware from "webpack-dev-middleware" ;

import reactServerRenderMiddleware from '../middlewares/renderPage-middleware';
export default  function(app,config){
    //compiler实例
    const compiler = webpack(webpackConfig);
    const devMiddleware = webpackDevMiddleware(compiler, {
        publicPath: webpackConfig.output.publicPath,
        noInfo: true,
        stats: {
            colors: true
        }
    });
    const hotMiddleware = webpackHotMiddleware(compiler);
    app.use(devMiddleware);
    app.use(hotMiddleware);
    //集成服务端渲染中间件
    app.get("/*",reactServerRenderMiddleware);

}
