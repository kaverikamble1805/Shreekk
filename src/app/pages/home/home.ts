import { AfterViewInit, Component, ElementRef, HostListener } from '@angular/core';
import { Header } from '../header/header';
import Swiper from 'swiper';
import { Autoplay, Pagination } from 'swiper/modules';

import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Footer } from '../../footer/footer/footer';
import { RouterLink } from '@angular/router';

Swiper.use([Autoplay, Pagination]);
@Component({
  selector: 'app-home',
  imports: [Header, CommonModule, Footer, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements AfterViewInit {
  selectedImage: string = '';
  showVideo = false;

  videoUrl!: SafeResourceUrl;

  constructor(
    private sanitizer: DomSanitizer,
    private el: ElementRef,
  ) {}

  galleryImages: string[] = [
    'assets/gallery/gallery-1.jpg',
    'assets/gallery/gallery-6.png',
    'assets/gallery/g5.png',
    'assets/gallery/g10.png',
    'assets/gallery/g2.png',
    'assets/gallery/gallery-6.png',
  ];

  currentImageIndex = 0;

  openImage(image: string): void {
    this.selectedImage = image;

    this.currentImageIndex = this.galleryImages.indexOf(image);
  }

  nextImage(): void {
    this.currentImageIndex++;

    if (this.currentImageIndex >= this.galleryImages.length) {
      this.currentImageIndex = 0;
    }

    this.selectedImage = this.galleryImages[this.currentImageIndex];
  }

  prevImage(): void {
    this.currentImageIndex--;

    if (this.currentImageIndex < 0) {
      this.currentImageIndex = this.galleryImages.length - 1;
    }

    this.selectedImage = this.galleryImages[this.currentImageIndex];
  }

  closeImage(): void {
    this.selectedImage = '';
  }

  openVideo(): void {
    this.showVideo = true;

    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl('/assets/video/video1.mp4');
  }

  closeVideo(): void {
    this.showVideo = false;
  }

  ngAfterViewInit(): void {
    const serviceSlider = document.querySelector('.services-slider');

    if (serviceSlider) {
      new Swiper('.services-slider', {
        loop: true,

        speed: 1200,

        spaceBetween: 20,

        slidesPerView: 3,

        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },

        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },

        breakpoints: {
          0: {
            slidesPerView: 1,
          },

          768: {
            slidesPerView: 2,
          },

          992: {
            slidesPerView: 3,
          },
        },
      });
    }

    const progressBars = this.el.nativeElement.querySelectorAll('.progress-bar-count');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progressBar = entry.target as HTMLElement;
            const percent = progressBar.getAttribute('data-percent');
            if (percent) {
              progressBar.style.width = percent;
              progressBar.classList.add('counted');
            }
            observer.unobserve(progressBar);
          }
        });
      },
      { threshold: 0.3 },
    );
    progressBars.forEach((bar: Element) => {
      observer.observe(bar);
    });
  }
  events = [
    // {
    //   id: 1,

    //   slug: 'secret-to-attaining-peace',

    //   title: 'Bhagwat Katha By Holi Guru Bageshwari Devi',

    //   image: 'assets/event/event3.png',

    //   description:
    //     'Join the divine spiritual satsang and discover peace, happiness, and devotion through chanting God’s holy name.',

    //   button: 'View Details',
    // },

    {
      id: 2,

      slug: 'shree-hanuman-charitra-katha',

      title: 'Shree Hanuman Charitra Katha',

      image: 'assets/event/event-2.jpeg',

      description:
        'Experience the divine life, bhakti, courage, and teachings of Prabhu Hanuman through sacred katha and bhajans.',

      button: 'View Details',
    },
    {
      id: 3,

      slug: 'hari-naam-sankirtan',

      title: 'Hari Naam Sankirtan',

      image: 'assets/event/event-3.jpeg',

      description:
        'Join the divine Hari Naam Sankirtan by ISKCON Leicester and immerse yourself in devotional chanting, bhajans, and spiritual bliss.',

      button: 'View Details',
    },
  ];
}
