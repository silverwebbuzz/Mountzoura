import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/global/storage.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LanguageService } from 'src/app/global/language.service';

export interface LanguageList {
  abbreviation: string;
  name: string;
  gap: string;
  image :string;
  
}

@Component({
  selector: 'app-intro1',
  templateUrl: './intro1.page.html',
  styleUrls: ['./intro1.page.scss'],
})
export class Intro1Page implements OnInit {

  name = 'Angular';
  lan = 1;
  languages: { abbreviation: string; name: string; gap: string; image: string; }[];

  constructor(private router: Router,
    private statusBar: StatusBar,
    public translate: TranslateService,
    private lanservice:LanguageService) {
   }

   
  ngOnInit() {
  //   this.languages = [
  //     {
  //         abbreviation: 'en',
  //         name: 'English',
  //         gap: '',
  //         image: 'us-svg.png'
  //     },
  //     {
  //         abbreviation: 'gr',
  //         name: 'Greek',
  //         gap: 'ml-1',
  //         image : 'greec.png'
  //     }
  //     // {
  //     //     abbreviation: 'tr',
  //     //     name: 'Turkish',
  //     //     gap: 'ml-1 mr-1',
  //     // },
  // ];
  // console.log("this.languages",this.languages)
  }

  ionViewWillEnter() {
    this.statusBar.show();
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#FFFFFF');
  }

  next() {
    this.router.navigate(['/intro2']);
  }

}
