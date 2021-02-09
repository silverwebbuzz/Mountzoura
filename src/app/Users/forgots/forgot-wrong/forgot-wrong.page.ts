import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-forgot-wrong',
  templateUrl: './forgot-wrong.page.html',
  styleUrls: ['./forgot-wrong.page.scss'],
})
export class ForgotWrongPage implements OnInit {

  constructor(private navCtrl: NavController,
    private statusBar: StatusBar) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.statusBar.show();
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#FFFFFF');
  }

  back() {
    this.navCtrl.navigateBack('/login');
  }

}
