import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/global/common_service';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-student-homework-not',
  templateUrl: './student-homework-not.page.html',
  styleUrls: ['./student-homework-not.page.scss'],
})
export class StudentHomeworkNotPage implements OnInit {
  resp: Object;
  kidd_process: boolean;

  constructor(
    private router: Router, private navCtrl: NavController, private alertCtrl: AlertController,
    private api: CommonService,
    private route: ActivatedRoute,
    private statusBar: StatusBar) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.statusBar.show();
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#fdf8f1');
  }

  // delete(){
  //   let reqData = this.route.snapshot.queryParams;
  //   this.api.deleteHomework(reqData.id).subscribe(resp => {
  //     this.resp = resp
  //     this.api.presentToastWithOptions( this.resp['message']);
  //     this.router.navigate(['/tabs/student-homework'],{queryParams : {kid_id:reqData.kid_id}});
  //      this.kidd_process = false
  //    })
  // }

  async delete() {
    const alert = await this.alertCtrl.create({
      header: 'Επιβεβαίωση',
      message: 'Σίγουρα θέλεις να διαγράψεις το καθήκον;;',
      buttons: [
        {
          text: 'Ακύρωση',
          role: 'cancel',
        }, {
          text: 'ΝΑΙ',
          handler: () => {
            let reqData = this.route.snapshot.queryParams;
            this.api.deleteHomework(reqData.id).subscribe(resp => {
              this.resp = resp
              this.api.presentToastWithOptions(this.resp['message']);
              this.router.navigate(['/tabs/student-homework'], { queryParams: { kid_id: reqData.kid_id } });
            })
          }
        }
      ]
    });

    await alert.present();
  }

  settings() {
    this.router.navigate(['/tabs/settings']);
  }

  back() {
    let reqData = this.route.snapshot.queryParams;
    this.navCtrl.navigateBack(['/tabs/student-homework'], { queryParams: { kid_id: reqData.kid_id } });
  }


}
