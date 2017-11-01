import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IcsService } from './ics.service';
import * as ical2json from 'ical2json';
import {
  CalendarEvent,
  CalendarEventTimesChangedEvent,
  CalendarMonthViewDay
} from 'angular-calendar';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  view: string = 'month';
  viewDate: Date = new Date();
  events: CalendarEvent[];
  locale: string;
  localeWeek: number;

  refresh: Subject<any> = new Subject();

  beforeMonthViewRender({ body }: { body: CalendarMonthViewDay[] }): void {
    body.forEach(day => {
      day.badgeTotal = day.events.filter(
        event => event.meta.incrementsBadgeTotal
      ).length;
    });
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd
  }: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newEnd;
    this.refresh.next();
  }

  constructor(
    private icsService: IcsService,
    private translateService: TranslateService
  ) {
    this.parseICS();
    this.locale = this.translateService.currentLang;
    this.localeWeek = this.locale == 'en' ? 0 : 1;
  }

  ngOnInit() {
    this.translateService.onLangChange.subscribe(
      (event) => {
        this.locale = event.lang;
        this.localeWeek = this.locale == 'en' ? 0 : 1;
      }
    );
  }

  parseICS() {
    this.icsService.getSampleRoom().subscribe(text => {
      let json = ical2json.convert(text);
      this.events = [];
      if (json['VCALENDAR']) {
        json['VCALENDAR'].forEach(calendar => {
          if (calendar['VEVENT']) {
            calendar['VEVENT'].forEach(event => {
              this.events.push({
                title: 'réservé',
                color: { primary: '#b22222', secondary: '#ff88aa' },
                start: this.parse(event['DTSTART;VALUE=DATE']),
                end: this.parse(event['DTEND;VALUE=DATE']),
                meta: {
                  incrementsBadgeTotal: false
                }
              });
            });
          }
        });
      }
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
