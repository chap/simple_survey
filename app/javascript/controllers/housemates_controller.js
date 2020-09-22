import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "slider", "number" ]

  connect() {
    // console.log("Opportunity Stimulus loaded")
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
    let list = document.querySelector('#housemates');
    let housemates = list.children;
    let diff = housemates.length - this.numberTarget.value;
    if (diff > 0) {
      // need to drop
      do {
        list.removeChild(housemates[housemates.length-1]);
        diff--;
      } while (diff > 0)
    } else if (diff < 0) {
      // need to add
      do {
        this.insertHousemate(housemates.length);
        diff++;
      } while (diff < 0)
    }
  }

  insertHousemate(index) {
    const list = document.querySelector('#housemates');
    const template = document.querySelector('#housemateTemplate');
    const clonedFields = template.innerHTML;
    // cloned fields need a unique index to avoid being clobbered
    const conedFieldsWithIndex = clonedFields.replace(/housemate_index/g, index);

    list.insertAdjacentHTML('beforeend', conedFieldsWithIndex);
    // force browser reflow so css transition doesn't get clobbered
    window.getComputedStyle(list, null).getPropertyValue("color");
    list.querySelectorAll('.housemate .details').forEach(housemate => housemate.classList.add('show'));
  }
}
