<template>
    <div class="voice">
        <div class="delete-voice" @click="deleteVoice()">
            <span>
                &#10005;
            </span>
        </div>

        <VCO :voice="voice" />
        <VCF :voice="voice" />
        <VCA :voice="voice" />
        <ENV :voice="voice" />
    </div>
</template>

<script>
import VCO from '@/components/synth/vco'
import VCF from '@/components/synth/vcf'
import VCA from '@/components/synth/vca'
import ENV from '@/components/synth/env'

export default {

    components: {
        VCO,
        VCF,
        VCA,
        ENV
    },

    props: {
        voice: Object
    },

    methods: {

        deleteVoice() {
            this.$store.dispatch('deleteVoice', this.voice.id)
        }
    }
}
</script>