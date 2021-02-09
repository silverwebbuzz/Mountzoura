import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/global/common_service';
import { IonInfiniteScroll } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import * as _ from 'lodash';
import { environment } from 'src/environments/environment';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';


@Component({
  selector: 'app-pdf-kids-list',
  templateUrl: './pdf-kids-list.page.html',
  styleUrls: ['./pdf-kids-list.page.scss'],
})
export class PdfKidsListPage implements OnInit {

  pdf_list_form: FormGroup;
  @ViewChild(IonInfiniteScroll, { static: true }) infiniteScroll: IonInfiniteScroll;
  limit = 10;
  lessionlist: any = [];
  llist: any;
  courcelist: any = [];
  clist: any;
  lid: any;
  result: any;
  pdf_result: any;
  pdf_process: boolean;
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
  teacher_list_form: FormGroup;
  g_id: any;
  add_url: any;
  lass_id: any;
  course_id: any;
  ts_id: any;
  connect: any;
  kidstatus: any;


  constructor(
    private formBuilder: FormBuilder,
    private api: CommonService,
    private router: Router,
    private statusBar: StatusBar,
    private transfer: FileTransfer, private iab: InAppBrowser,
    private file: File) {

    this.pdf_list_fb();
    this.teacher_list_fb();

  }

  ngOnInit() {
    this.pdf_list_form.reset();
    this.teacher_list_form.reset();
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

  onChangePropertyType(e) {
    localStorage.setItem("l_id", e.target.value)
    this.lass_id = e.target.value
    this.api.courselist(e.target.value).subscribe(data => {
      this.courcelist = data;
      this.clist = this.courcelist.data
    },
    );
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
    this.ts_id = e.target.value
    localStorage.setItem("l_id", e.target.value)
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


  ionViewWillEnter() {
    this.pdf_list_form.reset();
    this.teacher_list_form.reset();
    localStorage.removeItem("len_val")
    this.gradList();
    this.role_id = localStorage.getItem("role_id")
    this.lessionList();
    this.statusBar.show();
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#fdf8f1');
    this.package_status = localStorage.getItem("package_status")
    this.connect_student = localStorage.getItem("connect_student")
    this.g_id = localStorage.getItem("grade_id")

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

    if (this.role_id == '4') {
      this.api.teacherPackageStatus().subscribe(resp => {
        this.connect = resp
        localStorage.setItem("connect_student", this.connect.data.connect_student)
        localStorage.setItem("package_status", this.connect.data.package_status)
        localStorage.setItem("packagePurchaseId", this.connect.data.packagePurchaseId)
      })
    }

    // this.api.presentLoading();
    // this.pdf_process = true;
    this.api.latestPdf().subscribe(resp => {
      this.result = resp;
      this.pdf_result = this.result.data
      // this.pdf_process = false;
      //   this.api.dismissLoading();
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
    let searchList = this.pdf_result;
    if (value) {
      searchList = _.filter(searchList, function (x) {
        if (x.title.toLowerCase().includes(value.toLowerCase())) {
          return x.title.toLowerCase().includes(value.toLowerCase())
        }
      })

    } else {
      searchList = this.result.data;
    }
    this.pdf_result = searchList;
  }

  pdf_list_fb() {
    this.pdf_list_form = this.formBuilder.group({
      lesson: [null, Validators.required],
      course: [null, Validators.required],
    });
  }

  submit() {
    for (let v in this.pdf_list_form.controls) {
      this.pdf_list_form.controls[v].markAsTouched();
    }

    if (this.pdf_list_form.valid) {
      this.api.presentLoading();
      this.pdf_process = true;
      var body = {
        lession_id: this.pdf_list_form.value.lesson,
        course_id: this.pdf_list_form.value.course,
        grade_id: localStorage.getItem("grade_id")
      };
      this.api.studentPdf(body).subscribe(
        (data: any) => {
          this.pdf_process = false;
          this.api.dismissLoading();
          if (data.status == 1) {
            // success part
            this.api.presentToastWithOptions(data['message']);
            this.router.navigate(["/tabs/pdf-search"], { queryParams: { l_id: body.lession_id, c_id: body.course_id } });
          } else {
            this.api.presentToastWithOptions(data['message']);
          }
        },
        err => {
          this.pdf_process = false;
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
      this.pdf_process = true;
      var body = {
        lession_id: this.teacher_list_form.value.lesson,
        course_id: this.teacher_list_form.value.course,
        grade_id: this.teacher_list_form.value.grade,
      };
      this.api.studentPdf(body).subscribe(
        (data: any) => {
          this.pdf_process = false;
          this.api.dismissLoading();
          if (data.status == 1) {
            // success part
            this.api.presentToastWithOptions(data['message']);
            this.router.navigate(["/tabs/pdf-search"], {
              queryParams:
                { l_id: body.lession_id, c_id: body.course_id, g_id: body.grade_id }
            });
          } else {
            this.api.presentToastWithOptions(data['message']);
          }
        },
        err => {
          this.pdf_process = false;
          this.api.dismissLoading();
          this.api.presentToastWithOptions("Δημιουργήθηκε κάποιο πρόβλημα στον σέρβερ. Παρακαλώ προσπαθήστε αργότερα.");
        }
      );
    }
  }

  search(id, quize) {

    if (localStorage.getItem("role_id") === '2') {
      if (localStorage.getItem("kid_id")) {
        if (quize == 0 && this.package_status == 1) {
          this.router.navigate(['/tabs/pdf'], { queryParams: { pdf_id: id } });
        }
        else if (quize == 1) {
          this.router.navigate(['/tabs/pdf'], { queryParams: { pdf_id: id } });
        }
        else {
          this.router.navigate(["/tabs/quiz-premium"], { queryParams: { pdf: "pdf" } });
        }
      }
      else {
        this.api.presentToastWithOptions('Παρακαλώ επιλέξτε ΠΑΙΔΙ.');

      }

    }


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
            this.router.navigate(["/tabs/teacher-premium"], { queryParams: { pdf: "pdf" } });
          }
        }
      }
    }
  }

  settings() {
    this.router.navigate(['/tabs/settings']);
  }

}
