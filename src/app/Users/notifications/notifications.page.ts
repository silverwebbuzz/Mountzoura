import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, IonInfiniteScroll } from '@ionic/angular';
import { CommonService } from 'src/app/global/common_service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {
  quizelist: any;
  quizedata: any = [];
  article: any = [];
  pdf: any = [];
  video: any = [];
  @ViewChild(IonInfiniteScroll, { static: true }) infiniteScroll: IonInfiniteScroll;
  limit = 10;
  connect_student: any;
  package_status: any;
  imageUrl = environment.image_url;
  article_url = environment.article_url;
  user_not_found_place_holder = 'assets/images/paper.png'


  constructor(private navCtrl: NavController, private api: CommonService, private router: Router) { }

  ngOnInit() {
  }

  loadData(infiniteScroll) {
    setTimeout(() => {
      this.limit += 10;
      infiniteScroll.target.complete();
    }, 500);
  }

  ionViewWillEnter() {
    this.package_status = localStorage.getItem("package_status")
    this.connect_student = localStorage.getItem("connect_student")
    // this.api.presentLoading();
    // this.quize_process = true;
    this.api.contentSevenDays().subscribe(resp => {
      this.quizelist = resp;
      this.quizedata = this.quizelist.quiz;
      // this.article = this.quizelist.article;
      this.pdf = this.quizelist.pdf;
      this.video = this.quizelist.video
      // this.quize_process = false;
      // this.api.dismissLoading();
    })
  }

  quiz_single(id, quize) {
    localStorage.setItem("notification_data","notification_data")
    
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
    localStorage.setItem("notification_data","notification_data")
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
      else{
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
    localStorage.setItem("notification_data","notification_data")
    
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
      else{
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


  back() {
    this.navCtrl.navigateBack('/tabs/settings');
  }

}
