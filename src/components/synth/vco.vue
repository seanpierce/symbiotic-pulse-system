<template>
    <div class="module vco">
        <div class="module__column">
            <div class="module__title">
                VCO
            </div>

            <WaveSelecter
                :voice="voice"
                :wave="voice.properties.vco.type"
                :updateWave="voice.UPDATE_VCO_TYPE"
            />

            <FreqSlider 
                :freq="voice.properties.vco.frequency"
                :updateFreq="voice.UPDATE_VCO_FREQ"
                :max="1760"
            />
        </div>

        <LFO 
            :updateWave="voice.UPDATE_VCO_LFO_TYPE"
            :updateFreq="voice.UPDATE_VCO_LFO_FREQ"
            :updateGain="voice.UPDATE_VCO_LFO_GAIN"
            :wave="voice.properties.vco.lfo.type"
            :freq="voice.properties.vco.lfo.frequency"
            :gain="voice.properties.vco.lfo.gain"
        />
    </div>
</template>

<script>
import WaveSelecter from '@/components/parts/wave-selecter'
import FreqSlider from '@/components/parts/freq-slider'
import LFO from '@/components/parts/lfo'

export default {

    components: {
        WaveSelecter,
        FreqSlider,
        LFO
    },

    props: {
        voice: Object
    }
}
</script>