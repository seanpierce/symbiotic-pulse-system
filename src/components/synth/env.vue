<template>
    <div class="module envelope">
        <div class="module__title">
            ENV
        </div>

        <div class="module__column">
            <FreqSlider 
                :title="'attack'"
                :freq="voice.properties.env.attack"
                :displayFreq="Math.round(voice.properties.env.attack * 100)"
                :updateFreq="voice.UPDATE_ENV_ATTACK"
                :step="0.01"
            />
        </div>

        <div class="module__column">
            <FreqSlider 
                :title="'decay'"
                :freq="voice.properties.env.decay"
                :displayFreq="Math.round(voice.properties.env.decay * 100)"
                :updateFreq="voice.UPDATE_ENV_DECAY"
                :step="0.01"
            />
        </div>

        <div class="module__title">
            TRIG
        </div>

        <ul class="trigger-list">
            <li :class="{ 'selected' : selectedTrig(1) }"
                @click="selectTrig(1)">HOLD</li>
            <li :class="{ 'selected' : selectedTrig(0.25) }"
                @click="selectTrig(0.25)" >1/4</li>
            <li :class="{ 'selected' : selectedTrig(0.125) }"
                @click="selectTrig(0.125)">1/8</li>
            <li :class="{ 'selected' : selectedTrig(0.0625) }"
                @click="selectTrig(0.0625)">1/16</li>
        </ul>
    </div>
</template>

<script>
import FreqSlider from '@/components/parts/freq-slider'

export default {
    
    components: {
        FreqSlider
    },

    props: {
        voice: Object
    },

    computed: {

        step() {
            return this.$store.state.step
        },

        trig() {
            if (this.voice) return this.voice.properties.env.trig 
            else return null
        }
    },

    watch: {
        step() {
            this.voice.STEP()
        }
    },

    methods: {

        selectedTrig(value) {
            return this.trig === value
        },

        selectTrig(value) {
            this.voice.UPDATE_ENV_TRIG(value)
        }
    }
}
</script>