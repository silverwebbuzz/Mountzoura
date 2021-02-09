import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { StorageService } from './storage.service';
import { Router } from '@angular/router';
import { CommonService } from './common_service';

@Injectable({
    providedIn: 'root',
})
export class LanguageService {
    public languagePreference: string = StorageService.getItem('prefered-language') || 'gr';
    languageMenuShow : boolean = true;
    constructor(public translate: TranslateService,public api: CommonService,private router: Router,) {
        translate.addLangs(['en', 'gr']);

        translate.setDefaultLang(StorageService.getItem('prefered-language') || 'gr');

        translate.use(StorageService.getItem('prefered-language') || 'gr');

        StorageService.setItem(
            'prefered-language',
            StorageService.getItem('prefered-language') || this.languagePreference,
        );
    }

    changeLanguage(language: string) {
        this.languagePreference = language;
        this.translate.use(language);  
        StorageService.setItem('prefered-language', language);
        // this.router.navigate(["/login"]);
    }
}
