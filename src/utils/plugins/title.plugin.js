export default {
  install (Vue) {
    Vue.prototype.$title = function (titleKey = 'App') {
      const appName = process.env.VUE_APP_TITLE
      return `${titleKey} || ${appName}`
    }
  }
}
