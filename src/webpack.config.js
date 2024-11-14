module.exports = {
    module: {
      rules: [
        {
          test: /\.scss$/, // SCSS fayllarını yükləyən qayda
          use: [
            "style-loader",    // Stil fayllarını DOM-a əlavə edir
            "css-loader",      // CSS fayllarını yükləyir
            {
              loader: "resolve-url-loader",  // URL-ləri həll edir
              options: {
                sourceMap: true, // SourceMap aktiv olmalıdır
              },
            },
            {
              loader: "sass-loader",  // SCSS fayllarını CSS-ə çevrir
              options: {
                sourceMap: true, // resolve-url-loader ilə düzgün işləmək üçün lazım
              },
            },
          ],
        },
      ],
    },
  };
  