const MCFlubber = require('../src/main.js');
const MC = require('@kissmybutton/motorcortex');
const FlubberPlugin = MC.loadPlugin(MCFlubber);

const myClip = new MC.Clip({
    id: 'my-clip',
    type: 'plain',
    host: document.getElementById('clip-container')
});

const flubberIncident = new FlubberPlugin.Flubber(
    {
        animatedAttrs: {
            d: [[0, 0], [2, 0], [2, 1], [1, 2], [0, 1]]
        }
    },
    {
        selector: '#flubber',
        duration: 2000
    }
);

const fubberIncident2 = new FlubberPlugin.Flubber(
    {
        animatedAttrs: {
            d: "M2 1 h1 v1 h1 v1 h-1 v1 h-1 v-1 h-1 v-1 h1 z"
        }
    },
    {
        selector: '#flubber',
        duration: 2000
    }
); 

myClip.addIncident(flubberIncident, 0);
myClip.addIncident(fubberIncident2, 2000);
console.log(myClip);

new MC.Timer({
  Incident: myClip,
  width: 290, // timer width must be .bar width minus #time-cursor width
  cursorWidth: 10
});
// myClip.play();



