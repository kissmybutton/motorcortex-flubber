import MotorCortex from "@kissmybutton/motorcortex";
import flubber from "flubber";

class Flubber extends MotorCortex.API.MonoIncident {
  onGetContext() {
      this.interpolator = flubber.interpolate(this.getInitialValue('d'), this.animAttributes.d);
  }

  getScratchValue(id, attr) {
      // console.log(this.element.getAttribute('d'));
      return this.element.getAttribute('d');
  }

  onProgress(t) {
    this.element.setAttribute("d", this.interpolator(t));
  }
}

export default Flubber;
