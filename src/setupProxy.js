const proxy = require("http-proxy-middleware");
module.exports = function(app) {
  app.use(
    proxy("/textNet-SSM", {
      target: "http://192.168.1.110:8080",
      changeOrigin: true, // needed for virtual hosted sites
      ws: true, // proxy websockets
    })
  );
};