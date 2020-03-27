// Prismizer

let ac = new AudioContext();

var osc = ac.createOscillator();
osc.connect(ac.destination);

osc.start();

osc.stop();