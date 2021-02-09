import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { CommonService } from 'src/app/global/common_service';
import { Router } from '@angular/router';
import { IonInfiniteScroll, AlertController, NavController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { Stripe } from '@ionic-native/stripe/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-home-teacher',
  templateUrl: './home-teacher.page.html',
  styleUrls: ['./home-teacher.page.scss'],
})
export class HomeTeacherPage {

  @ViewChild(IonInfiniteScroll, { static: true }) infiniteScroll: IonInfiniteScroll;

  home_form: FormGroup;
  lessionlist: any = [];
  llist: any;
  courcelist: any = [];
  clist: any;
  lid: any;
  limit = 10;
  gradlist: any;
  glist: any;
  quize_process: boolean;
  quizelist: any;
  quizedata: any;
  article: any;
  video: any;
  imageUrl = environment.image_url;
  article_url = environment.article_url;
  user_not_found_place_holder = 'assets/images/paper.png'
  countdata: any;
  pdf: any;
  count: any;
  pid: any;
  plist: any;
  prilist: any;
  amount: any;
  package_id: any;
  role_id: any;
  kid_process: boolean;
  card: { number: any; expMonth: number; expYear: number; cvc: any; };
  strip_token: any;
  kidd_process: boolean;
  package_status: any;
  connect_student: any;
  advertise_url = environment.advertise_url;
  advertise: any;
  add: any;
  add_url: any;
  catcherror: number;
  lass_id: any;
  course_id: any;
  connect: any;


  constructor(private statusBar: StatusBar, private alertCtrl: AlertController, private stripe: Stripe,
    private api: CommonService, private iab: InAppBrowser,
    private router: Router, private navCtrl: NavController,
    private formBuilder: FormBuilder) {
    this.stripe.setPublishableKey('pk_live_6GlIkO6FjXPe5zYP3nIxERvd00AM7QaTOy');

    this.home_fb();
  }

  ionViewWillEnter() {
    this.home_form.reset();
    this.statusBar.show();
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#fdf8f1');
    localStorage.removeItem("len_val")
    this.package_status = localStorage.getItem("package_status")
    this.connect_student = localStorage.getItem("connect_student")

    this.amount = localStorage.getItem("amount")
    this.package_id = localStorage.getItem("package_id")
    this.role_id = localStorage.getItem("role_id")

    localStorage.removeItem("pdf_quize")
    localStorage.removeItem("pdf_id")
    localStorage.removeItem("video_quize")
    localStorage.removeItem("video_id")
    localStorage.removeItem("lession_id")
    localStorage.removeItem("course_id")
    localStorage.removeItem("t_search")
    localStorage.removeItem("t_contain")
    localStorage.removeItem("t_quize_contant")
    localStorage.removeItem("t_quize_search")
    localStorage.removeItem("t_video_contant")
    localStorage.removeItem("t_pdf_contant")
    localStorage.removeItem("notification_data")



    this.api.recentContent().subscribe(resp => {
      this.quizelist = resp;
      this.quizedata = this.quizelist.quiz;
      // this.article = this.quizelist.article;
      this.pdf = this.quizelist.pdf;
      this.video = this.quizelist.video
    })

    if (this.role_id == '4') {
      this.api.teacherPackageStatus().subscribe(resp => {
        this.connect = resp
        // console.log("testttt", resp)
        localStorage.setItem("connect_student", this.connect.data.connect_student)
        localStorage.setItem("package_status", this.connect.data.package_status)
        localStorage.setItem("packagePurchaseId", this.connect.data.packagePurchaseId)
      })
    }

    this.api.countConnectStudent().subscribe(resp => {
      this.countdata = resp;
      this.count = this.countdata.count
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

  ngOnInit() {
    this.gradList();
    this.home_form.reset();
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




  loadData(infiniteScroll) {
    setTimeout(() => {
      this.limit += 10;
      infiniteScroll.target.complete();
    }, 500);
  }

  lessionList(e) {
    this.course_id = e.target.value
    this.api.teacher_lessionlist(e.target.value).subscribe(data => {
      this.lessionlist = data;
      this.llist = this.lessionlist.data
    },
    );

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

  gradList() {
    this.api.gradeList().subscribe(data => {
      this.gradlist = data;
      this.glist = this.gradlist.data
    },
    );
  }

  home_fb() {
    this.home_form = this.formBuilder.group({
      grade: [null, Validators.required],
      lesson: [null, Validators.required],
      course: [null, Validators.required],
    });
  }

  submit() {
    for (let v in this.home_form.controls) {
      this.home_form.controls[v].markAsTouched();
    }
    if (this.home_form.valid) {
      this.api.presentLoading();
      this.quize_process = true;
      var body = {
        grade_id: this.home_form.value.grade,
        lession_id: this.home_form.value.lesson,
        course_id: this.home_form.value.course,
      };
      this.api.teacherSearchContent(body).subscribe(
        (data: any) => {
          this.quize_process = false;
          this.api.dismissLoading();
          if (data.status == 1) {
            // success part
            localStorage.setItem("grade_id", body.grade_id)
            localStorage.setItem("lession_id", body.lession_id)
            localStorage.setItem("course_id", body.course_id)
            localStorage.setItem("t_contain","t_contain")
            this.api.presentToastWithOptions(data['message']);
            this.router.navigate(["/tabs/quiz-search"], {
              queryParams: {
                g_id: body.grade_id,
                l_id: body.lession_id, c_id: body.course_id, t_contain: "t_contain"
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

  premium() {
    this.router.navigate(["/tabs/teacher-premium"]);
  }

  addd() {
    this.router.navigate(["/tabs/student-add"]);
  }
  quiz_single(id, quize) {
    localStorage.setItem("t_quize_contant","t_quize_contant")
    if (quize == 1) {
      this.router.navigate(['/tabs/quiz-single'], { queryParams: { id: id } });
    } else {
      if (this.package_status == 1) {
        this.router.navigate(['/tabs/quiz-single'], { queryParams: { id: id } });
      } else {
        if (this.connect_student >= 6) {
          this.router.navigate(['/tabs/quiz-single'], { queryParams: { id: id } });
        } else {
          this.router.navigate(["/tabs/teacher-premium"]);
        }
      }
    }
  }

  quiz_video(id, quize) {
    localStorage.setItem("t_video_contant","t_video_contant")
    if (localStorage.getItem("role_id") === '4') {
      if (quize == 1) {
        this.router.navigate(['/tabs/video'], { queryParams: { video_id: id } });
      } else {
        if (this.package_status == 1) {
          this.router.navigate(['/tabs/video'], { queryParams: { video_id: id } });
        } else {
          if (this.connect_student >= 6) {
            this.router.navigate(['/tabs/video'], { queryParams: { video_id: id } });
          } else {
            this.router.navigate(["/tabs/teacher-premium"]);
          }
        }
      }
    }
  }

  quiz_pdf(id, quize) {
    localStorage.setItem("t_pdf_contant","t_video_contant")
    if (localStorage.getItem("role_id") === '4') {
      if (quize == 1) {
        this.router.navigate(['/tabs/pdf'], { queryParams: { pdf_id: id } });
      } else {
        if (this.package_status == 1) {
          this.router.navigate(['/tabs/pdf'], { queryParams: { pdf_id: id } });
        } else {
          if (this.connect_student >= 6) {
            this.router.navigate(['/tabs/pdf'], { queryParams: { pdf_id: id } });
          } else {
            this.router.navigate(["/tabs/teacher-premium"]);
          }
        }
      }
    }
  }

  settings() {
    this.router.navigate(['/tabs/settings']);
  }

  back() {
    this.navCtrl.navigateBack('/tabs/student-added');
  }

}
