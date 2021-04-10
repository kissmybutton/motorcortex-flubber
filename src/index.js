import Flubber from "./Flubber";
import { name, version } from "../package.json";

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
