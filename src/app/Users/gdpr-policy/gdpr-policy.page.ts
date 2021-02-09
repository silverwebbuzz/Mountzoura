import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { CommonService } from 'src/app/global/common_service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-gdpr-policy',
  templateUrl: './gdpr-policy.page.html',
  styleUrls: ['./gdpr-policy.page.scss'],
})
export class GdprPolicyPage implements OnInit {
  termslist: any;
  term: any;

  constructor(
    private statusBar: StatusBar,
    private api: CommonService,
    private navCtrl: NavController,) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.statusBar.show();
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#f1d6ad');

    this.api.gdpr().subscribe(resp => {
      this.termslist = resp;
      this.term = this.termslist.data.description
    })
  }

  back() {
    this.navCtrl.navigateBack('/tabs/settings');
  }

}