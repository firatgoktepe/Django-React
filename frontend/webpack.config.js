module.exports = {
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
    test: /.css$/,
    exclude: [
        /node_modules\/fundamental-styles/
    ],
    use: [
        'style-loader',
        'css-loader'
    ]
},
// run css-loader with modules enabled for css files from fundamental-styles
{
    test: /.css$/,
    include: [
        /node_modules\/fundamental-styles/
    ],
    use: [
        'style-loader',
        {
            loader: 'css-loader',
            options: {
                modules: {
                    localIdentName: '[local]-[sha1:hash:hex:6]'
                }
            }
        }
    ]
  };