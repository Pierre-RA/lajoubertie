import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Meta } from '@angular/platform-browser';

import { PostsService } from '../../posts/posts.service';
import { MediaService } from '../../media/media.service';
import { Post, Media } from '../../shared';
import { Room, Price, Picture } from '../../shared';
import { environment } from '../../../environments/environment';

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
    private meta: Meta
  ) {
    this.ngbCarouselConfig.interval = 0;
    this.meta.addTag({ name: 'og:type', content: 'website' });
    this.meta.addTag({ name: 'og:title', content: 'Liste des gîtes - La Joubertie' });
    this.meta.addTag({ name: 'og:url', content: 'https://lajoubertie.fr/lodges/' });
    this.meta.addTag({ name: 'og:image', content: environment.rootURL + 'assets/img/la_joubertie.jpg' });
  }

  ngOnInit() {
    this.setupLodges();
  }

  setupLodges(): void {
    this.postsService.getLodges().subscribe(
      (posts: Post[]) => {
        this.lodges = [];
        posts.forEach(post => {
          this.lodges.push(new Room(
            post.slug, post.categories,
            +post.acf.people, +post.acf.rooms, +post.acf.bathrooms,
            [post.acf.title_EN, post.title.rendered],
            [post.acf.description_EN, post.content.rendered],
            [post.acf.excerpt_EN, post.excerpt.rendered],
            new Price(+post.acf.price, +post.acf.minimum_nights, +post.acf.week_price),
            []
          ));
          this.setupAttachedMedia(post, this.lodges.length - 1);
        });
      }
    );
  }

  setupAttachedMedia(post: Post, position: number): void {
    for (let i = 1; i < 5; i++) {
      if (post.acf['image_' + i]) {
        this.lodges[position].addPicture(new Picture(
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
