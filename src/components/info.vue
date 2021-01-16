<template>
    <div id="info">
        <div class="info__content">
            <p>Symbiotic Pulse System is a virtually-controlled analog modeled synthesizer for the web, developed on top of the Web Audio API. This project was oringally intended to be a synthesis learning tool for those who wish to learn about synthesis without having to purchase hardware. Like all DIY efforts, this is a work in progress - if you have any comments or suggestions, please reach out to contact@seanpierce.net.</p>
            <p>
                Upcoming features:
                <ul>
                    <li>Clickable module descriptions, ie: "What is a VCO?"</li>
                    <li>Effects for each individual voice</li>
                    <li>Symbiotic Pulse System Desktop App (in development)</li>
                    <li>MIDI Control</li>
                    <li>Ability to save and recall patches</li>
                    <li>Sequecer for each module (starting with VCO & ENV TRIG)</li>
                </ul>
            </p>
            <div class="info__back" @click="toggleInfo">BACK TO SYMBIOTIC PULSE SYSTEM</div>
        </div>
    </div>
</template>

<script>
export default {
    
    props: {
        toggleInfo: Function
    }
}
</script>