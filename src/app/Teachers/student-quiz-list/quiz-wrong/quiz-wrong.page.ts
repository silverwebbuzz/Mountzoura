import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/global/common_service';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-quiz-wrong',
  templateUrl: './quiz-wrong.page.html',
  styleUrls: ['./quiz-wrong.page.scss'],
})
export class QuizWrongPage implements OnInit {

  resp: any;
  kidd_process: boolean;
  question: any;
  ans: any;
  correct_ans: any;
  wrong: any;
  imageUrl = environment.image_url;
  que: any;
  que_img: any;
  correct_img: any;
  choose_ans: any;
  choos_img: any;

  constructor(private api: CommonService, 
    private route: ActivatedRoute,
    private statusBar: StatusBar,
    private navCtrl: NavController,
    private router: Router) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.statusBar.show();
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#fdf8f1');
    
    let reqData = this.route.snapshot.queryParams;
    var body = {
      question_id: reqData.que_id,
      kid_unique_id: reqData.kid_id,
      count:reqData.count
    }
    this.api.studentAnswerShow(body).subscribe(resp => {
      this.resp = resp
      //question
      this.que = this.resp.question.question
      this.que_img = this.resp.question.que_image
      //correct ans
      var correct_ans = this.resp.question.answer.find(x => x.correct_answer == 1);
      this.correct_ans = correct_ans.answer_text
      this.correct_img = correct_ans.answer_image
      //wrong ans
      this.wrong = this.resp.question.answer.filter(item => item.correct_answer == 0);

      //studentChoose
      this.choose_ans = this.resp.studentChoose.answer_text
      this.choos_img = this.resp.studentChoose.answer_image
     

    })
  }

  settings() {
    this.router.navigate(['/tabs/settings']);
  }

  back() {
    let reqData = this.route.snapshot.queryParams;
    this.navCtrl.navigateBack(['/tabs/single-quiz'],{ queryParams: { kid_id:reqData.kid_id,
      quiz_id:reqData.quiz_id,count:reqData.count} });
  }

}
