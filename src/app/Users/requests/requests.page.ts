import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CommonService } from 'src/app/global/common_service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.page.html',
  styleUrls: ['./requests.page.scss'],
})
export class RequestsPage implements OnInit {
  resp: any;
  resp_list: any;
  quize_process: boolean;
  roll: string;
  teachresp: any;
  teachresp_list: any;

  constructor(private navCtrl: NavController, private api: CommonService, private router: Router) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.roll = localStorage.getItem("role_id")
    // this.api.presentLoading();
    // this.quize_process = true;
    this.api.parentRequestList().subscribe(resp => {
      // this.quize_process = false;
      // this.api.dismissLoading();
      if (resp) {
        this.resp = resp
        this.resp_list = this.resp.data
      }
    },
      // err => {
      //   this.quize_process = false;
      //   this.api.dismissLoading();
      //   // this.api.presentToastWithOptions("Δημιουργήθηκε κάποιο πρόβλημα στον σέρβερ. Παρακαλώ προσπαθήστε αργότερα.");
      // }
    )

    this.api.teacherRequestList().subscribe(resp => {
      // this.quize_process = false;
      // this.api.dismissLoading();
      if (resp) {
        this.teachresp = resp
        this.teachresp_list = this.teachresp.data
      }
    },
      // err => {
      //   this.quize_process = false;
      //   this.api.dismissLoading();
      //   // this.api.presentToastWithOptions("Δημιουργήθηκε κάποιο πρόβλημα στον σέρβερ. Παρακαλώ προσπαθήστε αργότερα.");
      // }
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
          this.router.navigate(["/tabs/settings"]);
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

  back() {
    this.navCtrl.navigateBack('/tabs/settings');
  }

  child(id) {
    this.router.navigate(['/tabs/requests-child'], { queryParams: { id: id } });
  }

}
