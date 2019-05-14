import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    zhuangtai1: 0
  },
  mutations: {
    inzuoxu () {
      this.state.zhuangtai1++
    }
  },
  actions: {

  }
})
