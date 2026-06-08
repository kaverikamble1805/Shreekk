import { AfterViewInit, Component } from '@angular/core';
import { Navbar } from '../../reuseable/navbar/navbar';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, Navbar, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  // // isLoading = true;

  // currentIndex = 0;
  // sliderInterval: any;

  // slides = ['assets/background/bg2.png', 'assets/background/bg1.png', 'assets/background/bg6.jpg'];

  // ngOnInit(): void {
  //   this.autoSlide();
  // }
  // // autoSlide(): void {
  // //   this.sliderInterval = setInterval(() => {
  // //     this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  // //   }, 1000);
  // // }
  // autoSlide(): void {
  //   this.sliderInterval = setInterval(() => {
  //     this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  //     console.log(this.currentIndex);
  //   }, 3000);
  // }
  // ngOnDestroy(): void {
  //   clearInterval(this.sliderInterval);
  // }

  // // currentIndex = 0;
  // // slides = ['assets/background/bg2.png', 'assets/background/bg1.png', 'assets/background/bg6.jpg'];
  // // sliderInterval: any;
  // // ngOnInit(): void {
  // //   this.startSlider();
  // // }
  // // startSlider(): void {
  // //   this.sliderInterval = setInterval(() => {
  // //     this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  // //   }, 5000);
  // // }
  // // ngOnDestroy(): void {
  // //   if (this.sliderInterval) {
  // //     clearInterval(this.sliderInterval);
  // //   }
  // // }

  currentIndex = 0;
  sliderInterval: any;

  slides: string[] = [];

  ngOnInit(): void {
    const isMobile = window.innerWidth <= 991;

    this.slides = isMobile
      ? [
          'assets/background/bg2.1.png', // Mobile first image
          'assets/background/bg1.png',
          'assets/background/bg6.jpg',
        ]
      : [
          'assets/background/bg2.png', // Desktop/Tablet first image
          'assets/background/bg1.png',
          'assets/background/bg6.jpg',
        ];

    this.autoSlide();
  }

  autoSlide(): void {
    this.sliderInterval = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    }, 3000);
  }

  ngOnDestroy(): void {
    if (this.sliderInterval) {
      clearInterval(this.sliderInterval);
    }
  }
}
