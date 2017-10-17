import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from "@ngx-translate/core";

import { PostListComponent } from './post-list.component';
import { routing } from './post-list.routing';

@NgModule({
  imports: [
    CommonModule,
    routing,
    TranslateModule
  ],
  declarations: [PostListComponent]
})
export class PostListModule { }
