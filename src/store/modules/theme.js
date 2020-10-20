export default {
  state: {
    themeArr: [
      { id: 'white', name: 'Ледниковый период' },
      { id: 'blue', name: 'Соник X' },
      { id: 'dark', name: 'Люди в чёрном' }
    ],
    currentTheme: localStorage.theme || 'dark'
  },
  actions: {
    setTheme ({ dispatch, state }, { id, name }) {
      localStorage.theme = id
      state.currentTheme = id
    }
  },
  getters: {
    theme (state) {
      return state
    }
  }
}
