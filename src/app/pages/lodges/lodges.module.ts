import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LodgesComponent } from './lodges.component';
import { routing } from './lodges.routing';
import { TranslateModule } from "@ngx-translate/core";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PostsService } from '../../posts/posts.service';
import { MediaService } from '../../media/media.service';
import { RoomModule } from '../../templates/room/room.module';

@NgModule({
  imports: [
    CommonModule,
    routing,
    TranslateModule,
    NgbModule,
    RoomModule
  ],
  declarations: [LodgesComponent],
  providers: [PostsService, MediaService]
})
export class LodgesModule { }
