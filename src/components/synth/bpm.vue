<template>
    <div class="module bpm">

        <div class="module__title">
            BPM {{ bpm }}
        </div>

        <div class="module__controls">
            <input type="range" min="1" max="420" step="1" v-model="bpm" />
        </div>
    </div>
</template>

<script>
export default {

    computed: {
        bpm: {
            get() {
                return this.$store.state.bpm
            },
            set(value) {
                this.$store.dispatch('setBpm', parseInt(value))
            }
        },

        milliSeconds() {
            return (60000 / this.$store.state.bpm) * 0.25
        }
    },

    methods: {
        
        run() {
            setTimeout(() => {
                this.step()
            }, this.milliSeconds);
        },

        step() {
            this.$store.dispatch('step')
            this.run()
        }
    },

    mounted() {

        this.run()
    }
}
</script>