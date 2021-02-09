import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { CommonService } from 'src/app/global/common_service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss'],
})
export class ForgotPage implements OnInit {

  forgot_form: FormGroup;
  forgot_process: boolean;

  constructor(
    private formBuilder: FormBuilder, private api: CommonService,
    private router: Router,
    private statusBar: StatusBar) {

    this.forgot_fb();
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.forgot_form.reset()
    this.statusBar.show();
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#FFFFFF');
  }

  forgot_fb() {
    this.forgot_form = this.formBuilder.group({
      email: [null, Validators.required],
    });
  }

  submit() {
    for (let v in this.forgot_form.controls) {
      this.forgot_form.controls[v].markAsTouched();
    }
    if (this.forgot_form.valid) {
      this.api.presentLoading();
      this.forgot_process = true;
      var body = {
        email: this.forgot_form.value.email,
      };
      this.api
        .forgot(body)
        .subscribe((data: any) => {
          this.forgot_process = false;
          this.api.dismissLoading();
          if (data.status == 1) {
            this.api.presentToastWithOptions(data.message);
            this.router.navigate(['/forgot-correct']);
          } else {
            this.api.presentToastWithOptions(data.message);
            this.router.navigate(['/forgot-wrong']);
          }
        },
          err => {
            this.forgot_process = false;
            this.api.dismissLoading();
            this.api.presentToastWithOptions("Δημιουργήθηκε κάποιο πρόβλημα στον σέρβερ. Παρακαλώ προσπαθήστε αργότερα.");
          }
        );
    }
  }
}