import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { PostsService } from '../../posts/posts.service';
import { MediaService } from '../../media/media.service';
import { Post, Media } from '../../shared';

import { Room, Price, Picture } from '../../shared/room';

@Component({
  selector: 'app-lodges',
  templateUrl: './lodges.component.html',
  styleUrls: ['./lodges.component.css']
})
export class LodgesComponent implements OnInit {

  lodges: Array<Room>;
  lang: string;

  constructor(
    private ngbCarouselConfig: NgbCarouselConfig,
    private postsService: PostsService,
    private mediaService: MediaService,
    private translateService: TranslateService
  ) {
    this.ngbCarouselConfig.interval = 0;
    this.lodges = [];
    this.lang = this.translateService.currentLang;
  }

  ngOnInit() {
    this.postsService.getLodges().subscribe(
      (posts: Post[]) => {
        posts.forEach(post => {
          this.lodges.push(new Room(
            +post.personnes, +post.chambres, +post.sdb,
            [post.titleEN, post.title.rendered],
            [post.contentEN, post.content.rendered],
            new Price(+post.price, +post.nights),
            []
          ));
          this.mediaService.getMediaFromCategory(post.mediaCategory).subscribe(
            (media: Media[]) => {
              media.forEach(medium => {
                this.lodges[this.lodges.length - 1].addPicture(new Picture(
                  medium.guid.rendered,
                  medium.title.rendered,
                ));
              });
            }
          );
        });
      }
    );

    this.translateService.onLangChange.subscribe(
      (event) => {
        this.lang = event.lang;
      }
    );
  }

}
