import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

import { MediaService } from '../../media/media.service';
import { Picture, Media } from '../../shared';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor(
    private mediaService: MediaService
  ) {
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
    this.mediaService.getAllMedia().subscribe(
      (media: Media[]) => {
        media.forEach(medium => {
          this.galleryImages.push({
            small: medium.media_details.sizes.medium.source_url,
            medium: medium.media_details.sizes.medium_large.source_url,
            big: medium.media_details.sizes.full.source_url,
            description: medium.description.rendered
          });
        });
      }
    );
  }

}
