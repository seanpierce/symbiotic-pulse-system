<template>
   <div class="lfo module__column right">
        <div class="module__title">
            LFO
        </div>

        <WaveSelecter
            :wave="wave"
            :updateWave="updateWave"
        />

        <FreqSlider 
            :freq="freq"
            :updateFreq="updateFreq"
            :max="100"
            :step="0.1"
        />

        <FreqSlider 
            :title="'gain'"
            :freq="gain"
            :updateFreq="updateGain"
            :max="100"
            :step="0.1"
        />
    </div>
</template>

<script>
import WaveSelecter from '@/components/parts/wave-selecter'
import FreqSlider from '@/components/parts/freq-slider'

export default {

    components: {
        WaveSelecter,
        FreqSlider
    },

    props: {
        updateWave: Function,
        updateFreq: Function,
        updateGain: Function,
        wave: {
          default: 'square'
        },
        freq: {
          default: '0'
        },
        gain: {
          default: '0'
        }
    }
}
</script>