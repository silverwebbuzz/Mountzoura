import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/global/common_service';
import { IonInfiniteScroll, NavController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { environment } from 'src/environments/environment';
import { LanguageService } from 'src/app/global/language.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-student-added',
  templateUrl: './student-added.page.html',
  styleUrls: ['./student-added.page.scss'],
})
export class StudentAddedPage implements OnInit {

  stud_add_form: FormGroup;
  kidd_process: boolean;
  kidlist: any;
  listdata: any;
  gender: any;
  kid_process: boolean;
  @ViewChild(IonInfiniteScroll, { static: true }) infiniteScroll: IonInfiniteScroll;
  limit = 10;
  advertise_url = environment.advertise_url;
  advertise: any;
  add: any;
  add_url: any;
  connect: any;
  role_id: any;

  constructor(
    private formBuilder: FormBuilder,
    private api : CommonService,private navCtrl: NavController,
    private router: Router,private iab: InAppBrowser,
    private statusBar: StatusBar,
    private lanservice: LanguageService,) {

      this.stud_add_fb();
     }

  ngOnInit() {
    this.stud_add_form.reset();
  }

  ionViewWillEnter() {
    this.stud_add_form.reset();
    this.statusBar.show();
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#fdf8f1');
    localStorage.removeItem("len_val");
    this.role_id = localStorage.getItem("role_id");

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

    // this.kidd_process = true
    this.api.connectStudentList().subscribe(resp => {
       this.kidlist = resp;
       this.listdata = this.kidlist.data; 
       if(this.listdata)
       {
         this.gender = this.listdata.gender;
        }
        else{
          this.gender = '';
        }
        // this.kidd_process = false
      })

      this.api.addTeacherAdvertisement().subscribe(resp => {
        this.advertise = resp;
        this.add  = this.advertise.data.image
        this.add_url = this.advertise.data.url
       })
  }

  ads() {
    this.iab.create(this.add_url,'_system','location=yes');  }

  stud_add_fb() {
    this.stud_add_form = this.formBuilder.group({
      studID: [null, Validators.required],
    });
  }

  loadData(infiniteScroll){
    setTimeout(() => {
      this.limit += 10;
      infiniteScroll.target.complete();
    }, 500);
  }

  submit() {
    for (let v in this.stud_add_form.controls) {
      this.stud_add_form.controls[v].markAsTouched();
    }
      
    if (this.stud_add_form.valid) {
      this.api.presentLoading();
      this.kid_process = true;
      var body = {
        kid_unique_id: this.stud_add_form.value.studID,
      };
      this.api.connectStudent(body).subscribe(
        (data: any) => {
          this.kid_process = false;
          this.api.dismissLoading();
          if (data.status == 1) {
            // success part
            localStorage.setItem("connect_student",data.connect_student)
            this.api.presentToastWithOptions(data['message']);
            this.router.navigate(["/tabs/id-correct"]);
          } if (data.status == 0) {
            this.api.presentToastWithOptions(data['message']);
            this.router.navigate(["/tabs/id-wrong"]);
          }
          if (data.status == 2) {
            this.api.presentToastWithOptions(data['message']);
          }
        },
        err => {
          this.kid_process = false;
          this.api.dismissLoading();
          this.api.presentToastWithOptions("Δημιουργήθηκε κάποιο πρόβλημα στον σέρβερ. Παρακαλώ προσπαθήστε αργότερα.");
        }
      );
    }
  }

  homework(kid_id) {
    this.router.navigate(['/tabs/student-homework'],{queryParams : {kid_id:kid_id}});
  }

  back() {
    this.navCtrl.navigateBack('/tabs/student-add');
  }

  settings() {
    this.router.navigate(['/tabs/settings']);
  }

}