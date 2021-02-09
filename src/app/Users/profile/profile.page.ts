import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PasswordValidation } from 'src/app/global/password_validation';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { CommonService } from 'src/app/global/common_service';
import { environment } from 'src/environments/environment';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  profile_form: FormGroup;
  user_not_found_place_holder = 'assets/images/interface.png'

  profileData: any;
  prodata: any;
  arealist: any;
  alist: any = [];
  select_product_image: any;
  mediaUrl_image: any = '';
  profile_url = environment.profile_url;
  pro_process: boolean;
  abc: any;
  test = "1"
  slist: any;
  sublist: any;
  company: any;
  public measureSets = [];
  public selectedMeasureSetId: any;
  data: any;
  public selectedsubId: any;


  constructor(
    private formBuilder: FormBuilder,
    private router: Router, private api: CommonService,
    private statusBar: StatusBar,
    private navCtrl: NavController,
  ) {

    this.profile_fb();
  }

  ngOnInit() {

  }


  areaList() {
    this.api.arealist().subscribe(data => {
      this.arealist = data;
      this.alist = this.arealist.data
    },
    );

    setTimeout(() => {
      this.Details();
    }, 1500);
  }

  onChangePropertyType(e) {
    // localStorage.setItem("l_id", e.target.value)
    this.api.sub_area(e.target.value).subscribe(data => {
      this.slist = data;
      this.sublist = this.slist.data
      this.api.getUserData().subscribe(res => {
        this.profileData = res;
        this.selectedsubId = this.profileData.data.sub_area_id
        this.profile_form.patchValue({
          sub_area: this.prodata.sub_area_id
        });
      })
    },
    );
  }


  Details() {
    this.api.presentLoading();
    this.pro_process = true;
    this.api.getUserData().subscribe(res => {
      if (res) {
        this.profileData = res;
        this.prodata = this.profileData.data
        this.selectedMeasureSetId = this.profileData.data.area_id
        localStorage.setItem("area_id", this.profileData.data.area_id);
        this.profile_form.patchValue({
          name: this.prodata.first_name,
          surname: this.prodata.last_name,
          area: this.prodata.area_id,
        });
        // console.log("select_product_image", this.prodata['profile_image'])
        if (this.prodata['profile_image']) {
          this.select_product_image = this.profile_url + this.prodata['profile_image'];
        }
        else {
          this.select_product_image = this.user_not_found_place_holder
        }
        this.pro_process = false;
        this.api.dismissLoading();
      }
      else {
        this.pro_process = false;
        this.api.dismissLoading();
      }
    })
    this.pro_process = false;
    this.api.dismissLoading();
  }


  imageUpload(e) {
    let file = e.target.files[0];
    if (file) {
      let reader = new FileReader();
      reader.onloadend = (e: any) => {
        this.select_product_image = e.target.result;
      };
      reader.readAsDataURL(e.target.files[0]);
      this.mediaUrl_image = file;
    }
  }
  ionViewWillEnter() {
    this.select_product_image = '';
    this.profile_form.reset()
    this.areaList()
    this.statusBar.show();
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#fdf8f1');


  }

  profile_fb() {
    this.profile_form = this.formBuilder.group({
      image: [null],
      name: [null, Validators.required],
      surname: [null, Validators.required],
      area: [null, Validators.required],
      password: [null],
      sub_area: [null, Validators.required],
    });
  }

  submit() {
    for (let v in this.profile_form.controls) {
      this.profile_form.controls[v].markAsTouched();
    }
    if (this.profile_form.valid) {
      this.api.presentLoading();
      this.pro_process = true;
      const body: FormData = new FormData();
      body.append('name', this.profile_form.value.name);
      body.append('surname', this.profile_form.value.surname);
      body.append('area_id', this.profile_form.value.area);
      body.append('sub_area_id', this.profile_form.value.sub_area);
      body.append('password', this.profile_form.value.password ? this.profile_form.value.password : '');
      if (this.mediaUrl_image) {
        body.append('profile_image', this.mediaUrl_image);
      }

      this.api.updateUser(body).subscribe(val => {
        this.data = val
        this.pro_process = false;
        this.api.dismissLoading();
        if (this.data.status == 1) {
          if (this.data.page == 1) {
            localStorage.clear()
            this.router.navigate(['/login']);
          }
          if (this.data.page == 0) {
            this.api.presentToastWithOptions(this.data['message']);
            this.router.navigate(['/tabs/settings'])
          }
        } else {
          this.api.presentToastWithOptions(this.data['message']);
        }
      },
        err => {
          this.pro_process = false;
          this.api.dismissLoading();
          this.api.presentToastWithOptions("Δημιουργήθηκε κάποιο πρόβλημα στον σέρβερ. Παρακαλώ προσπαθήστε αργότερα.");
        })
    }
  }

  back() {
    this.navCtrl.navigateBack('/tabs/settings');
  }

}
