import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  navbarCollapsed: boolean;
  lang: string;
  year: string;

  constructor(
    private translate: TranslateService
  ) {
    this.year = environment.year || '';
    this.navbarCollapsed = true;
    this.lang = localStorage.getItem('lang') || this.translate.getBrowserLang();
    this.translate.setDefaultLang('en');
    this.translate.use(this.lang);
  }

  onTranslate(lang: string): void {
    this.lang = lang;
    localStorage.setItem('lang', lang);
    this.translate.use(lang);
  }
}
