import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/global/common_service';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NavController, AlertController } from '@ionic/angular';
import { Stripe } from '@ionic-native/stripe/ngx';


@Component({
  selector: 'app-kid-free-profile',
  templateUrl: './kid-free-profile.page.html',
  styleUrls: ['./kid-free-profile.page.scss'],
})
export class KidFreeProfilePage implements OnInit {

  profile_form: FormGroup;
  kidData: any;
  gender: any;
  price: any;
  kid_process: boolean;
  card: { number: any; expMonth: number; expYear: number; cvc: any; };
  strip_token: any;
  pacdata: any;
  kid: any;
  pac: any;
  kiddata: any;
  kidd_process: boolean;
  amount: any;
  error: any;
  catcherror: number;



  constructor(
    private formBuilder: FormBuilder, private alertCtrl: AlertController,
    private router: Router, private navCtrl: NavController, private stripe: Stripe,
    private route: ActivatedRoute,
    private api: CommonService,
    private statusBar: StatusBar) {

    this.stripe.setPublishableKey('pk_live_6GlIkO6FjXPe5zYP3nIxERvd00AM7QaTOy');


    this.profile_fb();
  }

  ngOnInit() {
  }

  profile_fb() {
    this.profile_form = this.formBuilder.group({
      name: [{ value: '', disabled: true }],
      grade: [{ value: '', disabled: true }],
      id: [{ value: '', disabled: true }],
    });
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
      localStorage.setItem("packagePurchaseId", this.kiddata.packagePurchaseId)
      this.amount = this.kiddata.package_data.price
      this.profile_form.patchValue({
        name: this.kidData.name,
        grade: this.kidData.gradeName,
        id: this.kidData.kid_id

      });
    })
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

  async payment(data) {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Πληρωμή',
      inputs: [
        {
          name: 'number',
          type: 'number',
          placeholder: 'Αριθμός κάρτας'
        },
        {
          name: 'month',
          type: 'number',
          placeholder: 'Μήνας'
        },
        {
          name: 'year',
          type: 'number',
          placeholder: 'Έτος'
        },
        {
          name: 'cvc',
          type: 'number',
          placeholder: 'CVC'
        },
      ],
      buttons: [
        {
          text: 'Ακύρωση',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            // console.log('Confirm Cancel');
          }
        }, {
          text: 'Πληρωμή',
          handler: (input) => {
            // console.log('Confirm Cancel', input);
            if (Number(input.number.length) > 16 || Number(input.number.length) < 16) {
              this.api.showErrorToast('Εισαγάγετε τον αριθμό κάρτας 16 ψηφίων!');
              return false;
            }
            if (Number(input.month.length) > 2 || Number(input.month.length) < 1) {
              this.api.showErrorToast('Εισαγάγετε 2 ψηφία!');
              return false;
            }
            if (Number(input.year.length) > 4 || Number(input.year.length) < 4) {
              this.api.showErrorToast('Εισαγάγετε 4 ψηφία!');
              return false;
            }
            if (Number(input.cvc.length) > 4 || Number(input.cvc.length) < 3) {
              this.api.showErrorToast('Εισαγάγετε 3-4 ψηφία CVC Number!');
              return false;
            }
            this.card = {
              number: input.number,
              expMonth: Number(input.month),
              expYear: Number(input.year),
              cvc: input.cvc,
            }
            // console.log('Confirm Ok', this.card);
            this.api.presentLoading();
            this.kidd_process = true;
            this.stripe.createCardToken(this.card)
              .then(token => {
                // console.log('stoken', token.id);
                var body = {
                  kid_id: this.kiddata.data.kid_id,
                  grade_id: this.kiddata.data.grade_id,
                  amount: this.kiddata.package_data.price,
                  stripeToken: token.id,
                  role_id: localStorage.getItem("role_id"),
                  package_id: this.kiddata.package_data.id,
                  purchase: 0,
                  packagePurchaseId: localStorage.getItem("packagePurchaseId")
                };
                this.api.gradePurchase(body).subscribe(
                  (data: any) => {
                    this.kidd_process = false;
                    this.api.dismissLoading();
                    if (data.status == 1) {
                      // success part
                      localStorage.setItem("package_status", '1')
                      this.api.presentToastWithOptions(data['message']);
                      this.router.navigate(['/tabs/kid-added'])
                    } else {
                      this.api.presentToastWithOptions(data['message']);
                    }
                  },
                );
              }).catch(error => {
                this.kidd_process = false;
                this.api.dismissLoading();
                this.api.presentToastWithOptions(error);
              });
          }
        }
      ]

    });
    await alert.present();
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