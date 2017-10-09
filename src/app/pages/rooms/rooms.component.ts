import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Room, Price, Picture } from '../../shared/room';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  rooms: Array<Room>;

  constructor() {
    this.rooms = [];
    this.rooms.push(new Room(
      2, 1, 1,
      [],
      [],
      new Price(50,1),
      [new Picture('bedroom.jpg', ''), new Picture('breakfast.jpg', ''), new Picture('side-house.jpg', '')]
    ));
  }

  ngOnInit() {
  }

}
