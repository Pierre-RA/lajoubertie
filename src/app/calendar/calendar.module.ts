import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from "@ngx-translate/core";

import { CalendarComponent } from './calendar.component';
import { IcsService } from './ics.service';
import { CalendarModule as Foo } from 'angular-calendar';
import { HeaderModule } from './header/header.module';
import { EventsModule } from './events/events.module';

@NgModule({
  imports: [
    CommonModule,
    Foo,
    TranslateModule,
    HeaderModule,
    EventsModule
  ],
  declarations: [CalendarComponent],
  providers: [IcsService],
  exports: [CalendarComponent]
})
export class CalendarModule { }
