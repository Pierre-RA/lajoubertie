import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'calendar-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  @Input() view: string;
  @Input() viewDate: Date;
  @Input() locale: string;

  @Output() viewChange: EventEmitter<string> = new EventEmitter();
  @Output() viewDateChange: EventEmitter<Date> = new EventEmitter();

  constructor(
    private translateService: TranslateService
  ) {
    this.locale = this.translateService.currentLang;
  }

  ngOnInit() {
    this.translateService.onLangChange.subscribe(
      (event) => {
        this.locale = event.lang;
      }
    );
  }

}
