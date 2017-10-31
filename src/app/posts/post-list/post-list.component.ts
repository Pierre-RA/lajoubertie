import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import { Post } from '../../shared/post';
import { PostsService } from '../posts.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  providers: [PostsService]
})
export class PostListComponent implements OnInit {

  posts: Post[];

  constructor(
    private postsService: PostsService,
    private router: Router,
    private meta: Meta
  ) {
    this.meta.addTag({ name: 'og:type', content: 'website' });
    this.meta.addTag({ name: 'og:title', content: 'Liste des chambres - La Joubertie' });
    this.meta.addTag({ name: 'og:url', content: 'https://lajoubertie.fr/posts/' });
    this.meta.addTag({ name: 'og:image', content: environment.rootURL + 'assets/img/la_joubertie.jpg' });
  }

  ngOnInit() {
    this.postsService.getPosts().subscribe(
      (posts: Post[]) => this.posts = posts,
      (err: HttpErrorResponse) => err.error instanceof Error ? console.log('An error occurred:', err.error.message) : console.log(`Backend returned code ${err.status}, body was: ${err.error}`));
  }

  selectPost(slug) {
    this.router.navigate(['/posts', slug]);
  }

  isRoom(categories: Array<number>) {
    if (categories.indexOf(environment.categories.lodges) != -1) {
      return true;
    }
    if (categories.indexOf(environment.categories.rooms) != -1) {
      return true;
    }
    return false;
  }

}
