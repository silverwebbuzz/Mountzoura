import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/global/common_service';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-student-homework-played',
  templateUrl: './student-homework-played.page.html',
  styleUrls: ['./student-homework-played.page.scss'],
})
export class StudentHomeworkPlayedPage implements OnInit {
  resp: any;
  kidd_process: boolean;
  count: any;
  totalque: any;
  quizedata: any;

  constructor(
    private router: Router,
    private api : CommonService,private navCtrl: NavController,
    private route: ActivatedRoute,private alertCtrl: AlertController,
    private statusBar: StatusBar) { }

  ngOnInit() {
  }

  ionViewWillEnter() { 
    this.statusBar.show();
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#fdf8f1');
  //   this.kidd_process = true
  // this.api.presentLoading();
    let reqData = this.route.snapshot.queryParams;
    var body = {
      quiz_id : reqData.quiz_id,
      kid_unique_id : reqData.kid_id
    }
    this.api.countQuizPlay(body).subscribe(resp => {
      this.resp = resp
      this.quizedata = this.resp.data; 
      // this.kidd_process = false
      // this.api.dismissLoading();
     }) 
  }

  // delete(){
  //   let reqData = this.route.snapshot.queryParams;
  //   this.api.deleteHomework(reqData.id).subscribe(resp => {
  //     this.resp = resp
  //     this.api.presentToastWithOptions( this.resp['message']);
  //     this.router.navigate(['/tabs/student-homework'],{queryParams : {kid_id:reqData.kid_id}});
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
              this.api.presentToastWithOptions( this.resp['message']);
              this.router.navigate(['/tabs/student-homework'],{queryParams : {kid_id:reqData.kid_id}});
             })
          }
        }
      ]
    });

    await alert.present();
  }

  more(count) {
    let reqData = this.route.snapshot.queryParams;
    this.router.navigate(['/tabs/single-quiz'],{queryParams : {quiz_id:reqData.quiz_id,
      kid_id:reqData.kid_id,count:count}});
  }

  back() {
    let reqData = this.route.snapshot.queryParams;
    this.navCtrl.navigateBack(['/tabs/student-homework'],{ queryParams: { kid_id:reqData.kid_id} });
  }

  settings() {
    this.router.navigate(['/tabs/settings']);
  }

}
