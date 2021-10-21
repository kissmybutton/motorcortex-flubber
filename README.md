# motorcortex-flubber

motorcortex-flubber plugin brings [flubber](https://github.com/veltman/flubber) library's capabilities into MotorCortex, available as Incident.
_"The goal of this library is to provide a best-guess interpolation for any two arbitrary shapes (or collections of shapes) that results in a reasonably smooth animation, without overthinking it."_

## Installation

```bash
$ npm install @donkeyclip/motorcortex-flubber
# OR
$ yarn add @donkeyclip/motorcortex-flubber
```

```javascript
import Flubber from "@donkeyclip/motorcortex-flubber";
```

## Documentation

### Import and load the plugin to MotorCortex

```javascript
import MotorCortex from "@donkeyclip/motorcortex";
import FlubberPluginDefinition from "@donkeyclip/motorcortex-flubber";

const FlubberPlugin = MotorCortex.loadPlugin(FlubberPluginDefinition);
```

### Create an Flubber transformation animation Incident and place it anywhere in your Clip

The one and only Incident exposed by the plugin has the name `Flubber`. Flubber Incident accepts on its `animatedAttrs` property the `d` parameter which defines the final state of the svg path to be transformed. The Incident should target the svg path to transform (via the `selector` of its props).
Here's is full example:

```javascript
// notice the svg path with id "flubber" on the html of the clip. This is the path we will apply the Flubber transformatio to.
const myClip = new MC.Clip({
  host: document.getElementById("clip-container"),
  html: `<svg xmlns="http://www.w3.org/2000/svg" width="960" height="500">
            <g transform="translate(240 10) scale(30 30)">
                <path id="flubber" d="M1,0 L2,2 L0,2 Z"></path>
            </g>
        </svg>`,
  css: `#flubber{
        fill: #8b00ff;
        display:block;
    }
    svg{
        margin-top:150px;
    }`,
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
```

Notice that we passed the new `d` parameter of the svg path. `d` can be defined via various ways (have a look here for more info: [https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d).
According to the provided definition an alternative way to define the new `d` value can be:

```javascript
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
```

## Demo

[Check out a demo here](https://donkeyclip.github.io/motorcortex-flubber/demo/)

## License

[MIT License](https://opensource.org/licenses/MIT)

[<img src="https://presskit.donkeyclip.com/logos/donkey%20clip%20logo.svg" width=250></img>](https://donkeyclip.com)
