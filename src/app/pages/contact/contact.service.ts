import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
// import { Post } from '../shared';
import { environment } from '../../../environments/environment';

@Injectable()
export class ContactService {

  private sendmailBase = environment.sendmailBase;

  constructor(private http: HttpClient) { }

  sendContactMail(message): Observable<Object> {
    return this.http.post(this.sendmailBase + 'simple', message);
  }

}
