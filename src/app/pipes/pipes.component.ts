import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {
  theDate: Date = new Date()
  company = 'innocv'
  salary = 190000

  constructor() { }

  ngOnInit() {
  }

}
