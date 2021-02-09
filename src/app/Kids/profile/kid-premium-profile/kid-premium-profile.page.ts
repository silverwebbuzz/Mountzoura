import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/global/common_service';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-kid-premium-profile',
  templateUrl: './kid-premium-profile.page.html',
  styleUrls: ['./kid-premium-profile.page.scss'],
})
export class KidPremiumProfilePage implements OnInit {

  profile_form: FormGroup;
  kiddata: any;
  kidData: any;
  gender: any;
  kid_process: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,private navCtrl: NavController,
    private route: ActivatedRoute,
    private api: CommonService,private alertCtrl: AlertController,
    private statusBar: StatusBar) {

    this.profile_fb();
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.statusBar.show();
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#fdf8f1');

    let reqData = this.route.snapshot.queryParams;
    this.api.KidData(reqData.kid_id).subscribe(resp => {

      this.kiddata = resp;
      this.kidData = this.kiddata.data;
      this.gender = this.kiddata.data.gender;
      localStorage.setItem("kid_id", this.kiddata.data.kid_id)
      localStorage.setItem("grade_id", this.kiddata.data.grade_id)
      localStorage.setItem("package_status", this.kiddata.package_status)
      localStorage.setItem("amount", this.kiddata.package_data.price)
      localStorage.setItem("package_id", this.kiddata.package_data.id)
      localStorage.setItem("packagePurchaseId",this.kiddata.packagePurchaseId)
      this.profile_form.patchValue({
        name: this.kidData.name,
        grade: this.kidData.gradeName,
        id: this.kidData.kid_id

      });
    })
  }

  profile_fb() {
    this.profile_form = this.formBuilder.group({
      name: [{ value: '', disabled: true }],
      grade: [{ value: '', disabled: true }],
      id: [{ value: '', disabled: true }],
    });
  }

  // subscription(){
  //   this.api.presentLoading();
  //     this.kid_process = true;
  //     let reqData = this.route.snapshot.queryParams;
  //     this.api.cancelSubscription(reqData.kid_id).subscribe(
  //       (data: any) => {
  //         this.kid_process = false;
  //         this.api.dismissLoading();
  //         if (data.status == 1) {
  //           // success part
  //           this.api.presentToastWithOptions(data['message']);
  //           this.navCtrl.navigateBack(['/tabs/kid-added']);
  //         } else {
  //           this.api.presentToastWithOptions(data['message']);
  //         }
  //       },
  //       err => {
  //         this.kid_process = false;
  //         this.api.dismissLoading();
  //         this.api.presentToastWithOptions("Δημιουργήθηκε κάποιο πρόβλημα στον σέρβερ. Παρακαλώ προσπαθήστε αργότερα.");
  //       }
  //     );
  // }

  async subscription() {
    const alert = await this.alertCtrl.create({
      header: 'Επιβεβαίωση',
      message: 'Είστε βέβαιοι ότι θέλετε να ακυρώσετε την συνδρομή;',
      buttons: [
        {
          text: 'Ακύρωση',
          role: 'cancel',
        }, {
          text: 'ΝΑΙ',
          handler: () => {
            let reqData = this.route.snapshot.queryParams;
            this.api.cancelSubscription(reqData.kid_id).subscribe(
              (data: any) => {
                this.kid_process = false;
                this.api.dismissLoading();
                if (data.status == 1) {
                  // success part
                  localStorage.setItem("package_status",'0')
                  this.api.presentToastWithOptions(data['message']);
                  this.navCtrl.navigateBack(['/tabs/kid-added']);
                } else {
                  this.api.presentToastWithOptions(data['message']);
                }
              },
              err => {
                this.kid_process = false;
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

  submit() {
    for (let v in this.profile_form.controls) {
      this.profile_form.controls[v].markAsTouched();
    }

    if (this.profile_form.valid) {

      var body = {
        name: this.profile_form.value.name,
        grade: this.profile_form.value.grade,
        id: this.profile_form.value.id,
      }
    }
  }
  home_kid() {
    this.router.navigate(["/tabs/home"]);
  }

  back() {
    this.navCtrl.navigateBack(['/tabs/kid-added']);
  }

  settings() {
    this.router.navigate(['/tabs/settings']);
  }

  homework() {
    this.router.navigate(['/tabs/kid-homework']);
  }

} 