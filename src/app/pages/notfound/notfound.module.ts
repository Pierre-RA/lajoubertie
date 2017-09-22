import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './notfound.component';
import { routing } from './notfound.routing';
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    routing,
    TranslateModule
  ],
  declarations: [NotFoundComponent]
})
export class NotFoundModule { }
