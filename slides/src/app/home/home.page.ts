import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public items: Array<number> = [];

  public slideOpts = {
    slidesPerView: 8,
    spaceBetween: 20,
    // Responsive breakpoints
    breakpoints: {
      // when window width is <= 320px
      320: {
        slidesPerView: 2
      },
      // when window width is <= 480px
      480: {
        slidesPerView: 3
      },
      // when window width is <= 640px
      640: {
        slidesPerView: 4
      },
      // when window width is <= 800px
      800: {
        slidesPerView: 5
      },
      // when window width is <= 960px
      960: {
        slidesPerView: 6
      },
      // when window width is <= 1120px
      1120: {
        slidesPerView: 7
      }
    }
  };

  constructor() {
    this.items = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
  }
}
