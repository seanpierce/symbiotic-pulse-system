<template>
    <div class="module vcf">
        <div class="module__column">
            <div class="module__title">
                VCF
            </div>

            <FilterSelecter 
                :voice="voice"
                :type="voice.properties.vcf.type"
                :updateType="voice.UPDATE_VCF_TYPE"
            />

            <FreqSlider 
                :freq="voice.properties.vcf.frequency"
                :displayFreq="parseInt(voice.properties.vcf.frequency / 100)"
                :updateFreq="voice.UPDATE_VCF_FREQ"
                :max="10000"
            />

            <FreqSlider 
                :freq="voice.properties.vcf.resonance"
                :updateFreq="voice.UPDATE_VCF_RESO"
                :max="100"
            />
        </div>

        <LFO 
            :updateWave="voice.UPDATE_VCF_LFO_TYPE"
            :updateFreq="voice.UPDATE_VCF_LFO_FREQ"
            :updateGain="voice.UPDATE_VCF_LFO_GAIN"
            :wave="voice.properties.vcf.lfo.type"
            :freq="voice.properties.vcf.lfo.frequency"
            :gain="voice.properties.vcf.lfo.gain"
        />
    </div>
</template>

<script>
import FilterSelecter from '@/components/parts/filter-selecter'
import FreqSlider from '@/components/parts/freq-slider'
import LFO from '@/components/parts/lfo'

export default {
    
    components: {
        FilterSelecter,
        FreqSlider,
        LFO
    },

    props: {
        voice: Object
    },
}
</script>