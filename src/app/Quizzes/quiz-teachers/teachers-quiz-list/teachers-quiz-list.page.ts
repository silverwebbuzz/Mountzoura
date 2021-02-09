import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonService } from 'src/app/global/common_service';
import { Router } from '@angular/router';
import { IonInfiniteScroll } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import * as _ from 'lodash';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';


@Component({
  selector: 'app-teachers-quiz-list',
  templateUrl: './teachers-quiz-list.page.html',
  styleUrls: ['./teachers-quiz-list.page.scss'],
})
export class TeachersQuizListPage implements OnInit {

  teacher_quizzes_form: FormGroup;
  quize_process: boolean;
  lessionlist: any;
  llist: any;
  @ViewChild(IonInfiniteScroll, { static: true }) infiniteScroll: IonInfiniteScroll;
  limit = 10;
  courcelist: any;
  clist: any;
  gradlist: any;
  glist: any;
  quizelist: any;
  imageUrl = environment.image_url;
  user_not_found_place_holder = 'assets/images/placeholder-s.png'
  package_status: any;
  advertise_url = environment.advertise_url;
  advertise: any;
  add: any;
  connect_student: any;
  resp: any;
  add_url: any;
  lass_id: any;
  course_id: any;
  role_id: any;
  connect: any;

  constructor(
    private formBuilder: FormBuilder,
    private api: CommonService,
    private router: Router, private iab: InAppBrowser,
    private statusBar: StatusBar) {

    this.teacher_quizzes_fb();
  }

  ngOnInit() {
    this.gradList();
  }

  searchBar(value) {
    let searchList = this.quizelist;
    if (value) {
      searchList = _.filter(searchList, function (x) {
        if (x.title.toLowerCase().includes(value.toLowerCase())) {
          return x.title.toLowerCase().includes(value.toLowerCase())
        }

      })

    } else {
      searchList = this.resp.data;
    }
    this.quizelist = searchList;
  }

  ionViewWillEnter() {
    this.teacher_quizzes_form.reset()
    this.statusBar.show();
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#fdf8f1');
    this.connect_student = localStorage.getItem("connect_student")
    this.package_status = localStorage.getItem("package_status")
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
   

    if (this.role_id == '4') {
      this.api.teacherPackageStatus().subscribe(resp => {
        this.connect = resp
       localStorage.setItem("connect_student", this.connect.data.connect_student)
        localStorage.setItem("package_status", this.connect.data.package_status)
        localStorage.setItem("packagePurchaseId", this.connect.data.packagePurchaseId)
      })
    }
    // this.api.presentLoading();
    this.api.latest_quiz().subscribe(resp => {
      this.resp = resp
      this.quizelist = this.resp.data;
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

  lessionList(e) {
    this.course_id=e.target.value
    this.api.teacher_lessionlist(e.target.value).subscribe(data => {
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


  teacher_quizzes_fb() {
    this.teacher_quizzes_form = this.formBuilder.group({
      grade: [null, Validators.required],
      lesson: [null, Validators.required],
      course: [null, Validators.required],
    });
  }

  submit() {
    for (let v in this.teacher_quizzes_form.controls) {
      this.teacher_quizzes_form.controls[v].markAsTouched();
    }

    if (this.teacher_quizzes_form.valid) {

      this.api.presentLoading();
      this.quize_process = true;
      var body = {
        grade_id: this.teacher_quizzes_form.value.grade,
        lession_id: this.teacher_quizzes_form.value.lesson,
        course_id: this.teacher_quizzes_form.value.course,
      };
      this.api.teacherSearchContent(body).subscribe(
        (data: any) => {
          this.quize_process = false;
          this.api.dismissLoading();
          if (data.status == 1) {
            // success part
            this.api.presentToastWithOptions(data['message']);
            localStorage.setItem("g_id", body.grade_id)
            localStorage.setItem("l_id", body.lession_id)
            localStorage.setItem("c_id", body.course_id)
            localStorage.setItem("grade_id", body.grade_id)
            localStorage.setItem("lession_id", body.lession_id)
            localStorage.setItem("course_id", body.course_id)
            localStorage.setItem("t_search","t_search")
            this.router.navigate(["/tabs/quiz-search"], {
              queryParams: {
                g_id: body.grade_id,
                l_id: body.lession_id, c_id: body.course_id,
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
    localStorage.setItem("k_quize_search","k_quize_search")
    if (localStorage.getItem("role_id") === '4') {
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
  }

  settings() {
    this.router.navigate(['/tabs/settings']);
  }

}
