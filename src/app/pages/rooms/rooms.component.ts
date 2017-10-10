import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Room, Price, Picture } from '../../shared/room';
import { TranslateService } from '@ngx-translate/core';
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
    private mediaService: MediaService,
    private translateService: TranslateService
  ) {
    this.ngbCarouselConfig.interval = 0;
    this.rooms = [];
    this.lang = this.translateService.currentLang;
  }

  ngOnInit() {
    this.setupRooms();
    this.translateService.onLangChange.subscribe(
      (event) => {
        this.lang = event.lang;
      }
    );
  }

  setupRooms(): void {
    this.postsService.getRooms().subscribe(
      (posts: Post[]) => {
        posts.forEach(post => {
          this.rooms.push(new Room(
            +post.personnes, +post.chambres, +post.sdb,
            [post.titleEN, post.title.rendered],
            [post.contentEN, post.content.rendered],
            new Price(+post.price, +post.nights),
            []
          ));
          this.setupMedia(post.mediaCategory, this.rooms.length - 1);
        });
      }
    );
  }

  setupMedia(category: string, position: number): void {
    this.mediaService.getMediaFromCategory(category).subscribe(
      (media: Media[]) => {
        media.forEach(medium => {
          this.rooms[position].addPicture(new Picture(
            medium.guid.rendered,
            medium.title.rendered,
          ));
        });
      }
    );
  }

}
