import Flubber from "./Flubber";
const pkg = require("../package.json");

export default {
  npm_name: pkg.name,
  version: pkg.version,
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
