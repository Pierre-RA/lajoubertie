import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome.component';
import { routing } from './welcome.routing';
import { TranslateModule } from "@ngx-translate/core";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from '@agm/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';

@NgModule({
  imports: [
    CommonModule,
    routing,
    TranslateModule,
    NgbModule,
    AgmCoreModule,
    AgmSnazzyInfoWindowModule
  ],
  declarations: [WelcomeComponent]
})
export class WelcomeModule { }
