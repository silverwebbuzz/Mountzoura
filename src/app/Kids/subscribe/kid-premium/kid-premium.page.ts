import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-kid-premium',
  templateUrl: './kid-premium.page.html',
  styleUrls: ['./kid-premium.page.scss'],
})
export class KidPremiumPage implements OnInit {

  constructor(private statusBar: StatusBar,
    private router: Router,
    private navCtrl: NavController,) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.statusBar.show();
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#fdf8f1');
  }

  settings() {
    this.router.navigate(['/tabs/settings']);
  }

  back() {
    this.navCtrl.navigateBack('/tabs/kid-added');
  }

}
