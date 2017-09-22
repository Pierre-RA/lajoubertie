import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome.component';
import { routing } from './welcome.routing';
import { TranslateModule } from "@ngx-translate/core";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    routing,
    TranslateModule,
    NgbModule
  ],
  declarations: [WelcomeComponent]
})
export class WelcomeModule { }
