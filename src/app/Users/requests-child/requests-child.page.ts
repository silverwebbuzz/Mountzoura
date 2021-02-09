import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { CommonService } from 'src/app/global/common_service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-requests-child',
  templateUrl: './requests-child.page.html',
  styleUrls: ['./requests-child.page.scss'],
})
export class RequestsChildPage implements OnInit {

  resp: any;
  resp_list: any=[];
  quize_process: boolean;
  roll: string;
  teachresp: any;
  teachresp_list: any;
  gender: any;
  kidName: any;
  gradeName: any;
  teacherName: any;
  teacherSurname: any;
  status: any;
  id: any;

  constructor(private navCtrl: NavController,  private route: ActivatedRoute,
    private api: CommonService, private router: Router,private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.roll = localStorage.getItem("role_id")
    let reqData = this.route.snapshot.queryParams;
    this.api.presentLoading();
    this.quize_process = true;
    this.api.parentRequestDetail(reqData.id).subscribe(resp => {
      this.quize_process = false;
          this.api.dismissLoading();
      if (resp) {
        this.resp = resp
        this.gender = this.resp.data.gender
        this.kidName = this.resp.data.kidName
        this.gradeName = this.resp.data.gradeName
        this.teacherName = this.resp.data.teacherName
        this.teacherSurname = this.resp.data.teacherSurname
        this.id = this.resp.data.id
        this.status = this.resp.data.status  
      }  
    },
    err => {
      this.quize_process = false;
      this.api.dismissLoading();
      // this.api.presentToastWithOptions("Δημιουργήθηκε κάποιο πρόβλημα στον σέρβερ. Παρακαλώ προσπαθήστε αργότερα.");
    }
    )
  }

  kidConnectionStatus(id, status) {
    var body = {
      status: status
    }
    this.api.presentLoading();
    this.quize_process = true;
    this.api.kidConnectionStatus(id, body).subscribe(
      (data: any) => {
        this.quize_process = false;
        this.api.dismissLoading();
        if (data.status == 1) {
          // success part
          this.api.presentToastWithOptions(data['message']);
          this.router.navigate(["/tabs/requests"]);
        } else {
          this.api.presentToastWithOptions(data['message']);
        }
      },
      err => {
        this.quize_process = false;
        this.api.dismissLoading();
        this.api.presentToastWithOptions("Δημιουργήθηκε κάποιο πρόβλημα στον σέρβερ. Παρακαλώ προσπαθήστε αργότερα.");
      }
    );

  }

  async kiddisConnectionStatus(id, status) {
    const alert = await this.alertCtrl.create({
      header: 'Επιβεβαίωση',
      message: 'Σίγουρα θέλεις να αποσυνδέσεις το παιδί από το δάσκαλο;',
      buttons: [
        {
          text: 'Ακύρωση',
          role: 'cancel',
        }, {
          text: 'ΝΑΙ',
          handler: () => {
            var body = {
              status: status
            }
            this.api.presentLoading();
            this.quize_process = true;
            this.api.kidConnectionStatus(id, body).subscribe(
              (data: any) => {
                this.quize_process = false;
                this.api.dismissLoading();
                if (data.status == 1) {
                  // success part
                  this.api.presentToastWithOptions(data['message']);
                  this.router.navigate(["/tabs/requests"]);
                } else {
                  this.api.presentToastWithOptions(data['message']);
                }
              },
              err => {
                this.quize_process = false;
                this.api.dismissLoading();
                this.api.presentToastWithOptions("Δημιουργήθηκε κάποιο πρόβλημα στον σέρβερ. Παρακαλώ προσπαθήστε αργότερα.");
              }
            );
          }
        }
      ]
    });

    await alert.present();
  }

  back() {
    this.navCtrl.navigateBack('/tabs/requests');
  }

}
