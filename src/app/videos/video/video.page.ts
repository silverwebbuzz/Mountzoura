import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonService } from 'src/app/global/common_service';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { IonInfiniteScroll, NavController, Platform, AlertController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { VideoPlayer } from '@ionic-native/video-player/ngx';
import { HttpClient } from '@angular/common/http';
import * as $ from "jquery";

@Component({
  selector: 'app-video',
  templateUrl: './video.page.html',
  styleUrls: ['./video.page.scss'],
})
export class VideoPage implements OnInit {

  video_form: FormGroup;
  videolist: any;
  v_list: any;
  imageUrl = environment.image_url;
  user_not_found_place_holder = 'assets/images/placeholder-s.png'
  videodata: any;
  v_data: any;
  @ViewChild(IonInfiniteScroll, { static: true }) infiniteScroll: IonInfiniteScroll;
  limit = 10;
  students_list: any;
  slist: any;
  quize_process: boolean;
  title: any;
  package_status: any;
  roll_id: any;
  connect_student: any;
  video_url: string;

  constructor(
    private formBuilder: FormBuilder,
    private api: CommonService,
    private route: ActivatedRoute,
    private router: Router,
    private platform: Platform,
    public alertCtrl: AlertController,
    private navCtrl: NavController,
    public plt: Platform,
    private http: HttpClient,
    private statusBar: StatusBar) {

    this.video_fb();
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
    this.video_form.reset()
    this.package_status = localStorage.getItem("package_status")
    this.connect_student = localStorage.getItem("connect_student")
    this.roll_id = localStorage.getItem("role_id")
    localStorage.removeItem("pdf_quize")
    localStorage.removeItem("pdf_id")
    localStorage.removeItem("video_quize")
    localStorage.removeItem("video_id")

    let reqData = this.route.snapshot.queryParams;
    var body = {
      kid_unique_id: localStorage.getItem("kid_id"),
    };
    this.api.videoData(reqData.video_id, body).subscribe(resp => {
      this.videodata = resp;
      this.title = this.videodata.data.title
      this.v_data = this.videodata.data.youtube_id
      this.video_url = this.videodata.data.url
    })

    setTimeout(() => {
      $(".frame1").attr("src", this.videodata.data.url);
    }, 2000);

    this.api.connectStudentList().subscribe(resp => {
      this.students_list = resp;
      this.slist = this.students_list.data
    });

    this.api.realtedVideosQuiz(reqData.video_id).subscribe(resp => {
      this.videolist = resp;
      this.v_list = this.videolist.data
    })
  }

  video_fb() {
    this.video_form = this.formBuilder.group({
      student: [null, Validators.required],
    });
  }

  submit() {
    let reqData = this.route.snapshot.queryParams;
    for (let v in this.video_form.controls) {
      this.video_form.controls[v].markAsTouched();
    }

    if (this.video_form.valid) {
      this.api.presentLoading();
      this.quize_process = true;
      var body = {
        kid_unique_id: this.video_form.value.student,
        video_id: reqData.video_id
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

  quiz_single(id, quize) {
    let reqData = this.route.snapshot.queryParams;
    localStorage.setItem("video_quize", "video_quize")
    localStorage.setItem("video_id", reqData.video_id)

    if (localStorage.getItem("role_id") === '2') {
      if (localStorage.getItem("kid_id")) {
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
      else {
        this.api.presentToastWithOptions('Παρακαλώ επιλέξτε ΠΑΙΔΙ.');

      }
    }

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

  back() {
    let reqData = this.route.snapshot.queryParams;
    if (reqData.l_id) {
      this.navCtrl.navigateBack(['/tabs/video-search'], { queryParams: { l_id: reqData.l_id, c_id: reqData.c_id } });
    }
    else if (localStorage.getItem("k_contain") || localStorage.getItem("t_contain")) {
      this.navCtrl.navigateBack(['/tabs/quiz-search']);
    }
    else if (localStorage.getItem("k_video_contant")) {
      this.navCtrl.navigateBack(['/tabs/home']);
    }
    else if (localStorage.getItem("t_video_contant")) {
      this.navCtrl.navigateBack(['/tabs/home-teacher']);
    }
    else if (
      localStorage.getItem("notification_data")) {
      this.navCtrl.navigateBack(['/tabs/notifications']);
    }
    else if (
      localStorage.getItem("homework")) {
      this.navCtrl.navigateBack(['/tabs/kid-homework']);
    }
    else {
      this.navCtrl.navigateBack(['/tabs/videos']);
    }
  }

  settings() {
    this.router.navigate(['/tabs/settings']);
  }
}
