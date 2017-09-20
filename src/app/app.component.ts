import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    let lang = localStorage.getItem('lang') || this.translate.getBrowserLang();
    this.translate.setDefaultLang('en');
    this.translate.use(lang);
  }

  onTranslate(lang: string): void {
    localStorage.setItem('lang', lang);
    this.translate.use(lang);
  }
}
