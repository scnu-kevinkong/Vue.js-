module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px-to-viewport": {
      unitToConvert: "px",
      viewportWidth: 375,
      unitPrecision: 3,
      propList: [
        "*"
      ],
      viewportUnit: "vw",
      fontViewportUnit: "vw",
      // 该项仅在使用 Circle 组件时需要
      // 原因参见 https://github.com/youzan/vant/issues/1948
      selectorBlackList: ['van-circle__layer'],
      minPixelValue: 1,
      mediaQuery: false,
      replace: true,
      // exclude: /(\/|\\)(node_modules)(\/|\\)/,
    }
  }
}
