import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { CommonService } from 'src/app/global/common_service';
import { NavController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
environment

@Component({
  selector: 'app-quiz-single',
  templateUrl: './quiz-single.page.html',
  styleUrls: ['./quiz-single.page.scss'],
})
export class QuizSinglePage implements OnInit {

  quiz_start_form: FormGroup;
  quizelist: any;
  imageUrl = environment.image_url;
  user_not_found_place_holder = 'assets/images/placeholder-s.png'
  advertise_url = environment.advertise_url;
  quize_data: any;
  quize_title: any;
  quize_img: any;
  students_list: any;
  slist: any;
  quize_process: boolean;
  roll_id: any;
  advertise: any;
  add: any;
  add_url: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router, private iab: InAppBrowser,
    private api: CommonService,
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private statusBar: StatusBar) {
    this.quiz_start_fb();
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    localStorage.removeItem("question")
    localStorage.removeItem("que_image")
    this.statusBar.show();
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#fdf8f1');
    this.quiz_start_form.reset()
    this.roll_id = localStorage.getItem("role_id")
    localStorage.removeItem("len_val")
    let reqData = this.route.snapshot.queryParams;

    this.api.get_quize_data(reqData.id).subscribe(resp => {
      this.quizelist = resp;
      this.quize_title = this.quizelist.data.title
      this.quize_img = this.quizelist.data.image
    })

    this.api.connectStudentList().subscribe(resp => {
      this.students_list = resp;
      this.slist = this.students_list.data
    })

    this.api.quizStartAdd().subscribe(resp => {
      this.advertise = resp;
      this.add = this.advertise.data.image
      this.add_url = this.advertise.data.url
    })
  }

  ads() {
    this.iab.create(this.add_url, '_system', 'location=yes');
  }

  quiz_start_fb() {
    this.quiz_start_form = this.formBuilder.group({
      student: [null, Validators.required],
    });
  }

  submit() {

    let reqData = this.route.snapshot.queryParams;
    for (let v in this.quiz_start_form.controls) {
      this.quiz_start_form.controls[v].markAsTouched();
    }

    if (this.quiz_start_form.valid) {
      this.api.presentLoading();
      this.quize_process = true;
      var body = {
        kid_unique_id: this.quiz_start_form.value.student,
        quiz_id: reqData.id
      };
      this.api.homework(body).subscribe(
        (data: any) => {
          this.quize_process = false;
          this.api.dismissLoading();
          if (data.status == 1) {
            // success part
            this.api.presentToastWithOptions(data['message']);
            this.router.navigate(['/tabs/home-teacher'])
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

  play() {
    let reqData = this.route.snapshot.queryParams;
    this.router.navigate(['/tabs/quiz-play'], { queryParams: { id: reqData.id } })
  }

  back() {

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
    else if (
      localStorage.getItem("t_quize_contant")) {
      this.navCtrl.navigateBack(['/tabs/home-teacher']);
    }
    else if (
      localStorage.getItem("t_quize_search")) {
      this.navCtrl.navigateBack(['/tabs/teachers-quiz-list']);
    }
    else if (
      localStorage.getItem("k_quize_contant")) {
      this.navCtrl.navigateBack(['/tabs/home']);
    }
    else if (
      localStorage.getItem("notification_data")) {
      this.navCtrl.navigateBack(['/tabs/notifications']);
    }
    else if (
      localStorage.getItem("k_quize_search")) {
      this.navCtrl.navigateBack(['/tabs/kids-quiz-list']);
    }
    else if (
      localStorage.getItem("homework")) {
      this.navCtrl.navigateBack(['/tabs/kid-homework']);
    }



    else {
      if (this.roll_id == 2) {
        this.navCtrl.navigateBack(['/tabs/home']);
      }
      if (this.roll_id == 4) {
        this.navCtrl.navigateBack(['/tabs/home-teacher']);
      }
    }
  }

  settings() {
    this.router.navigate(['/tabs/settings']);
  }

  homework() {
    this.router.navigate(['/tabs/kid-homework']);
  }

}
