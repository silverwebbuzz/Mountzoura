import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/global/common_service';
import { environment } from 'src/environments/environment';
import { IonInfiniteScroll, NavController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-single-quiz',
  templateUrl: './single-quiz.page.html',
  styleUrls: ['./single-quiz.page.scss'],
})
export class SingleQuizPage implements OnInit {
  resp: any;
  kidd_process: boolean;
  resp_list: any;
  imageUrl = environment.image_url;
  @ViewChild(IonInfiniteScroll, { static: true }) infiniteScroll: IonInfiniteScroll;
  limit = 10;

  constructor(
    private router: Router,private navCtrl: NavController, 
    private api: CommonService, 
    private route: ActivatedRoute,
    private statusBar: StatusBar) { }

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

    let reqData = this.route.snapshot.queryParams;
    var body = {
      quiz_id: reqData.quiz_id,
      kid_unique_id: reqData.kid_id,
      count:reqData.count
    }
    this.api.studentAnswer(body).subscribe(resp => {
      this.resp = resp
      this.resp_list = this.resp.data
      // this.kidd_process = false
    })

  }

  right(que_id, ans, kid_id) {
    let reqData = this.route.snapshot.queryParams;
    if (ans == 1) {
      this.router.navigate(['/tabs/quiz-correct'],{queryParams:{que_id:que_id,
        kid_id:kid_id,quiz_id:reqData.quiz_id,count:reqData.count}});
    }
    else {
      this.router.navigate(['/tabs/quiz-wrong'],{queryParams:{que_id:que_id,
        kid_id:kid_id,quiz_id:reqData.quiz_id,count:reqData.count}});
    }
  }

  back() {
    let reqData = this.route.snapshot.queryParams;
    this.navCtrl.navigateBack(['/tabs/student-homework-played'],{ queryParams: { kid_id:reqData.kid_id,quiz_id:reqData.quiz_id} });
  }

  settings() {
    this.router.navigate(['/tabs/settings']);
  }

}
