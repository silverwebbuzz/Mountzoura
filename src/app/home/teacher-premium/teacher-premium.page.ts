import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/global/common_service';
import { Stripe } from '@ionic-native/stripe/ngx';
import { AlertController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-teacher-premium',
  templateUrl: './teacher-premium.page.html',
  styleUrls: ['./teacher-premium.page.scss'],
})
export class TeacherPremiumPage implements OnInit {
  countdata: any;
  count: any;
  amount: any;
  package_id: any;
  role_id: any;
  kid_process: boolean;
  card: { number: any; expMonth: number; expYear: number; cvc: any; };
  strip_token: any;
  kidd_process: boolean;
  catcherror: number;

  constructor(
    private statusBar: StatusBar, private api: CommonService, private alertCtrl: AlertController, private stripe: Stripe,
    private router: Router, private navCtrl: NavController, private route: ActivatedRoute) {
    this.stripe.setPublishableKey('pk_live_6GlIkO6FjXPe5zYP3nIxERvd00AM7QaTOy');

  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.statusBar.show();
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#fdf8f1');
    this.amount = localStorage.getItem("amount")
    this.package_id = localStorage.getItem("package_id")
    this.role_id = localStorage.getItem("role_id")


    this.api.countConnectStudent().subscribe(resp => {
      this.countdata = resp;
      this.count = this.countdata.count

      // console.log("countdata", this.count)
    })
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
            if (Number(input.cvc.length) > 4 || Number(input.cvc.length) < 3) {
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
                  amount: this.amount,
                  stripeToken: token.id,
                  role_id: this.role_id,
                  package_id: this.package_id,
                  packagePurchaseId: localStorage.getItem("packagePurchaseId")
                };
                this.api.teacherPackagePurchase(body).subscribe(
                  (data: any) => {
                    this.kidd_process = false;
                    this.api.dismissLoading();
                    if (data.status == 1) {
                      // success part
                      localStorage.setItem("package_status", '1')
                      this.api.presentToastWithOptions(data['message']);
                      this.router.navigate(['/tabs/student-added'])
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

  settings() {
    this.router.navigate(['/tabs/settings']);
  }

  add() {
    this.router.navigate(["/tabs/student-add"]);
  }
  back() {
    let reqData = this.route.snapshot.queryParams;

    if (localStorage.getItem("pdf_quize") && localStorage.getItem("pdf_id")) {
      this.navCtrl.navigateBack(['/tabs/pdf'], { queryParams: { pdf_id: localStorage.getItem("pdf_id") } });
    }
    else if (localStorage.getItem("video_quize") && localStorage.getItem("video_id")) {
      this.navCtrl.navigateBack(['/tabs/video'], { queryParams: { video_id: localStorage.getItem("video_id") } });
    }
    else if (
      localStorage.getItem("t_search") ||
      localStorage.getItem("t_contain") ||
      localStorage.getItem("k_contain") ||
      localStorage.getItem("k_search")) {
      this.navCtrl.navigateBack(['/tabs/quiz-search']);
    }
    else if (reqData.video) {
      this.router.navigate(['/tabs/videos'])
    }
    else if (reqData.pdf) {
      this.router.navigate(['/tabs/pdfs'])
    }

    else if (
      localStorage.getItem("t_quize_contant")) {
      this.navCtrl.navigateBack(['/tabs/home-teacher']);
    }
    else if (
      localStorage.getItem("t_quize_search")) {
      this.navCtrl.navigateBack(['/tabs/teachers-quiz-list']);
    }
    else if(localStorage.getItem("t_pdf_contant")){
      this.navCtrl.navigateBack(['/tabs/home-teacher']);
    }
    
    else if(localStorage.getItem("t_video_contant")){
      this.navCtrl.navigateBack(['/tabs/home-teacher']);
    }

    else if (reqData.l_id,reqData.c_id,reqData.pdf_search) {
      this.router.navigate(['/tabs/pdf-search'],{ queryParams: { l_id: reqData.l_id, c_id: reqData.c_id } })
    }
    else if (reqData.l_id,reqData.c_id,reqData.g_id,reqData.pdf_search ) {
      this.router.navigate(['/tabs/pdf-search'], {
        queryParams:
          { l_id: reqData.l_id, c_id: reqData.c_id, g_id: reqData.g_id }
      } )
    }
    else if (reqData.l_id,reqData.c_id,reqData.video_search ) {
      this.router.navigate(['/tabs/video-search'],{ queryParams: { l_id: reqData.l_id, c_id: reqData.c_id } })
    }
    else if (reqData.l_id,reqData.c_id,reqData.g_id,reqData.video_search ) {
      this.router.navigate(['/tabs/video-search'], {
        queryParams:
          { l_id: reqData.l_id, c_id: reqData.c_id, g_id: reqData.g_id }
      } )
    }
    else if (
      localStorage.getItem("homework")) {
      this.navCtrl.navigateBack(['/tabs/kid-homework']);
    }
    else if (
      localStorage.getItem("notification_data")) {
      this.navCtrl.navigateBack(['/tabs/notifications']);
    }
    
    else {
      this.navCtrl.navigateBack(['/tabs/home-teacher']);
    }
    // this.navCtrl.navigateBack('/tabs/home-teacher');
  }
}
