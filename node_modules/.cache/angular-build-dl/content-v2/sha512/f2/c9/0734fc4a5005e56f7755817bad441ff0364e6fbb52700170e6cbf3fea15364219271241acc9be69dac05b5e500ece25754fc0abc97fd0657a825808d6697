(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Users-profile-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Users/profile/profile.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Users/profile/profile.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"appBar1\">\n  <ion-toolbar class=\"bg\">\n    <img src=\"../../../assets/images/directional.png\" slot=\"start\" class=\"img_tool_arrow\" (click)=\"back()\"/>\n    <ion-title class=\"title_all\">{{'profile.head' | translate}}</ion-title>\n    <img src=\"../../../assets/images/icon.png\" slot=\"end\" class=\"img_tool_logo\"/>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <form [formGroup]=\"profile_form\" autocomplete=\"off\" class=\"form_all\">\n    \n  <div class=\"div_profile\">\n    <!-- <img *ngIf=\"!select_product_image\" src=\"{{user_not_found_place_holder}}\" class=\"img_profile\" /> -->\n    <img *ngIf=\"select_product_image\" src=\"{{mediaUrl_image ? select_product_image : select_product_image}}\"\n      class=\"img_profile\" />\n    <input class=\"btn-choose\" type=\"file\" formControlName=\"image\" (change)=\"imageUpload($event)\" accept=\"image/*\"/>\n  </div>\n\n    <ion-item lines=\"none\" class=\"input-item add space\">\n      <ion-input type=\"text\" formControlName=\"name\" placeholder=\"{{'reusable.place_name' | translate}}\" class=\"input-box\">\n      </ion-input>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\n      *ngIf=\"profile_form.controls.name.hasError('required') && profile_form.controls.name.touched\">\n      <p class=\"content add-error\">{{'reusable.err_name' | translate}}</p>\n    </ion-item>\n\n    <ion-item lines=\"none\" class=\"input-item add space\">\n      <ion-input type=\"text\" formControlName=\"surname\" placeholder=\"{{'profile.place_sname' | translate}}\" class=\"input-box\">\n      </ion-input>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\n      *ngIf=\"profile_form.controls.surname.hasError('required') && profile_form.controls.surname.touched\">\n      <p class=\"content add-error\">{{'profile.err_sname' | translate}}</p>\n    </ion-item>\n\n    <ion-item lines=\"none\" class=\"input-item space\">\n      <ion-select interface=\"action-sheet\" formControlName=\"area\" placeholder=\"{{'profile.area' | translate}}\" \n      class=\"btn-select bg dropWidth\" mode=\"md\" [(ngModel)]=\"selectedMeasureSetId\" (ionChange)=\"onChangePropertyType($event)\">\n        <ion-select-option *ngFor=\"let opt of alist\" [value]=\"opt.id\">{{opt.name}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <!-- <ion-select name=\"measureSetSelect\" [(ngModel)]=\"selectedMeasureSetId\">\n      <ion-select-option *ngFor=\"let measureSet of measureSets\" [value]=\"measureSet.id\">\n        {{measureSet.name}}\n      </ion-select-option>\n    </ion-select> -->\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"profile_form.controls.area.hasError('required') && profile_form.controls.area.touched\">\n      <p class=\"content\">{{'profile.err_area' | translate}}</p>\n    </ion-item>\n\n    <ion-item lines=\"none\" class=\"input-item space\">\n      <ion-select interface=\"action-sheet\" formControlName=\"sub_area\" placeholder=\"{{ 'reusable.place_sub_area' | translate }}\"\n        class=\"btn-select bg dropWidth\" mode=\"md\" [(ngModel)]=\"selectedsubId\">\n        <ion-select-option *ngFor=\"let opt of sublist\" [value]=\"opt.id\">{{opt.name}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n    *ngIf=\"profile_form.controls.sub_area.hasError('required') && profile_form.controls.sub_area.touched\">\n    <p class=\"content\">{{ 'reusable.err_sub_area' | translate }}</p>\n  </ion-item>\n\n    <ion-item lines=\"none\" class=\"input-item add\">\n      <ion-input type=\"password\" formControlName=\"password\" placeholder=\"{{'profile.place_pass' | translate}}\" class=\"input-box\"></ion-input>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\n      *ngIf=\"profile_form.controls.password.hasError('required') && profile_form.controls.password.touched\">\n      <p class=\"content add-error\">{{'profile.err_pass' | translate}}</p>\n    </ion-item>\n\n  </form>\n\n  <ion-button expand=\"block\" size=\"large\" class=\"btn_footer btn_all\" (click)=\"submit()\">{{'profile.submit' | translate}}</ion-button>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/Users/profile/profile-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/Users/profile/profile-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function() { return ProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.page */ "./src/app/Users/profile/profile.page.ts");




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ "./src/app/Users/profile/profile.module.ts":
/*!*************************************************!*\
  !*** ./src/app/Users/profile/profile.module.ts ***!
  \*************************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-routing.module */ "./src/app/Users/profile/profile-routing.module.ts");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/Users/profile/profile.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");








let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"]
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
    })
], ProfilePageModule);



/***/ }),

/***/ "./src/app/Users/profile/profile.page.scss":
/*!*************************************************!*\
  !*** ./src/app/Users/profile/profile.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --padding-top: 16px;\n  --padding-bottom: 16px;\n}\nion-content .div_profile {\n  margin-top: 16px !important;\n  margin-bottom: 32px !important;\n  text-align: center;\n  position: relative;\n  width: 100px;\n  height: 100px;\n  margin: 0 auto;\n  border-radius: 50px;\n}\nion-content .div_profile .img_profile {\n  width: 100px;\n  height: 100px;\n  border-radius: 50px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\nion-content .btn-choose {\n  position: absolute;\n  top: 0%;\n  opacity: 0;\n  width: 100%;\n  left: 0;\n  bottom: 0;\n  height: 100px;\n  width: 100px;\n}\nion-footer {\n  position: fixed;\n  bottom: 0;\n}\nion-footer .btn_footer {\n  margin: 0px;\n  color: white;\n  text-transform: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNtaW5pL0Rlc2t0b3AvRG9jdW1lbnRzL01EL2lvbmljUHJvamVjdC9RdWl6LU1vYmlsZS9zcmMvYXBwL1VzZXJzL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiLCJzcmMvYXBwL1VzZXJzL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQ0NKO0FEQ0k7RUFDRSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDQ047QURDTTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FDQ1I7QURJSTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQ0ZOO0FES0U7RUFDRSxlQUFBO0VBQ0EsU0FBQTtBQ0ZKO0FER0k7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FDRE4iLCJmaWxlIjoic3JjL2FwcC9Vc2Vycy9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAgIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgICAtLXBhZGRpbmctZW5kOiAxNnB4O1xuICAgIC0tcGFkZGluZy10b3A6IDE2cHg7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgXG4gICAgLmRpdl9wcm9maWxlIHtcbiAgICAgIG1hcmdpbi10b3A6IDE2cHggIWltcG9ydGFudDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDMycHggIWltcG9ydGFudDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAvLyBwYWRkaW5nLXRvcDogNDVweDtcbiAgICAgIC5pbWdfcHJvZmlsZSB7XG4gICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgIC8vIGJvcmRlcjogNXB4IHNvbGlkICNmZmY7XG4gICAgICAgIC8vIGJveC1zaGFkb3c6IDBweCAwcHggNnB4ICNjY2M7XG4gICAgICB9XG4gICAgfVxuICAgIC5idG4tY2hvb3NlIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMCU7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgIHdpZHRoOiAxMDBweDtcbiAgICB9XG4gIH1cbiAgaW9uLWZvb3RlcntcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAwO1xuICAgIC5idG5fZm9vdGVyIHtcbiAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgfVxuICB9IiwiaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDE2cHg7XG4gIC0tcGFkZGluZy10b3A6IDE2cHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDE2cHg7XG59XG5pb24tY29udGVudCAuZGl2X3Byb2ZpbGUge1xuICBtYXJnaW4tdG9wOiAxNnB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDMycHggIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG59XG5pb24tY29udGVudCAuZGl2X3Byb2ZpbGUgLmltZ19wcm9maWxlIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cbmlvbi1jb250ZW50IC5idG4tY2hvb3NlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDAlO1xuICBvcGFjaXR5OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogMTAwcHg7XG59XG5cbmlvbi1mb290ZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbn1cbmlvbi1mb290ZXIgLmJ0bl9mb290ZXIge1xuICBtYXJnaW46IDBweDtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/Users/profile/profile.page.ts":
/*!***********************************************!*\
  !*** ./src/app/Users/profile/profile.page.ts ***!
  \***********************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var src_app_global_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/global/common_service */ "./src/app/global/common_service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");








let ProfilePage = class ProfilePage {
    constructor(formBuilder, router, api, statusBar, navCtrl) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.api = api;
        this.statusBar = statusBar;
        this.navCtrl = navCtrl;
        this.user_not_found_place_holder = 'assets/images/interface.png';
        this.alist = [];
        this.mediaUrl_image = '';
        this.profile_url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].profile_url;
        this.test = "1";
        this.measureSets = [];
        this.profile_fb();
    }
    ngOnInit() {
    }
    areaList() {
        this.api.arealist().subscribe(data => {
            this.arealist = data;
            this.alist = this.arealist.data;
        });
        setTimeout(() => {
            this.Details();
        }, 1500);
    }
    onChangePropertyType(e) {
        // localStorage.setItem("l_id", e.target.value)
        this.api.sub_area(e.target.value).subscribe(data => {
            this.slist = data;
            this.sublist = this.slist.data;
            this.api.getUserData().subscribe(res => {
                this.profileData = res;
                this.selectedsubId = this.profileData.data.sub_area_id;
                this.profile_form.patchValue({
                    sub_area: this.prodata.sub_area_id
                });
            });
        });
    }
    Details() {
        this.api.presentLoading();
        this.pro_process = true;
        this.api.getUserData().subscribe(res => {
            if (res) {
                this.profileData = res;
                this.prodata = this.profileData.data;
                this.selectedMeasureSetId = this.profileData.data.area_id;
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
                    this.select_product_image = this.user_not_found_place_holder;
                }
                this.pro_process = false;
                this.api.dismissLoading();
            }
            else {
                this.pro_process = false;
                this.api.dismissLoading();
            }
        });
        this.pro_process = false;
        this.api.dismissLoading();
    }
    imageUpload(e) {
        let file = e.target.files[0];
        if (file) {
            let reader = new FileReader();
            reader.onloadend = (e) => {
                this.select_product_image = e.target.result;
            };
            reader.readAsDataURL(e.target.files[0]);
            this.mediaUrl_image = file;
        }
    }
    ionViewWillEnter() {
        this.select_product_image = '';
        this.profile_form.reset();
        this.areaList();
        this.statusBar.show();
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#fdf8f1');
    }
    profile_fb() {
        this.profile_form = this.formBuilder.group({
            image: [null],
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            surname: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            area: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: [null],
            sub_area: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    submit() {
        for (let v in this.profile_form.controls) {
            this.profile_form.controls[v].markAsTouched();
        }
        if (this.profile_form.valid) {
            this.api.presentLoading();
            this.pro_process = true;
            const body = new FormData();
            body.append('name', this.profile_form.value.name);
            body.append('surname', this.profile_form.value.surname);
            body.append('area_id', this.profile_form.value.area);
            body.append('sub_area_id', this.profile_form.value.sub_area);
            body.append('password', this.profile_form.value.password ? this.profile_form.value.password : '');
            if (this.mediaUrl_image) {
                body.append('profile_image', this.mediaUrl_image);
            }
            this.api.updateUser(body).subscribe(val => {
                this.data = val;
                this.pro_process = false;
                this.api.dismissLoading();
                if (this.data.status == 1) {
                    if (this.data.page == 1) {
                        localStorage.clear();
                        this.router.navigate(['/login']);
                    }
                    if (this.data.page == 0) {
                        this.api.presentToastWithOptions(this.data['message']);
                        this.router.navigate(['/tabs/settings']);
                    }
                }
                else {
                    this.api.presentToastWithOptions(this.data['message']);
                }
            }, err => {
                this.pro_process = false;
                this.api.dismissLoading();
                this.api.presentToastWithOptions("Δημιουργήθηκε κάποιο πρόβλημα στον σέρβερ. Παρακαλώ προσπαθήστε αργότερα.");
            });
        }
    }
    back() {
        this.navCtrl.navigateBack('/tabs/settings');
    }
};
ProfilePage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_global_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"] }
];
ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Users/profile/profile.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./profile.page.scss */ "./src/app/Users/profile/profile.page.scss")).default]
    })
], ProfilePage);



/***/ })

}]);
//# sourceMappingURL=Users-profile-profile-module-es2015.js.map