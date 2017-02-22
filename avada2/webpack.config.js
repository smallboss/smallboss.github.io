// // //webpack.config.js 
// var SvgStore = require('webpack-svgstore-plugin');
// // module.exports = {
// //   plugins: [
// //     // create svgStore instance object 
// //     new SvgStore({
// //       // svgo options 
// //       svgoOptions: {
// //         plugins: [
// //           { removeTitle: true }
// //         ]
// //       }
// //     })
// //   ]
// // }

// module.exports = {
//     entry: './main.js',
//     // output: {
//     //     filename: 'bundle.js'
//     // },

//     plugins: [
//       // create svgStore instance object 
//       new SvgStore({
//         // svgo options 
//         svgoOptions: {
//           plugins: [
//             { removeTitle: true }
//           ]
//         }
//       })
//   ]
// }

  var SvgSpritePlugin = require('webpack-svg-sprite-plugin')
 
  module.exports = {
    // ... 
    plugins: [
      new SvgSpritePlugin({ filename: 'my-sprite.svg' })
    ]
  }