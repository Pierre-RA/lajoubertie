import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomsComponent } from './rooms.component';
import { routing } from './rooms.routing';
import { TranslateModule } from "@ngx-translate/core";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    routing,
    TranslateModule,
    NgbModule
  ],
  declarations: [RoomsComponent]
})
export class RoomsModule { }
