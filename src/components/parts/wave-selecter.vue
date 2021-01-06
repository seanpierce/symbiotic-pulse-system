<template>
    <div class="module__controls">
        <div class="module__label">WAVE</div>
        <img class="module__wave" 
            :src="sine"
            v-bind:class="{ 'selected': wave === 'sine' }"
            @click="updateWave('sine')"
            alt="sine wave">
        <img class="module__wave" 
            :src="square"
            v-bind:class="{ 'selected': wave === 'square' }"
            @click="updateWave('square')"
            alt="square wave">
        <img class="module__wave" 
            :src="sawtooth"
            @click="updateWave('sawtooth')"
            v-bind:class="{ 'selected': wave === 'sawtooth' }"
            alt="sawtooth wave">
    </div>
</template>

<script>
export default {
    
    props: {
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
    }
}
</script>