module.exports = {

    pages: {
      index: {
        entry: "src/main.js",
        title: "FreesPod",
      }
    },
    devServer: {
      port: 8081,
      disableHostCheck: true,
      host: 'localhost'
    }
  };