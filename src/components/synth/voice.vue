<template>
    <div class="voice" v-if="loaded">
        <VCO 

        />
    </div>
</template>

<script>
import VCO from '@/components/synth/vco'
import Bus from '@/bus'
import CONFIG from '@/config'

export default {

    components: {
        VCO
    },

    data() {
        return {
            vco: null,
            vco_lfo: null,
            vco_lfo_gain: null,
            vca: null,
            loaded: false
        }
    },

    computed: {

        context() {
            return this.$store.state.context
        },
    },

    methods: {

        init() {
            // initialize nodes
            // VCO
            this.vco = this.context.createOscillator()
            this.vco.frequency.value = CONFIG.defaults.vco.freq
            this.vco.type = CONFIG.defaults.vco.type

            // VCO_LFO
            this.vco_lfo = this.context.createOscillator()
            this.vco_lfo.frequency.value = CONFIG.defaults.lfo.freq
            this.vco_lfo.type = CONFIG.defaults.lfo.type
            this.vco_lfo_gain = this.context.createGain()
            
            // connect nodes
            this.vco_lfo.connect(this.vco_lfo_gain)
            this.vco_lfo_gain.connect(this.vco.frequency)
            
            // start nodes
            this.vco.start()
            this.vco_lfo.start()
            this.vco.connect(this.context.destination)

            this.loaded = true
        },

        // update methods
        UPDATE_VCO_TYPE(value) {
            this.vco.type = value
        },

        UPDATE_VCO_FREQ(value) {
            this.vco.frequency.value = value
        },

        UPDATE_VCO_LFO_TYPE(value) {
            this.vco_lfo.type = value
        },

        UPDATE_VCO_LFO_FREQ(value) {
            this.vco_lfo.frequency.value = value
        },

        UPDATE_VCO_LFO_GAIN(value) {
            this.vco_lfo_gain.value = value
        }
    },

    created() {

        this.init()

        // set bus methods
        Bus.$on('UPDATE_VCO_TYPE', (payload) => {
            this.UPDATE_VCO_TYPE(payload)
        })

        Bus.$on('UPDATE_VCO_FREQ', (payload) => {
            this.UPDATE_VCO_FREQ(payload)
        })

        Bus.$on('UPDATE_VCO_LFO_TYPE', (payload) => {
            this.UPDATE_VCO_LFO_TYPE(payload)
        })

        Bus.$on('UPDATE_VCO_LFO_FREQ', (payload) => {
            this.UPDATE_VCO_LFO_FREQ(payload)
        })

        Bus.$on('UPDATE_VCO_LFO_GAIN', (payload) => {
            this.UPDATE_VCO_LFO_GAIN(payload)
        })
    }
}
</script>