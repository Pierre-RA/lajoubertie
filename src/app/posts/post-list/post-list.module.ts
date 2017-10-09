import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostListComponent } from './post-list.component';
import { routing } from './post-list.routing';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [PostListComponent]
})
export class PostListModule { }
