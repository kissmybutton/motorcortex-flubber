import MotorCortex from "@kissmybutton/motorcortex";
const flubber = require("flubber");
const interpolate = flubber.interpolate;

class Flubber extends MotorCortex.Effect {
  onGetContext() {
    this.interpolator = interpolate(
      this.getInitialValue("d"),
      this.animAttributes.d
    );
  }

  getScratchValue(/*id, attr*/) {
    // console.log(this.element.getAttribute('d'));
    return this.element.getAttribute("d");
  }

  onProgress(t) {
    this.element.setAttribute("d", this.interpolator(t));
  }
}

export default Flubber;
