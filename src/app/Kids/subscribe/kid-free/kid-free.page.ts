import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { Stripe } from '@ionic-native/stripe/ngx';
import { CommonService } from 'src/app/global/common_service';


@Component({
  selector: 'app-kid-free',
  templateUrl: './kid-free.page.html',
  styleUrls: ['./kid-free.page.scss'],
})
export class KidFreePage implements OnInit {
  price: any;
  card: { number: any; expMonth: number; expYear: number; cvc: any; };
  strip_token: any;
  kiddata: any;
  kid_process: boolean;
  pacdata: any;
  kid: any;
  pac: any;
  amount: any;
  kidd_process: boolean;
  catcherror: number;

  constructor(private statusBar: StatusBar, private route: ActivatedRoute, private alertCtrl: AlertController,
    private router: Router, private stripe: Stripe,private api: CommonService, private navCtrl: NavController) {
    this.stripe.setPublishableKey('pk_live_6GlIkO6FjXPe5zYP3nIxERvd00AM7QaTOy');

  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.statusBar.show();
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#fdf8f1');
    let reqData = this.route.snapshot.queryParams;
    this.price = reqData.price
    this.kiddata = localStorage.getItem("addkid")
    this.pacdata = localStorage.getItem("pacdata")
    this.kid = JSON.parse(this.kiddata)
    this.pac = JSON.parse(this.pacdata)
    this.amount =this.pac.price
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
          // id: 'name2-id',
          // value: 'hello',
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
              this.api.showErrorToast('Πληκτρολογήστε 16ψηφία στο πεδίο της κάρτα.');
              return false;
            }
            if (Number(input.month.length) > 2 || Number(input.month.length) < 1) {
              this.api.showErrorToast('Πληκτρολογήστε 2 ψήφία!');
              return false;
            }
            if (Number(input.year.length) > 4 || Number(input.year.length) < 4) {
              this.api.showErrorToast('Πληκτρολογήστε 4 ψήφία!');
               return false;
            }
            if (Number(input.cvc.length) > 4 || Number(input.cvc.length) < 3 ) {
              this.api.showErrorToast('Πληκτρολογίστε τον 3ψήφιο κωδικό CVC από το πίσω μέρος της κάρτας.');
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
                  kid_id: this.kid.kid_id,
                grade_id: this.kid.grade_id,
                amount: this.pac.price,
                stripeToken: token.id ,
                role_id: localStorage.getItem("role_id"),
                package_id: this.pac.id,
                purchase: 0,
                packagePurchaseId : localStorage.getItem("packagePurchaseId")
                };
                this.api.gradePurchase(body).subscribe(
                  (data: any) => {
                    this.kidd_process = false;
                    this.api.dismissLoading();
                    if (data.status == 1) {
                      // success part
                      localStorage.setItem("package_status",'1')
                      this.api.presentToastWithOptions(data['message']);
                      this.router.navigate(["/tabs/kid-added"]);
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

  addkid() {
      let body = {
      kid_id: this.kid.kid_id,
      grade_id: this.kid.grade_id,
      amount: this.pac.price,
      stripeToken: this.strip_token ,
      role_id: localStorage.getItem("role_id"),
      package_id: this.pac.id,
      purchase: 1
    };
    this.api.gradePurchase(body).subscribe(
        (data: any) => {
         if (data.status == 1) {
            // success part
            this.api.presentToastWithOptions(data['message']);
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

  back() {
    this.navCtrl.navigateBack('/tabs/kid-added');
  }

  settings() {
    this.router.navigate(['/tabs/settings']);
  }

}
