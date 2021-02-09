import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { CommonService } from 'src/app/global/common_service';
import { IonInfiniteScroll } from '@ionic/angular';
import * as _ from 'lodash';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-kid-homework',
  templateUrl: './kid-homework.page.html',
  styleUrls: ['./kid-homework.page.scss'],
})
export class KidHomeworkPage implements OnInit {


  quizedata: any = [];

  quizelist_data: any;
  package_status: any;
  @ViewChild(IonInfiniteScroll, { static: true }) infiniteScroll: IonInfiniteScroll;
  limit = 10;
  imageUrl = environment.image_url;
  user_not_found_place_holder = 'assets/images/paper.png'
  pdf: any = [];
  video: any = [];
  connect_student: any;
  resp: any;
  quize_process: boolean;

  constructor(private router: Router, private api: CommonService,
    private statusBar: StatusBar) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.statusBar.show();
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#fdf8f1');

    localStorage.removeItem("lession_id")
    localStorage.removeItem("course_id")

    this.package_status = localStorage.getItem("package_status")
    this.connect_student = localStorage.getItem("connect_student")
    // this.api.presentLoading();
    // this.quize_process = true;
    this.api.KidHomework().subscribe(resp => {
      this.resp = resp;
      this.quizedata = this.resp.quiz;
      this.pdf = this.resp.pdf;
      this.video = this.resp.video
      // this.quize_process = false;
      //   this.api.dismissLoading();
      //  this.api.dismissLoading();
    })
  }

  searchBar(value) {
    let quizeList = this.quizedata;
    let pdfList = this.pdf;
    let videoList = this.video;
    if (value) {
      quizeList = _.filter(quizeList, function (x) {
        if (x.title.toLowerCase().includes(value.toLowerCase())) {
          return x.title.toLowerCase().includes(value.toLowerCase())
        }
      })

      pdfList = _.filter(pdfList, function (x) {
        // console.log("quizelist", pdfList)
        if (x.title.toLowerCase().includes(value.toLowerCase())) {
          return x.title.toLowerCase().includes(value.toLowerCase())
        }
      })
      videoList = _.filter(videoList, function (x) {
        // console.log("quizelist", videoList)
        if (x.title.toLowerCase().includes(value.toLowerCase())) {
          return x.title.toLowerCase().includes(value.toLowerCase())
        }
      })

    } else {
      quizeList = this.resp.quiz;
      pdfList = this.resp.pdf;
      videoList = this.resp.video;
    }
    this.quizedata = quizeList;
    this.pdf = pdfList;
    this.video = videoList;
  }

  loadData(infiniteScroll) {
    setTimeout(() => {
      this.limit += 10;
      infiniteScroll.target.complete();
    }, 500);
  }

  quiz_single(id, quize) {
    if (localStorage.getItem("role_id") === '2') {
      localStorage.setItem("homework",'homework')
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

  quiz_video(id, quize) {
    if (localStorage.getItem("role_id") === '2') {
      localStorage.setItem("homework",'homework')
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
    if (localStorage.getItem("role_id") === '2') {
      localStorage.setItem("homework",'homework')
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

}
