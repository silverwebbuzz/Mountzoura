import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { CommonService } from 'src/app/global/common_service';
import { PasswordValidation } from 'src/app/global/password_validation';
import { ModalController } from '@ionic/angular';
import { TermsPage } from '../../terms/terms.page';

@Component({
  selector: 'app-register-teacher',
  templateUrl: './register-teacher.page.html',
  styleUrls: ['./register-teacher.page.scss'],
})
export class RegisterTeacherPage implements OnInit {

  register_form: FormGroup;
  arealist: any = [];
  alist: any;
  reg_process: boolean;
  slist: any;
  sublist: any;
  // checked :any;
  // term : any


  constructor(
    private formBuilder: FormBuilder,
    private router: Router, private api: CommonService,
    private statusBar: StatusBar,
    private modalCtrl: ModalController) {

    this.register_fb();
  }


  ngOnInit() {
    this.areaList()
    this.register_form.reset()
  }

  areaList() {
    this.api.arealist().subscribe(data => {
      this.arealist = data;
      this.alist = this.arealist.data
    },
    );
  }

  onChangePropertyType (e) {
    localStorage.setItem("l_id", e.target.value)
    this.api.sub_area(e.target.value).subscribe(data => {
      this.slist = data;
      this.sublist = this.slist.data
    },
    );
  }

  ionViewWillEnter() {
    this.register_form.reset()
    this.areaList()
    this.statusBar.show();
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#FFFFFF');
  }

  register_fb() {
    this.register_form = this.formBuilder.group({
      email: [null, Validators.compose([
        Validators.pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})'),
        Validators.required
      ])],
      name: [null, Validators.required],
      surname: [null, Validators.required],
      area: [null, Validators.required],
      password: [null, Validators.required],
      confirmPassword: [null, Validators.required],
      sub_area: [null, Validators.required],
      code: [null],
    },
      {
        validator: PasswordValidation.MatchPassword // your custom validation method  
      }
    );
  }

  register() {
    for (let v in this.register_form.controls) {
      this.register_form.controls[v].markAsTouched();
    }
    if (this.register_form.valid) {
      this.api.presentLoading();
      this.reg_process = true;
      var body = {
        email: this.register_form.value.email,
        name: this.register_form.value.name,
        surname: this.register_form.value.surname,
        area_id: this.register_form.value.area,
        sub_area_id:this.register_form.value.sub_area,
        password: this.register_form.value.password,
        confirmPassword: this.register_form.value.confirmPassword,
        referral_code: this.register_form.value.code,
        terms_and_condition: 1
      };
      this.api.teacher_signup(body).subscribe(
        (data: any) => {
          this.reg_process = false;
          this.api.dismissLoading();
          if (data.status == 1) {
            // success part
            this.api.presentToastWithOptions(data['message']);
            this.router.navigate(["/login"]);
          } 
          else if (data.email){
            if (data.email) {
              this.register_form.controls['email'].setErrors({ 'incorrect': true });
              this.register_form.controls['email'].markAsTouched();
            } else {
              this.register_form.controls['email'].setErrors({ 'incorrect': true });
              this.register_form.controls['email'].markAsTouched();
            }  
          }
          else{
            this.api.presentToastWithOptions(data['message']);
          }
        },
        err => {
          this.reg_process = false;
          this.api.dismissLoading();
          this.api.presentToastWithOptions("Δημιουργήθηκε κάποιο πρόβλημα στον σέρβερ. Παρακαλώ προσπαθήστε αργότερα.");
        }
      );
    }
  }
}