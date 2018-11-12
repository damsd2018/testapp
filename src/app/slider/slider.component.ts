import { Component, OnInit } from '@angular/core';
import * as M from 'materialize-css/dist/js/materialize';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const slider = document.querySelector('.slider');
    M.Slider.init(slider, {
        indicators: true,
        height: 500,
        transition: 500,
        interval: 6000
      });
  }

}
