import { Component, OnInit, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.scss']
})
export class TestFormComponent implements OnInit, OnChanges {
  colorFromTheBananaBasketModel = 'rgba(255, 0, 0, 1)';
  age = 39;

  constructor() {
    // this.age = 39
  }

  ngOnInit() {
  }

  ngOnChanges(s: SimpleChanges) {

  }

  checkMyAge(event) {
    debugger
    console.log(this.age)
    console.log(event)
  }

  recordAllTheKeyStrokes(event) {
    // debugger
    console.log(`Key inserted: ${event.key}`);
    console.log(`Key inserted: ${event.keyCode}`);
    //console.log(`Input value: ${event.currentTarget.value}`);
  }

}
