import Flubber from "./Flubber";
const pkg = require("../package.json");
import {name,version}  from '../package.json'

export default {
  npm_name: name,
  version: version,
  incidents: [
    {
      exportable: Flubber,
      name: "Flubber",
      attributesValidationRules: {
        animatedAttrs: {
          type: "object",
          props: {
            d: {
              type: "any",
            },
          },
        },
      },
    },
  ],
};
