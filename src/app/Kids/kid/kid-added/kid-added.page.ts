import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/global/common_service';
import { IonInfiniteScroll, NavController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LanguageService } from 'src/app/global/language.service';

@Component({
  selector: 'app-kid-added',
  templateUrl: './kid-added.page.html',
  styleUrls: ['./kid-added.page.scss'],
})
export class KidAddedPage implements OnInit {
  kidlist: any;
  listdata: any;
  user_not_found_place_holder = 'assets/images/paper.png'
  kidd_process: boolean;
  @ViewChild(IonInfiniteScroll, { static: true }) infiniteScroll: IonInfiniteScroll;
  limit = 10;
  hidden = 1
  kidstatus:any;
  role_id: any;

  constructor(
    private router: Router,
    private navCtrl: NavController,
    private api: CommonService,
    private statusBar: StatusBar,
    private lanservice: LanguageService,
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.statusBar.show();
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#fdf8f1');

    this.role_id = localStorage.getItem("role_id")
    localStorage.removeItem("pdf_quize")
    localStorage.removeItem("pdf_id")
    localStorage.removeItem("video_quize")
    localStorage.removeItem("video_id")
    localStorage.removeItem("lession_id")
    localStorage.removeItem("course_id")
    localStorage.removeItem("k_search")
    localStorage.removeItem("k_contain")
    localStorage.removeItem("k_quize_contant")
    localStorage.removeItem("k_quize_search")
    localStorage.removeItem("k_video_contant")
    localStorage.removeItem("k_pdf_contant")
    localStorage.removeItem("notification_data")
    localStorage.removeItem("homework")



    if (this.role_id == '2') {
      this.api.parentPackageStatus().subscribe(resp => {
        this.kidstatus = resp
        if (this.kidstatus.status == 1) {
          localStorage.setItem("kid_id", this.kidstatus.data.kid_id)
          localStorage.setItem("grade_id", this.kidstatus.data.grade_id)
          localStorage.setItem("package_status", this.kidstatus.data.package_status)
          localStorage.setItem("amount", this.kidstatus.data.price)
          localStorage.setItem("package_id", this.kidstatus.data.id)
          localStorage.setItem("packagePurchaseId", this.kidstatus.data.packagePurchaseId)
        }
      })
    }


    this.api.presentLoading();
    this.kidd_process = true;
    this.api.KidList().subscribe(resp => {
      if (resp) {
        this.kidlist = resp;
        this.listdata = this.kidlist.data;
        this.kidd_process = false;
        this.api.dismissLoading();
      }
      else {
        this.kidd_process = false;
        this.api.dismissLoading();
      }
    })
    this.kidd_process = false;
    this.api.dismissLoading();  
  }

  loadData(infiniteScroll) {
    setTimeout(() => {
      this.limit += 10;
      infiniteScroll.target.complete();
    }, 500);
  }

  premium(id, package_staus) {
    if (package_staus == 1) {
      this.router.navigate(['/tabs/kid-premium-profile'], { queryParams: { kid_id: id } });
    }
    else {
      this.router.navigate(['/tabs/kid-free-profile'], { queryParams: { kid_id: id } });
    }
  }

  back() {
    this.navCtrl.navigateBack(['/tabs/kid-new']);
  }

  addKids() {
    this.router.navigate(['/tabs/kid-new']);
  }

  settings() {
    this.router.navigate(['/tabs/settings']);
  }

}
