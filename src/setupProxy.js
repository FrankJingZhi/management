const proxy = require("http-proxy-middleware");
module.exports = function(app) {
  app.use(
    proxy("/manage-api", {
      target: "localhost:8080/textNet-SSM",
      changeOrigin: true, // needed for virtual hosted sites
      ws: true, // proxy websockets
      pathRewrite: {
        "^/api": ""
      }
    })
  );
};