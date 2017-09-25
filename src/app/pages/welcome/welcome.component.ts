import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(
    private ngbCarouselConfig: NgbCarouselConfig
  ) {
    this.ngbCarouselConfig.interval = 0;
  }

  ngOnInit() {
  }

}
