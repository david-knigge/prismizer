// Prismizer

ctx = new AudioContext();

class Prismizer {
    constructor() {
        
        this.oscs = [];
        this.osc_filts = [];

        for (let i = 0; i < 3; i++) {
            this.oscs[i] = ctx.createOscillator();
            this.osc_filts[i] = ctx.createBiquadFilter();
        }

        this.glob_filter = ctx.createBiquadFilter();
    }


}