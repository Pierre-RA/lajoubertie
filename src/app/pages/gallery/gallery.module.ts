import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery.component';
import { routing } from './gallery.routing';
import { TranslateModule } from "@ngx-translate/core";
import { NgxGalleryModule } from 'ngx-gallery';
import { MediaService } from '../../media/media.service';

@NgModule({
  imports: [
    CommonModule,
    routing,
    TranslateModule,
    NgxGalleryModule
  ],
  declarations: [GalleryComponent],
  providers: [MediaService]
})
export class GalleryModule { }
