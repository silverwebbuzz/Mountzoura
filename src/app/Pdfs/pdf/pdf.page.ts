import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonService } from 'src/app/global/common_service';
import { ActivatedRoute, Router } from '@angular/router';
import { IonInfiniteScroll, NavController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { File } from '@ionic-native/file/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FileTransfer ,FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { FileOpener } from "@ionic-native/file-opener/ngx";



@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.page.html',
  styleUrls: ['./pdf.page.scss'],
})
export class PdfPage implements OnInit {

  pdf_form: FormGroup;
  @ViewChild(IonInfiniteScroll, { static: true }) infiniteScroll: IonInfiniteScroll;
  limit = 10;
  pdfdata: any;
  p_data: any;
  pdflist: any;
  p_list: any;
  imageUrl = environment.image_url;
  pdf_url = environment.pdf_url;
  user_not_found_place_holder = 'assets/images/placeholder-s.png'
  p_title: any;
  package_status: any;
  roll_id: any;
  connect_student: any;
  quize_process: boolean;
  students_list: any;
  slist: any;
  pdf_linkdata: string;
  fileTransfer: FileTransferObject;

  constructor(
    private formBuilder: FormBuilder,
    private api : CommonService,
    private route: ActivatedRoute,
    private router: Router,private transfer: FileTransfer,
    private navCtrl: NavController,private file: File, private fileOpener: FileOpener,
    private statusBar: StatusBar,
    private iab: InAppBrowser) {
    this.pdf_fb();
  }

  ads() {
    this.iab.create('https://google.com/');
  }

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
    this.roll_id = localStorage.getItem("role_id")
    localStorage.removeItem("pdf_quize")
    localStorage.removeItem("pdf_id")
    localStorage.removeItem("video_quize")
    localStorage.removeItem("video_id")
   

    this.pdf_form.reset()
    localStorage.removeItem("len_val")
    this.package_status = localStorage.getItem("package_status")
    this.connect_student = localStorage.getItem("connect_student")
    let reqData = this.route.snapshot.queryParams;
    var body = {
      kid_unique_id: localStorage.getItem("kid_id"),
    };
    this.api.pdfData(reqData.pdf_id,body).subscribe(resp => {
      this.pdfdata = resp;
      this.p_data = this.pdfdata.data.pdf
      this.p_title = this.pdfdata.data.title
    })

    this.api.connectStudentList().subscribe(resp => {
      this.students_list = resp;
      this.slist = this.students_list.data
    })

    this.api.realtedPdfQuiz(reqData.pdf_id).subscribe(resp => {
      this.pdflist = resp;
      this.p_list = this.pdflist.data
    })

  }
  
  pdf() {
    const url = this.pdf_url + this.p_data;
    const fileType = 'application/pdf';
    const fileName = this.p_data;
    this.fileTransfer = this.transfer.create();
    this.fileTransfer
      .download(url, this.file.dataDirectory + fileName)
      .then(entry => {
        // console.log("download complete: " + entry.toURL());
        this.fileOpener
          .open(entry.toURL(), fileType)
          .then(() => {
            // console.log("File is opened"); 
            this.api.presentToastWithOptions('Το αρχείο ανοίγει.');})
          .catch(e => {
            // console.log("Error opening file", e); 
            this.api.presentToastWithOptions('Το πρόγραμμα προβολής δεν βρέθηκε.');});
      });
  
  }

  pdf_fb() {
    this.pdf_form = this.formBuilder.group({
      student: [null, Validators.required],
    });
  }

  submit() {
    let reqData = this.route.snapshot.queryParams;
    for (let v in this.pdf_form.controls) {
      this.pdf_form.controls[v].markAsTouched();
    }
    if (this.pdf_form.valid) {
      this.api.presentLoading();
      this.quize_process = true;
      var body = {
        kid_unique_id: this.pdf_form.value.student,
        pdf_id : reqData.pdf_id
      };
      this.api.homework(body).subscribe(
        (data: any) => {
          this.quize_process = false;
          this.api.dismissLoading();
          if (data.status == 1) {
            // success part
            this.api.presentToastWithOptions(data['message']);
            this.router.navigate(['/tabs/home-teacher'])
          } else {
            this.api.presentToastWithOptions(data['message']);
          }
        },
        err => {
          this.quize_process = false;
          this.api.dismissLoading();
          this.api.presentToastWithOptions("Δημιουργήθηκε κάποιο πρόβλημα στον σέρβερ. Παρακαλώ προσπαθήστε αργότερα.");
        }
      );
    }
  }


  quiz_single(id,quize) {
    let reqData = this.route.snapshot.queryParams;
    localStorage.setItem("pdf_quize","pdf_quize")
    localStorage.setItem("pdf_id",reqData.pdf_id)

    
    if(localStorage.getItem("role_id") === '2'){
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
    else{
      this.api.presentToastWithOptions('Παρακαλώ επιλέξτε ΠΑΙΔΙ.');
      
    }
    }
    

    if(localStorage.getItem("role_id") === '4'){
      if(quize == 1){
        this.router.navigate(['/tabs/quiz-single'], { queryParams: { id: id } });
      }else{
          if(this.package_status == 1){
            this.router.navigate(['/tabs/quiz-single'], { queryParams: { id: id } });
            }else{
              if(this.connect_student >= 6){
                this.router.navigate(['/tabs/quiz-single'], { queryParams: { id: id } });
                }else{
                  this.router.navigate(["/tabs/teacher-premium"]);
                }
              }
            }
    }
  }

  settings() {
    this.router.navigate(['/tabs/settings']);
  }

  back() {
    let reqData = this.route.snapshot.queryParams;
    if(reqData.l_id){
      this.navCtrl.navigateBack(['/tabs/pdf-search'],{queryParams:{l_id:reqData.l_id,c_id:reqData.c_id}});
    }
    else if(localStorage.getItem("k_contain") || localStorage.getItem("t_contain")){
      this.navCtrl.navigateBack(['/tabs/quiz-search']);
    }
    else if(localStorage.getItem("t_pdf_contant")){
      this.navCtrl.navigateBack(['/tabs/home-teacher']);
    }
    else if(localStorage.getItem("k_pdf_contant")){
      this.navCtrl.navigateBack(['/tabs/home']);
    }
    else if (
      localStorage.getItem("homework")) {
      this.navCtrl.navigateBack(['/tabs/kid-homework']);
    }
    else if (
      localStorage.getItem("notification_data")) {
      this.navCtrl.navigateBack(['/tabs/notifications']);
    }
    else{
    this.navCtrl.navigateBack(['/tabs/pdfs']);
    }
  }
}
