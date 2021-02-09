import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonService } from 'src/app/global/common_service';
import { ActivatedRoute, Router } from '@angular/router';
import { IonInfiniteScroll } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import * as _ from 'lodash';
import { environment } from 'src/environments/environment';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-pdf-search',
  templateUrl: './pdf-search.page.html',
  styleUrls: ['./pdf-search.page.scss'],
})
export class PdfSearchPage implements OnInit {

  @ViewChild(IonInfiniteScroll, { static: true }) infiniteScroll: IonInfiniteScroll;
  limit = 10;
  pdflist: any;
  p_list: any;
  advertise_url = environment.advertise_url;
advertise: any;
add: any;
  package_status: any;
  connect_student: any;
  add_url: any;

  constructor(private api: CommonService,
    private route: ActivatedRoute, 
    private router: Router,private iab: InAppBrowser,
    private statusBar: StatusBar) { }

    ngOnInit() {
    }

    ionViewWillEnter() {
      this.statusBar.show();
      this.statusBar.styleDefault();
      this.statusBar.backgroundColorByHexString('#fdf8f1');
      
      this.package_status = localStorage.getItem("package_status")
      this.connect_student = localStorage.getItem("connect_student")
      let reqData = this.route.snapshot.queryParams;
      if(!reqData.g_id){
      var body = {
        lession_id: reqData.l_id,
        course_id: reqData.c_id,
        grade_id : localStorage.getItem("grade_id")
      };
      this.api.studentPdf(body).subscribe(resp => {
        this.pdflist = resp;
        this.p_list = this.pdflist.data
      })
    }

    if(reqData.g_id){
      var data = {
        lession_id: reqData.l_id,
        course_id: reqData.c_id,
        grade_id : reqData.g_id
      };
      this.api.studentPdf(data).subscribe(resp => {
        this.pdflist = resp;
        this.p_list = this.pdflist.data
      })
    }

      this.api.searchPageAdd().subscribe(resp => {
        this.advertise = resp;
        this.add  = this.advertise.data.image
        this.add_url = this.advertise.data.url
       })
    }

    ads() {
      this.iab.create(this.add_url,'_system','location=yes');    }

    searchBar(value){
      let searchList = this.p_list;
      if(value){
        searchList = _.filter(searchList, function(x){          
          if (x.title.toLowerCase().includes(value.toLowerCase())) {
            return x.title.toLowerCase().includes(value.toLowerCase())
          }
        }) 
        
      }else{
        searchList = this.pdflist.data;
      }
      this.p_list = searchList;
    }

    loadData(infiniteScroll){
      setTimeout(() => {
        this.limit += 10;
        infiniteScroll.target.complete();
      }, 500);
    }
    
    pdf(id,quize) {
      let reqData = this.route.snapshot.queryParams;
      if(localStorage.getItem("role_id") === '2'){
        if (quize == 0 && this.package_status == 1) {
          this.router.navigate(['/tabs/pdf'], { queryParams: { pdf_id: id,l_id:reqData.l_id,c_id:reqData.c_id } });
        }
        else if (quize == 1) {
          this.router.navigate(['/tabs/pdf'], { queryParams: { pdf_id: id,l_id:reqData.l_id,c_id:reqData.c_id } });
        }
        else {
          this.router.navigate(["/tabs/quiz-premium"],{ queryParams: { l_id: reqData.l_id, c_id: reqData.c_id,pdf_search:"pdf_search" } });
        }
      }
  
      if(localStorage.getItem("role_id") === '4'){
        if(quize == 1){
          this.router.navigate(['/tabs/pdf'], { queryParams: { pdf_id: id,l_id:reqData.l_id,c_id:reqData.c_id} });
        }else{
            if(this.package_status == 1){
              this.router.navigate(['/tabs/pdf'], { queryParams: { pdf_id: id,l_id:reqData.l_id,c_id:reqData.c_id } });
              }else{
                if(this.connect_student >= 6){
                  this.router.navigate(['/tabs/pdf'], { queryParams: { pdf_id: id,l_id:reqData.l_id,c_id:reqData.c_id } });
                  }else{
                    this.router.navigate(["/tabs/teacher-premium"], {
                      queryParams:
                        { l_id: reqData.l_id, c_id: reqData.c_id, g_id: reqData.g_id,pdf_search:"pdf_search" }
                    } );
                  }
                }
              }
      }
    }
  
    settings() {
      this.router.navigate(['/tabs/settings']);
    }

}
