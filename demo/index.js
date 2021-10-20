import { HTMLClip, loadPlugin } from "@donkeyclip/motorcortex";
import Player from "@donkeyclip/motorcortex-player";
import MCFlubber from "../dist/motorcortex-flubber.esm";

const FlubberPlugin = loadPlugin(MCFlubber);

const myClip = new HTMLClip({
  id: "my-clip",
  host: document.getElementById("clip"),
  html: `
    <div class="wrapper">
      <svg xmlns="http://www.w3.org/2000/svg" width="150px" height="150px">
        <g transform="scale(30)">
          <path id="flubber" d="M1,0 L2,2 L0,2 Z"></path>
        </g>
      </svg>
    </div>`,
  css: `
    .wrapper{
      background:white;
      display:flex;
      align-items:center;
      justify-content:center;
      width:100%;
      height:100%;
    }
    #flubber{
      fill: #8b00ff;
      display:block;
    }
  `,
  containerParams: {
    width: "400px",
    height: "300px",
  },
});

const flubberIncident = new FlubberPlugin.Flubber(
  {
    animatedAttrs: {
      d: [
        [0, 0],
        [2, 0],
        [2, 1],
        [1, 2],
        [0, 1],
      ],
    },
  },
  {
    selector: "#flubber",
    duration: 2000,
  }
);

const fubberIncident2 = new FlubberPlugin.Flubber(
  {
    animatedAttrs: {
      d: "M2 1 h1 v1 h1 v1 h-1 v1 h-1 v-1 h-1 v-1 h1 z",
    },
  },
  {
    selector: "#flubber",
    duration: 2000,
  }
);

myClip.addIncident(flubberIncident, 0);
myClip.addIncident(fubberIncident2, 2000);
new Player({ clip: myClip });
