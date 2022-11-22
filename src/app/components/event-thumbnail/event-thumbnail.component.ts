import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css'],
})
export class EventThumbnailComponent {
  @Input() event: any;
  @Output() fromChild = new EventEmitter();
  somePropierty: String = '1 Propiedad';

  sendMessage() {
    this.fromChild.emit('foo');
  }

  otherMsj() {
    console.log('Algo');
  }

  getStartClass() {
    const isEarlyStart = this.event && this.event.time === '8:00 am';
    return { red: isEarlyStart, bold: isEarlyStart };
  }
}
