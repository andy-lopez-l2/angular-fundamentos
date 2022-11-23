import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css'],
})
export class EventDetailComponent {
  event: any;
  constructor(
    private eventServices: EventService,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.event = this.eventServices.getOneEvent(
      +this.route.snapshot.params['id']
    );
  }
}
