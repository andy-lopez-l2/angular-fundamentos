import { Routes } from '@angular/router';

import { EventDetailComponent } from './components/event-detail/event-detail.component';
import { EventsListComponent } from './components/events-list/events-list.component';

export const appRoutes: Routes = [
  { path: 'events', component: EventsListComponent },
  { path: 'event/:id', component: EventDetailComponent },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
];
