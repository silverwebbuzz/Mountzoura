import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-id-correct',
  templateUrl: './id-correct.page.html',
  styleUrls: ['./id-correct.page.scss'],
})
export class IdCorrectPage implements OnInit {

  constructor(private statusBar: StatusBar,private navCtrl: NavController,
    private router: Router) { }

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
    this.navCtrl.navigateBack(['/tabs/student-added']);
  }

}
