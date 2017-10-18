import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Room, Price, Picture } from '../../shared/room';
import { PostsService } from '../../posts/posts.service';
import { MediaService } from '../../media/media.service';
import { Post, Media } from '../../shared';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  rooms: Array<Room>;
  lang: string;

  constructor(
    private ngbCarouselConfig: NgbCarouselConfig,
    private postsService: PostsService,
    private mediaService: MediaService
  ) {
    this.ngbCarouselConfig.interval = 0;
  }

  ngOnInit() {
    this.setupRooms();
  }

  setupRooms(): void {
    this.postsService.getRooms().subscribe(
      (posts: Post[]) => {
        this.rooms = [];
        posts.forEach(post => {
          this.rooms.push(new Room(
            post.slug,
            +post.acf.people, +post.acf.rooms, +post.acf.bathrooms,
            [post.acf.title_EN, post.title.rendered],
            [post.acf.description_EN, post.content.rendered],
            [post.acf.excerpt_EN, post.excerpt.rendered],
            new Price(+post.acf.price, +post.acf.minimum_nights, +post.acf.week_price),
            []
          ));
          this.setupAttachedMedia(post.id, this.rooms.length - 1);
        });
      }
    );
  }

  setupCategorizedMedia(category: string, position: number): void {
    this.mediaService.getMediaFromCategory(category).subscribe(
      (media: Media[]) => {
        media.forEach(medium => {
          this.rooms[position].addPicture(new Picture(
            medium.guid.rendered,
            medium.guid.rendered,
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
          this.rooms[position].addPicture(new Picture(
            medium.guid.rendered,
            medium.guid.rendered,
            medium.guid.rendered,
            medium.title.rendered,
          ));
        });
      }
    );
  }

}
