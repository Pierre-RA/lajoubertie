import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  mapsData: Array<Marker>;
  centre: Marker;

  constructor(
    private ngbCarouselConfig: NgbCarouselConfig
  ) {
    this.centre = {
      title: '',
      lat: 45,
      lng: 0.295,
      zoom: 9
    };
    this.mapsData = [{
      title: 'La Joubertie',
      lat: 45.0346544,
      lng: 0.8069931,
      url: '/assets/img/joubertie-icon.png'
    }, {
      title: 'Lascaux',
      lat: 45.0539181,
      lng: 1.1588962
    }, {
      title: 'Les Eyzies',
      lat: 44.9338186,
      lng: 1.0116237
    }, {
      title: 'Bergerac',
      lat: 44.8519246,
      lng: 0.4532777
    }, {
      title: 'Sarlat',
      lat: 44.962884,
      lng: 1.0301247
    }];
    this.ngbCarouselConfig.interval = 0;
  }

  ngOnInit() {
  }

}

class Marker {
  title: string;
  lat: number;
  lng: number;
  zoom?: number;
  url?: string;
}
