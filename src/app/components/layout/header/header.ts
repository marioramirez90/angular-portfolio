import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
    currentLang: string = 'DE';

  setLanguage(lang: string) {
    this.currentLang = lang;
  
  }

  
}

