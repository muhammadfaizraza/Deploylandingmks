const { createProxyMiddleware} = require("http-proxy-middleware");

module.exports = app => {
    app.use(
        createProxyMiddleware('/voting',
        {
            target:'https://sumairroudani.com/api/v1/',
            changeOrigin:true
        })
    )
}