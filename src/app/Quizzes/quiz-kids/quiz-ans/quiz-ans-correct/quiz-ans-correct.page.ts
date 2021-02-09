import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { CommonService } from 'src/app/global/common_service';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-quiz-ans-correct',
  templateUrl: './quiz-ans-correct.page.html',
  styleUrls: ['./quiz-ans-correct.page.scss'],
})
export class QuizAnsCorrectPage implements OnInit {
  ans: any;
  quelist: any;
  lan: any;
  totalq: any;
  ans_img: any;
  imageUrl = environment.image_url;
  user_not_found_place_holder = 'assets/images/placeholder-s.png'
  len_val: any;
  que: any;
  quize_id: any;
  countdata: any;
  advertise_url = environment.advertise_url;
  advertise: any;
  add: any;
  que_image: any;
  question: any;
  add_url: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router, private iab: InAppBrowser,
    private api: CommonService,
    private statusBar: StatusBar) {
  }
  ngOnInit() {
  }

  ionViewWillEnter() {
    this.statusBar.show();
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#abdc8c');
    this.len_val = localStorage.getItem("len_val")

    this.api.quizEndAdd().subscribe(resp => {
      this.advertise = resp;
      this.add = this.advertise.data.image
      this.add_url = this.advertise.data.url
    })
    this.question = localStorage.getItem("question")
    this.que_image = localStorage.getItem("que_image")

    this.route.queryParams.subscribe((params) => {
      this.que = params.que
      this.quize_id = params.quize_id
      this.countdata = params.countdata

      this.ans = params.ans ? params.ans : '';
      //this.c_ans = params.c_ans ? params.c_ans : '';
      this.ans_img = params.ans_img ? params.ans_img : '';
      //this.c_img = params.c_img ? params.c_img : '';
      var body = {
        kid_unique_id: localStorage.getItem("kid_id"),
      };
      this.api.quizQuestion(this.quize_id,body).subscribe(resp => {
        this.quelist = resp;
        this.totalq = this.quelist.data.length
        this.lan = this.quelist.data[this.quelist.data.length - 1];
      })

    });
  }

  ads() {
    this.iab.create(this.add_url, '_system', 'location=yes');
  }

  next() {
    let reqData = this.route.snapshot.queryParams;
    if (this.lan.id == reqData.que) {
      this.router.navigate(['/tabs/quiz-result'], {
        queryParams: {
          id: reqData.quize_id,
          countdata: reqData.countdata,
          count:reqData.count,
          total_que: this.totalq
        }
      });
    }
    else {
      this.router.navigate(['/tabs/quiz-play'], {
        queryParams: {
          id: reqData.quize_id,
          que_id: reqData.que,
          count:reqData.count,
          countdata: reqData.countdata
        }
      });
    }
  }

}
