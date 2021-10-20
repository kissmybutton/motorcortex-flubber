import { Effect } from "@donkeyclip/motorcortex";
import { interpolate } from "flubber";

class Flubber extends Effect {
  onGetContext() {
    this.interpolator = interpolate(this.initialValue, this.animAttributes.d);
  }

  getScratchValue() {
    return this.element.getAttribute("d");
  }

  onProgress(t) {
    this.element.setAttribute("d", this.interpolator(t));
  }
}

export default Flubber;
