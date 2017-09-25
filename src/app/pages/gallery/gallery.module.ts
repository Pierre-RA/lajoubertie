import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery.component';
import { routing } from './gallery.routing';
import { TranslateModule } from "@ngx-translate/core";
import { NgxGalleryModule } from 'ngx-gallery';

@NgModule({
  imports: [
    CommonModule,
    routing,
    TranslateModule,
    NgxGalleryModule
  ],
  declarations: [GalleryComponent]
})
export class GalleryModule { }
