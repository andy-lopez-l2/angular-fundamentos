import { Routes } from '@angular/router';

import { EventDetailComponent } from './components/event-detail/event-detail.component';
import { EventsListComponent } from './components/events-list/events-list.component';
import { NewEventComponent } from './components/new-event/new-event.component';
import { ErrorPageComponent } from './errors/error-page/error-page.component';
import { EvetRouteActivateService } from './services/evet-route-activate.service';

export const appRoutes: Routes = [
  { path: 'event/new', component: NewEventComponent },
  { path: 'events', component: EventsListComponent },
  {
    path: 'event/:id',
    component: EventDetailComponent,
    canActivate: [EvetRouteActivateService],
  },
  { path: '404', component: ErrorPageComponent },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
];
