import {
  Component,
  AfterViewInit,
  ElementRef,
  Renderer2,
  HostListener,
  OnInit,
  ChangeDetectorRef,
  ViewChild,
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLinkWithHref, RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLinkWithHref, RouterModule, FormsModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
})
export class Navbar {
  isSearchActive: boolean = false;

  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    private router: Router,
  ) {}

  // =========================
  // After View Init
  // =========================

  ngAfterViewInit(): void {
    this.mobileMenu();
    this.offcanvasSidebar();
  }

  // =========================
  // Search Toggle
  // =========================

  openSearch(): void {
    this.isSearchActive = true;
  }

  closeSearch(): void {
    this.isSearchActive = false;
  }

  // =========================
  // Mobile Menu
  // =========================

  mobileMenu(): void {
    const menuBtn = this.el.nativeElement.querySelector('.mobile-menu-btn');

    const mobileMenu = this.el.nativeElement.querySelector('.mobile-menu');

    if (menuBtn && mobileMenu) {
      this.renderer.listen(menuBtn, 'click', () => {
        mobileMenu.classList.toggle('active');
      });
    }
  }

  // =========================
  // Offcanvas Sidebar
  // =========================

  offcanvasSidebar(): void {
    const dropdownBtns = this.el.nativeElement.querySelectorAll('#offcanvas-sidebar .dropdown-btn');

    dropdownBtns.forEach((btn: HTMLElement) => {
      this.renderer.listen(btn, 'click', () => {
        btn.classList.toggle('open');

        const submenu = btn.previousElementSibling as HTMLElement;

        if (submenu) {
          submenu.classList.toggle('show');
        }
      });
    });
  }

  // =========================
  // Sticky Header
  // =========================

  @HostListener('window:scroll', []) onWindowScroll1(): void {
    const header = this.el.nativeElement.querySelector('.header .header-lower');
    if (window.scrollY > 250) {
      header?.classList.add('sticky'); // add body padding
      document.body.classList.add('sticky-padding');
    } else {
      header?.classList.remove('sticky');
      // // remove body padding
      document.body.classList.remove('sticky-padding');
    }
  }

  showSearchModal = false;

  searchText = '';

  /* =========================
     SEARCH ITEMS
  ========================= */

  searchItems = [
    /* PAGES */

    {
      name: 'Home',
      keywords: 'home main landing page',
      route: '/',
    },

    {
      name: 'Volunteering',
      keywords: 'volunteer seva help temple',
      route: '/voluntring',
    },

    {
      name: 'Services',
      keywords: 'services pooja temple facilities',
      route: '/services',
    },

    {
      name: 'About Us',
      keywords: 'about temple information',
      route: '/about-us',
    },

    {
      name: 'Events',
      keywords: 'events festival celebration',
      route: '/event',
    },

    {
      name: 'Gallery',
      keywords: 'photos images videos',
      route: '/gallery',
    },

    {
      name: 'Contact',
      keywords: 'contact phone email address',
      route: '/contact',
    },

    {
      name: 'Donate',
      keywords: 'donation donate charity',
      route: '/donate',
    },

    /* SERVICES */

    {
      name: 'Dining Hall',
      keywords: 'dining hall food event hall',
      route: '/services-details/dining-hall',
    },

    {
      name: 'Daily Aarti & Pooja',
      keywords: 'daily aarti pooja prayer temple',
      route: '/services-details/daily-aarti',
    },

    {
      name: 'Marriage Ceremony',
      keywords: 'marriage wedding ceremony',
      route: '/services-details/marriage-ceremony',
    },

    {
      name: 'Prasad Seva',
      keywords: 'prasad seva food offering',
      route: '/services-details/prasad-seva',
    },

    {
      name: 'Yagna Havan',
      keywords: 'yagna havan ritual pooja',
      route: '/services-details/yagna-havan',
    },

    {
      name: 'Festival Celebrations',
      keywords: 'festival celebration temple event',
      route: '/services-details/festival-celebrations',
    },

    /* EVENTS */

    {
      name: 'The Secret to Attaining Peace',
      keywords: 'peace happiness satsang spiritual chanting bageeshwari devi',
      route: '/event-details/secret-to-attaining-peace',
    },

    {
      name: 'Shree Hanuman Charitra Katha',
      keywords: 'hanuman katha hanuman charitra ram bhakti mehul bhai jani',
      route: '/event-details/shree-hanuman-charitra-katha',
    },

    {
      name: 'Hari Naam Sankirtan',
      keywords: 'krishna bhajan iskcon leicester hari naam sankirtan kirtan',
      route: '/event-details/hari-naam-sankirtan',
    },
  ];
  filteredItems = [...this.searchItems];

  /* =========================
     OPEN
  ========================= */

  openSearchModal(): void {
    this.showSearchModal = true;
  }

  /* =========================
     CLOSE
  ========================= */

  closeSearchModal(): void {
    this.showSearchModal = false;

    this.searchText = '';

    this.filteredItems = [...this.searchItems];
  }

  /* =========================
     FILTER
  ========================= */

  filterSearch(): void {
    const value = this.searchText.toLowerCase();

    this.filteredItems = this.searchItems.filter((item) => item.name.toLowerCase().includes(value));
  }

  /* =========================
     NAVIGATE
  ========================= */

  navigateTo(route: string): void {
    this.router.navigate([route]);

    this.closeSearchModal();
  }
  isMediaMenuOpen = false;

  toggleMediaMenu() {
    this.isMediaMenuOpen = !this.isMediaMenuOpen;
  }
}
