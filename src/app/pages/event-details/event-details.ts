import { Component } from '@angular/core';
import { Navbar } from '../../reuseable/navbar/navbar';
import { Footer } from '../../footer/footer/footer';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-event-details',
  imports: [Navbar, Footer, CommonModule],
  templateUrl: './event-details.html',
  styleUrl: './event-details.css',
})
export class EventDetails {
  slug: any;

  eventData: any;

  eventDetails = [
    {
      id: 1,
      slug: 'secret-to-attaining-peace',
      title: 'Bhagwat Katha By Holi Guru Bageshwari Devi',
      banner: 'assets/event/event3.png',
      category: 'Spiritual Satsang',
      speaker: 'Holi Guru Bageshwari Devi',
      date: '30th & 31st May 2026',
      time: '04:30 PM to 06:30 PM',
      location: '70 Moira Street, Leicester LE4 6LA',
      description:
        'Shree Shakti Mandir warmly welcomes all devotees and families to a divine spiritual satsang focused on attaining inner peace, happiness, and devotion through chanting the holy name of God. Experience uplifting pravachan, bhajans, spiritual wisdom, and divine positivity in a peaceful devotional environment.',
      highlights: [
        'Divine Spiritual Pravachan',
        'Bhajan & Kirtan',
        'Peace & Happiness Guidance',
        'Devotional Chanting',
        'Prasadam Distribution',
      ],
      schedule: [
        { day: 'Saturday 30th May 2026', timing: '04:30 PM - 06:30 PM' },
        { day: 'Sunday 31st May 2026', timing: '04:30 PM - 06:30 PM' },
      ],
    },
    {
      id: 2,
      slug: 'shree-hanuman-charitra-katha',
      title: 'Shree Hanuman Charitra Katha',
      banner: 'assets/event/event-2.jpeg',
      category: 'Hanuman Katha Mahotsav',
      speaker: 'Pujya Shri Mehul Bhai Jani (Khergamvala)',
      date: '3rd to 5th July 2026',
      time: '04:00 PM to 08:00 PM',
      location: '70 Moira Street, Leicester LE4 6LA',
      description:
        'Join the divine Shree Hanuman Charitra Katha and immerse yourself in the life, devotion, courage, and seva of Prabhu Hanuman. Experience spiritual pravachan, Hanuman bhakti, devotional kirtan, and divine blessings that inspire strength, faith, family values, and Sanatan Dharma.',
      highlights: [
        'Hanuman Charitra Katha',
        'Bhajan & Sankirtan',
        'Hanuman Bhakti',
        'Family Spiritual Gathering',
        'Prasadam Distribution',
      ],
      schedule: [
        { activity: 'Hanuman Charitra Katha', timing: '04:00 PM' },
        { activity: 'Bhajan & Kirtan', timing: '06:00 PM' },
        { activity: 'Maha Aarti & Prasadam', timing: '07:30 PM' },
      ],
    },
    {
      id: 3,

      slug: 'hari-naam-sankirtan',

      title: 'Hari Naam Sankirtan by ISKCON Leicester',

      banner: 'assets/event/event-3.jpeg',

      category: 'Spiritual Kirtan & Bhajan',

      speaker: 'ISKCON Leicester',

      date: 'Sunday, 7th June 2026',

      time: '04:30 PM to 06:30 PM',

      location: '70 Moira Street Leicester, UK LE4 6LA',

      description:
        'Shree Shakti Mandir warmly invites all devotees and families to participate in the divine Hari Naam Sankirtan led by ISKCON Leicester. Experience the joy of devotional chanting, bhajans, spiritual unity, and the blessings of Lord Krishna in a peaceful and uplifting atmosphere.',

      highlights: [
        'Hari Naam Sankirtan',
        'Krishna Bhajans & Kirtans',
        'Devotional Gathering',
        'Daily Aarti at 06:30 PM',
        'Prasadam Distribution',
        'Family Spiritual Event',
      ],

      schedule: [
        {
          activity: 'Hari Naam Sankirtan',
          timing: '04:30 PM',
        },
        {
          activity: 'Daily Aarti',
          timing: '06:30 PM',
        },
        {
          activity: 'Prasadam Distribution',
          timing: 'After Aarti',
        },
      ],
    },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.slug = this.route.snapshot.paramMap.get('slug');

    this.eventData = this.eventDetails.find((x: any) => x.slug === this.slug);
  }
}
