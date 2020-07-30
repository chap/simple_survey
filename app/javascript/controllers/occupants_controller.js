// Visit The Stimulus Handbook for more details
// https://stimulusjs.org/handbook/introduction
//
// This example controller works with specially annotated HTML like:
//
// <div data-controller="hello">
//   <h1 data-target="hello.output"></h1>
// </div>

import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "slider", "number" ]

  connect() {
    // this.outputTarget.textContent = 'Hello, Stimulus!'
    console.log("Hello, Stimulus!", this.element)
  }

  change() {
    // this.sourceTarget.select()
    // document.execCommand("copy")
    console.log("Slider change", this.element)
  }
}
