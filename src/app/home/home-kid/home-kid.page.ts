import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { CommonService } from 'src/app/global/common_service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { IonInfiniteScroll, AlertController, NavController } from '@ionic/angular';
import { Stripe } from '@ionic-native/stripe/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';


@Component({
  selector: 'app-home-kid',
  templateUrl: './home-kid.page.html',
  styleUrls: ['./home-kid.page.scss'],
})
export class HomeKidPage {

  home_form: FormGroup;
  lessionlist: any = [];
  llist: any;
  courcelist: any = [];
  clist: any;
  lid: any;
  quize_process: boolean;
  quizelist: any;
  imageUrl = environment.image_url;
  article_url = environment.article_url;
  user_not_found_place_holder = 'assets/images/paper.png'
  quizedata: any;
  article: any;
  video: any;
  @ViewChild(IonInfiniteScroll, { static: true }) infiniteScroll: IonInfiniteScroll;
  limit = 10;
  pdf: any;
  package_status: any;
  kidd_process: boolean;
  amount: any;
  card: { number: any; expMonth: number; expYear: number; cvc: any; };
  strip_token: any;
  connect_student: any;
  g_id: string;
  advertise_url = environment.advertise_url;
  advertise: any;
  add: any;
  add_url: any;
  catcherror: number;
  lass_id: any;
  kidstatus: any;
  role_id: any;

  constructor(
    private statusBar: StatusBar, private stripe: Stripe, private alertCtrl: AlertController,
    private api: CommonService, private navCtrl: NavController,
    private formBuilder: FormBuilder, private iab: InAppBrowser,
    private router: Router) {
    this.stripe.setPublishableKey('pk_live_6GlIkO6FjXPe5zYP3nIxERvd00AM7QaTOy');

    this.home_fb();
  }

  ngOnInit() {
    this.home_form.reset();
  }


  async payment() {
    this.catcherror = 1;
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Πληρωμή',
      inputs: [
        {
          name: 'number',
          type: 'number',
          placeholder: 'Αριθμός κάρτας',
        },
        {
          name: 'month',
          type: 'number',
          placeholder: 'Μήνας',
        },
        {
          name: 'year',
          type: 'number',
          placeholder: 'Έτος',
        },
        {
          name: 'cvc',
          type: 'number',
          placeholder: 'CVC',
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
                  kid_id: localStorage.getItem("kid_id"),
                  grade_id: localStorage.getItem("grade_id"),
                  amount: localStorage.getItem("amount"),
                  stripeToken: token.id,
                  role_id: localStorage.getItem("role_id"),
                  package_id: localStorage.getItem("package_id"),
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

  lessionList() {
    this.api.lessionlist().subscribe(data => {
      this.lessionlist = data;
      this.llist = this.lessionlist.data
    },
    );
  }

  loadData(infiniteScroll) {
    setTimeout(() => {
      this.limit += 10;
      infiniteScroll.target.complete();
    }, 500);
  }

  ionViewWillEnter() {
    localStorage.removeItem("len_val")
    this.lessionList();
    this.home_form.reset();
    this.package_status = localStorage.getItem("package_status")
    this.connect_student = localStorage.getItem("connect_student")
    this.amount = localStorage.getItem("amount")
    this.g_id = localStorage.getItem("grade_id")
    this.role_id = localStorage.getItem("role_id")
    localStorage.removeItem("pdf_quize")
    localStorage.removeItem("pdf_id")
    localStorage.removeItem("video_quize")
    localStorage.removeItem("video_id")
    localStorage.removeItem("lession_id")
    localStorage.removeItem("course_id")
    localStorage.removeItem("k_quize_contant")
    localStorage.removeItem("k_search")
    localStorage.removeItem("k_contain")
    localStorage.removeItem("k_quize_contant")
    localStorage.removeItem("k_quize_search")
    localStorage.removeItem("k_video_contant")
    localStorage.removeItem("k_pdf_contant")
    localStorage.removeItem("notification_data")
    localStorage.removeItem("homework")


    if (this.role_id == '2') {
      this.api.parentPackageStatus().subscribe(resp => {
        this.kidstatus = resp
        // console.log("testttt", resp)
        if (this.kidstatus.status == 1) {
          localStorage.setItem("kid_id", this.kidstatus.data.kid_id)
          localStorage.setItem("grade_id", this.kidstatus.data.grade_id)
          localStorage.setItem("package_status", this.kidstatus.data.package_status)
          localStorage.setItem("amount", this.kidstatus.data.price)
          localStorage.setItem("package_id", this.kidstatus.data.id)
          localStorage.setItem("packagePurchaseId", this.kidstatus.data.packagePurchaseId)
        }
      })
    }

    this.statusBar.show();
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#fdf8f1');

    // this.api.presentLoading();
    // this.quize_process = true;
    this.api.recentContent().subscribe(resp => {
      this.quizelist = resp;
      this.quizedata = this.quizelist.quiz;
      // this.article = this.quizelist.article;
      this.pdf = this.quizelist.pdf;
      this.video = this.quizelist.video
      // this.quize_process = false;
      // this.api.dismissLoading();
    })
    this.api.searchPageAdd().subscribe(resp => {
      this.advertise = resp;
      this.add = this.advertise.data.image
      this.add_url = this.advertise.data.url
    })
  }

  ads() {
    this.iab.create(this.add_url, '_system', 'location=yes');
  }


  home_fb() {
    this.home_form = this.formBuilder.group({
      lesson: [null, Validators.required],
      course: [null, Validators.required],
    });
  }

  onChangePropertyType(e) {
    localStorage.setItem("l_id", e.target.value)
    this.lass_id = e.target.value
    this.api.courselist(e.target.value).subscribe(data => {
      this.courcelist = data;
      this.clist = this.courcelist.data
    },
    );
  }

  submit() {
    for (let v in this.home_form.controls) {
      this.home_form.controls[v].markAsTouched();
    }

    if (this.home_form.valid) {
      this.api.presentLoading();
      this.quize_process = true;
      var body = {
        lession_id: this.home_form.value.lesson,
        course_id: this.home_form.value.course,
        grade_id: localStorage.getItem("grade_id")
      };
      this.api.studentSearchContent(body).subscribe(
        (data: any) => {
          this.quize_process = false;
          this.api.dismissLoading();
          if (data.status == 1) {
            localStorage.setItem("lession_id",body.lession_id)
            localStorage.setItem("course_id",body.course_id)
            localStorage.setItem("k_contain","k_contain")
            
            // success part
            this.api.presentToastWithOptions(data['message']);
            this.router.navigate(["/tabs/quiz-search"], {
              queryParams: {
                l_id: body.lession_id,
                c_id: body.course_id, k_contain: "k_contain"
              }
            });
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

  quiz_single(id, quize) {
    localStorage.setItem("k_quize_contant","k_quize_contant")

    if (localStorage.getItem("kid_id")) {
      if (localStorage.getItem("role_id") === '2') {
        if (quize == 0 && this.package_status == 1) {
          this.router.navigate(['/tabs/quiz-single'], { queryParams: { id: id } });
        }
        else if (quize == 1) {
          this.router.navigate(['/tabs/quiz-single'], { queryParams: { id: id } });
        }
        else {
          this.router.navigate(["/tabs/quiz-premium"]);
        }
      }
    }
    else {
      this.api.presentToastWithOptions('Παρακαλώ επιλέξτε ΠΑΙΔΙ.');

    }

  }

  quiz_video(id, quize) {
    localStorage.setItem("k_video_contant","k_video_contant")
    if (localStorage.getItem("kid_id")) {
      if (localStorage.getItem("role_id") === '2') {
        if (quize == 0 && this.package_status == 1) {
          this.router.navigate(['/tabs/video'], { queryParams: { video_id: id } });
        }
        else if (quize == 1) {
          this.router.navigate(['/tabs/video'], { queryParams: { video_id: id } });
        }
        else {
          this.router.navigate(["/tabs/quiz-premium"]);
        }
      }
    }
    else {
      this.api.presentToastWithOptions('Παρακαλώ επιλέξτε ΠΑΙΔΙ.');

    }
  }

  quiz_pdf(id, quize) {
    localStorage.setItem("k_pdf_contant","k_video_contant")

    if (localStorage.getItem("kid_id")) {
      if (localStorage.getItem("role_id") === '2') {
        if (quize == 0 && this.package_status == 1) {
          this.router.navigate(['/tabs/pdf'], { queryParams: { pdf_id: id } });
        }
        else if (quize == 1) {
          this.router.navigate(['/tabs/pdf'], { queryParams: { pdf_id: id } });
        }
        else {
          this.router.navigate(["/tabs/quiz-premium"]);
        }
      }

    }
    else {
      this.api.presentToastWithOptions('Παρακαλώ επιλέξτε ΠΑΙΔΙ.');

    }
  }
  back() {
    this.navCtrl.navigateBack('/tabs/kid-added');
  }

  settings() {
    this.router.navigate(['/tabs/settings']);
  }

}
