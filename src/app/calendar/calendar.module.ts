import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarComponent } from './calendar.component';
import { IcsService } from './ics.service';
import { CalendarModule as Foo } from 'angular-calendar';
import { HeaderModule } from './header/header.module';

@NgModule({
  imports: [
    CommonModule,
    Foo,
    HeaderModule
  ],
  declarations: [CalendarComponent],
  providers: [IcsService],
  exports: [CalendarComponent]
})
export class CalendarModule { }
