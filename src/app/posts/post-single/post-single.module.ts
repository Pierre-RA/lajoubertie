import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from "@ngx-translate/core";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PostSingleComponent } from './post-single.component';
import { routing } from './post-single.routing';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    NgbModule,
    routing
  ],
  declarations: [PostSingleComponent]
})
export class PostSingleModule { }
