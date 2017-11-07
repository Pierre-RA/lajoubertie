import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'calendar-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  @Input('events') events: Array<Object>;
  room2: string;
  room4: string;
  lodge2: string;
  lodge4: string;

  constructor() {
    this.room2 = 'available';
    this.room4 = 'available';
    this.lodge2 = 'available';
    this.lodge4 = 'available';
  }

  ngOnInit() {
    this.events.forEach(event => {
      if (event['title'] == 'room2') {
        this.room2 = 'booked';
      }
      if (event['title'] == 'room4') {
        this.room4 = 'booked';
      }
      if (event['title'] == 'lodge2') {
        this.lodge2 = 'booked';
      }
      if (event['title'] == 'lodge4') {
        this.lodge4 = 'booked';
      }
    });
  }

}
