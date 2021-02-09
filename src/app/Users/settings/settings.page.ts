import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform, AlertController, NavController } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { CommonService } from 'src/app/global/common_service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  message = 'Check out the Mountzoura Website!';
  url = 'http://mountzoura.gr/';

  constructor(
    private router: Router,
    private platform: Platform,
    private socialSharing: SocialSharing,
    private alertCtrl: AlertController,
    private statusBar: StatusBar, private api: CommonService,
    private navCtrl: NavController,
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.statusBar.show();
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#fdf8f1');
  }

  back() {
    this.navCtrl.navigateBack('/tabs/videos');
  }

  profile() {
    this.router.navigate(['/tabs/profile']);
  }

  requests() {
    this.router.navigate(['/tabs/requests']);
  }

  notify() {
    this.router.navigate(['/tabs/notifications']);
  }

  policy() {
    this.router.navigate(['/privacy-policy']);
  }

  gdpr() {
    this.router.navigate(['/gdpr-policy']);
  }

  terms() {
    this.router.navigate(['/terms']);
  }

  async share() {
    {
      this.platform.ready()
        .then(() => {
          this.socialSharing.share(this.message, null, null, this.url)
            .then((data) => {
              // console.log('Shared via SharePicker', data);
            })
            .catch((err) => {
              // console.log('Was not shared via SharePicker');
            });
        });
    }
  }

  async logout() {
    const alert = await this.alertCtrl.create({
      header: 'Επιβεβαίωση',
      message: 'Σίγουρα θέλεις να αποσυνδεθείς;',
      buttons: [
        {
          text: 'Ακύρωση',
          role: 'cancel',
        }, {
          text: 'Αποσύνδεση',
          handler: () => {
            localStorage.removeItem("prefered-language");
            localStorage.removeItem("pacdata");
            localStorage.removeItem("addkid");
            localStorage.removeItem("kid_id");
            localStorage.removeItem("grade_id");
            localStorage.removeItem("package_status");
            localStorage.removeItem("amount");
            localStorage.removeItem("package_id");
            localStorage.removeItem("question");
            localStorage.removeItem("que_image");
            localStorage.removeItem("len_val");
            localStorage.removeItem("g_id");
            localStorage.removeItem("l_id");
            localStorage.removeItem("c_id");
            localStorage.removeItem("connect_student");
            localStorage.removeItem("token");
            localStorage.removeItem("role_id");
            localStorage.removeItem("area_id");
            localStorage.removeItem("teacher_id");
            localStorage.removeItem("packagePurchaseId");
            localStorage.removeItem("pdf_quize")
            localStorage.removeItem("pdf_id")
            localStorage.removeItem("video_quize")
            localStorage.removeItem("video_id")
            localStorage.removeItem("lession_id")
            localStorage.removeItem("course_id")
            localStorage.removeItem("t_search")
            localStorage.removeItem("t_contain")
            localStorage.removeItem("k_search")
            localStorage.removeItem("k_contain")
            localStorage.removeItem("t_quize_contant")
            localStorage.removeItem("t_quize_search")
            localStorage.removeItem("t_video_contant")
            localStorage.removeItem("t_pdf_contant")
            localStorage.removeItem("t_quize_contant")
            localStorage.removeItem("t_quize_search")
            localStorage.removeItem("t_video_contant")
            localStorage.removeItem("t_pdf_contant")
            localStorage.removeItem("notification_data")
            localStorage.removeItem("homework")
            this.api.presentToastWithOptions('Επιτυχής Αποσύνδεση.');
            this.router.navigate(['/login']);
          }
        }
      ]
    });

    await alert.present();
  }

}
