import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class IcsService {

  private icsBase = environment.icsBase;

  constructor(private http: HttpClient) { }

  getSampleRoom(): Observable<String> {
    return this.http.get<String>(this.icsBase + 'room/1');
  }

}
