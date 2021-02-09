import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/global/common_service';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-id-wrong',
  templateUrl: './id-wrong.page.html',
  styleUrls: ['./id-wrong.page.scss'],
})
export class IdWrongPage implements OnInit {

  stud_add_form: FormGroup;
  kid_process: boolean;

  constructor(
    private formBuilder: FormBuilder, 
    private api: CommonService,
    private router: Router,private navCtrl: NavController,
    private statusBar: StatusBar) {

      this.stud_add_fb();
     }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.statusBar.show();
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#fdf8f1');
  }

  stud_add_fb() {
    this.stud_add_form = this.formBuilder.group({
      studID: [null, Validators.required],
    });
  }

  submit() {
    for (let v in this.stud_add_form.controls) {
      this.stud_add_form.controls[v].markAsTouched();
    }  
    if (this.stud_add_form.valid) {
      this.api.presentLoading();
      this.kid_process = true;
      var body = {
        kid_unique_id: this.stud_add_form.value.studID,
      };
      this.api.connectStudent(body).subscribe(
        (data: any) => {
          this.kid_process = false;
          this.api.dismissLoading();
          if (data.status == 1) {
            // success part
            this.api.presentToastWithOptions(data['message']);
            this.router.navigate(["/tabs/student-added"]);
          }  if (data.status == 0) {
            this.api.presentToastWithOptions(data['message']);
          }
          if (data.status == 2) {
            this.api.presentToastWithOptions(data['message']);
          }
        },
        err => {
          this.kid_process = false;
          this.api.dismissLoading();
          this.api.presentToastWithOptions("Δημιουργήθηκε κάποιο πρόβλημα στον σέρβερ. Παρακαλώ προσπαθήστε αργότερα.");
        }
      );
    }
  }

  add() {
    this.router.navigate(['/tabs/student-added']);
  }

  back() {
    this.navCtrl.navigateBack(['/tabs/student-added']);
  }

  settings() {
    this.router.navigate(['/tabs/settings']);
  }

}