module.exports = {
  assetsDir: 'src/assets',

  pwa: {
    name: 'КиноMan',
    themeColor: '#A7BDF7',
    msTileColor: '#A7BDF7',
    manifestOptions: {
      background_color: '#DCFEEC'
    },
    manifestCrossorigin: 'use-credentials'
  },

  lintOnSave: false,

  css: {
    extract: false
  }
}
