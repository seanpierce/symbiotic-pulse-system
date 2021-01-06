<template>
    <div class="module__controls">
        <div class="module__label">{{ title.toUpperCase() }}</div>
        <div>{{ freq }}</div>
        <input type="range" :min="min" :max="max" :step="step" v-model="frequency" />
    </div>
</template>

<script>
export default {
    
    props: {
        updateFreq: Function,
        freq: {
            default: '0'
        },
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
                return this.freq
            },
            set(value) {
                this.updateFreq(value)
            }
        }
    }
}
</script>