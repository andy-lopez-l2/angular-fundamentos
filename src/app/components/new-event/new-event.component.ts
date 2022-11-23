import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css'],
})
export class NewEventComponent {
  constructor(private router: Router) {}

  handleCancel() {
    this.router.navigate(['/events']);
  }
}
