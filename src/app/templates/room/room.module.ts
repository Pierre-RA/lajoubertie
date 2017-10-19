import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomComponent } from './room.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from "@ngx-translate/core";
import { RouterModule } from '@angular/router';
import { NgxGalleryModule } from 'ngx-gallery';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    TranslateModule,
    RouterModule,
    NgxGalleryModule
  ],
  declarations: [RoomComponent],
  exports: [RoomComponent]
})
export class RoomModule { }
