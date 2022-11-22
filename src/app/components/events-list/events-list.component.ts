import { Component } from '@angular/core';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css'],
})
export class EventsListComponent {
  events = [
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

  recivedMsj(event: any) {
    console.log(event);
  }
}
