import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { CommonService } from 'src/app/global/common_service';
import { NavController, ModalController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.page.html',
  styleUrls: ['./terms.page.scss'],
})
export class TermsPage implements OnInit {
  quizelist: any;
  dec: any;
  token: string;

  constructor(
    private statusBar: StatusBar,
    private api: CommonService,
    private navCtrl: NavController, private router: Router,private rout : ActivatedRoute,
    private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.token = localStorage.getItem("token")
    this.statusBar.show();
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#f1d6ad');


    this.api.terms_condition().subscribe(resp => {
      this.quizelist = resp;
      this.dec = this.quizelist.data.description;
      // console.log(this.dec)
    })
  }

  back() {
    // this.navCtrl.navigateBack('/tabs/settings');
    this.navCtrl.pop();
  }

  close(data) {
    let reqData = this.rout.snapshot.queryParams;
    if(data == 1){
      if(reqData.teacher == 'teacher'){
      this.router.navigate(["/register-teacher"]);
      }
      if(reqData.parent == 'parent'){
        this.router.navigate(["/register-child"]);
        }
    }
    if(data == 0){
      this.api.presentToastWithOptions("παρακαλώ αποδεχτείτε τους όρους και τις προϋποθέσεις")
    }
    // this.modalCtrl.dismiss(data);
  }

}