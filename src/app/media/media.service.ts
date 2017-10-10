import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { Media } from '../shared';

@Injectable()
export class MediaService {

  private _wpBase = environment.wpBase;

  constructor(private http: HttpClient) { }

  getMediaFromCategory(category: string): Observable<Media[]> {
    return this.http.get<Media[]>(this._wpBase + `media?media_category[]=${category}`);
  }

  getAttachedMedia(parent: number): Observable<Media[]> {
    return this.http.get<Media[]>(this._wpBase + `media?parent=${parent}`);
  }

  getAllMedia(): Observable<Media[]> {
    return this.http.get<Media[]>(this._wpBase + 'media?media_type=image');
  }

}
