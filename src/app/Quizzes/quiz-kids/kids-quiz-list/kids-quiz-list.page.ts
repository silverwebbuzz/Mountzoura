import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/global/common_service';
import { environment } from 'src/environments/environment';
import { IonInfiniteScroll } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import * as _ from 'lodash';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-kids-quiz-list',
  templateUrl: './kids-quiz-list.page.html',
  styleUrls: ['./kids-quiz-list.page.scss'],
})
export class KidsQuizListPage implements OnInit {

  quizzes_form: FormGroup;
  lessionlist: any = [];
  llist: any;
  courcelist: any = [];
  clist: any;
  lid: any;
  quize_process: boolean;
  quizelist: any;
  imageUrl = environment.image_url;
  user_not_found_place_holder = 'assets/images/placeholder-s.png'
  @ViewChild(IonInfiniteScroll, { static: true }) infiniteScroll: IonInfiniteScroll;
  limit = 10;
  resp: any = [];
  advertise_url = environment.advertise_url;
  advertise: any;
  add: any;
  package_status: any;
  g_id: any
  add_url: any;
  lass_id: any;
  kidstatus:any;
  role_id: string;

  constructor(
    private formBuilder: FormBuilder,
    private api: CommonService,
    private router: Router, private iab: InAppBrowser,
    private statusBar: StatusBar) {

    this.quizzes_fb();
  }

  ngOnInit() {
    this.quizzes_form.reset();
  }

  loadData(infiniteScroll) {
    setTimeout(() => {
      this.limit += 10;
      infiniteScroll.target.complete();
    }, 500);
  }

  lessionList() {

    this.api.lessionlist().subscribe(data => {
      this.lessionlist = data;
      this.llist = this.lessionlist.data
    },
    );
  }

  ionViewWillEnter() {
    localStorage.removeItem("pdf_quize")
    localStorage.removeItem("pdf_id")
    localStorage.removeItem("video_quize")
    localStorage.removeItem("video_id")
    localStorage.removeItem("lession_id")
    localStorage.removeItem("course_id")
    localStorage.removeItem("k_quize_search")
    localStorage.removeItem("k_quize_contant")
    localStorage.removeItem("k_video_contant")
    localStorage.removeItem("k_pdf_contant")

    localStorage.removeItem("k_search")
    localStorage.removeItem("k_contain")
    localStorage.removeItem("notification_data")
    localStorage.removeItem("homework")

    this.quizzes_form.reset();
    this.g_id = localStorage.getItem("grade_id")
    localStorage.removeItem("len_val")

    this.lessionList();

    this.statusBar.show();
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#fdf8f1');
    this.role_id = localStorage.getItem("role_id")


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


    this.package_status = localStorage.getItem("package_status")

    this.api.latest_quiz().subscribe(resp => {
      this.resp = resp
      this.quizelist = resp.data;
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

  onChangePropertyType(e) {
    this.lass_id = e.target.value
    this.api.courselist(e.target.value).subscribe(data => {
      this.courcelist = data;
      this.clist = this.courcelist.data
      
    },
    );
  
  }

  quizzes_fb() {
    this.quizzes_form = this.formBuilder.group({
      lesson: [null, Validators.required],
      course: [null, Validators.required],
    });
  }

  submit() {
    for (let v in this.quizzes_form.controls) {
      this.quizzes_form.controls[v].markAsTouched();
    }

    if (this.quizzes_form.valid) {

      this.api.presentLoading();
      this.quize_process = true;
      var body = {
        lession_id: this.quizzes_form.value.lesson,
        course_id: this.quizzes_form.value.course,
        grade_id: localStorage.getItem("grade_id")
      };
      this.api.student_quiz_list(body).subscribe(
        (data: any) => {
          this.quize_process = false;
          this.api.dismissLoading();
          if (data.status == 1) {
            localStorage.setItem("lession_id",body.lession_id)
            localStorage.setItem("course_id",body.course_id)
            localStorage.setItem("k_search","k_search")
            // success part
            // this.api.presentToastWithOptions(data['message']);
            this.router.navigate(["/tabs/quiz-search"], { queryParams: { l_id: body.lession_id, c_id: body.course_id } });
          } else {
            // this.api.presentToastWithOptions(data['message']);
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
  else{
    this.api.presentToastWithOptions('Παρακαλώ επιλέξτε ΠΑΙΔΙ.');
    
  }

  }

  start() {
    this.router.navigate(['/tabs/quiz-single']);
  }

  settings() {
    this.router.navigate(['/tabs/settings']);
  }

}
