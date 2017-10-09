import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostSingleComponent } from './post-single.component';
import { routing } from './post-single.routing';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [PostSingleComponent]
})
export class PostSingleModule { }
