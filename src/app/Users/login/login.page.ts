import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonService } from 'src/app/global/common_service';
import { Router } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { environment } from 'src/environments/environment';
import { NavController, Platform } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { TranslateService } from '@ngx-translate/core';
import { StorageService } from 'src/app/global/storage.service';
import { LanguageService } from 'src/app/global/language.service';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { AlertController } from '@ionic/angular';
import { Keyboard } from '@ionic-native/keyboard/ngx';


var firebaseConfig = {
  apiKey: "AIzaSyC0PGqA6iLaDczJ6JqrQjvwUqohM9ubYg0",
  authDomain: "mountozoura-b2c8e.firebaseapp.com",
  databaseURL: "https://mountozoura-b2c8e.firebaseio.com",
  projectId: "mountozoura-b2c8e",
  storageBucket: "mountozoura-b2c8e.appspot.com",
  messagingSenderId: "492204006086",
  appId: "1:492204006086:web:5e452d553082a9a12c55c7",
  measurementId: "G-JN019F27KG"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  login_form: FormGroup;
  val: any;
  login_process: boolean;
  userData = null;
  handler: any = null;
  lan = 1;
  isKeyboardHide=true;

  // public languagePreference: string = StorageService.getItem('prefered-language') || 'en';

  constructor(
    private facebook: Facebook,
    private formBuilder: FormBuilder,
    private api: CommonService,
    private router: Router,
    private fireAuth: AngularFireAuth,
    private statusBar: StatusBar,
    private navCtrl: NavController,
    public translate: TranslateService,
    private lanservice: LanguageService,
    private platform: Platform,
    private oneSignal: OneSignal,
    private splashScreen: SplashScreen,
    private alertCtrl: AlertController,public keyboard:Keyboard
  ) {

    this.login_fb();
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      // this.initializePush();
    });
  }

  ngOnInit() {
    this.login_form.reset();
  }

  ionViewWillEnter() {
    this.login_form.reset();
    this.statusBar.show();
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#FFFFFF');

    this.keyboard.onKeyboardWillShow().subscribe(()=>{
      this.isKeyboardHide=false;
      // console.log('SHOWK');
    });

    this.keyboard.onKeyboardWillHide().subscribe(()=>{
      this.isKeyboardHide=true;
    //  console.log('HIDEK');
    });
  }

  login_fb() {
    this.login_form = this.formBuilder.group({
      email: [null, Validators.compose([
        Validators.pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})'),
        Validators.required
      ])],
      password: [null, Validators.required],
    });
  }

  async loginWithFB(){
    const alert = await this.alertCtrl.create({
      header: 'Select Role!',
      inputs: [
        {
          name: 'parent',
          type: 'radio',
          label: 'Parent',
          value: 'parent',
          checked: true,
        },
        {
          name: 'teacher',
          type: 'radio',
          label: 'Teacher',
          value: 'teacher',
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            // console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (inputs) => {
            // console.log('Confirm Ok', inputs);
          }
        }
      ]
    });
    await alert.present();
    
  
    // this.facebook.login(['email'])
    // .then((response: FacebookLoginResponse) => {
    //   console.log('response', response);
    //   const credentials = firebase.auth.FacebookAuthProvider.credential(response.authResponse.accessToken);
    //   firebase.auth().signInWithCredential(credentials)
    //   .then((info) => {
    //     console.log('info', info);
    //     alert(JSON.stringify(info));
    //   });
    // });
  }

  login() {
    for (let v in this.login_form.controls) {
      this.login_form.controls[v].markAsTouched();
    }
    if (this.login_form.valid) {
      this.api.presentLoading();
      this.login_process = true;

      var body = {
        email: this.login_form.value.email,
        password: this.login_form.value.password,
        device_token: localStorage.getItem('notification_id')

      };
      this.api.signin(body).subscribe(val => {
        this.val = val
        this.login_process = false;
        this.api.dismissLoading();

        if (val['status'] == 1) {
          this.login_process = false;
          this.api.dismissLoading();
          if (this.val && this.val.data.token) {
            localStorage.setItem("token", this.val.data.token);
            localStorage.setItem("role_id", this.val.data.role_id);
            localStorage.setItem("area_id", this.val.data.area_id);
            if (this.val.data.role_id == 4) {
              localStorage.setItem("teacher_id", this.val.data.id)
              localStorage.setItem("connect_student", this.val.data.connect_student)
              localStorage.setItem("amount", this.val.data.packageData.price)
              localStorage.setItem("package_status", this.val.data.package_status)
              localStorage.setItem("package_id", this.val.data.packageData.id)
              localStorage.setItem("packagePurchaseId", this.val.data.packagePurchaseId)

            }
          }
          if (this.val.data.role_id == 2) {
            this.router.navigate(['/tabs/kid-added']);
            this.api.presentToastWithOptions(this.val['message']);
            // this.navCtrl.navigateForward('/tabs/kid-added');
          }
          if (this.val.data.role_id == 4) {
            this.router.navigate(['/tabs/student-added']);
            // this.navCtrl.navigateForward('/tabs/student-added');
            this.api.presentToastWithOptions(this.val['message']);
          }
        }
        else {
          this.api.presentToastWithOptions(val['message']);
        }
      },
        err => {
          this.login_process = false;
          this.api.dismissLoading();
          this.api.presentToastWithOptions("Δημιουργήθηκε κάποιο πρόβλημα στον σέρβερ. Παρακαλώ προσπαθήστε αργότερα.");
        }
      )
    }
  }


  forgot() {
    this.router.navigate(['/forgot']);
  }

  register() {
    // this.router.navigate(['/teacher-parent']);
    this.navCtrl.navigateBack('/teacher-parent');
  }

}