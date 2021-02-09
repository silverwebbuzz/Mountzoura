import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-kid-add',
  templateUrl: './kid-add.page.html',
  styleUrls: ['./kid-add.page.scss'],
})
export class KidAddPage implements OnInit {

  constructor(
    private router: Router,
    private statusBar: StatusBar,
    private navCtrl: NavController,
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.statusBar.show();
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#fdf8f1');
  }

  addKids() {
    this.router.navigate(['/tabs/kid-new']);
  }

  settings() {
    this.router.navigate(['/tabs/settings']);
  }

  back() {
    this.navCtrl.navigateBack('/tabs/kid-added');
  }

}
