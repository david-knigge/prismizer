// Prismizer

ctx = new AudioContext();

class Prismizer {
    constructor(def_amp=[0.6, 0.0, 0.0], def_wave=["sine", "sine", "sine"], def_det=[0, 12, -12]) {
        
        this.oscs = [];
        this.oscs_gains = [];
        this.osc_filts = [];

        this.limiter = ctx.createGain();
        this.limiter.gain.value = 0.05;
        this.limiter.connect(ctx.destination);

        this.master_gain = ctx.createGain();
        this.master_gain.gain.value = 0.6;
        this.master_gain.connect(this.limiter);

        for (let i = 0; i < 3; i++) {
            this.oscs[i] = ctx.createOscillator();
            this.oscs_gains[i] = ctx.createGain();
            this.osc_filts[i] = ctx.createBiquadFilter();

            this.oscs[i].type = def_wave[i];
            this.oscs_gains[i].gain.value = def_amp[i];

            // filter disabled at start
            this.oscs[i].connect(this.oscs_gains[i]);
            this.oscs_gains[i].connect(this.master_gain);
            // start oscillators at different times to prevent phasing
            this.oscs[i].start(ctx.currentTime + (i*0.000000003));
        }

        this.glob_filter = ctx.createBiquadFilter();
    }

    set_master_volume(val) {
        this.master_gain.gain.value = val;
    }

    set_osc_volume(osc_index, value) {
        this.oscs_gains[osc_index].gain.value = value;
    }

    set_osc_source(osc_index, type) {
        this.oscs[osc_index].type = type;
    }

}