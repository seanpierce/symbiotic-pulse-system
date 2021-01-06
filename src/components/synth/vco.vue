<template>
    <div class="module vco">
        <div class="module__column">
            <div class="module__title">
                VCO
            </div>

            <WaveSelecter
                :wave="vco.type"
                :updateWave="update_vco_type"
            />

            <FreqSlider 
                :freq="vco.freq"
                :updateFreq="update_vco_freq"
                :max="1760"
            />
        </div>

        <LFO 
            :updateWave="update_lfo_type"
            :updateFreq="update_lfo_freq"
            :updateGain="update_lfo_gain"
            :wave="lfo.type"
            :freq="lfo.freq"
            :gain="lfo.gain"
        />
    </div>
</template>

<script>
import WaveSelecter from '@/components/parts/wave-selecter'
import FreqSlider from '@/components/parts/freq-slider'
import LFO from '@/components/parts/lfo'
import Bus from '@/bus'
import CONFIG from '@/config'

export default {

    components: {
        WaveSelecter,
        FreqSlider,
        LFO
    },

    data() {
        return {
            vco: {
                ...CONFIG.defaults.vco
            },
            lfo: {
                ...CONFIG.defaults.lfo
            }
        }
    },

    methods: {

        update_vco_type(value) {
            this.vco.type = value
        },

        update_vco_freq(value) {
            this.vco.freq = value
        },

        update_lfo_type(value) {
            this.lfo.type = value
        },

        update_lfo_freq(value) {
            this.lfo.freq = Math.round(value * 1);
        },

        update_lfo_gain(value) {
            this.lfo.gain = Math.round(value * 1);
        },
    },

    watch: {

        'vco.type': (value) => {
            Bus.$emit('UPDATE_VCO_TYPE', value)
        },

        'vco.freq': (value) => {
            Bus.$emit('UPDATE_VCO_FREQ', value)
        },

        'lfo.type': (value) => {
            Bus.$emit('UPDATE_VCO_LFO_TYPE', value)
        },

        'lfo.freq': (value) => {
            Bus.$emit('UPDATE_VCO_LFO_FREQ', value)
        },

        'lfo.gain': (value) => {
            Bus.$emit('UPDATE_VCO_LFO_GAIN', value)
        },
    },
}
</script>