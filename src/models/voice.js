/**
 * Main class that drives the synth engine.
 * @param { AudioContext } context Accepts an AudioContext object to build each audio node.
 * @param { Number } id Accepts a number used as a primary key for the instance.
 */
export default class Voice {

    constructor(context, id) {
        this.id = id
        this.context = context

        // AudioContext does not provide the ability to read values from a node.
        // Display properties must be maintained in tandem.
        this.properties = {
            vco: {
                type: 'square',
                frequency: 220,
                lfo: {
                    type: 'sine',
                    frequency: 0,
                    gain: 0
                }
            },
            vcf: {
                type: 'lowpass',
                frequency: 10000,
                resonance: 0,
                lfo: {
                    type: 'sine',
                    frequency: 0,
                    gain: 0
                }
            },
            vca: {
                gain: 1,
                lastGain: 1,
                lfo: {
                    type: 'sine',
                    frequency: 0,
                    gain: 0
                }
            },
            env: {
                attack: 0,
                decay: 0.3,
                trig: 1
            },
            step: 0
        }

        this.build()
    }

    build = () => {

        // VCO
        this.vco = this.context.createOscillator()
        this.vco.frequency.value = this.properties.vco.frequency
        this.vco.type = this.properties.vco.type

        // VCO_LFO
        this.vco_lfo = this.context.createOscillator()
        this.vco_lfo.frequency.value = this.properties.vco.lfo.frequency
        this.vco_lfo.type = this.properties.vco.lfo.type
        this.vco_lfo_gain = this.context.createGain({
            gain: this.properties.vco.lfo.gain
        })

        // VCF
        this.vcf = this.context.createBiquadFilter()
        this.vcf.frequency.value = this.properties.vcf.frequency
        this.vcf.Q.value = this.properties.vcf.resonance
        this.vcf.type = this.properties.vcf.type

        // VCF_LFO
        this.vcf_lfo = this.context.createOscillator()
        this.vcf_lfo.frequency.value = this.properties.vcf.lfo.frequency
        this.vcf_lfo.type = this.properties.vcf.lfo.type
        this.vcf_lfo_gain = this.context.createGain({
            gain: this.properties.vcf.lfo.gain
        })

        // VCA
        this.vca = this.context.createGain({
            gain: this.properties.vca.gain
        })

        // VCA_LFO
        this.vca_lfo = this.context.createOscillator()
        this.vca_lfo.frequency.value = this.properties.vca.lfo.frequency
        this.vca_lfo.type = this.properties.vca.lfo.type
        this.vca_lfo_gain = this.context.createGain({
            gain: this.properties.vca.lfo.gain
        })
        
        // connect nodes
        this.vco_lfo.connect(this.vco_lfo_gain)
        this.vco_lfo_gain.connect(this.vco.frequency)
        this.vcf_lfo.connect(this.vcf_lfo_gain)
        this.vcf_lfo_gain.connect(this.vcf.frequency)
        this.vca_lfo.connect(this.vca_lfo_gain)
        this.vca_lfo_gain.connect(this.vca.gain)

        this.vco.connect(this.vcf)
        this.vcf.connect(this.vca)
        this.vca.connect(this.context.destination)
        
        // start oscs
        this.vco.start()
        this.vco_lfo.start()
        this.vcf_lfo.start()
        this.vca_lfo.start()

        // trigger
        this.TRIGGER = () => {
            if (this.properties.env.trig === 1) {
                this.UPDATE_VCA_GAIN(1)
                return
            }

            let now = this.context.currentTime
            let a = this.properties.env.attack
            let d = this.properties.env.decay
            let volume = this.properties.vca.gain

            this.vca.gain.cancelScheduledValues(now);
            this.vca.gain.setValueAtTime(0, now);
            this.vca.gain.linearRampToValueAtTime(volume, now + a)
            this.vca.gain.linearRampToValueAtTime(0, now + a + d)
        }

        this.STEP = () => {
            // reset
            if (this.properties.step === 16)
                this.properties.step = 0

            // increment
            this.properties.step ++

            // hold
            if (this.properties.env.trig === 1)
                return

            // 1/16
            if (this.properties.env.trig === 0.0625)
                return this.TRIGGER()

            // 1/8
            if (this.properties.env.trig === 0.125) {
                if ([1, 3, 5, 7, 9, 11, 13, 15].indexOf(this.properties.step) > -1)
                    return this.TRIGGER()
            }

            // 1/4
            if (this.properties.env.trig === 0.25) {
                if ([1, 5, 9, 13].indexOf(this.properties.step) > -1)
                    return this.TRIGGER()
            }
        }

        // update methods
        this.UPDATE_VCO_TYPE = value => {
            this.vco.type = value
            this.properties.vco.type = value
        }

        this.UPDATE_VCO_FREQ = value => {
            this.vco.frequency.value = value
            this.properties.vco.frequency = value
        }

        this.UPDATE_VCO_LFO_TYPE = value => {
            this.vco_lfo.type = value
            this.properties.vco.lfo.type = value
        }

        this.UPDATE_VCO_LFO_FREQ = value => {
            this.vco_lfo.frequency.value = value
            this.properties.vco.lfo.frequency = value
        }

        this.UPDATE_VCO_LFO_GAIN = value => {
            this.vco_lfo_gain.gain.value = value
            this.properties.vco.lfo.gain = value
        }

        this.UPDATE_VCF_FREQ = value => {
            this.vcf.frequency.value = value
            this.properties.vcf.frequency = value
        }

        this.UPDATE_VCF_TYPE = value => {
            this.vcf.type = value
            this.properties.vcf.type = value
        }

        this.UPDATE_VCF_RESO = value => {
            this.vcf.Q.value = value
            this.properties.vcf.resonance = value
        }

        this.UPDATE_VCF_LFO_TYPE = value => {
            this.vcf_lfo.type = value
            this.properties.vcf.lfo.type = value
        }

        this.UPDATE_VCF_LFO_FREQ = value => {
            this.vcf_lfo.frequency.value = value
            this.properties.vcf.lfo.frequency = value
        }

        this.UPDATE_VCF_LFO_GAIN = value => {
            this.vcf_lfo_gain.gain.value = value
            this.properties.vcf.lfo.gain = value
        }

        this.UPDATE_VCA_GAIN = value => {
            if (this.properties.env.trig === 1)
                this.vca.gain.value = value
                            
            this.properties.vca.gain = value
            this.properties.vca.lastGain = value
        }

        this.UPDATE_VCA_LFO_TYPE = value => {
            this.vca_lfo.type = value
            this.properties.vca.lfo.type = value
        }

        this.UPDATE_VCA_LFO_FREQ = value => {
            this.vca_lfo.frequency.value = value
            this.properties.vca.lfo.frequency = value
        }

        this.UPDATE_VCA_LFO_GAIN = value => {
            this.vca_lfo_gain.gain.value = value
            this.properties.vca.lfo.gain = value
        },

        this.UPDATE_ENV_ATTACK = value => {
            this.properties.env.attack = value
        }

        this.UPDATE_ENV_DECAY = value => {
            this.properties.env.decay = value
        }

        this.UPDATE_ENV_TRIG = value => {
            this.properties.env.trig = value
            
            if (value === 1)
                this.UPDATE_VCA_GAIN(1)
        }

        // kill it
        this.DISCONNECT = () => {
            // stop lfos
            this.vco.stop()
            this.vco_lfo.stop()
            this.vcf_lfo.stop()
            // disconnect from destination
            this.vca.disconnect(this.context.destination)
        }
    }
}