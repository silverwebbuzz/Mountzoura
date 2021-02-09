import { Component, OnInit, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CommonService } from 'src/app/global/common_service';
import { ActivatedRoute, Router } from '@angular/router';
import { IonInfiniteScroll } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import * as _ from 'lodash';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';


@Component({
  selector: 'app-quiz-search',
  templateUrl: './quiz-search.page.html',
  styleUrls: ['./quiz-search.page.scss'],
})
export class QuizSearchPage implements OnInit {

  quizelist: any;
  imageUrl = environment.image_url;
  article_url = environment.article_url;
  user_not_found_place_holder = 'assets/images/paper.png'
  quizedata: Array<any>;
  article: Array<any>;
  video: Array<any>;
  quizelist_data: any;
  @ViewChild(IonInfiniteScroll, { static: true }) infiniteScroll: IonInfiniteScroll;
  limit = 10;
  pdf: Array<any>;
  resp: any;
  package_status: any;
  connect_student: any;
  advertise_url = environment.advertise_url;
  advertise: any;
  add: any;
  k_data: any;
  k_contain: any;
  t_contain: any;
  add_url: any;

  constructor(
    private api: CommonService,
    private route: ActivatedRoute,
    private router: Router,
    private statusBar: StatusBar, private iab: InAppBrowser) { }

  ngOnInit() {

  }

  ionViewWillEnter() {
    this.statusBar.show();
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#fdf8f1');
    localStorage.removeItem("len_val")
    this.package_status = localStorage.getItem("package_status")
    this.connect_student = localStorage.getItem("connect_student")
    this.t_contain = localStorage.getItem("t_contain");
    this.k_contain = localStorage.getItem("k_contain");
    let reqData = this.route.snapshot.queryParams;

    if (localStorage.getItem("t_search") || localStorage.getItem("t_contain")) {
      var gradedata = {
        lession_id: localStorage.getItem("lession_id"),
        course_id: localStorage.getItem("course_id"),
        grade_id: localStorage.getItem("grade_id")
      };
      this.api.teacherSearchContent(gradedata).subscribe(
        (resp: any) => {
          this.quizelist_data = resp;
          this.quizedata = this.quizelist_data.quiz;
          // if(reqData.t_contain){
          // this.article = this.quizelist_data.article;
          this.pdf = this.quizelist_data.pdf;
          this.video = this.quizelist_data.video
          // }
        }
      )
    }

    // this.api.presentLoading();
    if (localStorage.getItem("k_search") || localStorage.getItem("k_contain")) {
      var body = {
        lession_id: localStorage.getItem("lession_id"),
        course_id: localStorage.getItem("course_id"),
        grade_id: localStorage.getItem("grade_id")

      };
      this.api.studentSearchContent(body).subscribe(resp => {
        this.quizelist_data = resp;
        this.quizedata = this.quizelist_data.quiz;
        // if(reqData.k_contain){
        // this.article = this.quizelist_data.article;
        this.pdf = this.quizelist_data.pdf;
        this.video = this.quizelist_data.video
        //  this.api.dismissLoading();
        // }
      })
    }

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
    let quizeList = this.quizedata;
    // let articleList = this.article;
    let pdfList = this.pdf;
    let videoList = this.video;
    if (value) {
      quizeList = _.filter(quizeList, function (x) {
        if (x.title.toLowerCase().includes(value.toLowerCase())) {
          return x.title.toLowerCase().includes(value.toLowerCase())
        }
      })
      // articleList = _.filter(articleList, function (x) {
      //   if (x.title.toLowerCase().indexOf(value.toLowerCase()) > -1) {
      //     return x.title ? x.title.toLowerCase().indexOf(value.toLowerCase()) > -1 : null;
      //   }
      // })
      pdfList = _.filter(pdfList, function (x) {
        if (x.title.toLowerCase().includes(value.toLowerCase())) {
          return x.title.toLowerCase().includes(value.toLowerCase())
        }
      })
      videoList = _.filter(videoList, function (x) {
        if (x.title.toLowerCase().includes(value.toLowerCase())) {
          return x.title.toLowerCase().includes(value.toLowerCase())
        }
      })

    } else {
      quizeList = this.quizelist_data.quiz;
      // articleList = this.quizelist_data.article;
      pdfList = this.quizelist_data.pdf;
      videoList = this.quizelist_data.video;
    }
    this.quizedata = quizeList;
    // this.article = articleList;
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
    let reqData = this.route.snapshot.queryParams;

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

  quiz_video(id, quize) {

    if (localStorage.getItem("role_id") === '2') {
      if (localStorage.getItem("kid_id")) {
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
            this.router.navigate(["/tabs/teacher-premium"]);
          }
        }
      }
    }
  }

  quiz_pdf(id, quize) {
    if (localStorage.getItem("role_id") === '2') {
      if (localStorage.getItem("kid_id")) {
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

