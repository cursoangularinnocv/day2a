import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-brackets',
  templateUrl: './test-brackets.component.html',
  styleUrls: ['./test-brackets.component.scss']
})
export class TestBracketsComponent implements OnInit {
  photo: string;
  theHeight: number;

  constructor() {
    this.theHeight = 200;
    this.photo = 'https://cdn4.vectorstock.com/i/1000x1000/27/93/mandala-monochrome-design-dot-painting-vector-18872793.jpg';
  }

  ngOnInit() {
  }

  onClick = function () {
    this.theHeight = 500;
    this.photo = 'http://twicy-store.com/7657/tapis-en-vinyle-rond-mandala-mexico.jpg'
  }

}
