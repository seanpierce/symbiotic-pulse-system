<template>
   <div class="lfo module__column right">
        <div class="module__title"
            data-title="An LFO is an oscillator that operates at a low frequency. Typically, an LFO produces a signal that sounds more like clicks, or is possibly inaudible. Here, we use LFO's to modulate other parameters.">
            LFO
        </div>

        <WaveSelecter
            :wave="wave"
            :updateWave="updateWave"
        />

        <FreqSlider 
            :freq="freq"
            :displayFreq="displayFreq"
            :updateFreq="updateFreq"
            :max="100"
            :step="1"
        />

        <FreqSlider 
            :title="'gain'"
            :freq="gain"
            :displayFreq="displayGain"
            :updateFreq="updateGain"
            :max="gainMax"
            :min="gainMin"
            :step="gainStep"
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
        wave: String,
        freq: Number,
        displayFreq: Number,
        freqStep: Number,
        gain: Number,
        displayGain: Number,
        gainStep: {
            type: Number,
            default: 1
        },
        gainMax: {
            type: Number,
            default: 100
        },
        gainMin: {
            type: Number,
            default: 0
        },
        updateWave: Function,
        updateFreq: Function,
        updateGain: Function,
    }
}
</script>