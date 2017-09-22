import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LodgesComponent } from './lodges.component';
import { routing } from './lodges.routing';
import { TranslateModule } from "@ngx-translate/core";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    routing,
    TranslateModule,
    NgbModule
  ],
  declarations: [LodgesComponent]
})
export class LodgesModule { }
