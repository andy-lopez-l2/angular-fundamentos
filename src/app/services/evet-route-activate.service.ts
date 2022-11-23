import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { EventService } from './event.service';

@Injectable({
  providedIn: 'root',
})
export class EvetRouteActivateService implements CanActivate {
  constructor(private eventService: EventService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): any {
    const eventExists = !!this.eventService.getOneEvent(+route.params['id']);

    if (!eventExists) {
      this.router.navigate(['/404']);
    } else {
      return eventExists;
    }
  }
}
