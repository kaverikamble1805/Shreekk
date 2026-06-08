import { AfterViewInit, Component } from '@angular/core';
import { Navbar } from '../../reuseable/navbar/navbar';
import { Footer } from '../../footer/footer/footer';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Autoplay, Pagination } from 'swiper/modules';
import Swiper from 'swiper';

@Component({
  selector: 'app-event',
  imports: [Navbar, Footer, CommonModule, RouterLink],
  templateUrl: './event.html',
  styleUrl: './event.css',
})
export class Event implements AfterViewInit {
  events = [
    // {
    //   id: 1,

    //   slug: 'secret-to-attaining-peace',

    //   title: 'Bhagwat Katha By Holi Guru Bageshwari Devi',

    //   image: 'assets/event/event3.png',

    //   date: '30 & 31 May 2026',

    //   time: '04:30 PM to 06:30 PM',

    //   location: '70 Moira Street Leicester, UK LE4 6LA',

    //   category: 'Spiritual Satsang',

    //   description:
    //     'Join the divine spiritual satsang and discover peace, happiness, and devotion through chanting God’s holy name.',

    //   button: 'View Details',
    // },

    {
      id: 2,

      slug: 'shree-hanuman-charitra-katha',

      title: 'Shree Hanuman Charitra Katha',

      image: 'assets/event/event-2.jpeg',

      date: '3 to 5 July 2026',

      time: '04:00 PM to 08:00 PM',

      location: '70 Moira Street Leicester, UK LE4 6LA',

      category: 'Hanuman Katha Mahotsav',

      description:
        'Experience the divine life, bhakti, courage, and teachings of Prabhu Hanuman through sacred katha and bhajans.',

      button: 'View Details',
    },
    {
      id: 3,

      slug: 'hari-naam-sankirtan',

      title: 'Hari Naam Sankirtan',

      image: 'assets/event/event-3.jpeg',

      date: '7 June 2026',

      time: '04:30 PM to 06:30 PM',

      location: '70 Moira Street Leicester, UK LE4 6LA',

      category: 'Spiritual Kirtan',

      description:
        'Join the divine Hari Naam Sankirtan by ISKCON Leicester and immerse yourself in devotional chanting, bhajans, and spiritual bliss.',

      button: 'View Details',
    },
  ];

  pastEvents = [
    {
      title: 'Bhagwat Katha By Holi Guru Bageshwari Devi',

      image: 'assets/event/event3.png',

      date: '30 & 31 May 2026',

      time: '04:30 PM to 06:30 PM',

      category: 'Spiritual Satsang',

      description:
        'Join the divine spiritual satsang and discover peace, happiness, and devotion through chanting God’s holy name.',
    },
    {
      title: 'Shiv Mahapuran Katha',

      image: 'assets/event/img1.png',

      date: '12 Feb 2026',

      time: '05:00 PM',

      category: 'Spiritual Katha',

      description:
        'Experience the divine stories and spiritual wisdom of Lord Shiva through sacred Shiv Mahapuran Katha.',
    },

    {
      title: 'Pooja & Bhandara',

      image: 'assets/event/img2.png',

      date: '28 Jan 2026',

      time: '12:00 PM',

      category: 'Temple Celebration',

      description:
        'Join the holy Pooja and Bhandara ceremony filled with blessings, devotion, and positivity.',
    },

    {
      title: 'Mataji Ki Chowki',

      image: 'assets/event/img3.png',

      date: '15 Dec 2025',

      time: '07:00 PM',

      category: 'Bhajan Sandhya',

      description:
        'Celebrate devotional bhajans and seek the divine blessings of Maa Durga with faith.',
    },
  ];
  ngAfterViewInit(): void {
    setTimeout(() => {
      new Swiper('.past-events-slider', {
        modules: [Autoplay, Pagination],

        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,

        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },

        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },

        breakpoints: {
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
        },
      });
    }, 2000);
  }
}
