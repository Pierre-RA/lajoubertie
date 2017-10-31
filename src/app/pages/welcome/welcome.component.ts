import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  mapsData: Array<Marker>;
  centre: Marker;
  assetsURL: string;

  constructor(
    private ngbCarouselConfig: NgbCarouselConfig,
    private meta: Meta
  ) {
    this.assetsURL = environment.rootURL + 'assets';
    this.meta.addTag({ name: 'og:type', content: 'website' });
    this.meta.addTag({ name: 'og:title', content: 'La Joubertie - Gîtes & Chambres d\'hôtes' });
    this.meta.addTag({ name: 'og:url', content: 'https://lajoubertie.fr/' });
    this.meta.addTag({ name: 'og:image', content: this.assetsURL + '/img/la_joubertie.jpg' });
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
      url: this.assetsURL + '/img/joubertie-icon.png'
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
