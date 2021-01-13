<template>
    <div class="module__controls">
        <div class="module__label">WAVE</div>
        <img class="module__wave" 
            :src="sine"
            v-bind:class="{ 'selected': wave === 'sine' }"
            @click="set('sine')"
            alt="sine wave">
        <img class="module__wave" 
            :src="square"
            v-bind:class="{ 'selected': wave === 'square' }"
            @click="set('square')"
            alt="square wave">
        <img class="module__wave" 
            :src="sawtooth"
            @click="set('sawtooth')"
            v-bind:class="{ 'selected': wave === 'sawtooth' }"
            alt="sawtooth wave">
    </div>
</template>

<script>
export default {
    
    props: {
        voice: Object,
        wave: String,
        updateWave: Function
    },

    data() {
        return {
            // require images
            sine: require('@/assets/images/icons/sine.png'),
            square: require('@/assets/images/icons/square.png'),
            sawtooth: require('@/assets/images/icons/saw.png')
        }
    },

    methods: {

        set(wave) {
            this.updateWave(wave)
        }
    }
}
</script>