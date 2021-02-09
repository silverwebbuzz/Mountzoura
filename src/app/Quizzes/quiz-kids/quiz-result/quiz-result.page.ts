import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { CommonService } from 'src/app/global/common_service';
import { ActivatedRoute, Router } from '@angular/router';
import { IonInfiniteScroll, NavController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-quiz-result',
  templateUrl: './quiz-result.page.html',
  styleUrls: ['./quiz-result.page.scss'],
})
export class QuizResultPage implements OnInit {

  quiz_result_form: FormGroup;
  result: any;
  quize_result: any;
  imageUrl = environment.image_url;
  user_not_found_place_holder = 'assets/images/placeholder-s.png'
  right_ans: any;
  totalq: any;
  @ViewChild(IonInfiniteScroll, { static: true }) infiniteScroll: IonInfiniteScroll;
  limit = 10;
  students_list: any;
  slist: any;
  quize_process: boolean;
  roll_id: any;
  package_status: any;


  constructor(
    private formBuilder: FormBuilder,
    private navCtrl: NavController,
    private api: CommonService,
    private route: ActivatedRoute,
    private router: Router,
    private statusBar: StatusBar) {
    this.quiz_result_fb();
  }

  ngOnInit() {
  }

  loadData(infiniteScroll) {
    setTimeout(() => {
      this.limit += 10;
      infiniteScroll.target.complete();
    }, 500);
  }

  ionViewWillEnter() {
    this.statusBar.show();
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#fdf8f1');
    localStorage.removeItem("len_val")
    this.roll_id = (localStorage.getItem("role_id") === '4')
    this.package_status = localStorage.getItem("package_status")
    let reqData = this.route.snapshot.queryParams;
    this.totalq = this.route.snapshot.queryParams.total_que;
    this.right_ans = this.route.snapshot.queryParams.countdata;
    this.api.realtedquiz(reqData.id).subscribe(resp => {
      this.result = resp;
      this.quize_result = this.result.data
    })

    this.api.connectStudentList().subscribe(resp => {
      this.students_list = resp;
      this.slist = this.students_list.data
    })
  }

  quiz_result_fb() {
    this.quiz_result_form = this.formBuilder.group({
      student: [null, Validators.required],
    });
  }

  submit() {
    let reqData = this.route.snapshot.queryParams;
    for (let v in this.quiz_result_form.controls) {
      this.quiz_result_form.controls[v].markAsTouched();
    }

    if (this.quiz_result_form.valid) {
      this.api.presentLoading();
      this.quize_process = true;
      var body = {
        kid_unique_id: this.quiz_result_form.value.student,
        quiz_id: reqData.id
      };
      this.api.homework(body).subscribe(
        (data: any) => {
          this.quize_process = false;
          this.api.dismissLoading();
          if (data.status == 1) {
            // success part
            this.api.presentToastWithOptions(data['message']);
            let g_id = localStorage.getItem("g_id")
            let l_id = localStorage.getItem("l_id")
            let c_id = localStorage.getItem("c_id")
            this.router.navigate(['/tabs/home-teacher'], { queryParams: { g_id: g_id, l_id: l_id, c_id: c_id } })
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


  quizstart(id, quize) {
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
  
  replay(){
    let reqData = this.route.snapshot.queryParams;
    this.router.navigate(['/tabs/quiz-play'],{queryParams:{id:reqData.id}});
  }

  back() {
    let reqData = this.route.snapshot.queryParams;
    this.navCtrl.navigateBack(['/tabs/quiz-play'], { queryParams: { id: reqData.id } });
  }

  settings() {
    this.router.navigate(['/tabs/settings']);
  }

}
