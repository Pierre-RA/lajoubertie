import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

import { Room, Price, Picture } from '../../shared/room';

@Component({
  selector: 'room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  @Input() lodge: Room;
  lang: string;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor(
    private translateService: TranslateService,
    private router: Router
  ) {
    this.lang = this.translateService.currentLang;
    this.galleryImages = [];
  }

  ngOnInit() {
    this.translateService.onLangChange.subscribe(
      (event) => {
        this.lang = event.lang;
      }
    );
    this.initPictures();
    this.galleryOptions = [{
      width: '100%',
      height: '100%',
      thumbnails: false,
      previewDescription: false,
      imageInfinityMove: true,
      previewInfinityMove: true,
      imageAnimation: NgxGalleryAnimation.Slide
    }, {
      breakpoint: 425,
      height: '300px',
      preview: false
    }];
  }

  initPictures(): void {
    this.lodge.getPictures().forEach(picture => {
      this.galleryImages.push({
        small: picture.getMediumURL(),
        medium: picture.getLargeURL(),
        big: picture.getLargeURL()
      });
    })
  }

  selectPost(slug) {
    this.router.navigate(['/posts', slug]);
  }

}
