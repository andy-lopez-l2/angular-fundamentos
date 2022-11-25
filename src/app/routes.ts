import { Routes } from '@angular/router';

import { EventDetailComponent } from './components/event-detail/event-detail.component';
import { EventsListComponent } from './components/events-list/events-list.component';
import { LoginComponent } from './components/login/login.component';
import { NewEventComponent } from './components/new-event/new-event.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ErrorPageComponent } from './errors/error-page/error-page.component';
import { EvetRouteActivateService } from './services/evet-route-activate.service';

export const appRoutes: Routes = [
  {
    path: 'event/new',
    component: NewEventComponent,
    canDeactivate: ['canDeactivateCreateEvent'],
  },
  { path: 'events', component: EventsListComponent },
  {
    path: 'event/:id',
    component: EventDetailComponent,
    canActivate: [EvetRouteActivateService],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  { path: 'profile', component: ProfileComponent },
  { path: '404', component: ErrorPageComponent },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
];
