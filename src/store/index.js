import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    context: null,
    bpm: 120,
  },

  mutations: {

    SET_BPM: (state, bpm) => {
      state.bpm = bpm
    },

    SET_CONTEXT: (state) => {
      state.context = new AudioContext()
    }
  },

  actions: {

    setBpm: ({ commit }, bpm) => {
      commit('SET_BPM', bpm)
    },

    init: ({ commit }) => {
      commit('SET_CONTEXT')
    }
  },

  getters: {

    milliSeconds: state => {
      return 60000 / state.bpm
    },

    loaded: state => {
      return state.context != null
    }
  }
})
