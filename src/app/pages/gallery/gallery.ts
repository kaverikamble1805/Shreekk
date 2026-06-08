import { Component, ElementRef } from '@angular/core';
import { Navbar } from '../../reuseable/navbar/navbar';
import { Footer } from '../../footer/footer/footer';
import { DomSanitizer } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  imports: [Navbar, Footer, CommonModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class Gallery {
  // selectedImage: string = '';

  // constructor(
  //   private sanitizer: DomSanitizer,
  //   private el: ElementRef,
  // ) {}

  // galleryImages: string[] = [
  //   'assets/gallery/gallery-1.jpg',
  //   'assets/gallery/gallery-2.jpg',
  //   'assets/gallery/gallery-3.jpg',
  //   'assets/gallery/gallery-4.jpg',
  //   'assets/gallery/gallery-5.jpg',
  //   'assets/gallery/gallery-6.png',
  //   'assets/gallery/gallery-7.jpg',
  //   'assets/gallery/gallery-8.jpg',
  //   'assets/gallery/gallery-9.jpg',
  //   'assets/gallery/gallery-10.png',
  // ];

  // currentImageIndex = 0;

  // openImage(image: string): void {
  //   this.selectedImage = image;

  //   this.currentImageIndex = this.galleryImages.indexOf(image);
  // }

  // nextImage(): void {
  //   this.currentImageIndex++;

  //   if (this.currentImageIndex >= this.galleryImages.length) {
  //     this.currentImageIndex = 0;
  //   }

  //   this.selectedImage = this.galleryImages[this.currentImageIndex];
  // }

  // prevImage(): void {
  //   this.currentImageIndex--;

  //   if (this.currentImageIndex < 0) {
  //     this.currentImageIndex = this.galleryImages.length - 1;
  //   }

  //   this.selectedImage = this.galleryImages[this.currentImageIndex];
  // }

  // closeImage(): void {
  //   this.selectedImage = '';
  // }
  galleryImages = [
    {
      image: 'assets/gallery/g1.png',
      alt: 'Temple Gallery 11',
    },
    {
      image: 'assets/gallery/g2.png',
      alt: 'Temple Gallery 12',
    },
    {
      image: 'assets/gallery/g3.png',
      alt: 'Temple Gallery 13',
    },
    {
      image: 'assets/gallery/gallery-5.jpg',
      alt: 'Temple Gallery 5',
    },

    {
      image: 'assets/gallery/g10.png',
      alt: 'Temple Gallery 6',
    },

    {
      image: 'assets/gallery/gallery-6.png',
      alt: 'Temple Gallery 7',
    },

    {
      image: 'assets/gallery/gallery-11.png',
      alt: 'Temple Gallery 8',
    },

    {
      image: 'assets/gallery/gallery-2.png',
      alt: 'Temple Gallery 10',
    },
    {
      image: 'assets/gallery/g4.png',
      alt: 'Temple Gallery 14',
    },
    {
      image: 'assets/gallery/g5.png',
      alt: 'Temple Gallery 15',
    },
    {
      image: 'assets/gallery/g6.png',
      alt: 'Temple Gallery 16',
    },
    {
      image: 'assets/gallery/g7.png',
      alt: 'Temple Gallery 17',
    },
    {
      image: 'assets/gallery/g8.png',
      alt: 'Temple Gallery 18',
    },
    {
      image: 'assets/gallery/g9.png',
      alt: 'Temple Gallery 19',
    },
    {
      image: 'assets/gallery/g10.png',
      alt: 'Temple Gallery 20',
    },
    {
      image: 'assets/gallery/gallery-1.jpg',
      alt: 'Temple Gallery 1',
    },

    {
      image: 'assets/gallery/gallery-2.png',
      alt: 'Temple Gallery 2',
    },

    {
      image: 'assets/gallery/gallery-3.png',
      alt: 'Temple Gallery 3',
    },

    {
      image: 'assets/gallery/gallery-4.jpg',
      alt: 'Temple Gallery 4',
    },
  ];

  selectedImage: string = '';

  currentImageIndex = 0;

  /* =========================
   PAGINATION
========================= */
  currentPage = 1;

  itemsPerPage = 6;

  get totalPages(): number {
    return Math.ceil(this.galleryImages.length / this.itemsPerPage);
  }

  /* =========================
   PAGINATED DATA
========================= */

  get paginatedImages() {
    const start = (this.currentPage - 1) * this.itemsPerPage;

    const end = start + this.itemsPerPage;

    return this.galleryImages.slice(start, end);
  }

  // changePage(page: number): void {
  //   this.currentPage = page;
  // }

  // nextPage(): void {
  //   if (this.currentPage < this.totalPages) {
  //     this.currentPage++;
  //   }
  // }

  // prevPage(): void {
  //   if (this.currentPage > 1) {
  //     this.currentPage--;
  //   }
  // }

  changePage(page: number): void {
    if (page !== this.currentPage) {
      this.currentPage = page;

      this.scrollTop();
    }
  }

  /* =========================
   NEXT PAGE
========================= */

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;

      this.scrollTop();
    }
  }

  /* =========================
   PREV PAGE
========================= */

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;

      this.scrollTop();
    }
  }

  /* =========================
   SMOOTH SCROLL
========================= */

  scrollTop(): void {
    window.scrollTo({
      top: 0,

      behavior: 'smooth',
    });
  }
  /* =========================
   POPUP IMAGE
========================= */

  openImage(image: string): void {
    this.selectedImage = image;

    this.currentImageIndex = this.galleryImages.findIndex((x) => x.image === image);
  }

  nextImage(): void {
    this.currentImageIndex++;

    if (this.currentImageIndex >= this.galleryImages.length) {
      this.currentImageIndex = 0;
    }

    this.selectedImage = this.galleryImages[this.currentImageIndex].image;
  }

  prevImage(): void {
    this.currentImageIndex--;

    if (this.currentImageIndex < 0) {
      this.currentImageIndex = this.galleryImages.length - 1;
    }

    this.selectedImage = this.galleryImages[this.currentImageIndex].image;
  }

  closeImage(): void {
    this.selectedImage = '';
  }
}
