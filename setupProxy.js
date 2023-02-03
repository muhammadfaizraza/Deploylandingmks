const { createProxyMiddleware} = require("http-proxy-middleware");

module.exports = app => {
    app.use(
        createProxyMiddleware('/voting',
        {
            target: `${window.env.API_URL}`,
            changeOrigin:true
        })
    )
}