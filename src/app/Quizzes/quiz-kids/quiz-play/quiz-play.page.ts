import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { CommonService } from 'src/app/global/common_service';
import { NavController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-quiz-play',
  templateUrl: './quiz-play.page.html',
  styleUrls: ['./quiz-play.page.scss'],
})
export class QuizPlayPage implements OnInit {

  quiz_play: FormGroup;
  quelist: any;
  qlist: any = [];
  imageUrl = environment.image_url;
  user_not_found_place_holder = 'assets/image/placeholder-s.png'
  len: any;
  first_lan: any;
  [x: string]: any;
  chk: boolean;
  len_val = 1;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private api: CommonService,
    private router: Router,
    private navCtrl: NavController,
    private statusBar: StatusBar) {
    this.quiz_play_fb();
  }

  ngOnInit() {
  }

  quiz_play_fb() {
    this.quiz_play = this.formBuilder.group({
      check0: [null, Validators.required],
      check1: [null, Validators.required],
    });
  }

  checkbox(e, text, que_id, ans_id, question, que_image,count) {
    let reqData = this.route.snapshot.queryParams;
    localStorage.setItem("question", question)
    localStorage.setItem("que_image", que_image)
    var body = {
      user_id: localStorage.getItem("teacher_id"),
      kid_unique_id: localStorage.getItem("kid_id"),
      quiz_id: reqData.id,
      question_id: que_id,
      answer_id: ans_id,
    };
    this.api.presentLoading();
    this.play_process = true;
    this.api.submitAnswer(body).subscribe(val => {
      this.val = val
      // this.play_process = false;
      // if (this.val['status'] == 1) {
      //   if (val.correct_answer.answer_image) {
      //     this.ans_img = val.correct_answer.answer_image
      //     this.play_process = false;
      //     this.api.dismissLoading();
      //   } else {
      //     this.play_process = false;
      //     this.api.dismissLoading();
      //   }
      // }
      if (this.val['status'] == 1 && this.val['message'] == 'Correct Answer.') {
        if (reqData.countdata) {
          if (val.correct_answer.answer_image) {
            var ans_img = val.correct_answer.answer_image
            this.play_process = false;
            this.api.dismissLoading();
          }
          var num = 1;
          var num1 = +reqData.countdata
          var res = 0;
          res = num + num1;
          this.router.navigate(['/tabs/quiz-ans-correct'], {
            queryParams: {
              countdata: res,
              ans: val.correct_answer.answer_text,
              ans_img: ans_img,
              que: val.correct_answer.quiz_question_id,
              quize_id: val.correct_answer.quiz_id,
              count:count
            }
          });
        }
        else if (val.correct_answer.answer_image || val.correct_answer.answer_text) {
          if (val.correct_answer.answer_image) {
            var ans_img = val.correct_answer.answer_image
          }
          this.info = 1;
          this.router.navigate(['/tabs/quiz-ans-correct'], {
            queryParams: {
              countdata: this.info,
              ans: val.correct_answer.answer_text,
              ans_img: ans_img,
              que: val.correct_answer.quiz_question_id,
              quize_id: val.correct_answer.quiz_id,
              count:count
            }
          });
        }
        else {
          this.play_process = false;
          this.api.dismissLoading();
        }
      }
      if (this.val['status'] == 1 && this.val['message'] == 'Wrong Answer.') {
        if (val.correct_answer.answer_image) {
          var c_img = val.correct_answer.answer_image
        }
        if (val.wrong_answer.answer_image) {
          var ans_img = val.wrong_answer.answer_image
        }
        let reqData = this.route.snapshot.queryParams;
        var res = +reqData.countdata
        this.router.navigate(['/tabs/quiz-ans-wrong'], {
          queryParams: {
            countdata: res ? res : 0,
            ans: val.wrong_answer.answer_text,
            c_ans: val.correct_answer.answer_text,
            ans_img: ans_img,
            c_img: c_img,
            que: val.wrong_answer.quiz_question_id,
            quize_id: val.wrong_answer.quiz_id,
            count:count
          }
        });
      }
      else {
        this.play_process = false;
        this.api.dismissLoading();
      }
      if (this.val['status'] == 0) {
        this.api.presentToastWithOptions(this.val['message']);
      }
      else {
        this.play_process = false;
        this.api.dismissLoading();
      }
    },
      err => {
        this.play_process = false;
        this.api.dismissLoading();
        this.api.presentToastWithOptions("Δημιουργήθηκε κάποιο πρόβλημα στον σέρβερ. Παρακαλώ προσπαθήστε αργότερα.");
      }
    )
  }

  ionViewWillEnter() {
    this.statusBar.show();
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#fdf8f1');

    let reqData = this.route.snapshot.queryParams;
    if (!reqData.countdata) {
      this.qlist = [];
      this.len_val = 1
    }
    this.api.presentLoading();
    this.quize_process = true;
    var body = {
      kid_unique_id: localStorage.getItem("kid_id"),
    };
    this.api.quizQuestion(reqData.id,body).subscribe(resp => {
      this.quelist = resp;
      // console.log(" this.quelist" ,this.quelist.data)
      // this.quelist.data.forEach(element => {
        
      // });
      this.quize_title = this.quelist.quiz_title;
      if (reqData.que_id) {
        // console.log("inside", reqData)
        var num = 1;
          var num1 = +reqData.count
          var res = 0;
          res = num + num1;
        // this.qlist = this.quelist.data.filter(x => x.id == this.qlist[0].id );
        let test = this.quelist.data.filter((x => x.count == res))
        // console.log("test",test );
        this.qlist = test.splice(0, 1);
       

        this.login_process = false;
        this.api.dismissLoading();
      }
      else {
        if (this.quelist.data.length !== 0) {
          this.qlist.push(this.quelist.data[this.qlist.length === 0 ? 0 : this.qlist[0].id]);
          if (this.qlist && this.qlist.length >= 2) {
          
            this.qlist.splice(0, 1);
            // console.log(this.qlist)
          }
        }
      }
      // console.log("get_quesion_answer", this.qlist.id)
      let a=this.quelist.data.findIndex(e=>e.id === this.qlist[0].id);
      this.len_val = a + 1
      this.len = Number(this.len_val)
      localStorage.setItem("len_val", this.len)
      this.len = this.quelist.data.length
    })
    this.login_process = false;
    this.api.dismissLoading();
  }
  right() {
    this.router.navigate(['/tabs/quiz-ans-correct']);
  }

  wrong() {
    this.router.navigate(['/tabs/quiz-ans-wrong']);
  }

  result() {
    let reqData = this.route.snapshot.queryParams;
    this.router.navigate(['/tabs/quiz-result'], { queryParams: { id: reqData.id } });
  }

  back() {
    let reqData = this.route.snapshot.queryParams;
    this.navCtrl.navigateBack(['/tabs/quiz-single'], { queryParams: { id: reqData.id } });
  }
  settings() {
    this.router.navigate(['/tabs/settings']);
  }

}
