// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-avaliacao',
//   templateUrl: './avaliacao.component.html',
//   styleUrls: ['./avaliacao.component.scss']
// })
// export class AvaliacaoComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }


import {Component} from '@angular/core';

/**
 * @title Configurable slider
 */
@Component({
  selector: 'app-avaliacao',
  templateUrl: './avaliacao.component.html',
  styleUrls: ['./avaliacao.component.scss']
})
export class AvaliacaoComponent {
  autoTicks = false;
  disabled = false;
  invert = false;
  max = 100;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value = 0;
  vertical = false;
  tickInterval = 1;

  getSliderTickInterval(): number | 'auto' {
    if (this.showTicks) {
      return this.autoTicks ? 'auto' : this.tickInterval;
    }

    return 0;
  }
}