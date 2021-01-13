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
    </div>
</template>

<script>
import VCO from '@/components/synth/vco'
import VCF from '@/components/synth/vcf'
import VCA from '@/components/synth/vca'

export default {

    components: {
        VCO,
        VCF,
        VCA
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