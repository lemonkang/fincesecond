
module.exports = {
    style: {
      postcss: {// craco.config.js
        plugins: [
          require('tailwindcss'),
          require('autoprefixer'),
        ],
      },
    },
  }