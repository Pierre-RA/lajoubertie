import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
import { Post } from '../shared';
import { environment } from '../../environments/environment';

@Injectable()
export class PostsService {

  private _wpBase = environment.wpBase;

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this._wpBase + 'posts');
  }

  getLodges(): Observable<Post[]> {
    return this.http.get<Post[]>(this._wpBase + 'posts?categories=' + environment.categories.lodges);
  }

  getRooms(): Observable<Post[]> {
    return this.http.get<Post[]>(this._wpBase + 'posts?categories=' + environment.categories.rooms);
  }

  getPost(slug: string): Observable<Post[]> {
    return this.http.get<Post[]>(this._wpBase + `posts?slug=${slug}`);
  }

}
