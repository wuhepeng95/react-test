//创建webpack.config.js
var webpack = require("webpack");
module.exports = {
  entry: "./src/index.js", //入口文件
  //  output:{
  //       //node.js中__dirname变量获取当前模块文件所在目录的完整绝对路径
  //       path:__dirname, //输出位置
  //       filename:'build.js' //输入文件
  //  },
  //   module: {
  //     rules: [
  //       { exclude: "/node_modules/" },
  //       { test: /\.css$/, loader: "style-loader!css-loader" },
  //     ],
  //   },
  module: {
    // rules: [
    //   {
    //     test: /\.jsx'$/,
    //     exclude: /node_modules/,
    //     use: {
    //       // loader 是 babel
    //       loader: "babel-loader",
    //       options: {
    //         // babel 转义的配置选项
    //         babelrc: false,
    //         presets: [
    //           // 添加 preset-react
    //           require.resolve("@babel/preset-react"),
    //           [require.resolve("@babel/preset-env"), { modules: false }],
    //         ],
    //         cacheDirectory: true,
    //       },
    //     },
    //   },
    //   {
    //     test: /\.css$/,
    //     use: ["vue-style-loader", "css-loader"],
    //   },
    // ],
    rules: [
    //   {
    //     test: /\.(js|mjs|jsx|ts|tsx)$/,
    //     loader: require.resolve("babel-loader"),
    //     options: {
    //       //   customize: require.resolve(
    //       //     "babel-preset-react-app/webpack-overrides"
    //       //   ),
    //       //   presets: [
    //       //     [
    //       //       require.resolve("babel-preset-react-app"),
    //       //       {
    //       //         runtime: "automatic",
    //       //       },
    //       //     ],
    //       //   ],
    //       plugins: [
    //         [
    //           require.resolve("babel-plugin-named-asset-import"),
    //           {
    //             loaderMap: {
    //               svg: {
    //                 ReactComponent:
    //                   "@svgr/webpack?-svgo,+titleProp,+ref![path]",
    //               },
    //             },
    //           },
    //         ],
    //         require.resolve("react-refresh/babel"),
    //       ].filter(Boolean),
    //       // This is a feature of `babel-loader` for webpack (not Babel itself).
    //       // It enables caching results in ./node_modules/.cache/babel-loader/
    //       // directory for faster rebuilds.
    //       cacheDirectory: true,
    //       // See #6846 for context on why cacheCompression is disabled
    //       cacheCompression: false,
    //       compact: false,
    //     },
    //   },
    //   // Process any JS outside of the app with Babel.
    //   // Unlike the application JS, we only compile the standard ES features.
    //   {
    //     test: /\.(js|mjs)$/,
    //     exclude: /@babel(?:\/|\\{1,2})runtime/,
    //     loader: require.resolve("babel-loader"),
    //     options: {
    //     },
    //   },
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"],
      },
    ],
  },
  //其他解决方案配置
  resolve: {
    extensions: [".css", ".mjs", ".js", ".json", ".jsx"], //添加在此的后缀所对应的文件可以省略后缀
  },
  //插件
  plugins: [new webpack.BannerPlugin("This file is created by whp")],
};
