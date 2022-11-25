import { Injectable } from '@angular/core';
import { IEvent } from '../models/event';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  getEvents() {
    return EVENTS;
  }

  getOneEvent(id: number) {
    return EVENTS.find((event) => event.id === id);
  }

  constructor() {}
}

const EVENTS: IEvent[] = [
  {
    id: 1,
    name: 'Angular Connect',
    date: new Date('06/07/2022'),
    time: '10:00 am',
    price: 599.99,
    imageUrl: 'http//',
    location: {
      address: '1057 DT',
      city: 'London',
      country: 'England',
    },
  },
  {
    id: 2,
    name: 'Angular Connect',
    date: new Date('06/010/2022'),
    time: '9:00 am',
    price: 599.99,
    imageUrl: '',
    location: {
      address: '1057 DT',
      city: 'London',
      country: '',
    },
  },
  {
    id: 3,
    name: 'Angular Connect',
    date: new Date('10/07/2022'),
    time: '8:00 am',
    price: 599.99,
    imageUrl: '',
    location: {
      address: '1057 DT',
      city: 'London',
      country: 'England',
    },
  },
];
