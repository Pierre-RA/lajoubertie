import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

import { Picture } from '../../shared/room';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  pictures: Array<Picture>;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor() {
    this.galleryImages = [];
    this.initPictures();
  }

  ngOnInit() {
    this.galleryOptions = [{
      width: '100%',
      height: '60vh',
      thumbnailsColumns: 4,
      imageAnimation: NgxGalleryAnimation.Slide
    }, {
      breakpoint: 800,
      width: '100%',
      height: '600px',
      imagePercent: 80,
      thumbnailsPercent: 20,
      thumbnailsMargin: 20,
      thumbnailMargin: 20
    }, {
      breakpoint: 400,
      preview: false
    }];
  }

  initPictures(): void {
    this.galleryImages.push(new Picture('assets/img/back-house.jpg', '').getGallery());
    this.galleryImages.push(new Picture('assets/img/barbecue.jpg', '').getGallery());
    this.galleryImages.push(new Picture('assets/img/bathroom.jpg', '').getGallery());
    this.galleryImages.push(new Picture('assets/img/bedroom-large.jpg', '').getGallery());
    this.galleryImages.push(new Picture('assets/img/bedroom.jpg', '').getGallery());
    this.galleryImages.push(new Picture('assets/img/beds.jpg', '').getGallery());
    this.galleryImages.push(new Picture('assets/img/breakfast.jpg', '').getGallery());
    this.galleryImages.push(new Picture('assets/img/domain.jpg', '').getGallery());
    this.galleryImages.push(new Picture('assets/img/entrance.jpg', '').getGallery());
    this.galleryImages.push(new Picture('assets/img/house_dog.jpg', '').getGallery());
    this.galleryImages.push(new Picture('assets/img/house-other-side.jpg', '').getGallery());
    this.galleryImages.push(new Picture('assets/img/house.jpg', '').getGallery());
    this.galleryImages.push(new Picture('assets/img/houses.jpg', '').getGallery());
    this.galleryImages.push(new Picture('assets/img/joubertie_orange.jpg', '').getGallery());
    this.galleryImages.push(new Picture('assets/img/living-room-back.jpg', '').getGallery());
    this.galleryImages.push(new Picture('assets/img/living-room.jpg', '').getGallery());
    this.galleryImages.push(new Picture('assets/img/pool.jpg', '').getGallery());
    this.galleryImages.push(new Picture('assets/img/side-house.jpg', '').getGallery());
    this.galleryImages.push(new Picture('assets/img/some-room.jpg', '').getGallery());
    this.galleryImages.push(new Picture('assets/img/swimming-pool.jpg', '').getGallery());
    this.galleryImages.push(new Picture('assets/img/terrasse.jpg', '').getGallery());
  }

}
