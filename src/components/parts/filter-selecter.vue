<template>
    <div class="module__controls">
        <div class="module__label">TYPE</div>
        <img class="module__wave" 
            :src="lowPass"
            v-bind:class="{ 'selected': type === 'lowpass' }"
            @click="set('lowpass')"
            alt="lowpass filter">
        <img class="module__wave" 
            :src="highPass"
            v-bind:class="{ 'selected': type === 'highpass' }"
            @click="set('highpass')"
            alt="highpass filter">
    </div>
</template>

<script>
export default {
    
    props: {
        voice: Object,
        type: String,
        updateType: Function
    },

    data() {
        return {
            // require images
            lowPass: require('@/assets/images/icons/lowpass.png'),
            highPass: require('@/assets/images/icons/highpass.png')
        }
    },

    methods: {

        set(type) {
            this.updateType(type)
        }
    }
}
</script>