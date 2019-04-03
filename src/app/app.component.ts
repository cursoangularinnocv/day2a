import { Component } from '@angular/core';
// import { randomIntFromInterval, getRandomArbitrary } from './utils/math';
import * as MathUtils from './utils/math';
import Employee from './utils/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'modules-tests';
  randomNumber: number = MathUtils.randomIntFromInterval(10, 20); // Math.random()
  randomNumber2: number = MathUtils.getRandomArbitrary(10, 20); // Math.random()
  emp1: Employee;
  myName = 'Dani';

  constructor() {
    try {
      this.emp1 = new Employee('Zench', 90000, true);
    }
    catch (e) {
      console.log(e)
    }
  }
}
