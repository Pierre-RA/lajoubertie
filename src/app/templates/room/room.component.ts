import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

import { Room, Price, Picture } from '../../shared/room';

@Component({
  selector: 'room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  @Input() lodge: Room;
  lang: string;

  constructor(
    private translateService: TranslateService,
    private router: Router
  ) {
    this.lang = this.translateService.currentLang;
  }

  ngOnInit() {
    this.translateService.onLangChange.subscribe(
      (event) => {
        this.lang = event.lang;
      }
    );
  }

  selectPost(slug) {
    this.router.navigate(['/posts', slug]);
  }

}
