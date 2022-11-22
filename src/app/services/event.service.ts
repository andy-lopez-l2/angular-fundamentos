import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  getEvents() {
    return EVENTS;
  }

  constructor() {}
}

const EVENTS = [
  {
    id: 1,
    name: 'Angular Connect',
    time: '10:00 am',
    price: 599.99,
    imageUrl: '',
    location: {
      address: '1057 DT',
      coty: 'London',
      country: 'England',
    },
  },
  {
    id: 2,
    name: 'Angular Connect',
    time: '9:00 am',
    price: 599.99,
    imageUrl: '',
    location: {
      address: '1057 DT',
      coty: 'London',
      country: '',
    },
  },
  {
    id: 3,
    name: 'Angular Connect',
    time: '8:00 am',
    price: 599.99,
    imageUrl: '',
    location: {
      address: '1057 DT',
      coty: 'London',
      country: 'England',
    },
  },
];
