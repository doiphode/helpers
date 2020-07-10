(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button>\n     \n      </ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"apphead\">Helpers</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<ion-grid>\n      <ion-row color=\"primary\" justify-content-center class='formcenter' >\n\n        <ion-col align-self-center size-md=\"12\" size-lg=\"12\" size-xs=\"12\">\n          <div class=\"logintitle\"  text-center>\n            <!-- <h3><img src=\"assets/icon/favicon-96x96.png\"></h3> -->\n            <h2>Log In</h2>\n          </div>\n\n            <div padding>\n              <ion-item> \n                <ion-input name=\"email\" type=\"email\" [(ngModel)]='login_email' placeholder=\"Enter your email\" ngModel required (keyup.enter)=\"loginUser()\" ></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-input name=\"password\" type=\"password\" [(ngModel)]='login_password' placeholder=\"Enter your password\" ngModel required (keyup.enter)=\"loginUser()\"></ion-input>\n              </ion-item>\n            </div>\n            <div padding style=\"margin-top: 10px;\">\n              <ion-item lines=\"none\" style=\"border: 0;\">\n                <ion-button size=\"medium\" type=\"button\" (click)='loginUser()'  expand=\"block\">Login</ion-button>\n              </ion-item>\n              \n            </div>\n            <div padding class=\"text-center forgotpwd\">\n              <span (click)='openForgotPassword()'><b>Forgot Password</b></span> \n            </div>\n            <div padding class=\"text-center\">\n            \tNot a member? <span (click)='openRegisterPage()'><b>REGISTER</b></span>  \n            </div>\n                  \n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n\n     <ion-button [hidden]=hidden1 (click)=\"getlocation()\" expand=\"block\">Get Location</ion-button>\n\n  <ion-list [hidden]=hidden1>\n    <ion-list-header>\n      <ion-label>Location Info</ion-label>\n    </ion-list-header>\n    <ion-item>\n      <ion-label>\n        Latitue\n      </ion-label>\n      <ion-badge slot=\"end\">{{lat}}</ion-badge>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        longitude\n      </ion-label>\n      <ion-badge slot=\"end\">{{lng}}</ion-badge>\n    </ion-item>\n    </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".logintitle {\n  margin-top: 50px;\n  margin-bottom: 40px; }\n\n.formcenter {\n  text-align: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  background: white; }\n\n.formcenter ion-col {\n    position: fixed;\n    top: 44%;\n    /*left: 50%;*/\n    left: 0%;\n    width: 30em;\n    height: 18em;\n    margin-top: -9em;\n    /*margin-left: -12.9em;*/\n    margin-left: 0; }\n\nion-grid {\n  width: 100%;\n  height: 100%;\n  background: #dfdfdf; }\n\nion-row {\n  height: 100%; }\n\nion-col {\n  background: #fff; }\n\nion-button {\n  font-weight: 300; }\n\n@media only screen and (min-width: 600px) {\n  ion-grid {\n    height: auto; } }\n\nion-content, ion-grid {\n  background: ghostwhite; }\n\nion-item {\n  /*--background: #3880ff;\r\n    --color: #fff; */\n  border: 1px solid gray;\n  margin-bottom: 5px;\n  width: 80%;\n  margin: 0 auto; }\n\nion-button {\n  --background: #5BCAA4;\n  width: 60%;\n  margin: 0 auto;\n  width: 60%;\n  font-weight: bold;\n  font-size: 18px; }\n\n.forgotpwd {\n  margin-top: 20px;\n  margin-bottom: 20px; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vRDpcXGlvbmljMlxcaG9zcGl0YWwvc3JjXFxhcHBcXGxvZ2luXFxsb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNJLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxrQkFBa0I7RUFDbEIsd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2QixpQkFBaUIsRUFBQTs7QUFIckI7SUFNUSxlQUFlO0lBQ2YsUUFBUTtJQUNSLGFBQUE7SUFDQSxRQUFRO0lBQ1IsV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsd0JBQUE7SUFDQSxjQUFjLEVBQUE7O0FBT3RCO0VBQ0ksV0FBVTtFQUNWLFlBSlk7RUFLWixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxZQVRZLEVBQUE7O0FBWWhCO0VBRUksZ0JBZmMsRUFBQTs7QUFrQmxCO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0k7SUFDSSxZQUFZLEVBQUEsRUFDZjs7QUFHTDtFQUNJLHNCQUFzQixFQUFBOztBQUUxQjtFQUNJO29CQ2pCZ0I7RURtQmhCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGNBQWMsRUFBQTs7QUFFbEI7RUFDSSxxQkFBYTtFQUNiLFVBQVU7RUFDVixjQUFjO0VBQ2QsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixlQUFlLEVBQUE7O0FBR25CO0VBQ0ksZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWxvZ2luIHtcclxuICAgIFxyXG59XHJcblxyXG4ubG9naW50aXRsZXtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG59XHJcblxyXG4uZm9ybWNlbnRlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcblxyXG4gICAgaW9uLWNvbHtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgdG9wOiA0NCU7XHJcbiAgICAgICAgLypsZWZ0OiA1MCU7Ki9cclxuICAgICAgICBsZWZ0OiAwJTtcclxuICAgICAgICB3aWR0aDogMzBlbTtcclxuICAgICAgICBoZWlnaHQ6IDE4ZW07XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTllbTtcclxuICAgICAgICAvKm1hcmdpbi1sZWZ0OiAtMTIuOWVtOyovXHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbiR3aGl0ZS1jb2xvcjogI2ZmZjtcclxuJGhlaWdodDEwMDogMTAwJTtcclxuXHJcbmlvbi1ncmlkIHtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6ICRoZWlnaHQxMDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGZkZmRmO1xyXG59XHJcblxyXG5pb24tcm93IHtcclxuICAgIGhlaWdodDogJGhlaWdodDEwMDtcclxufVxyXG5cclxuaW9uLWNvbCB7XHJcbiAgIFxyXG4gICAgYmFja2dyb3VuZDogJHdoaXRlLWNvbG9yO1xyXG59XHJcblxyXG5pb24tYnV0dG9uIHtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcclxuICAgIGlvbi1ncmlkIHtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB9XHJcbn1cclxuXHJcbmlvbi1jb250ZW50LGlvbi1ncmlke1xyXG4gICAgYmFja2dyb3VuZDogZ2hvc3R3aGl0ZTtcclxufVxyXG5pb24taXRlbXtcclxuICAgIC8qLS1iYWNrZ3JvdW5kOiAjMzg4MGZmO1xyXG4gICAgLS1jb2xvcjogI2ZmZjsgKi9cclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuaW9uLWJ1dHRvbntcclxuICAgIC0tYmFja2dyb3VuZDogIzVCQ0FBNDtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLmZvcmdvdHB3ZHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59IiwiLmxvZ2ludGl0bGUge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBtYXJnaW4tYm90dG9tOiA0MHB4OyB9XG5cbi5mb3JtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogd2hpdGU7IH1cbiAgLmZvcm1jZW50ZXIgaW9uLWNvbCB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogNDQlO1xuICAgIC8qbGVmdDogNTAlOyovXG4gICAgbGVmdDogMCU7XG4gICAgd2lkdGg6IDMwZW07XG4gICAgaGVpZ2h0OiAxOGVtO1xuICAgIG1hcmdpbi10b3A6IC05ZW07XG4gICAgLyptYXJnaW4tbGVmdDogLTEyLjllbTsqL1xuICAgIG1hcmdpbi1sZWZ0OiAwOyB9XG5cbmlvbi1ncmlkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2RmZGZkZjsgfVxuXG5pb24tcm93IHtcbiAgaGVpZ2h0OiAxMDAlOyB9XG5cbmlvbi1jb2wge1xuICBiYWNrZ3JvdW5kOiAjZmZmOyB9XG5cbmlvbi1idXR0b24ge1xuICBmb250LXdlaWdodDogMzAwOyB9XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgaW9uLWdyaWQge1xuICAgIGhlaWdodDogYXV0bzsgfSB9XG5cbmlvbi1jb250ZW50LCBpb24tZ3JpZCB7XG4gIGJhY2tncm91bmQ6IGdob3N0d2hpdGU7IH1cblxuaW9uLWl0ZW0ge1xuICAvKi0tYmFja2dyb3VuZDogIzM4ODBmZjtcclxuICAgIC0tY29sb3I6ICNmZmY7ICovXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiAwIGF1dG87IH1cblxuaW9uLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogIzVCQ0FBNDtcbiAgd2lkdGg6IDYwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiA2MCU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE4cHg7IH1cblxuLmZvcmdvdHB3ZCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7IH1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../global.service */ "./src/app/global.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ "./node_modules/@ionic-native/android-permissions/ngx/index.js");
/* harmony import */ var _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/sms/ngx */ "./node_modules/@ionic-native/sms/ngx/index.js");












let LoginPage = class LoginPage {
    //
    constructor(alertCtrl, menuCtrl, router, _global, httpClient, loadingController, myapp, geolocation, nativeStorage, activatedRoute, androidPermissions, sms) {
        this.alertCtrl = alertCtrl;
        this.menuCtrl = menuCtrl;
        this.router = router;
        this._global = _global;
        this.httpClient = httpClient;
        this.loadingController = loadingController;
        this.myapp = myapp;
        this.geolocation = geolocation;
        this.nativeStorage = nativeStorage;
        this.activatedRoute = activatedRoute;
        this.androidPermissions = androidPermissions;
        this.sms = sms;
        this.hidden1 = true;
        //public login_email: any='staff1@welkinsystems.co.in';
        //public login_password: any='Password@123';
        this.login_email = '';
        this.login_password = '';
        this.id = 0;
        this.lat = '';
        this.lng = '';
        this.menuCtrl.enable(true);
        this._global.getCurrentPosition();
        this.lat = this._global.lat;
        this.lng = this._global.lng;
        this.myapp.staffmenu();
    }
    ionViewDidEnter() {
        this.id = this.activatedRoute.snapshot.paramMap.get('id');
        this.myapp.aboutmenu = 0;
        this.myapp.loginmenu();
    }
    getlocation() {
        this._global.getCurrentPosition();
        this.lat = this._global.lat;
        this.lng = this._global.lng;
    }
    getCurrentPosition() {
        this.geolocation.getCurrentPosition({ maximumAge: 20000, timeout: 5000,
            enableHighAccuracy: true }).then((resp) => {
            // resp.coords.latitude
            // resp.coords.longitude
            console.log("success" + JSON.stringify(resp.coords));
            this.lat = resp.coords.latitude;
            this.lng = resp.coords.longitude;
        }, er => {
            //alert("error getting location")
            console.log('Can not retrieve Location');
        }).catch((error) => {
            //alert('Error getting location'+JSON.stringify(error));
            console.log('Error getting location - ' + JSON.stringify(error));
        });
    }
    ngOnInit() {
    }
    // Login user
    loginUser() {
        this.getCurrentPosition();
        if ((this.login_email != '' && this.login_email != undefined) && (this.login_password != '' && this.login_password != undefined)) {
            // Start loader
            this._global.startWaitMessage(this, 1);
            this.httpClient.post(this._global.domainURL + "login", {
                "email": this.login_email,
                "password": this.login_password,
                "type": 2,
                "devicetoken": this._global.devicetoken
            })
                .subscribe((val) => {
                //console.log('success : ' + JSON.stringify(val));
                // Stop loader
                this._global.stopWaitMessage(this);
                if (!val.data.success) {
                    // Alert message (start)
                    let alert = this.alertCtrl.create({
                        message: val.data,
                        buttons: ['OK']
                    });
                    alert.then((_alert) => {
                        _alert.present();
                    });
                    // Alert message (end)
                }
                else {
                    this._global.token = val.data.token;
                    this._global.userid = val.data.userid;
                    this._global.userFullname = val.data.name;
                    this._global.userrole = val.data.role;
                    this._global.userrole2 = val.data.role;
                    this._global.enablenotification = val.data.notification;
                    this._global.enablenearby = val.data.nearby;
                    // Save key to storage 
                    this._global.saveToStorage(this.login_email, this.login_password, val.data.role);
                    this.myapp.addNameEmailtoMenu(val.data.name, this.login_email);
                    // Notification count
                    this.myapp.notifycount = val.data.countnotification;
                    if (this.id > 0) {
                        var id = this.id;
                        if (id == 1) {
                            if (this._global.userrole == 2) {
                                this.myapp.staffmenu();
                                this.router.navigateByUrl('/foodrequest/0/0');
                            }
                        }
                        if (id == 2) {
                            if (this._global.userrole == 2) {
                                this.myapp.staffmenu();
                                this.router.navigateByUrl('/essentialsrequest/0/0');
                            }
                        }
                        if (id == 3) {
                            if (this._global.userrole == 2) {
                                this.myapp.staffmenu();
                                this.router.navigateByUrl('/childcarerequest/0/0');
                            }
                        }
                    }
                    else {
                        if (this._global.userrole == 2) {
                            this.myapp.staffmenu();
                            this.router.navigateByUrl('/requests');
                        }
                        else {
                            this.myapp.helpermenu();
                            this.router.navigateByUrl('/searchhospitals');
                        }
                    }
                }
            }, response => {
                //alert("POST call in error"+ JSON.stringify(response) );
                console.log("POST call in error", response);
            }, () => {
                //alert("The POST observable is now completed.");
                console.log("The POST observable is now completed.");
            });
        }
        else {
            // Alert message (start)
            let alert = this.alertCtrl.create({
                message: 'Please enter Email-ID and Password',
                buttons: ['OK']
            });
            alert.then((_alert) => {
                _alert.present();
            });
            // Alert message (end)
        }
    }
    // Open register page
    openRegisterPage() {
        this.router.navigateByUrl('/register/' + this.id);
    }
    // Forgot password
    openForgotPassword() {
        this.router.navigateByUrl('/forgotpwd');
    }
    contactstaff() {
        alert("clicked");
        this._global.sendSMS("9479541927", "Req. 1");
    }
};
LoginPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__["Geolocation"] },
    { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_8__["NativeStorage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_9__["AndroidPermissions"] },
    { type: _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_10__["SMS"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__["Geolocation"],
        _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_8__["NativeStorage"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_9__["AndroidPermissions"],
        _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_10__["SMS"]])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map