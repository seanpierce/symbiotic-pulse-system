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
    <img id="info-button"
      :src="require('@/assets/images/icons/info.svg')"
      @click="toggleInfo()">
    <Info v-if="showInfo" 
      :toggleInfo="toggleInfo" />
  </div>
</template>

<script>
import Voices from '@/components/voices'
import Controls from '@/components/controls'
import Info from '@/components/info'

export default {
  name: 'App',

  components: {
    Voices,
    Controls,
    Info
  },

  data() {
    return {
      showInfo: false
    }
  },

  computed: {

    loaded() {
      return this.$store.getters.loaded
    }
  },

  methods: {

    init() {
      this.$store.dispatch('init')
    },
    
    toggleInfo() {
      this.showInfo = !this.showInfo
    }
  }
}
</script>