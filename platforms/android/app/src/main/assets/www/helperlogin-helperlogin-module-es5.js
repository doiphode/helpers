(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["helperlogin-helperlogin-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/helperlogin/helperlogin.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/helperlogin/helperlogin.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHelperloginHelperloginPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button>\n        <img src=\"assets/menu.png\" >\n      </ion-menu-button>\n    </ion-buttons>\n    <ion-title>Helping the <img src=\"assets/logo.svg\" style=\"height: 24px; vertical-align: middle;\"></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<ion-grid>\n      <ion-row color=\"primary\" justify-content-center class='formcenter'>\n\n        <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n          <div class=\"logintitle\"  text-center>\n            <!-- <h3><img src=\"assets/icon/favicon-96x96.png\"></h3> -->\n            <h2>Log In</h2>\n          </div>\n          <div padding>\n            <ion-item>\n              <ion-input name=\"email\" type=\"email\" [(ngModel)]='login_email' placeholder=\"your@email.com\" ngModel required></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-input name=\"password\" type=\"password\" [(ngModel)]='login_password' placeholder=\"Password\" ngModel required></ion-input>\n            </ion-item>\n          </div>\n          <div padding>\n            <ion-button size=\"large\" type=\"button\" (click)='loginUser()'  expand=\"block\">Login</ion-button>\n          </div>\n          <div padding class=\"text-center forgotpwd\">\n            <span (click)='openForgotPassword()'><b>Forgot Password</b></span> \n          </div>\n          <div padding class=\"text-center\">\n          \tNot a member? <span (click)='openRegisterPage()'><b>REGISTER</b></span> \n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/helperlogin/helperlogin-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/helperlogin/helperlogin-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: HelperloginPageRoutingModule */

  /***/
  function srcAppHelperloginHelperloginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HelperloginPageRoutingModule", function () {
      return HelperloginPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _helperlogin_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./helperlogin.page */
    "./src/app/helperlogin/helperlogin.page.ts");

    const routes = [{
      path: '',
      component: _helperlogin_page__WEBPACK_IMPORTED_MODULE_3__["HelperloginPage"]
    }];
    let HelperloginPageRoutingModule = class HelperloginPageRoutingModule {};
    HelperloginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], HelperloginPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/helperlogin/helperlogin.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/helperlogin/helperlogin.module.ts ***!
    \***************************************************/

  /*! exports provided: HelperloginPageModule */

  /***/
  function srcAppHelperloginHelperloginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HelperloginPageModule", function () {
      return HelperloginPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _helperlogin_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./helperlogin-routing.module */
    "./src/app/helperlogin/helperlogin-routing.module.ts");
    /* harmony import */


    var _helperlogin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./helperlogin.page */
    "./src/app/helperlogin/helperlogin.page.ts");

    let HelperloginPageModule = class HelperloginPageModule {};
    HelperloginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _helperlogin_routing_module__WEBPACK_IMPORTED_MODULE_5__["HelperloginPageRoutingModule"]],
      declarations: [_helperlogin_page__WEBPACK_IMPORTED_MODULE_6__["HelperloginPage"]]
    })], HelperloginPageModule);
    /***/
  },

  /***/
  "./src/app/helperlogin/helperlogin.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/helperlogin/helperlogin.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHelperloginHelperloginPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".logintitle {\n  margin-top: 50px;\n  margin-bottom: 40px; }\n\n.formcenter {\n  text-align: center;\n  -webkit-box-pack: center;\n          justify-content: center; }\n\nion-grid {\n  width: 100%;\n  height: 100%;\n  background: #dfdfdf; }\n\nion-row {\n  height: 100%; }\n\nion-col {\n  background: #fff; }\n\nion-button {\n  font-weight: 300; }\n\n@media only screen and (min-width: 600px) {\n  ion-grid {\n    height: auto; } }\n\nion-content, ion-grid {\n  background: ghostwhite; }\n\nion-item {\n  /*--background: #3880ff;\r\n    --color: #fff; */\n  border: 1px solid gray;\n  margin-bottom: 5px; }\n\nion-button {\n  --background: #062f77; }\n\n.forgotpwd {\n  margin-top: 20px;\n  margin-bottom: 20px; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVscGVybG9naW4vRDpcXGlvbmljMlxcaG9zcGl0YWwvc3JjXFxhcHBcXGhlbHBlcmxvZ2luXFxoZWxwZXJsb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL2hlbHBlcmxvZ2luL2hlbHBlcmxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNRLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQTs7QUFFM0I7RUFDSSxrQkFBa0I7RUFDbEIsd0JBQXVCO1VBQXZCLHVCQUF1QixFQUFBOztBQU0zQjtFQUNJLFdBQVU7RUFDVixZQUpZO0VBS1osbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksWUFUWSxFQUFBOztBQVloQjtFQUVJLGdCQWZjLEVBQUE7O0FBa0JsQjtFQUNJLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJO0lBQ0ksWUFBWSxFQUFBLEVBQ2Y7O0FBR0w7RUFDSSxzQkFBc0IsRUFBQTs7QUFFMUI7RUFDSTtvQkNiZ0I7RURlaEIsc0JBQXNCO0VBQ3RCLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLHFCQUFhLEVBQUE7O0FBR2pCO0VBQ0ksZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvaGVscGVybG9naW4vaGVscGVybG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWxvZ2luIHtcclxuICAgIFxyXG59XHJcbi5sb2dpbnRpdGxle1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgIH1cclxuLmZvcm1jZW50ZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuJHdoaXRlLWNvbG9yOiAjZmZmO1xyXG4kaGVpZ2h0MTAwOiAxMDAlO1xyXG5cclxuaW9uLWdyaWQge1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDogJGhlaWdodDEwMDtcclxuICAgIGJhY2tncm91bmQ6ICNkZmRmZGY7XHJcbn1cclxuXHJcbmlvbi1yb3cge1xyXG4gICAgaGVpZ2h0OiAkaGVpZ2h0MTAwO1xyXG59XHJcblxyXG5pb24tY29sIHtcclxuICAgXHJcbiAgICBiYWNrZ3JvdW5kOiAkd2hpdGUtY29sb3I7XHJcbn1cclxuXHJcbmlvbi1idXR0b24ge1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xyXG4gICAgaW9uLWdyaWQge1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgIH1cclxufVxyXG5cclxuaW9uLWNvbnRlbnQsaW9uLWdyaWR7XHJcbiAgICBiYWNrZ3JvdW5kOiBnaG9zdHdoaXRlO1xyXG59XHJcbmlvbi1pdGVte1xyXG4gICAgLyotLWJhY2tncm91bmQ6ICMzODgwZmY7XHJcbiAgICAtLWNvbG9yOiAjZmZmOyAqL1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5pb24tYnV0dG9ue1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMDYyZjc3O1xyXG59XHJcblxyXG4uZm9yZ290cHdke1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn0iLCIubG9naW50aXRsZSB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7IH1cblxuLmZvcm1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XG5cbmlvbi1ncmlkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2RmZGZkZjsgfVxuXG5pb24tcm93IHtcbiAgaGVpZ2h0OiAxMDAlOyB9XG5cbmlvbi1jb2wge1xuICBiYWNrZ3JvdW5kOiAjZmZmOyB9XG5cbmlvbi1idXR0b24ge1xuICBmb250LXdlaWdodDogMzAwOyB9XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgaW9uLWdyaWQge1xuICAgIGhlaWdodDogYXV0bzsgfSB9XG5cbmlvbi1jb250ZW50LCBpb24tZ3JpZCB7XG4gIGJhY2tncm91bmQ6IGdob3N0d2hpdGU7IH1cblxuaW9uLWl0ZW0ge1xuICAvKi0tYmFja2dyb3VuZDogIzM4ODBmZjtcclxuICAgIC0tY29sb3I6ICNmZmY7ICovXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gIG1hcmdpbi1ib3R0b206IDVweDsgfVxuXG5pb24tYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMDYyZjc3OyB9XG5cbi5mb3Jnb3Rwd2Qge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4OyB9XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/helperlogin/helperlogin.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/helperlogin/helperlogin.page.ts ***!
    \*************************************************/

  /*! exports provided: HelperloginPage */

  /***/
  function srcAppHelperloginHelperloginPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HelperloginPage", function () {
      return HelperloginPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../global.service */
    "./src/app/global.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/ngx/index.js");

    let HelperloginPage = class HelperloginPage {
      constructor(alertCtrl, menuCtrl, router, _global, httpClient, loadingController, myapp, geolocation) {
        this.alertCtrl = alertCtrl;
        this.menuCtrl = menuCtrl;
        this.router = router;
        this._global = _global;
        this.httpClient = httpClient;
        this.loadingController = loadingController;
        this.myapp = myapp;
        this.geolocation = geolocation;
        this.lat = '';
        this.lng = '';
        this.hidden1 = true;
        this.login_email = 'helper1@welkinsystems.co.in';
        this.login_password = 'Password@123';
        this.menuCtrl.enable(true);

        this._global.getCurrentPosition();

        this.lat = this._global.lat;
        this.lng = this._global.lng;
      }

      getlocation() {
        this._global.getCurrentPosition();

        this.lat = this._global.lat;
        this.lng = this._global.lng;
      }

      ngOnInit() {
        console.log('domain Url : ' + this._global.domainURL);
      } // Login user


      loginUser() {
        console.log("clicked");

        if (this.login_email != '' && this.login_email != undefined && this.login_password != '' && this.login_password != undefined) {
          // Start loader
          this._global.startWaitMessage(this, 1);

          console.log('email : ' + this.login_email + ', password : ' + this.login_password);
          this.httpClient.post(this._global.domainURL + "login", {
            "email": this.login_email,
            "password": this.login_password,
            "type": 3,
            "devicetoken": this._global.devicetoken
          }).subscribe(val => {
            console.log('success : ' + JSON.stringify(val)); // Stop loader

            this._global.stopWaitMessage(this);

            if (!val.data.success) {
              console.log('data : ' + val.success + ' - yo'); // Alert message (start)

              let alert = this.alertCtrl.create({
                message: val.data,
                buttons: ['OK']
              });
              alert.then(_alert => {
                _alert.present();
              }); // Alert message (end)
            } else {
              this._global.token = val.data.token;
              this._global.userid = val.data.userid;
              this._global.userFullname = val.data.name;
              this._global.userrole = val.data.role; // Save key to storage 

              this._global.saveToStorage(this.login_email, this.login_password, val.data.role);

              this.myapp.addNameEmailtoMenu(val.data.name, this.login_email);
              this.myapp.helpermenu();
              this.router.navigateByUrl('/searchhospitals');
              console.log("POST call successful value returned in body", val.data.token);
            }
          }, response => {
            //alert("POST call in error"+ JSON.stringify(response) );
            console.log("POST call in error", response);
          }, () => {
            //alert("The POST observable is now completed.");
            console.log("The POST observable is now completed.");
          });
        } else {
          // Alert message (start)
          let alert = this.alertCtrl.create({
            message: 'Please enter Email-ID and Password',
            buttons: ['OK']
          });
          alert.then(_alert => {
            _alert.present();
          }); // Alert message (end)
        }
      } // Open register page


      openRegisterPage() {
        this.router.navigateByUrl('/register');
      } // Forgot password


      openForgotPassword() {
        this.router.navigateByUrl('/forgotpwd');
      }

    };

    HelperloginPage.ctorParameters = () => [{
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
    }, {
      type: _global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"]
    }, {
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
    }, {
      type: _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]
    }, {
      type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__["Geolocation"]
    }];

    HelperloginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-helperlogin',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./helperlogin.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/helperlogin/helperlogin.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./helperlogin.page.scss */
      "./src/app/helperlogin/helperlogin.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__["Geolocation"]])], HelperloginPage);
    /***/
  }
}]);
//# sourceMappingURL=helperlogin-helperlogin-module-es5.js.map