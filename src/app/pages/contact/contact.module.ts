import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { routing } from './contact.routing';
import { TranslateModule } from "@ngx-translate/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from '../../calendar/calendar.module';
import { ContactService } from './contact.service';

@NgModule({
  imports: [
    CommonModule,
    routing,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule
  ],
  declarations: [ContactComponent],
  providers: [ContactService]
})
export class ContactModule { }
