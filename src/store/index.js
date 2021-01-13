import Vue from 'vue'
import Vuex from 'vuex'
import Voice from '@/models/voice'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    context: null,
    bpm: 120,
    id: 0,
    voices: []
  },

  mutations: {

    SET_BPM: (state, bpm) => {
      state.bpm = bpm
    },

    SET_CONTEXT: (state) => {
      state.context = new AudioContext()
    },

    CREATE_NEW_VOICE: (state) => {
      state.id ++
      let id = state.id
      let voice = new Voice(state.context, id)
      state.voices.push(voice)
    },

    DELETE_VOICE_AT_INDEX: (state, index) => {
      state.voices.splice(index, 1)
    }
  },

  actions: {

    init: ({ commit }) => {
      commit('SET_CONTEXT')
    },

    setBpm: ({ commit }, bpm) => {
      commit('SET_BPM', bpm)
    },

    createVoice: ({ commit }) => {
      commit('CREATE_NEW_VOICE')
    },

    deleteVoice: ({ commit, state }, id) => {
      let voice = state.voices.find(x => x.id === id)
      let index = state.voices.indexOf(voice)

      if (index > -1) {
        voice.DISCONNECT()
        commit('DELETE_VOICE_AT_INDEX', index)
      }
    }
  },

  getters: {

    milliSeconds: state => {
      return 60000 / state.bpm
    },

    loaded: state => {
      return state.context != null
    }, 

    getVoiceById: state => id => {
      let voice = state.voices.find(x => x.id === id)
      
      if (!voice)
        throw new Error(`Unable to find voice with id: ${id}`)
      else
        return voice
    },
  }
})
