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
            post.slug, post.categories,
            +post.acf.people, +post.acf.rooms, +post.acf.bathrooms,
            [post.acf.title_EN, post.title.rendered],
            [post.acf.description_EN, post.content.rendered],
            [post.acf.excerpt_EN, post.excerpt.rendered],
            new Price(+post.acf.price, +post.acf.minimum_nights, +post.acf.week_price),
            []
          ));
          this.setupAttachedMedia(post, this.rooms.length - 1);
        });
      }
    );
  }

  setupAttachedMedia(post: Post, position: number): void {
    for (let i = 1; i < 5; i++) {
      if (post.acf['image_' + i]) {
        this.rooms[position].addPicture(new Picture(
          post.acf['image_' + i].sizes.thumbnail,
          post.acf['image_' + i].sizes.large,
          post.acf['image_' + i].url,
          post.acf['image_' + i].alt,
          post.acf['image_' + i].title
        ));
      }
    }
  }

}
