<template>
    <div class="module vca">
        <div class="module__column">
            <div class="module__title">
                VCA
            </div>

            <FreqSlider 
                :title="'gain'"
                :freq="voice.properties.vca.gain"
                :displayFreq="Math.round(voice.properties.vca.gain * 100)"
                :updateFreq="voice.UPDATE_VCA_GAIN"
                :step="0.01"
            />
        </div>

        <LFO 
            :updateWave="voice.UPDATE_VCA_LFO_TYPE"
            :updateFreq="voice.UPDATE_VCA_LFO_FREQ"
            :updateGain="voice.UPDATE_VCA_LFO_GAIN"
            :wave="voice.properties.vca.lfo.type"
            :freq="voice.properties.vca.lfo.frequency"
            :gain="voice.properties.vca.lfo.gain"
            :displayGain="Math.round(voice.properties.vca.lfo.gain * 100)"
            :gainStep="0.01"
            :gainMax="1"
        />
    </div>
</template>

<script>
import FreqSlider from '@/components/parts/freq-slider'
import LFO from '@/components/parts/lfo'

export default {

    components: {
        FreqSlider,
        LFO
    },
    
    props: {
        voice: Object
    }
}
</script>