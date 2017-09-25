import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { routing } from './contact.routing';
import { TranslateModule } from "@ngx-translate/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    routing,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ContactComponent]
})
export class ContactModule { }
