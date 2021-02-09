import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  roll: string;

  constructor(private statusBar: StatusBar) {
   }

  ngOnInit() {
    
  }

  ionViewWillEnter() {
    this.roll = localStorage.getItem("role_id")    
    this.statusBar.show();
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#FFFFFF');
  }

}
