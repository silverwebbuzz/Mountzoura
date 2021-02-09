import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/global/common_service';
import { Platform, IonSlides, IonInfiniteScroll } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import * as _ from 'lodash';
import { environment } from 'src/environments/environment';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-kid-list',
  templateUrl: './kid-list.page.html',
  styleUrls: ['./kid-list.page.scss'],
})
export class KidListPage implements OnInit {

  video_list_form: FormGroup;
  teacher_list_form: FormGroup;

  result: any;
  video_result: any;

  video_process: boolean;
  lessionlist: any = [];
  llist: any;
  courcelist: any = [];
  clist: any;
  lid: any;
  quizelist: any;
  @ViewChild(IonInfiniteScroll, { static: true }) infiniteScroll: IonInfiniteScroll;
  limit = 10;
  advertise_url = environment.advertise_url;
  advertise: any;
  add: any;
  package_status: any;
  connect_student: any;
  role_id: any;
  gradlist: any;
  glist: any;
  tcourcelist: any;
  tclist: any;
  t_lessionlist: any;
  t_llist: any;
  g_id: string;
  add_url: any;
  lass_id: any;
  course_id: any;
  ts_id: any;
  connect: any;
  kidstatus: any;

  constructor(
    private formBuilder: FormBuilder,
    private platform: Platform,
    private router: Router, private iab: InAppBrowser,
    private api: CommonService,
    private route: ActivatedRoute,
    private statusBar: StatusBar) {

    this.video_list_fb();
    this.teacher_list_fb();
  }

  ngOnInit() {
    this.video_list_form.reset();
    this.teacher_list_form.reset();

  }

  searchBar(value) {
    let searchList = this.video_result;
    if (value) {
      searchList = _.filter(searchList, function (x) {

        if (x.title.toLowerCase().includes(value.toLowerCase())) {
          return x.title.toLowerCase().includes(value.toLowerCase())
        }
      })

    } else {
      searchList = this.result.data;
    }
    this.video_result = searchList;
  }

  loadData(infiniteScroll) {
    setTimeout(() => {
      this.limit += 10;
      infiniteScroll.target.complete();
    }, 500);
  }

  teacherlessionList(e) {
    this.course_id = e.target.value
    this.api.teacher_lessionlist(e.target.value).subscribe(data => {
      this.t_lessionlist = data;
      this.t_llist = this.t_lessionlist.data
    },
    );

  }
  onChangecourseType(e) {
    localStorage.setItem("l_id", e.target.value)
    this.ts_id = e.target.value
    this.api.courselist(e.target.value).subscribe(data => {
      this.tcourcelist = data;
      this.tclist = this.tcourcelist.data
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

  teacher_list_fb() {
    this.teacher_list_form = this.formBuilder.group({
      grade: [null, Validators.required],
      lesson: [null, Validators.required],
      course: [null, Validators.required],
    });
  }


  lessionList() {
    this.api.lessionlist().subscribe(data => {
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

  ionViewWillEnter() {
    this.video_list_form.reset();
    this.teacher_list_form.reset();
    this.lessionList();
    this.gradList();
    localStorage.removeItem("len_val")
    this.role_id = localStorage.getItem("role_id")
    localStorage.removeItem("pdf_quize")
    localStorage.removeItem("pdf_id")
    localStorage.removeItem("video_quize")
    localStorage.removeItem("video_id")
    localStorage.removeItem("lession_id")
    localStorage.removeItem("course_id")
    localStorage.removeItem("t_search")
    localStorage.removeItem("t_contain")
    localStorage.removeItem("k_search")
    localStorage.removeItem("k_contain")
    localStorage.removeItem("t_quize_contant")
    localStorage.removeItem("t_quize_search")
    localStorage.removeItem("t_video_contant")
    localStorage.removeItem("t_pdf_contant")

    localStorage.removeItem("t_quize_contant")
    localStorage.removeItem("t_quize_search")
    localStorage.removeItem("t_video_contant")
    localStorage.removeItem("t_pdf_contant")
    localStorage.removeItem("notification_data")
    localStorage.removeItem("homework")

    this.statusBar.show();
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#fdf8f1');

    if (this.role_id == '2') {
      this.api.parentPackageStatus().subscribe(resp => {
        this.kidstatus = resp
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

    this.g_id = localStorage.getItem("grade_id")
    this.package_status = localStorage.getItem("package_status")
    this.connect_student = localStorage.getItem("connect_student")

    if (this.role_id == '4') {
      this.api.teacherPackageStatus().subscribe(resp => {
        this.connect = resp
        localStorage.setItem("connect_student", this.connect.data.connect_student)
        localStorage.setItem("package_status", this.connect.data.package_status)
        localStorage.setItem("packagePurchaseId", this.connect.data.packagePurchaseId)
      })
    }


    // this.api.presentLoading();
    this.api.Videolist().subscribe(resp => {
      this.result = resp;
      this.video_result = this.result.data
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

  video_list_fb() {
    this.video_list_form = this.formBuilder.group({
      lesson: [null, Validators.required],
      course: [null, Validators.required],
    });
  }

  submit() {
    for (let v in this.video_list_form.controls) {
      this.video_list_form.controls[v].markAsTouched();
    }

    if (this.video_list_form.valid) {
      this.api.presentLoading();
      this.video_process = true;
      var body = {
        lession_id: this.video_list_form.value.lesson,
        course_id: this.video_list_form.value.course,
        grade_id: localStorage.getItem("grade_id")
      };
      this.api.studentVideo(body).subscribe(
        (data: any) => {
          this.video_process = false;
          this.api.dismissLoading();
          if (data.status == 1) {
            // success part
            this.api.presentToastWithOptions(data['message']);
            this.router.navigate(["/tabs/video-search"], { queryParams: { l_id: body.lession_id, c_id: body.course_id } });
          } else {
            this.api.presentToastWithOptions(data['message']);
          }
        },
        err => {
          this.video_process = false;
          this.api.dismissLoading();
          this.api.presentToastWithOptions("Δημιουργήθηκε κάποιο πρόβλημα στον σέρβερ. Παρακαλώ προσπαθήστε αργότερα.");
        }
      );
    }
  }

  teacher() {
    for (let v in this.teacher_list_form.controls) {
      this.teacher_list_form.controls[v].markAsTouched();
    }

    if (this.teacher_list_form.valid) {
      this.api.presentLoading();
      this.video_process = true;
      var body = {
        lession_id: this.teacher_list_form.value.lesson,
        course_id: this.teacher_list_form.value.course,
        grade_id: this.teacher_list_form.value.grade,
      };
      this.api.studentVideo(body).subscribe(
        (data: any) => {
          this.video_process = false;
          this.api.dismissLoading();
          if (data.status == 1) {
            // success part
            this.api.presentToastWithOptions(data['message']);
            this.router.navigate(["/tabs/video-search"], {
              queryParams:
                { l_id: body.lession_id, c_id: body.course_id, g_id: body.grade_id }
            });
          } else {
            this.api.presentToastWithOptions(data['message']);
          }
        },
        err => {
          this.video_process = false;
          this.api.dismissLoading();
          this.api.presentToastWithOptions("Δημιουργήθηκε κάποιο πρόβλημα στον σέρβερ. Παρακαλώ προσπαθήστε αργότερα.");
        }
      );
    }
  }

  video(id, quize) {

    if (localStorage.getItem("role_id") === '2') {
      if (localStorage.getItem("kid_id")) {
        if (quize == 0 && this.package_status == 1) {
          this.router.navigate(['/tabs/video'], { queryParams: { video_id: id } });
        }
        else if (quize == 1) {
          this.router.navigate(['/tabs/video'], { queryParams: { video_id: id } });
        }
        else {
          this.router.navigate(["/tabs/quiz-premium"], { queryParams: { video: "video" } });
        }
      }
      else {
        this.api.presentToastWithOptions('Παρακαλώ επιλέξτε ΠΑΙΔΙ.');
  
      }
    }
    

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
            this.router.navigate(["/tabs/teacher-premium"], { queryParams: { video: "video" } });
          }
        }
      }
    }
  }

  settings() {
    this.router.navigate(['/tabs/settings']);
  }

}
