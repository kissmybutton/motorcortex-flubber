import MotorCortex from "@kissmybutton/motorcortex";
const flubber = require("flubber");
const interpolate = flubber.interpolate;

class Flubber extends MotorCortex.Effect {
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
