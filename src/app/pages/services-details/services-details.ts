import { Component, HostListener, OnInit } from '@angular/core';
import { Navbar } from '../../reuseable/navbar/navbar';
import { Footer } from '../../footer/footer/footer';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services-details',
  imports: [Navbar, Footer, CommonModule, RouterLink],
  templateUrl: './services-details.html',
  styleUrl: './services-details.css',
})
export class ServicesDetails implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {}
  serviceId: string | null = '';

  serviceData: any;

  services: any = {
    // 'daily-aarti': {
    //   title: 'Daily Aarti & Pooja',

    //   image: 'assets/services/pooja.png',

    //   tag: 'Temple Prayer Service',

    //   desc: 'Experience divine peace through daily Aarti, Bhajans, and traditional Hindu pooja ceremonies.',

    //   day: 'Free',

    //   night: 'Free',

    //   summerTempleOpen: '8:30 AM <br> to <br> 12:30 PM',

    //   summerTempleClose: '5:00 PM <br> to <br> 7:00 PM',

    //   summerMorningAarti: '8:00 AM',

    //   summerEveningAarti: '6:30 PM',

    //   winterTempleOpen: '8:30 AM <br> to <br> 12:30 PM',

    //   winterTempleClose: '4:30 AM <br> to <br> 6:30 PM',

    //   winterMorningAarti: ' 8:30 AM',

    //   winterEveningAarti: '6:00 PM',

    //   sundaySpecialPooja: '11:00 AM',

    //   festivalTiming: 'Special timings during Navratri and festivals.',

    //   facilities: [
    //     'Morning Aarti',

    //     'Evening Aarti',

    //     'Bhajans & Kirtan',

    //     'Prasad Seva',

    //     'Peaceful Darshan',

    //     'Spiritual Environment',
    //   ],
    // },

    'daily-aarti': {
      title: 'Daily Aarti & Pooja',

      image: 'assets/services/pooja.png',
      gallery: [
        'assets/services/pooja.png',
        'assets/services/Durga.jpg',
        'assets/about/about-one.png',
        'assets/about/about2.jpeg',
      ],
      charge: '£21',
      tag: 'Temple Prayer Service',

      desc: 'Experience divine peace through daily Aarti, Bhajans, and traditional Hindu pooja ceremonies.',

      /* SUMMER */

      summerMorningOpen: '8:00 AM to 12:30 PM',

      summerEveningOpen: '5:00 PM to 7:00 PM',

      /* WINTER */

      winterMorningOpen: '8:00 AM to 12:30 PM',

      winterEveningOpen: '5:00 PM to 6:30 PM',

      /* DAILY AARTI */

      dailyMorningAarti: '8:30 AM',

      bhogAarti: '10:30 AM',

      dailyEveningAartiSummer: '6:30 PM',
      dailyEveningAartiWinter: '6:00 PM',

      facilities: [
        'Morning & Evening Aarti',
        'Bhajans & Kirtan',
        'Prasad Seva',
        'Peaceful Darshan',
        'Spiritual Environment',
      ],
    },
    /* ===================================
       YAGNA & HAVAN
    =================================== */

    'yagna-havan': {
      title: 'Yagna & Havan',

      image: 'assets/services/havan2.jpg',
      gallery: [
        'assets/services/yagan1.jpeg',
        'assets/services/yagan2.jpeg',
        'assets/services/yagan3.jpeg',
        'assets/services/yagan4.jpeg',
        'assets/services/yagan5.jpeg',
      ],

      tag: 'Sacred Fire Ritual',

      desc: 'Holy Yagna and Havan ceremonies are performed for peace, positivity, prosperity, health, and divine blessings.',

      day: '£251',

      night: '£400',

      ritualTime: 'In Between 7:00 AM to 3 PM.',

      facilities: [
        'Pandit Guidance',

        'Sacred Fire Ritual',

        'Pooja Samagri',

        'Mantra Chanting',

        'Family Participation',

        'Blessing Ceremony',
      ],
    },

    /* ===================================
       DINING HALL
    =================================== */

    'dining-hall': {
      title: 'Dining Hall',

      image: '/assets/services/org1.jpeg',
      gallery: [
        'assets/services/org1.jpeg',
        'assets/services/org2.jpeg',
        'assets/services/org3.jpeg',
        'assets/services/org4.jpeg',
        'assets/services/org5.jpeg',
      ],

      tag: 'Temple Facility',

      desc: 'A welcoming dining hall for Prasad, community meals, spiritual gatherings, and sacred celebrations.',

      hallRent: '£75',

      foodCharges: '£8',

      capacity: '100 to 250 People',

      diningTime: '8:00 AM to 10:00 PM',

      facilities: ['Weddings', 'Birthday Parties', 'Get-Together', 'Meetings', 'Community Events'],
    },

    /* ===================================
       MARRIAGE CEREMONY
    =================================== */

    'marriage-ceremony': {
      title: 'Marriage Ceremony',

      image: 'assets/services/hall1.png',
      gallery: [
        'assets/services/hall1.png',
        'assets/services/mar1.jpg',
        'assets/services/mar2.jpg',
        'assets/services/mar3.jpg',
      ],

      tag: 'Sacred Wedding Service',

      desc: 'Traditional Hindu marriage ceremonies with Vedic rituals, blessings, and spiritual customs.',

      bookingTime: 'Available All Days',

      guestCapacity: 'Upto 500 Guests',

      facilities: [
        'Mandap Decoration',

        'Wedding Rituals',

        'Music & Bhajans',

        'Dining Facility',

        'Parking Area',

        'Large Gathering Space',
      ],
    },

    /* ===================================
       PRASAD SEVA
    =================================== */

    'prasad-seva': {
      title: 'Prasad Seva',

      image: 'assets/services/prasad2.jpg',
      gallery: [
        'assets/services/prasad2.jpg',
        'assets/services/prasad1.jpg',
        'assets/services/prasad3.jpg',
        'assets/services/pooja.png',
      ],

      tag: 'Food & Blessing Service',

      desc: 'Blessed Prasad and food seva offered during poojas, festivals, and devotional gatherings.',

      day: 'Donation Based',

      night: 'Donation Based',

      sevaTime: 'Daily After Aarti',

      festivalPrasad: 'Available During Festivals',

      facilities: [
        'Fresh Prasad',

        'Food Distribution',

        'Festival Seva',

        'Community Meals',

        'Devotional Environment',

        'Blessings & Service',
      ],
    },

    'festival-celebrations': {
      title: 'Festival Celebrations',
      image: 'assets/home/navratri.jpg',
      gallery: [
        'assets/home/navratri.jpg',
        'assets/services/festi1.jpg',
        'assets/services/festi3.jpg',
        'assets/services/pooja.png',
      ],
      tag: 'Spiritual Festival Service',
      desc: 'Celebrate sacred Hindu festivals with devotion, cultural traditions, spiritual joy, divine blessings, and community gatherings.',
      festivalTime: 'Special Festival Timings',
      specialEvents: 'Navratri, Diwali, Janmashtami & Durga Puja',
      facilities: [
        'Navratri Celebrations',
        'Diwali Festival Events',
        'Bhajans & Kirtan',
        'Cultural Programs',
        'Prasad Distribution',
        'Devotional Gatherings',
      ],
    },
  };
  supportBhogSeva(): void {
    this.router.navigate(['/contact'], {
      queryParams: {
        service: 'Bhog Seva',
      },
    });
  }

  festivalCalendar = [
    {
      month: 'January 2026',
      festivals: [
        { title: 'New Year Day', hindi: 'नया वर्ष', date: '01-01-26 THU' },
        { title: 'Purnima', hindi: 'पूर्णिमा', date: '03-01-26 SAT' },
        { title: 'Ganesh Chauth', hindi: 'गणेश चौथ', date: '06-01-26 TUE' },
        { title: 'Lohri', hindi: 'लोहड़ी', date: '13-01-26 TUE' },
        { title: 'Ekadashi', hindi: 'एकादशी', date: '14-01-26 WED' },
        { title: 'Sankranti (Magha)', hindi: 'संक्रांति', date: '14-01-26 WED' },
        { title: 'Amavas', hindi: 'अमावस', date: '18-01-26 SUN' },
        { title: 'Til Chauth', hindi: 'तिल चौथ', date: '22-01-26 THU' },
        { title: 'Vasant Panchami', hindi: 'वसंत पंचमी', date: '23-01-26 FRI' },
        { title: 'Ekadashi', hindi: 'एकादशी', date: '29-01-26 THU' },
      ],
    },

    {
      month: 'February 2026',
      festivals: [
        { title: 'Purnima', hindi: 'पूर्णिमा', date: '01-02-26 SUN' },
        { title: 'Sankranti (Phalgun)', hindi: 'संक्रांति', date: '12-02-26 THU' },
        { title: 'Ekadashi', hindi: 'एकादशी', date: '13-02-26 FRI' },
        { title: 'Maha Shivratri', hindi: 'महाशिवरात्रि', date: '15-02-26 SUN' },
        { title: 'Amavas', hindi: 'अमावस', date: '17-02-26 TUE' },
        { title: 'Holashtak Begins', hindi: 'होलाष्टक आरंभ', date: '24-02-26 TUE' },
        { title: 'Ekadashi', hindi: 'एकादशी', date: '27-02-26 FRI' },
      ],
    },

    {
      month: 'March 2026',
      festivals: [
        { title: 'Holika Dahan', hindi: 'होलिका दहन', date: '02-03-26 MON' },
        { title: 'Purnima', hindi: 'पूर्णिमा', date: '03-03-26 TUE' },
        { title: 'Holi', hindi: 'होली', date: '03-03-26 TUE' },
        { title: 'Ekadashi', hindi: 'एकादशी', date: '14-03-26 SAT' },
        { title: 'Sankranti (Chaitra)', hindi: 'संक्रांति', date: '14-03-26 SAT' },
        { title: 'Amavas', hindi: 'अमावस', date: '18-03-26 WED' },
        { title: 'Samvat Begins', hindi: 'संवत आरंभ', date: '19-03-26 THU' },
        { title: 'Navratra Begins', hindi: 'नवरात्र आरंभ', date: '19-03-26 THU' },
        { title: 'Durga Ashtami', hindi: 'दुर्गा अष्टमी', date: '26-03-26 THU' },
        { title: 'Shree Ram Navami', hindi: 'राम नवमी', date: '26-03-26 THU' },
      ],
    },

    {
      month: 'April 2026',
      festivals: [
        { title: 'Purnima', hindi: 'पूर्णिमा', date: '01-04-26 WED' },
        { title: 'Hanuman Jayanti', hindi: 'हनुमान जयंती', date: '01-04-26 WED' },
        { title: 'Ekadashi', hindi: 'एकादशी', date: '13-04-26 MON' },
        { title: 'Sankranti (Vaishakh)', hindi: 'संक्रांति', date: '14-04-26 TUE' },
        { title: 'Amavas', hindi: 'अमावस', date: '17-04-26 FRI' },
        { title: 'Akshay Tritiya', hindi: 'अक्षय तृतीया', date: '19-04-26 SUN' },
        { title: 'Ekadashi', hindi: 'एकादशी', date: '27-04-26 MON' },
      ],
    },

    {
      month: 'May 2026',
      festivals: [
        { title: 'Purnima', hindi: 'पूर्णिमा', date: '01-05-26 FRI' },
        { title: 'Ekadashi', hindi: 'एकादशी', date: '13-05-26 WED' },
        { title: 'Sankranti (Jyeshtha)', hindi: 'संक्रांति', date: '15-05-26 FRI' },
        { title: 'Amavas', hindi: 'अमावस', date: '16-05-26 SAT' },
        { title: 'Adhik Maas Begins', hindi: 'अधिक मास आरंभ', date: '17-05-26 SUN' },
        { title: 'Ekadashi', hindi: 'एकादशी', date: '26-05-26 TUE' },
        { title: 'Purnima', hindi: 'पूर्णिमा', date: '31-05-26 SUN' },
      ],
    },

    {
      month: 'June 2026',
      festivals: [
        { title: 'Ekadashi', hindi: 'एकादशी', date: '11-06-26 THU' },
        { title: 'Amavas', hindi: 'अमावस', date: '14-06-26 SUN' },
        { title: 'Adhik Maas Ends', hindi: 'अधिक मास समाप्त', date: '14-06-26 SUN' },
        { title: 'Sankranti (Ashadh)', hindi: 'संक्रांति', date: '15-06-26 MON' },
        { title: 'Ekadashi Nirjala', hindi: 'निर्जला एकादशी', date: '25-06-26 THU' },
        { title: 'Vat Savitri Vrat', hindi: 'वट सावित्री व्रत', date: '29-06-26 MON' },
        { title: 'Purnima', hindi: 'पूर्णिमा', date: '29-06-26 MON' },
      ],
    },
    {
      month: 'July 2026',
      festivals: [
        {
          title: 'Ekadashi',
          hindi: 'एकादशी',
          date: '10-07-26 FRI',
        },
        {
          title: 'Amavas',
          hindi: 'अमावस',
          date: '14-07-26 TUE',
        },
        {
          title: 'Sankranti (Shravan)',
          hindi: 'संक्रांति श्रावण',
          date: '16-07-26 THU',
        },
        {
          title: 'Ekadashi',
          hindi: 'एकादशी',
          date: '25-07-26 SAT',
        },
        {
          title: 'Guru Purnima',
          hindi: 'गुरु पूर्णिमा',
          date: '29-07-26 WED',
        },
      ],
    },

    {
      month: 'August 2026',
      festivals: [
        {
          title: 'Ekadashi',
          hindi: 'एकादशी',
          date: '09-08-26 SUN',
        },
        {
          title: 'Amavas',
          hindi: 'अमावस',
          date: '12-08-26 WED',
        },
        {
          title: 'Sankranti (Bhadrapad)',
          hindi: 'संक्रांति भाद्रपद',
          date: '17-08-26 MON',
        },
        {
          title: 'Ekadashi',
          hindi: 'एकादशी',
          date: '23-08-26 SUN',
        },
        {
          title: 'Purnima (UK)',
          hindi: 'पूर्णिमा',
          date: '27-08-26 THU',
        },
        {
          title: 'Raksha Bandhan',
          hindi: 'रक्षाबंधन',
          date: '27-08-26 THU',
        },
      ],
    },

    {
      month: 'September 2026',
      festivals: [
        {
          title: 'Shree Krishna Janmashtami',
          hindi: 'श्री कृष्ण जन्माष्टमी',
          date: '04-09-26 FRI',
        },
        {
          title: 'Ekadashi',
          hindi: 'एकादशी',
          date: '07-09-26 MON',
        },
        {
          title: 'Amavas (UK)',
          hindi: 'अमावस',
          date: '10-09-26 THU',
        },
        {
          title: 'Hartalika Teej',
          hindi: 'हरितालिका तीज',
          date: '13-09-26 SUN',
        },
        {
          title: 'Ganesh Chauth',
          hindi: 'गणेश चौथ',
          date: '14-09-26 MON',
        },
        {
          title: 'Rishi Panchami',
          hindi: 'ऋषि पंचमी',
          date: '15-09-26 TUE',
        },
        {
          title: 'Sankranti (Ashwin)',
          hindi: 'संक्रांति आश्विन',
          date: '17-09-26 THU',
        },
        {
          title: 'Radha Ashtami',
          hindi: 'राधा अष्टमी',
          date: '19-09-26 SAT',
        },
        {
          title: 'Ekadashi',
          hindi: 'एकादशी',
          date: '22-09-26 TUE',
        },
        {
          title: 'Sharadh Purnima',
          hindi: 'शरद पूर्णिमा',
          date: '26-09-26 SAT',
        },
        {
          title: 'Sharadh Begins',
          hindi: 'श्राद्ध आरंभ',
          date: '27-09-26 SUN',
        },
      ],
    },

    {
      month: 'October 2026',
      festivals: [
        {
          title: 'Maha Lakshmi Vrat',
          hindi: 'महालक्ष्मी व्रत',
          date: '03-10-26 SAT',
        },
        {
          title: 'Ekadashi',
          hindi: 'एकादशी',
          date: '06-10-26 TUE',
        },
        {
          title: 'Amavas',
          hindi: 'अमावस',
          date: '10-10-26 SAT',
        },
        {
          title: 'Sharadh Ends',
          hindi: 'श्राद्ध समाप्त',
          date: '10-10-26 SAT',
        },
        {
          title: 'Navratra Begins',
          hindi: 'नवरात्र आरंभ',
          date: '11-10-26 SUN',
        },
        {
          title: 'Sankranti (Kartik)',
          hindi: 'संक्रांति कार्तिक',
          date: '17-10-26 SAT',
        },
        {
          title: 'Shree Durga Ashtami',
          hindi: 'श्री दुर्गा अष्टमी',
          date: '18-10-26 SUN',
        },
        {
          title: 'Maha Navmi',
          hindi: 'महा नवमी',
          date: '19-10-26 MON',
        },
        {
          title: 'Vijaya Dashmi',
          hindi: 'विजया दशमी',
          date: '20-10-26 TUE',
        },
        {
          title: 'Ekadashi',
          hindi: 'एकादशी',
          date: '22-10-26 THU',
        },
        {
          title: 'Sharad Purnima',
          hindi: 'शरद पूर्णिमा',
          date: '25-10-26 SUN',
        },
        {
          title: 'Karva Chauth',
          hindi: 'करवा चौथ',
          date: '29-10-26 THU',
        },
      ],
    },

    {
      month: 'November 2026',
      festivals: [
        {
          title: 'Ahoi Ashtmi',
          hindi: 'अहोई अष्टमी',
          date: '01-11-26 SUN',
        },
        {
          title: 'Ekadashi (UK)',
          hindi: 'एकादशी',
          date: '04-11-26 WED',
        },
        {
          title: 'Dhanteras',
          hindi: 'धनतेरस',
          date: '06-11-26 FRI',
        },
        {
          title: 'Diwali',
          hindi: 'दिवाली',
          date: '08-11-26 SUN',
        },
        {
          title: 'Amavas (UK)',
          hindi: 'अमावस',
          date: '08-11-26 SUN',
        },
        {
          title: 'Annakut',
          hindi: 'अन्नकूट',
          date: '09-11-26 MON',
        },
        {
          title: 'Bhai Duj',
          hindi: 'भाई दूज',
          date: '11-11-26 WED',
        },
        {
          title: 'Sankranti (Margshirsh)',
          hindi: 'संक्रांति मार्गशीर्ष',
          date: '16-11-26 MON',
        },
        {
          title: 'Ekadashi',
          hindi: 'एकादशी',
          date: '20-11-26 FRI',
        },
        {
          title: 'Tulsi Vivah',
          hindi: 'तुलसी विवाह',
          date: '20-11-26 FRI',
        },
        {
          title: 'Purnima',
          hindi: 'पूर्णिमा',
          date: '24-11-26 TUE',
        },
      ],
    },
    {
      month: 'December 2026',
      festivals: [
        {
          title: 'Ekadashi',
          hindi: 'एकादशी',
          date: '04-12-26 FRI',
        },
        {
          title: 'Amavas',
          hindi: 'अमावस',
          date: '08-12-26 TUE',
        },
        {
          title: 'Sankranti (Paush)',
          hindi: 'संक्रांति पौष',
          date: '16-12-26 TUE',
        },
        {
          title: 'Gita Jayanti,Ekadashi',
          hindi: 'गीता जयंती,एकादशी',
          date: '20-12-26 FRI',
        },

        {
          title: 'Datta Jayanti',
          hindi: 'दत्त जयंती',
          date: '24-12-26 THU',
        },
        {
          title: 'Purnima',
          hindi: 'पूर्णिमा',
          date: '24-12-26 THU',
        },
        {
          title: 'Christmas Celebration',
          hindi: 'क्रिसमस उत्सव',
          date: '25-12-26 FRI',
        },
      ],
    },
  ];

  currentIndex = 0;
  cardsPerView = 2;
  setCurrentMonth() {
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    const currentMonthName = monthNames[new Date().getMonth()];

    const index = this.festivalCalendar.findIndex((month) =>
      month.month.startsWith(currentMonthName),
    );

    if (index !== -1) {
      this.currentIndex = index;
    }
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.serviceId = params.get('id');

      this.serviceData = this.services[this.serviceId || ''];

      /* CURRENT MONTH START */

      this.updateCardsPerView();
      this.setCurrentMonth();

      /* FESTIVAL CHECK */

      this.checkTodayFestival();

      /* RESET GALLERY */

      this.currentImageIndex = 0;

      /* RESTART AUTO SLIDER */

      this.startSlider();

      window.scrollTo(0, 0);

      // setTimeout(() => {
      //   new Notification('🙏 Shree Shakti Mandir', {
      //     body: 'Today is Ekadashi',
      //   });
      // }, 3000);
    });
  }
  @HostListener('window:resize')
  onResize() {
    this.updateCardsPerView();
  }

  /* =========================
   TODAY HIGHLIGHT
========================= */

  isToday(dateString: string): boolean {
    const today = new Date();

    const parts = dateString.split('-');

    const day = Number(parts[0]);
    const month = Number(parts[1]) - 1;
    const year = Number('20' + parts[2].split(' ')[0]);

    return today.getDate() === day && today.getMonth() === month && today.getFullYear() === year;
  }

  /* =========================
   TODAY FESTIVAL ALERT
========================= */

  checkTodayFestival() {
    const today = new Date();

    this.festivalCalendar.forEach((month) => {
      month.festivals.forEach((festival) => {
        const parts = festival.date.split('-');

        const day = Number(parts[0]);
        const monthIndex = Number(parts[1]) - 1;
        const year = Number('20' + parts[2].split(' ')[0]);

        if (
          today.getDate() === day &&
          today.getMonth() === monthIndex &&
          today.getFullYear() === year
        ) {
          this.showFestivalNotification(festival.title);
        }
      });
    });
  }

  /* =========================
   BROWSER NOTIFICATION
========================= */

  showFestivalNotification(title: string) {
    if ('Notification' in window) {
      if (Notification.permission === 'default') {
        Notification.requestPermission().then((permission) => {
          if (permission === 'granted') {
            new Notification('🙏 Shree Shakti Mandir', {
              body: `Today is ${title}`,
            });
          }
        });
      } else if (Notification.permission === 'granted') {
        new Notification('🙏 Shree Shakti Mandir', {
          body: `Today is ${title}`,
        });
      }
    }
  }
  updateCardsPerView() {
    if (window.innerWidth < 1200) {
      this.cardsPerView = 1;
    } else {
      this.cardsPerView = 2;
    }
  }

  get visibleMonths() {
    // return this.festivalCalendar.slice(this.currentIndex, this.currentIndex + this.cardsPerView);
    return this.festivalCalendar.slice(this.currentIndex, this.currentIndex + this.cardsPerView);
  }

  nextSlide() {
    if (this.currentIndex + this.cardsPerView < this.festivalCalendar.length) {
      this.currentIndex++;
    }
  }

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
  currentImageIndex = 0;

  sliderInterval: any;

  /* =========================
   AUTO SLIDER
========================= */

  startSlider() {
    this.stopSlider();

    this.sliderInterval = setInterval(() => {
      this.nextImage(false);
    }, 3000);
  }

  /* =========================
   STOP
========================= */

  stopSlider() {
    if (this.sliderInterval) {
      clearInterval(this.sliderInterval);
    }
  }

  /* =========================
   NEXT
========================= */

  nextImage(restart = true) {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.serviceData.gallery.length;

    if (restart) {
      this.startSlider();
    }
  }

  /* =========================
   PREVIOUS
========================= */

  prevImage() {
    this.currentImageIndex =
      (this.currentImageIndex - 1 + this.serviceData.gallery.length) %
      this.serviceData.gallery.length;

    this.startSlider();
  }
  showImageModal = false;

  selectedImage = '';

  modalImageIndex = 0;

  openImage(img: string) {
    this.modalImageIndex = this.serviceData.gallery.indexOf(img);

    this.selectedImage = img;

    this.showImageModal = true;
  }

  /* CLOSE */

  closeImage() {
    this.showImageModal = false;
  }

  /* NEXT IMAGE */

  nextModalImage() {
    this.modalImageIndex = (this.modalImageIndex + 1) % this.serviceData.gallery.length;

    this.selectedImage = this.serviceData.gallery[this.modalImageIndex];
  }

  /* PREVIOUS IMAGE */

  prevModalImage() {
    this.modalImageIndex =
      (this.modalImageIndex - 1 + this.serviceData.gallery.length) %
      this.serviceData.gallery.length;

    this.selectedImage = this.serviceData.gallery[this.modalImageIndex];
  }

  // testNotification() {
  //   if (!('Notification' in window)) {
  //     alert('Browser does not support notifications');
  //     return;
  //   }

  //   if (Notification.permission === 'granted') {
  //     new Notification('🙏 Shree Shakti Mandir', {
  //       body: 'Today is Ekadashi',
  //       icon: 'assets/logo.png', // optional
  //     });
  //   } else {
  //     Notification.requestPermission().then((permission) => {
  //       if (permission === 'granted') {
  //         new Notification('🙏 Shree Shakti Mandir', {
  //           body: 'Today is Ekadashi',
  //           icon: 'assets/logo.png',
  //         });
  //       }
  //     });
  //   }
  // }
}
