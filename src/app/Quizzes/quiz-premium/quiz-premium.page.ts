import { Component, OnInit, ViewChild } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router, ActivatedRoute } from '@angular/router';
import { Stripe } from '@ionic-native/stripe/ngx';
import { CommonService } from 'src/app/global/common_service';
import { AlertController, IonInfiniteScroll, NavController } from '@ionic/angular';


@Component({
  selector: 'app-quiz-premium',
  templateUrl: './quiz-premium.page.html',
  styleUrls: ['./quiz-premium.page.scss'],
})
export class QuizPremiumPage implements OnInit {

  card: { number: any; expMonth: number; expYear: number; cvc: any; };
  strip_token: any;
  pacdata: any;
  kid: any;
  pac: any;
  kiddata: any;
  amout: any;
  kid_process: boolean;
  kidd_process: boolean;
  amount: any;
  kidlist: any;
  listdata: any;
  @ViewChild(IonInfiniteScroll, { static: true }) infiniteScroll: IonInfiniteScroll;
  limit = 10;
  kidData: any;
  catcherror: number;

  constructor(private statusBar: StatusBar, private stripe: Stripe,
    private api: CommonService, private alertCtrl: AlertController,
    private router: Router, private navCtrl: NavController,private route: ActivatedRoute) {
    this.stripe.setPublishableKey('pk_live_6GlIkO6FjXPe5zYP3nIxERvd00AM7QaTOy');

  }

  ngOnInit() {
  }
  
  loadData(infiniteScroll){
    setTimeout(() => {
      this.limit += 10;
      infiniteScroll.target.complete();
    }, 500);
  }

  getkid_data(kid_id){
    this.api.KidData(kid_id).subscribe(resp => {
      this.kiddata = resp;
      this.kidData = this.kiddata.data;
      localStorage.setItem("kid_id", this.kiddata.data.kid_id)
      localStorage.setItem("grade_id", this.kiddata.data.grade_id)
      localStorage.setItem("package_status", this.kiddata.package_status)
      localStorage.setItem("amount", this.kiddata.package_data.price)
      localStorage.setItem("package_id", this.kiddata.package_data.id)
      localStorage.setItem("packagePurchaseId",this.kiddata.packagePurchaseId)
      this.amount =this.kiddata.package_data.price
    })
  }


  ionViewWillEnter() {
    this.statusBar.show();
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#fdf8f1');
    localStorage.removeItem("len_val")
    // this.kidd_process = true
    // this.api.presentLoading();
    this.api.KidList().subscribe(resp => {
       this.kidlist = resp;
       this.listdata = this.kidlist.data; 
        // this.kidd_process = false
        // this.api.dismissLoading()
      })
      this.getkid_data('') 
     this.amount =localStorage.getItem("amount")
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
                  kid_id:  localStorage.getItem("kid_id"),
                  grade_id: localStorage.getItem("grade_id"),
                  amount:  localStorage.getItem("amount"),
                  stripeToken: token.id,
                  role_id: localStorage.getItem("role_id"),
                  package_id: localStorage.getItem("package_id"),
                  purchase: 0,
                  packagePurchaseId : localStorage.getItem("packagePurchaseId")
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

  back() {
    let reqData = this.route.snapshot.queryParams;
    if(localStorage.getItem("pdf_quize") && localStorage.getItem("pdf_id")){
      this.navCtrl.navigateBack(['/tabs/pdf'],{ queryParams: { pdf_id:localStorage.getItem("pdf_id")} });
    }
    else if(localStorage.getItem("video_quize") && localStorage.getItem("video_id")){
      this.navCtrl.navigateBack(['/tabs/video'],{ queryParams: { video_id:localStorage.getItem("video_id")} });
    }
    else if(
    localStorage.getItem("t_search") || 
    localStorage.getItem("t_contain")||
    localStorage.getItem("k_contain")||
    localStorage.getItem("k_search")){
      this.navCtrl.navigateBack(['/tabs/quiz-search']);
    }
    else if(reqData.video){
      this.router.navigate(['/tabs/videos'])
    }
    else if(reqData.pdf){
      this.router.navigate(['/tabs/pdfs'])
    }
    else if (
      localStorage.getItem("k_quize_contant")) {
      this.navCtrl.navigateBack(['/tabs/home']);
    }
    else if (
      localStorage.getItem("k_quize_search")) {
      this.navCtrl.navigateBack(['/tabs/kids-quiz-list']);
    }
    else if(localStorage.getItem("k_video_contant")){
      this.navCtrl.navigateBack(['/tabs/home']);
    }
    else if(localStorage.getItem("k_pdf_contant")){
      this.navCtrl.navigateBack(['/tabs/home']);
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
      localStorage.getItem("notification_data")) {
      this.navCtrl.navigateBack(['/tabs/notifications']);
    }
    else if (
      localStorage.getItem("homework")) {
      this.navCtrl.navigateBack(['/tabs/kid-homework']);
    }
    else{
    
      this.navCtrl.navigateBack(['/tabs/home']);
   
  }
    // this.navCtrl.navigateBack('/tabs/home');
  }

}
