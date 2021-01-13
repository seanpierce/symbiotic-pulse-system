<template>
  <div id="app">
    <div v-if="loaded">
      <Voices />
      <Controls />
    </div>
    <div v-else class="start">
      <h1>SYMBIOTIC PULSE SYSTEM</h1>
      <div class="button" @click="init()">START</div>
    </div>
  </div>
</template>

<script>
import Voices from '@/components/voices'
import Controls from '@/components/controls'

export default {
  name: 'App',

  components: {
    Voices,
    Controls
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