import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  sliderValueR = 0;
  sliderValueG = 0;
  sliderValueB = 0;
  disabled = false

  constructor() { }

  ngOnInit() {
  }

  switchSliderOn() {
    this.disabled = !this.disabled
  }

}
