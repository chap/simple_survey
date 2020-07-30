import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "slider", "number" ]

  connect() {
    // this.outputTarget.textContent = 'Hello, Stimulus!'
    console.log("Opportunity Stimulus loaded")
  }

  slide() {
    let selectedValue = this.sliderTarget.value
    this.numberTarget.value = selectedValue;
  }

  updateNumber() {
    let selectedValue = this.numberTarget.value
    this.sliderTarget.value = selectedValue;
  }
}
