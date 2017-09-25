import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Room, Price, Picture } from '../../shared/room';

@Component({
  selector: 'app-lodges',
  templateUrl: './lodges.component.html',
  styleUrls: ['./lodges.component.css']
})
export class LodgesComponent implements OnInit {

  lodges: Array<Room>;

  constructor(
    private ngbCarouselConfig: NgbCarouselConfig
  ) {
    this.ngbCarouselConfig.interval = 0;
    this.lodges = [];
    this.lodges.push(new Room(
      4, 2, 2,
      'Gîte 4 personnes',
      'lodge1',
      new Price(770,7),
      [new Picture('beds.jpg', ''), new Picture('bathroom.jpg', ''), new Picture('terrasse.jpg', '')]
    ));
    this.lodges.push(new Room(
      2, 1, 1,
      'Gîte 2 personnes',
      'lodge2',
      new Price(550,7),
      [new Picture('bedroom-large.jpg', ''), new Picture('back-house.jpg', ''), new Picture('houses.jpg', '')]
    ));
  }

  ngOnInit() {
  }

}
