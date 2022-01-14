# MotorCortex-Flubber

**Table of Contents**

- [MotorCortex-Flubber](#motorcortex-flubber)
  - [Demo](#demo)
- [Intro / Features](#intro--features)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Importing and Loading](#importing-and-loading)
- [Creating Incidents](#creating-incidents)
  - [Flubber](#flubber)
- [Adding Incidents in your clip](#adding-incidents-in-your-clip)
- [Contributing](#contributing)
- [License](#license)
- [Sponsored by](#sponsored-by)

## Demo

[Check it out here](https://donkeyclip.github.io/motorcortex-flubber/demo/)

# Intro / Features

Motorcortex-Flubber plugin brings [flubber](https://github.com/veltman/flubber) library's capabilities into MotorCortex, available as Incident.
_"The goal of this library is to provide a best-guess interpolation for any two arbitrary shapes (or collections of shapes) that results in a reasonably smooth animation, without overthinking it."_

This Plugin exposes one Incident:
- Flubber

# Getting Started

## Installation

```bash
$ npm install @donkeyclip/motorcortex-flubber
# OR
$ yarn add @donkeyclip/motorcortex-flubber
```

## Importing and loading

```javascript
import { loadPlugin } from "@donkeyclip/motorcortex";
import FlubberPluginDefinition from "@donkeyclip/motorcortex-flubber";
const FlubberPlugin = loadPlugin(FlubberPluginDefinition);
```
# Creating Incidents

## Flubber

Flubber Incident accepts on its `animatedAttrs` property the `d` parameter which defines the final state of the svg path to be transformed. The Incident should target the svg path to transform (via the `selector` of its props).
Here's is an example which include both the creation of the incident and the creation of the clip where the incident will be applied:

```javascript
// Don't forget to import also HTMLClip from "@donkeyclip/motorcortex" in order to create a clip.
import { HTMLClip } from "@donkeyclip/motorcortex";
// Νotice the svg path with id "flubber" on the html of the clip. 
// This is the path we will apply the Flubber transformation to.
const myClip = new HTMLClip({
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

# Adding Incidents in your clip

```javascript
clipName.addIncident(incidentName,startTime);
```

# Contributing 

In general, we follow the "fork-and-pull" Git workflow, so if you want to submit patches and additions you should follow the next steps:
1.	**Fork** the repo on GitHub
2.	**Clone** the project to your own machine
3.	**Commit** changes to your own branch
4.	**Push** your work back up to your fork
5.	Submit a **Pull request** so that we can review your changes

# License

[MIT License](https://opensource.org/licenses/MIT)

# Sponsored by
[<img src="https://presskit.donkeyclip.com/logos/donkey%20clip%20logo.svg" width=250></img>](https://donkeyclip.com)
