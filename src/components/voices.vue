<template>
    <div id="voices">

        <Voice v-for="voice in voices"
            :key="voice.id"
            :voice="voice" />

        <div id="add-voice">
            <span @click="addVoice()">ADD VOICE &plus;</span>
        </div>
    </div>
</template>

<script>
import Voice from '@/components/synth/voice'

export default {

    components: {
        Voice
    },
    
    computed: {

        voices() {
            return this.$store.state.voices
        }
    },

    methods: {

        addVoice() {
            this.$store.dispatch('createVoice')
        }
    }
}
</script>