import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { CommonService } from 'src/app/global/common_service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.page.html',
  styleUrls: ['./privacy-policy.page.scss'],
})
export class PrivacyPolicyPage implements OnInit {
  policylist: any;
  tepolicyrm: any;

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

    this.api.privacy_policy().subscribe(resp => {
      this.policylist = resp;
      this.tepolicyrm =  this.policylist.data.description
    })
  }

  back() {
    this.navCtrl.navigateBack('/tabs/settings');
  }

}