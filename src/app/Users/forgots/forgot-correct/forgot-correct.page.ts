import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-forgot-correct',
  templateUrl: './forgot-correct.page.html',
  styleUrls: ['./forgot-correct.page.scss'],
})
export class ForgotCorrectPage implements OnInit {

  constructor(private navCtrl: NavController,
    private statusBar: StatusBar,) { }

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
