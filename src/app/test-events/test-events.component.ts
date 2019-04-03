import { Component, OnInit } from '@angular/core';
import { randomIntFromInterval } from '../utils/math';

@Component({
  selector: 'app-test-events',
  templateUrl: './test-events.component.html',
  styleUrls: ['./test-events.component.scss']
})
export class TestEventsComponent implements OnInit {
  state: object = {
    rand: undefined
  };
  states = []
  rand: number;

  constructor() {
    this.states.push ({
      rand: randomIntFromInterval(10, 20)
    })
    this.rand = this.states[0].rand
  }

  ngOnInit() {
  }

  undoStep() {
    if (this.states.length > 0) {
      this.rand = this.states.splice(this.states.length - 1, 1)[0].rand
    }
  }

  multiplyBy2() {
    this.states.push({
      ...this.state,
      rand: this.states[this.states.length - 1]['rand'] * 2 
    })

    this.rand = this.states[this.states.length - 1].rand

    console.log(this.states)
  }

}
