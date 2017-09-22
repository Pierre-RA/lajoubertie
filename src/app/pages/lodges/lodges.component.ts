import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-lodges',
  templateUrl: './lodges.component.html',
  styleUrls: ['./lodges.component.css']
})
export class LodgesComponent implements OnInit {

  constructor(
    private ngbCarouselConfig: NgbCarouselConfig
  ) {
    this.ngbCarouselConfig.interval = 0;
  }

  ngOnInit() {
  }

}
