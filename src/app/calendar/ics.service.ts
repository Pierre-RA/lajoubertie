import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import * as ical2json from 'ical2json';

@Injectable()
export class IcsService {

  private icsBase = environment.icsBase;

  constructor(private http: HttpClient) { }

  getSampleRoom(): Observable<String> {
    return this.http.get<String>(this.icsBase + 'room/1');
  }

  getRoom(name: string): Observable<Array<Object>> {
    return this.http.get<String>(this.icsBase + 'room/' + name)
      .map(response => ical2json.convert(response))
      .map(response => {
        let result = [];
        if (response['VCALENDAR']) {
          response['VCALENDAR'][0]['VEVENT'].forEach(event => {
            result.push({
              title: name,
              color: { primary: '#b22222', secondary: '#ff88aa' },
              start: this.parse(event['DTSTART;VALUE=DATE']),
              end: this.parse(event['DTEND;VALUE=DATE']),
              meta: {
                incrementsBadgeTotal: false
              }
            });
          });
        }
        return result;
      });
  }

  parse(str): Date {
    var y = str.substr(0,4),
        m = str.substr(4,2) - 1,
        d = str.substr(6,2);
    var D = new Date(y,m,d);
    return D;
    // return (D.getFullYear() == y && D.getMonth() == m && D.getDate() == d) ? D : 'invalid date';
  }

}
