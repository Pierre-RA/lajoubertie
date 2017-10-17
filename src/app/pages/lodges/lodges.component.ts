import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
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
    private mediaService: MediaService
  ) {
    this.ngbCarouselConfig.interval = 0;
    this.lodges = [];
  }

  ngOnInit() {
    this.setupLodges();
  }

  setupLodges(): void {
    this.postsService.getLodges().subscribe(
      (posts: Post[]) => {
        posts.forEach(post => {
          this.lodges.push(new Room(
            post.slug,
            +post.personnes, +post.chambres, +post.sdb,
            [post.titleEN, post.title.rendered],
            [post.contentEN, post.content.rendered],
            [post.excerpt.rendered, post.excerpt.rendered],
            new Price(+post.price, +post.nights),
            []
          ));
          this.setupAttachedMedia(post.id, this.lodges.length - 1);
        });
      }
    );
  }

  setupCategorizedMedia(category: string, position: number): void {
    this.mediaService.getMediaFromCategory(category).subscribe(
      (media: Media[]) => {
        media.forEach(medium => {
          this.lodges[position].addPicture(new Picture(
            medium.guid.rendered,
            medium.title.rendered,
          ));
        });
      }
    );
  }

  setupAttachedMedia(parent: number, position: number): void {
    this.mediaService.getAttachedMedia(parent).subscribe(
      (media: Media[]) => {
        media.forEach(medium => {
          this.lodges[position].addPicture(new Picture(
            medium.guid.rendered,
            medium.title.rendered,
          ));
        });
      }
    );
  }

}
