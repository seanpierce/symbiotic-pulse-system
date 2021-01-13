<template>
    <div class="module__controls">
        <div class="module__label">{{ title.toUpperCase() }}</div>
        <div>{{ displayFreq || freq }}</div>
        <input type="range" :min="min" :max="max" :step="step" v-model="frequency" />
    </div>
</template>

<script>
export default {
    
    props: {
        updateFreq: Function,
        freq: Number,
        displayFreq: Number,

        title: {
            type: String,
            default: 'freq'
        },
        min: {
            type: Number,
            default: 0
        },
        max: {
            type: Number,
            default: 1
        },
        step: {
            type: Number,
            default: 1
        }
    },

    computed: {

        frequency: {
            get() {
                if (this.stepIsInteger) return parseInt(this.freq)
                else return parseFloat(this.freq)
            },
            set(value) {
                if (this.stepIsInteger) this.updateFreq(parseInt(value))
                else this.updateFreq(parseFloat(value))
            }
        },

        stepIsInteger() {
            return this.step % 1 === 0
        }
    }
}
</script>