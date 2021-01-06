<template>
  <div id="app">
    <div v-if="loaded">
      <Voice />
      <BPM />
    </div>

    <div v-else class="start">
      <h1>SYMBIOTIC PULSE SYSTEM</h1>
      <div class="button" @click="init()">START</div>
    </div>
  </div>
</template>

<script>
import Voice from '@/components/synth/voice'
import BPM from '@/components/synth/bpm'

export default {
  name: 'App',

  components: {
    Voice,
    BPM
  },

  computed: {

    loaded() {
      return this.$store.getters.loaded
    }
  },

  methods: {
    
    init() {
      this.$store.dispatch('init')
    }
  }
}
</script>