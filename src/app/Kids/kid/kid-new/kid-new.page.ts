import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/global/common_service';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AlertController } from '@ionic/angular';
import { Stripe } from '@ionic-native/stripe/ngx';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-kid-new',
  templateUrl: './kid-new.page.html',
  styleUrls: ['./kid-new.page.scss'],
})
export class KidNewPage implements OnInit {

  new_kid_form: FormGroup;
  @ViewChild('new_kid_form') formValues; // Added this
  gradlist: any;
  glist: any;
  kid_process: boolean;
  gender_value: any;
  pid: any;
  plist: any;
  prilist: any;
  card: any;
  carddetails: any;
  strip_token: any;
  pricedata: any;
  kiddata: any;
  pacdata: string;
  stoken: any;
  kidd_process: boolean;
  advertise_url = environment.advertise_url;
  advertise: any;
  add: any;
  number = 16
  catcherror: number;
  gen: number=0;

  constructor(
    private formBuilder: FormBuilder, private stripe: Stripe,
    private api: CommonService,
    private route: ActivatedRoute,
    private router: Router,
    private statusBar: StatusBar,
    private alertCtrl: AlertController) {
      

    this.stripe.setPublishableKey('pk_live_6GlIkO6FjXPe5zYP3nIxERvd00AM7QaTOy');

    this.new_kid_fb();
  }

  ngOnInit() {
    this.gradList()
    this.new_kid_form.reset();
  }

  ionViewWillEnter() {
    this.gender_value = 'boy'
    this.new_kid_form.reset();
    this.statusBar.show();
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#fdf8f1');

    this.api.addParentAdvertisement().subscribe(resp => {
      this.advertise = resp;
      this.add = this.advertise.data.image
    })
  }

  gender(e) {
    this.gender_value = e
    this.gen = 1
    // console.log("dataa", this.gender_value)
  }

  gradList() {
    this.api.gradeList().subscribe(data => {
      this.gradlist = data;
      this.glist = this.gradlist.data
    },
    );
  }

  new_kid_fb() {
    this.new_kid_form = this.formBuilder.group({
      name: [null, Validators.required],
      grade: [null, Validators.required],
    });
  }

  async payment(data) {
    this.catcherror = 1;
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
            if (Number(input.cvc.length) > 4 || Number(input.cvc.length) < 3 ) {
              this.api.showErrorToast('Εισαγάγετε 3-4 ψηφία CVC Number!');
              return false;
            }
              this.card = {
              number: input.number,
              expMonth: Number(input.month),
              expYear: Number(input.year),
              cvc: input.cvc
            }
            
           
            // console.log('Confirm Ok', this.card);
            this.api.presentLoading();
            this.kidd_process = true;
            this.stripe.createCardToken(this.card)            
              .then(token => {
                // console.log('stoken', token.id);
                var body = {
                  name: data.name,
                  grade_id: data.grade_id,
                  gender: data.gender,
                  package_id: data.package_id,
                  amount: data.amount,
                  purchase: data.purchase,
                  role_id: data.role_id,
                  stripeToken: token.id,
                };
                this.api.Addkid(body).subscribe(
                  (data: any) => {
                    this.kidd_process = false;
                    this.api.dismissLoading();
                    if (data.status == 1) {
                      // success part
                      this.api.presentToastWithOptions(data['message']);
                      this.router.navigate(["/tabs/kid-premium"]);
                    } else {
                      this.api.presentToastWithOptions(data['message']);
                    }
                  },
                );
              })
              .catch(error => {
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
  showError(arg0: string) {
    throw new Error("Method not implemented.");
  }

  gradeprize(e) {
    this.pid = e.detail.value
    this.api.gradePrize(this.pid).subscribe(data => {
      this.plist = data;
      this.prilist = this.plist.data.price
      this.pricedata = this.plist.data
    },
    );
  }

  submit() {
    for (let v in this.new_kid_form.controls) {
      this.new_kid_form.controls[v].markAsTouched();
    }

    if (this.new_kid_form.valid) {
      var body = {
        name: this.new_kid_form.value.name,
        grade_id: this.new_kid_form.value.grade,
        gender: this.gender_value ? this.gender_value : 'boy',
        package_id: this.pricedata.id,
        amount: this.pricedata.price,
        purchase: 1,
        role_id: localStorage.getItem("role_id")
      };
      this.payment(body)
     
    }
  }



  premium() {
    this.router.navigate(['/tabs/kid-premium']);
  }

  free() {
    for (let v in this.new_kid_form.controls) {
      this.new_kid_form.controls[v].markAsTouched();
    }

    if (this.new_kid_form.valid) {
      this.api.presentLoading();
      this.kid_process = true;
      var body = {
        name: this.new_kid_form.value.name,
        grade_id: this.new_kid_form.value.grade,
        gender: this.gender_value ? this.gender_value : 'boy',
        package_id: this.pricedata.id,
        amount: this.pricedata.price,
        purchase: 0,
        role_id: localStorage.getItem("role_id"),
        packagePurchaseId: 0

      };
      this.api.Addkid(body).subscribe(
        (data: any) => {
          this.kiddata = JSON.stringify(data.data)
          this.pacdata = JSON.stringify(data.packageData)
          localStorage.setItem("pacdata", this.pacdata)
          localStorage.setItem("addkid", this.kiddata)
          this.kid_process = false;
          this.api.dismissLoading();
          if (data.status == 1) {
            // success part
            this.api.presentToastWithOptions(data['message']);
            this.router.navigate(["/tabs/kid-free"]);
          } else {
            this.api.presentToastWithOptions(data['message']);
          }
        },
        err => {
          this.kid_process = false;
          this.api.dismissLoading();
          this.api.presentToastWithOptions("Σφάλμα εσωτερικού διακομιστή Δοκιμάστε ξανά μετά από λίγο.");
        }
      );
    }
  }

  settings() {
    this.router.navigate(['/tabs/settings']);
  }

  back() {
    this.router.navigate(['/tabs/kid-add']);
  }

}