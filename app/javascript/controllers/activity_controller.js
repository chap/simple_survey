import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["outside", "outsideDetails"]

  connect() {
    // console.log("Activity Stimulus loaded")
  }

  outsideChange() {
    if(this.outsideTarget.checked) {
      this.outsideDetailsTarget.classList.add('show');
    } else {
      this.outsideDetailsTarget.classList.remove('show');
    }
  }
}
