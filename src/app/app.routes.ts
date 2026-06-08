import { Routes } from '@angular/router';
export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },

  {
    path: 'voluntring',
    loadComponent: () => import('./pages/volunteering/volunteering').then((m) => m.Volunteering),
  },
  {
    path: 'services',
    loadComponent: () => import('./pages/services/services').then((m) => m.Services),
  },
  {
    path: 'services-details/:id',
    loadComponent: () =>
      import('./pages/services-details/services-details').then((m) => m.ServicesDetails),
  },
  {
    path: 'about-us',
    loadComponent: () => import('./pages/aboutus/aboutus').then((m) => m.Aboutus),
  },
  {
    path: 'event',
    loadComponent: () => import('./pages/event/event').then((m) => m.Event),
  },
  {
    path: 'event-details/:slug',
    loadComponent: () => import('./pages/event-details/event-details').then((m) => m.EventDetails),
  },
  {
    path: 'gallery',
    loadComponent: () => import('./pages/gallery/gallery').then((m) => m.Gallery),
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact').then((m) => m.Contact),
  },
  {
    path: 'donate',
    loadComponent: () => import('./pages/donation/donation').then((m) => m.Donation),
  },
  {
    path: 'online-donate',
    loadComponent: () =>
      import('./pages/online-donation/online-donation').then((m) => m.OnlineDonation),
  },

  //   {
  //     path: 'events',
  //     loadComponent: () =>
  //       import('./pages/events/events.component')
  //         .then(m => m.EventsComponent)
  //   },

  //   {
  //     path: 'services',
  //     loadComponent: () =>
  //       import('./pages/services/services.component')
  //         .then(m => m.ServicesComponent)
  //   },

  //   {
  //     path: 'blogs',
  //     loadComponent: () =>
  //       import('./pages/blogs/blogs.component')
  //         .then(m => m.BlogsComponent)
  //   },

  {
    path: 'footer',
    loadComponent: () => import('./footer/footer/footer').then((m) => m.Footer),
  },

  // 404 Page
  {
    path: '**',
    redirectTo: '',
  },
];
