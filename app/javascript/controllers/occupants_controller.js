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
    console.log("Opportunity Stimulus loaded")
  }

  slide() {
    let selectedValue = this.sliderTarget.value
    this.numberTarget.value = selectedValue;
    this.updateHousemates();
  }

  updateNumber() {
    let selectedValue = this.numberTarget.value
    this.sliderTarget.value = selectedValue;
    this.updateHousemates();
  }

  updateHousemates() {
    var list = document.querySelector('#housemates');
    var housemates = list.children;
    var diff = housemates.length - this.numberTarget.value;
    if (diff > 0) {
      // need to drop
      do {
        list.removeChild(housemates[housemates.length-1]);
        diff--
      } while (diff > 0)
    } else if (diff < 0) {
      // need to add
      do {
        this.insertHousemate()
        diff++
      } while (diff < 0)
    }
  }

  insertHousemate() {
    // Instantiate the table with the existing HTML tbody
    // and the row with the template
    let list = document.querySelector('#housemates');
    var template = document.querySelector('#housemateTemplate');

    // Clone the new row and insert it into the table
    var clone = template.content.cloneNode(true);
    // var td = clone.querySelectorAll("td");
    // td[0].textContent = "1235646565";
    // td[1].textContent = "Stuff";

    list.appendChild(clone);
  }
}
