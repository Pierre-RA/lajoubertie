import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IcsService } from './ics.service';

import {
  CalendarEvent,
  CalendarEventTimesChangedEvent,
  CalendarMonthViewDay
} from 'angular-calendar';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/reduce';
import 'rxjs/add/operator/zip';

@Component({
  selector: 'calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  view: string = 'month';
  viewDate: Date = new Date();
  events: Observable<Array<Object>>;
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
    this.fetchEvents();
    this.locale = this.translateService.currentLang;
    this.localeWeek = this.locale == 'en' ? 0 : 1;
  }

  ngOnInit(): void {
    this.translateService.onLangChange.subscribe(
      (event) => {
        this.locale = event.lang;
        this.localeWeek = this.locale == 'en' ? 0 : 1;
      }
    );
  }

  fetchEvents(): void {
    this.events = Observable.forkJoin([
      this.icsService.getRoom('room2'),
      this.icsService.getRoom('room4'),
      this.icsService.getRoom('lodge2'),
      this.icsService.getRoom('lodge4')
    ])
    .map(res => {
      let tmp = [];
      res.forEach(el => {
        tmp = tmp.concat(el);
      })
      return tmp;
    });
  }

}
