const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.less/,
        loaders: ["style-loader", "css-loader", "less-loader"],
        include: path.resolve(__dirname, "../")
	  },
	  {
        test: /\.(jpe?g|jpg|gif|png|woff|woff2|eot|ttf|svg)$/,
        loaders: ['file-loader'],
        include: path.resolve(__dirname, "../")
      }
    ]
  }
};
