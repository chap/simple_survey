import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "slider", "number" ]

  connect() {
    // this.outputTarget.textContent = 'Hello, Stimulus!'
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
    var list = document.querySelector('#housemates');
    var housemates = list.children;
    var diff = housemates.length - this.numberTarget.value;
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
    let list = document.querySelector('#housemates');

    // the template approach causes problems
    // specifically when varitying the number of housemates after answering questions
    // var template = document.querySelector('#housemateTemplate');
    // var clone = template.content.cloneNode(true);
    // list.appendChild(clone);

    let startdate = document.querySelector('#startdate').textContent;

    let clone = `
    <li class="housemate">
    activites since ${startdate}:
    <div class="details" style="margin:0;margin-bottom:1em;">
      <label>
        <input name="survey[response[housemates][${index}][work_school]]" type="hidden" value="0">
        <input type="checkbox" value="1" name="survey[response[housemates][${index}][work_school]]" id="survey_response[housemates][][work_school]"> work or school outside the home
      </label>
      <label>
        <input name="survey[response[housemates][${index}][shop_eat]]" type="hidden" value="0">
        <input type="checkbox" value="1" name="survey[response[housemates][${index}][shop_eat]]" id="survey_response[housemates][][shop_eat]"> shopping or eating out
      </label>
      <input placeholder="more details on this person" type="text" name="survey[response[housemates][${index}][comment]]" id="survey_response[housemates][][comment]">
    </div>
  </li>
  `;

  list.insertAdjacentHTML('beforeend', clone);
    
  }
}
