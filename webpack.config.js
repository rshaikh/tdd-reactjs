module.exports = {
  context: __dirname + "/src",
  entry: "./app.jsx",

  output: {
    filename: "bundle.js",
    path: __dirname + "/src"
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: "babel",
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};