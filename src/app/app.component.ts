import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Platform, AlertController, IonRouterOutlet } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { Deeplinks } from '@ionic-native/deeplinks/ngx';
import { Firebase } from '@ionic-native/firebase/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  rootPage: any = 'TabsPage';
  @ViewChildren(IonRouterOutlet) routerOutlets: QueryList<IonRouterOutlet>;

  lastTimeBackPress = 0;
  timePeriodToExit = 2000;

  constructor(
    private platform: Platform,
    private router: Router,
    private oneSignal: OneSignal,
    private splashScreen: SplashScreen,
    public alertCtrl: AlertController,
    private deeplinks: Deeplinks,
    private statusBar: StatusBar,
    private alertController: AlertController,
    private location: Location,
    private FirebasePlugin: Firebase
  ) {

    this.backButtonEvent();
    if (localStorage.getItem("token")) {
      if (localStorage.getItem("role_id") === '2') {
        this.router.navigate(['/tabs/kid-added'])
      }
      if (localStorage.getItem("role_id") === '4') {
        this.router.navigate(['/tabs/student-added'])
      }
    }
    if (!localStorage.getItem("token") ) {
      this.router.navigate(['/intro1']);
    }

    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();

      this.initializePush();
    });
    this.initializeApp();
    this.initializeAnalytics()
  }

  initializeAnalytics() {
    this.FirebasePlugin.setAnalyticsCollectionEnabled(true); // Enables analytics collection
    this.FirebasePlugin.logEvent("select_content", { content_type: "page_view", item_id: "intro1" });

    // window.FirebasePlugin.setUserId("user_id");
    // window.FirebasePlugin.setUserProperty("name", "value");
}
  backButtonEvent() {
    this.platform.backButton.subscribeWithPriority(0, () => {
      this.routerOutlets.forEach(async (outlet: IonRouterOutlet) => {
        if (localStorage.getItem("role_id") === '2') {
          if (this.router.url != '/tabs/kid-added') {
            // await this.router.navigate(['/']);
            await this.location.back();
          }
          else if (this.router.url === '/tabs/kid-added') {
            if (this.router.url === '/tabs/kid-added') {
              this.presentAlertConfirm();
            }
            else {
              navigator['app'].exitApp();
            }
          }
        }
        if (localStorage.getItem("role_id") === '4') {
          if (this.router.url != '/tabs/student-added') {
            // await this.router.navigate(['/']);
            await this.location.back();
          }
          else if (this.router.url === '/tabs/student-added') {
            if (this.router.url === '/tabs/student-added') {
              this.presentAlertConfirm();
            }
            else {
              navigator['app'].exitApp();
            }
          }
        }
      });
    });
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      // header: 'Confirm!',
      message: 'Σίγουρα θέλεις να αποσυνδεθείς;',
      buttons: [{
        text: 'Ακύρωση',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => { }
      }, {
        text: 'ΝΑΙ',
        handler: () => {
          navigator['app'].exitApp();
        }
      }]
    });

    await alert.present();
  }

  initializePush() {
    if (this.platform.is('android')) {
      this.oneSignal.startInit('e94fbed2-f294-4acf-b4bd-dab6be4dc3cd', '492204006086');
    }
    if (this.platform.is('ios')) {
      this.oneSignal.startInit('e94fbed2-f294-4acf-b4bd-dab6be4dc3cd', '492204006086');
    }
    //this.oneSignal.startInit('a6146470-8d9e-475a-8bba-cf7d6e11e8d7', '1071070652424');

    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);

    // Notifcation was received in general
    this.oneSignal.handleNotificationReceived().subscribe(data => {

      // console.log('Receive data', data);
      let msg = data.payload.body;
      let title = data.payload.title;
      let additionalData = data.payload.additionalData;
    });

    // Notification was really clicked/opened
    this.oneSignal.handleNotificationOpened().subscribe(data => {
      // console.log('Open data', data);
      let additionalData = data.notification.payload.additionalData;
      if (
      additionalData.common_parameter === 'parentRequestPage' || 
      additionalData.common_parameter === 'teacherRequestPage') {
        this.router.navigate(['/tabs/requests'])
      }
      else if (additionalData.common_parameter === 'teacherHomeworkPage') {
        // console.log('additionalData.homework.quiz_id', additionalData.homework.quiz_id);
        this.router.navigate(['/tabs/student-homework-played'],
          {
            queryParams: {quiz_id:additionalData.homework.quiz_id,kid_id:additionalData.homework.kid_unique_id,id:additionalData.homework.id
            }
          });
      }
      else if (additionalData.common_parameter === 'sevenDayContent') {
        this.router.navigate(['/tabs/notifications'])
      }
      else if (additionalData.common_parameter === 'quizHomework') {
        localStorage.setItem("kid_id", additionalData.kidData.kid_id)
        localStorage.setItem("grade_id", additionalData.kidData.grade_id)
        localStorage.setItem("package_status", additionalData.package_status)
        localStorage.setItem("amount", additionalData.packageData.price)
        localStorage.setItem("package_id", additionalData.packageData.id)
        localStorage.setItem("packagePurchaseId", additionalData.packagePurchaseId)

        if (additionalData.quiz.free_quiz == 0 && additionalData.package_status == 1) {
          this.router.navigate(['/tabs/quiz-single'], { queryParams: { id: additionalData.quiz.id } });
        }
        else if (additionalData.quiz.free_quiz == 1) {
          this.router.navigate(['/tabs/quiz-single'], { queryParams: { id: additionalData.quiz.id } });
        }
        else {
          this.router.navigate(["/tabs/quiz-premium"]);
        }

      }
      else if (additionalData.common_parameter === 'videoHomework') {
        localStorage.setItem("kid_id", additionalData.kidData.kid_id)
        localStorage.setItem("grade_id", additionalData.kidData.grade_id)
        localStorage.setItem("package_status", additionalData.package_status)
        localStorage.setItem("amount", additionalData.packageData.price)
        localStorage.setItem("package_id", additionalData.packageData.id)
        localStorage.setItem("packagePurchaseId", additionalData.packagePurchaseId)
        if (additionalData.video.free_video == 0 && additionalData.package_status == 1) {
          this.router.navigate(['/tabs/video'], { queryParams: { video_id: additionalData.video.id } });
        }
        else if (additionalData.video.free_video == 1) {
          this.router.navigate(['/tabs/video'], { queryParams: { video_id: additionalData.video.id } });
        }
        else {
          this.router.navigate(["/tabs/quiz-premium"]);
        }
      }
      else if (additionalData.common_parameter === 'pdfHomework') {
        localStorage.setItem("kid_id", additionalData.kidData.kid_id)
        localStorage.setItem("grade_id", additionalData.kidData.grade_id)
        localStorage.setItem("package_status", additionalData.package_status)
        localStorage.setItem("amount", additionalData.packageData.price)
        localStorage.setItem("package_id", additionalData.packageData.id)
        localStorage.setItem("packagePurchaseId", additionalData.packagePurchaseId)
        if (additionalData.pdf.free_pdf == 0 && additionalData.package_status == 1) {
          this.router.navigate(['/tabs/pdf'], { queryParams: { pdf_id: additionalData.pdf.id } });
        }
        else if (additionalData.pdf.free_pdf == 1) {
          this.router.navigate(['/tabs/pdf'], { queryParams: { pdf_id: additionalData.pdf.id } });
        }
        else {
          this.router.navigate(["/tabs/quiz-premium"]);
        }
      }
      else if (additionalData.common_parameter === 'quizReminderHomework') {
        localStorage.setItem("kid_id", additionalData.kidData.kid_id)
        localStorage.setItem("grade_id", additionalData.kidData.grade_id)
        localStorage.setItem("package_status", additionalData.package_status)
        localStorage.setItem("amount", additionalData.packageData.price)
        localStorage.setItem("package_id", additionalData.packageData.id)
        localStorage.setItem("packagePurchaseId", additionalData.packagePurchaseId)

        if (additionalData.quiz.free_quiz == 0 && additionalData.package_status == 1) {
          this.router.navigate(['/tabs/quiz-single'], { queryParams: { id: additionalData.quiz.id } });
        }
        else if (additionalData.quiz.free_quiz == 1) {
          this.router.navigate(['/tabs/quiz-single'], { queryParams: { id: additionalData.quiz.id } });
        }
        else {
          this.router.navigate(["/tabs/quiz-premium"]);
        }

      }
      else if (additionalData.common_parameter === 'videoReminderHomework') {
        localStorage.setItem("kid_id", additionalData.kidData.kid_id)
        localStorage.setItem("grade_id", additionalData.kidData.grade_id)
        localStorage.setItem("package_status", additionalData.package_status)
        localStorage.setItem("amount", additionalData.packageData.price)
        localStorage.setItem("package_id", additionalData.packageData.id)
        localStorage.setItem("packagePurchaseId", additionalData.packagePurchaseId)
        if (additionalData.video.free_video == 0 && additionalData.package_status == 1) {
          this.router.navigate(['/tabs/video'], { queryParams: { video_id: additionalData.video.id } });
        }
        else if (additionalData.video.free_video == 1) {
          this.router.navigate(['/tabs/video'], { queryParams: { video_id: additionalData.video.id } });
        }
        else {
          this.router.navigate(["/tabs/quiz-premium"]);
        }
      }
      else if (additionalData.common_parameter === 'pdfReminderHomework') {
        localStorage.setItem("kid_id", additionalData.kidData.kid_id)
        localStorage.setItem("grade_id", additionalData.kidData.grade_id)
        localStorage.setItem("package_status", additionalData.package_status)
        localStorage.setItem("amount", additionalData.packageData.price)
        localStorage.setItem("package_id", additionalData.packageData.id)
        localStorage.setItem("packagePurchaseId", additionalData.packagePurchaseId)
        if (additionalData.pdf.free_pdf == 0 && additionalData.package_status == 1) {
          this.router.navigate(['/tabs/pdf'], { queryParams: { pdf_id: additionalData.pdf.id } });
        }
        else if (additionalData.pdf.free_pdf == 1) {
          this.router.navigate(['/tabs/pdf'], { queryParams: { pdf_id: additionalData.pdf.id } });
        }
        else {
          this.router.navigate(["/tabs/quiz-premium"]);
        }
      }
      // this.showAlert('Notification opened', 'You already read this before', additionalData.task);
    });

    this.oneSignal.getIds().then((id) => {
      // console.log('oneSignal', id);
      localStorage.setItem("notification_id", id.userId)
    })

    this.oneSignal.endInit();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.show();
      this.statusBar.styleDefault();
      this.statusBar.backgroundColorByHexString('#FFFFFF');

      setTimeout(() => {
        this.splashScreen.hide();
      }, 3000);
    });

    this.platform.ready().then(() => {
      this.deeplinks.route({
        '/gdpr-policy' : {}
      }).subscribe( (match)=> {
        // console.log("match",match)
        // console.log("match.$args",match.$args.display)
        if (match.$args.display) {
          // console.log("match",match)
          this.router.navigate(["/gdpr-policy"]);
        }
        }, (nomatch) => {
          // console.log("nomatch",nomatch)
        });
      this.statusBar.styleDefault();
      setTimeout(() => {
        this.splashScreen.hide();
      }, 3000);
    });

  }
}
