import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Meta } from '@angular/platform-browser';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { HttpErrorResponse } from '@angular/common/http';

import { PostsService } from '../posts.service';
import { Post, Price, Picture, Room } from '../../shared';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-post-single',
  templateUrl: './post-single.component.html',
  styleUrls: ['./post-single.component.css'],
  providers: [PostsService]
})
export class PostSingleComponent implements OnInit {

  room: Room;
  error: boolean;
  lang: string;

  constructor(
    private postsService: PostsService,
    private location: Location,
    private translateService: TranslateService,
    private route: ActivatedRoute,
    private meta: Meta
  ) {
    this.error = false;
    this.lang = this.translateService.currentLang;
  }

  ngOnInit() {
    this.getPost();
    this.setLang();
  }

  getPost() {
    this.route.paramMap
    .switchMap((params: ParamMap) =>
      this.postsService.getPost(params.get('slug')))
    .subscribe(
      (post: Post[]) => {
        this.setTags(post[0]);
        this.room = new Room(
          post[0].slug, post[0].categories,
          +post[0].acf.people, +post[0].acf.rooms, +post[0].acf.bathrooms,
          [post[0].acf.title_EN, post[0].title.rendered],
          [post[0].acf.description_EN, post[0].content.rendered],
          [post[0].acf.excerpt_EN, post[0].excerpt.rendered],
          new Price(+post[0].acf.price, +post[0].acf.minimum_nights, +post[0].acf.week_price),
          []
        );
        for (let i = 1; i < 5; i++) {
          if (post[0].acf['image_' + i]) {
            this.room.addPicture(new Picture(
              post[0].acf['image_' + i].sizes.thumbnail,
              post[0].acf['image_' + i].sizes.large,
              post[0].acf['image_' + i].url,
              post[0].acf['image_' + i].alt,
              post[0].acf['image_' + i].title
            ));
          }
        }
        if (post.length == 0) {
          this.error = true;
        }
      },
      (err: HttpErrorResponse) => {
        this.error = true;
      }
    );
  }

  setTags(post: Post): void {
    this.meta.addTag({ name: 'og:type', content: 'website' });
    this.meta.addTag({ name: 'og:title', content: post.acf['title_EN'] + ' - La Joubertie' });
    this.meta.addTag({ name: 'og:url', content: 'https://lajoubertie.fr/posts/' +  this.route.snapshot.params.slug });
    if (post.acf['image_1']) {
      this.meta.addTag({ name: 'og:image', content: post.acf['image_1'].sizes.thumbnail });
    }
  }

  setLang() {
    this.translateService.onLangChange.subscribe(
      (event) => {
        this.lang = event.lang;
      }
    );
  }

  clickBack() {
    this.location.back();
  }

}
