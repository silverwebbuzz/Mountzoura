import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/global/common_service';
import { environment } from 'src/environments/environment';
import { IonInfiniteScroll, NavController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-student-homework',
  templateUrl: './student-homework.page.html',
  styleUrls: ['./student-homework.page.scss'],
})
export class StudentHomeworkPage implements OnInit {
  kidd_process: boolean;
  kidlist: any;
  listdata: any = [];
  quizedata: any = [];
  imageUrl = environment.image_url;
  resp: any;
  @ViewChild(IonInfiniteScroll, { static: true }) infiniteScroll: IonInfiniteScroll;
  limit = 10;


  constructor(
    private router: Router,
    private api: CommonService,
    private route: ActivatedRoute, private navCtrl: NavController,
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
    // this.kidd_process = true
    // this.api.presentLoading();
    var body = {
      kid_unique_id: reqData.kid_id,
    };
    this.api.getStudentHomeWork(body).subscribe(resp => {
      this.kidlist = resp;
      this.quizedata = this.kidlist.data;
      // this.kidd_process = false
      //  this.api.dismissLoading();
    })
  }

  played(quiz_id, kid_id, id) {
    var body = {
      quiz_id: quiz_id,
      kid_unique_id: kid_id
    }
    this.api.countQuizPlay(body).subscribe(resp => {
      this.resp = resp
      //  this.kidd_process = true
      //  this.api.dismissLoading();
      if (this.resp.status == 1) {
        // this.kidd_process = false
        // this.api.dismissLoading();
        // success part
        this.api.presentToastWithOptions(this.resp['message']);
        this.router.navigate(['/tabs/student-homework-played'], { queryParams: { quiz_id: quiz_id, kid_id: kid_id, id: id } });
      } else {
        this.api.presentToastWithOptions(this.resp['message']);
        this.router.navigate(['/tabs/student-homework-not'], {
          queryParams: {
            quiz_id: quiz_id,
            kid_id: kid_id, id: id
          }
        });
      }
    })
  }

  back() {
    this.navCtrl.navigateBack(['/tabs/student-added']);
  }

  settings() {
    this.router.navigate(['/tabs/settings']);
  }

}
