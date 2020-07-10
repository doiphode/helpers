(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forgotpwd-forgotpwd-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/forgotpwd/forgotpwd.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forgotpwd/forgotpwd.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppForgotpwdForgotpwdPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button>\n       \n      </ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"apphead\"><img src=\"assets/banner.png\" style=\" vertical-align: middle;\"></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<ion-grid>\n      <ion-row color=\"primary\" justify-content-center class='formcenter'>\n\n        <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n          \t\n          \t<div padding [hidden]=hiddenenteremail >\n          \t\t<div class=\"logintitle\"  text-center>\n\t            \t<h2>Forgot Password</h2>\n\t          \t</div>\n            \t<ion-item class='txtitem' lines=\"none\">\n            \t\t<ion-input name=\"email\" type=\"email\" [(ngModel)]='forgot_email' placeholder=\"Enter your registered email-id\" required></ion-input>\n\n\t              \t<ion-input [(ngModel)]='code' [hidden]=hiddencode ></ion-input>\n\t            </ion-item>\n\n\t            <div >\n\t            \t<ion-item lines=\"none\" style=\"border: 0;\">\n\t            \t\t<ion-button size=\"medium\" type=\"button\" (click)='sendEmail()'  expand=\"block\" [disabled]=disablesubmit>Submit</ion-button>\n\t            \t</ion-item>\n\t            </div>\n          \t</div>\n\n\t        <div [hidden]=hiddenentercode padding>\n\t        \t<div class=\"logintitle\"  text-center>\n\t            \t<h2>Forgot Password</h2>\n\t          \t</div>\n\t        \t<ion-item lines=\"none\" style=\"width: 80%;margin: 0 auto;\" >\n\t        \t\t<p class=\"colorred\">Please check your email for a verification code.</p>\n\t        \t</ion-item>\n \n\t        \t<ion-item class='txtitem' lines=\"none\">\n            \t\t<ion-input [(ngModel)]='verifycode' placeholder=\"Enter verification code\" required></ion-input>\n\t            </ion-item>\n\n\t            <div >\n\t            \t<ion-item lines=\"none\" style=\"border: 0;\">\n\t            \t\t<ion-button size=\"medium\" type=\"button\" (click)='checkCode()'  expand=\"block\">Verify</ion-button>\n\t            \t</ion-item>\n\t            </div>\n\t        </div>\n\n\t        <div [hidden]=hiddenenterpwd padding>\n\n\t        \t<div class=\"logintitle\"  text-center>\n\t            \t<h2>Change Password</h2>\n\t          \t</div>\n\n\t        \t<ion-item class='txtitem' lines=\"none\">\n            \t\t<ion-input type=\"password\" [(ngModel)]='newpassword' placeholder=\"Enter new password\" required></ion-input>\n\t            </ion-item>\n\n\t            <div >\n\t            \t<ion-item lines=\"none\" style=\"border: 0;\">\n\t            \t\t<ion-button size=\"medium\" type=\"button\" (click)='changepassword()'  expand=\"block\">Submit</ion-button>\n\t            \t</ion-item>\n\t            </div>\n\t        </div>\n\n          \t<div padding class=\"text-center\" class=\"loginlink\">\n          \tAlready a member? <span (click)='openLogin()'><b>Login</b></span> \n          \t</div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/forgotpwd/forgotpwd-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/forgotpwd/forgotpwd-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: ForgotpwdPageRoutingModule */

  /***/
  function srcAppForgotpwdForgotpwdRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotpwdPageRoutingModule", function () {
      return ForgotpwdPageRoutingModule;
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


    var _forgotpwd_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./forgotpwd.page */
    "./src/app/forgotpwd/forgotpwd.page.ts");

    const routes = [{
      path: '',
      component: _forgotpwd_page__WEBPACK_IMPORTED_MODULE_3__["ForgotpwdPage"]
    }];
    let ForgotpwdPageRoutingModule = class ForgotpwdPageRoutingModule {};
    ForgotpwdPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ForgotpwdPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/forgotpwd/forgotpwd.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/forgotpwd/forgotpwd.module.ts ***!
    \***********************************************/

  /*! exports provided: ForgotpwdPageModule */

  /***/
  function srcAppForgotpwdForgotpwdModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotpwdPageModule", function () {
      return ForgotpwdPageModule;
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


    var _forgotpwd_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./forgotpwd-routing.module */
    "./src/app/forgotpwd/forgotpwd-routing.module.ts");
    /* harmony import */


    var _forgotpwd_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./forgotpwd.page */
    "./src/app/forgotpwd/forgotpwd.page.ts");

    let ForgotpwdPageModule = class ForgotpwdPageModule {};
    ForgotpwdPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _forgotpwd_routing_module__WEBPACK_IMPORTED_MODULE_5__["ForgotpwdPageRoutingModule"]],
      declarations: [_forgotpwd_page__WEBPACK_IMPORTED_MODULE_6__["ForgotpwdPage"]]
    })], ForgotpwdPageModule);
    /***/
  },

  /***/
  "./src/app/forgotpwd/forgotpwd.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/forgotpwd/forgotpwd.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppForgotpwdForgotpwdPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".logintitle {\n  margin-top: 50px;\n  margin-bottom: 40px; }\n\n.formcenter {\n  text-align: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  background: white; }\n\n.formcenter ion-col {\n    position: fixed;\n    top: 50%;\n    /*left: 50%;*/\n    left: 0%;\n    width: 30em;\n    height: 18em;\n    margin-top: -9em;\n    /*margin-left: -12.9em;*/\n    margin-left: 0; }\n\nion-grid {\n  width: 100%;\n  height: 100%;\n  background: #dfdfdf; }\n\nion-row {\n  height: 100%; }\n\nion-col {\n  background: #fff; }\n\nion-button {\n  font-weight: bold;\n  --background: #5BCAA4;\n  width: 60%;\n  margin: 0 auto;\n  font-size: 18px; }\n\n@media only screen and (min-width: 600px) {\n  ion-grid {\n    height: auto; } }\n\nion-content, ion-grid {\n  background: ghostwhite; }\n\n.txtitem {\n  /* --background: #3880ff;\r\n    --color: #fff; */\n  border: 1px solid gray;\n  margin-bottom: 5px;\n  width: 80%;\n  margin: 0 auto; }\n\n.colorred {\n  color: red; }\n\n.loginlink {\n  margin-top: 20px; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9yZ290cHdkL0Q6XFxpb25pYzJcXGhvc3BpdGFsL3NyY1xcYXBwXFxmb3Jnb3Rwd2RcXGZvcmdvdHB3ZC5wYWdlLnNjc3MiLCJzcmMvYXBwL2ZvcmdvdHB3ZC9mb3Jnb3Rwd2QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0ksZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLGtCQUFrQjtFQUNsQix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBRXZCLGlCQUFpQixFQUFBOztBQUpyQjtJQU9RLGVBQWU7SUFDZixRQUFRO0lBQ1IsYUFBQTtJQUNBLFFBQVE7SUFDUixXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQix3QkFBQTtJQUNBLGNBQWMsRUFBQTs7QUFPdEI7RUFDSSxXQUFVO0VBQ1YsWUFKWTtFQUtaLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLFlBVFksRUFBQTs7QUFZaEI7RUFDSSxnQkFkYyxFQUFBOztBQWtCbEI7RUFDSSxpQkFBaUI7RUFDakIscUJBQWE7RUFDYixVQUFVO0VBQ1YsY0FBYztFQUNkLGVBQWUsRUFBQTs7QUFHbkI7RUFDSTtJQUNJLFlBQVksRUFBQSxFQUNmOztBQUdMO0VBQ0ksc0JBQXNCLEVBQUE7O0FBRzFCO0VBQ0k7b0JDbkJnQjtFRHFCaEIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsY0FBYyxFQUFBOztBQUdsQjtFQUNJLFVBQVUsRUFBQTs7QUFHZDtFQUNJLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZm9yZ290cHdkL2ZvcmdvdHB3ZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtZm9yZ290cHdkIHtcclxuICAgIFxyXG59XHJcblxyXG4ubG9naW50aXRsZXtcclxuICAgXHRtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxufVxyXG5cclxuLmZvcm1jZW50ZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuXHJcbiAgICBpb24tY29se1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAvKmxlZnQ6IDUwJTsqL1xyXG4gICAgICAgIGxlZnQ6IDAlO1xyXG4gICAgICAgIHdpZHRoOiAzMGVtO1xyXG4gICAgICAgIGhlaWdodDogMThlbTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtOWVtO1xyXG4gICAgICAgIC8qbWFyZ2luLWxlZnQ6IC0xMi45ZW07Ki9cclxuICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIH1cclxufVxyXG5cclxuJHdoaXRlLWNvbG9yOiAjZmZmO1xyXG4kaGVpZ2h0MTAwOiAxMDAlO1xyXG5cclxuaW9uLWdyaWQge1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDogJGhlaWdodDEwMDtcclxuICAgIGJhY2tncm91bmQ6ICNkZmRmZGY7XHJcbn1cclxuXHJcbmlvbi1yb3cge1xyXG4gICAgaGVpZ2h0OiAkaGVpZ2h0MTAwO1xyXG59XHJcblxyXG5pb24tY29sIHtcclxuICAgIGJhY2tncm91bmQ6ICR3aGl0ZS1jb2xvcjtcclxufVxyXG5cclxuXHJcbmlvbi1idXR0b257XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIC0tYmFja2dyb3VuZDogIzVCQ0FBNDtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xyXG4gICAgaW9uLWdyaWQge1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgIH1cclxufVxyXG5cclxuaW9uLWNvbnRlbnQsaW9uLWdyaWR7XHJcbiAgICBiYWNrZ3JvdW5kOiBnaG9zdHdoaXRlO1xyXG59XHJcblxyXG4udHh0aXRlbXtcclxuICAgIC8qIC0tYmFja2dyb3VuZDogIzM4ODBmZjtcclxuICAgIC0tY29sb3I6ICNmZmY7ICovXHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4uY29sb3JyZWR7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4ubG9naW5saW5re1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufSIsIi5sb2dpbnRpdGxlIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDsgfVxuXG4uZm9ybWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHdoaXRlOyB9XG4gIC5mb3JtY2VudGVyIGlvbi1jb2wge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDUwJTtcbiAgICAvKmxlZnQ6IDUwJTsqL1xuICAgIGxlZnQ6IDAlO1xuICAgIHdpZHRoOiAzMGVtO1xuICAgIGhlaWdodDogMThlbTtcbiAgICBtYXJnaW4tdG9wOiAtOWVtO1xuICAgIC8qbWFyZ2luLWxlZnQ6IC0xMi45ZW07Ki9cbiAgICBtYXJnaW4tbGVmdDogMDsgfVxuXG5pb24tZ3JpZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNkZmRmZGY7IH1cblxuaW9uLXJvdyB7XG4gIGhlaWdodDogMTAwJTsgfVxuXG5pb24tY29sIHtcbiAgYmFja2dyb3VuZDogI2ZmZjsgfVxuXG5pb24tYnV0dG9uIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIC0tYmFja2dyb3VuZDogIzVCQ0FBNDtcbiAgd2lkdGg6IDYwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGZvbnQtc2l6ZTogMThweDsgfVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gIGlvbi1ncmlkIHtcbiAgICBoZWlnaHQ6IGF1dG87IH0gfVxuXG5pb24tY29udGVudCwgaW9uLWdyaWQge1xuICBiYWNrZ3JvdW5kOiBnaG9zdHdoaXRlOyB9XG5cbi50eHRpdGVtIHtcbiAgLyogLS1iYWNrZ3JvdW5kOiAjMzg4MGZmO1xyXG4gICAgLS1jb2xvcjogI2ZmZjsgKi9cbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IDAgYXV0bzsgfVxuXG4uY29sb3JyZWQge1xuICBjb2xvcjogcmVkOyB9XG5cbi5sb2dpbmxpbmsge1xuICBtYXJnaW4tdG9wOiAyMHB4OyB9XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/forgotpwd/forgotpwd.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/forgotpwd/forgotpwd.page.ts ***!
    \*********************************************/

  /*! exports provided: ForgotpwdPage */

  /***/
  function srcAppForgotpwdForgotpwdPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotpwdPage", function () {
      return ForgotpwdPage;
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

    let ForgotpwdPage = class ForgotpwdPage {
      constructor(alertCtrl, menuCtrl, router, _global, httpClient, loadingController, myapp) {
        this.alertCtrl = alertCtrl;
        this.menuCtrl = menuCtrl;
        this.router = router;
        this._global = _global;
        this.httpClient = httpClient;
        this.loadingController = loadingController;
        this.myapp = myapp;
        this.forgot_email = "";
        this.code = '';
        this.verifycode = '';
        this.newpassword = '';
        this.hiddencode = true;
        this.hiddenenteremail = false;
        this.hiddenentercode = true;
        this.hiddenenterpwd = true;
        this.disablesubmit = false;
        this.menuCtrl.enable(true);
      }

      ngOnInit() {}

      ionViewDidEnter() {
        this.myapp.aboutmenu = 0;
      }

      sendEmail() {
        this.getCode(10); // Get code

        var email = this.forgot_email.trim();
        console.log("email : " + email);
        var isvalid = true;

        if (email == '') {
          isvalid = false; // Alert message (start)

          let alert = this.alertCtrl.create({
            message: "Please enter email",
            buttons: ['OK']
          });
          alert.then(_alert => {
            _alert.present();
          }); // Alert message (end)
        }

        if (isvalid && !this._global.validateEmail(email)) {
          isvalid = false; // Alert message (start)

          let alert = this.alertCtrl.create({
            message: "Enter valid email-id",
            buttons: ['OK']
          });
          alert.then(_alert => {
            _alert.present();
          }); // Alert message (end)
        }

        if (isvalid) {
          const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
              'Accept': 'application/json'
            })
          };
          this.httpClient.post(this._global.domainURL + "sendemail", {
            "email": email,
            "code": this.code
          }, httpOptions).subscribe(val => {
            if (typeof val.data != "undefined") {
              console.log("data : " + JSON.stringify(val.data));

              if (val.data.success == 1) {
                this.hiddenenteremail = true;
                this.hiddenentercode = false;
                this.disablesubmit = true;
              } else {
                this.disablesubmit = false;
              } // Alert message (start)


              let alert = this.alertCtrl.create({
                message: val.message,
                buttons: ['OK']
              });
              alert.then(_alert => {
                _alert.present();
              }); // Alert message (end)
            }
          }, response => {
            console.log("Get call in error", response);
          }, () => {
            console.log("The Get observable is now completed.");
          });
        }
      }

      checkCode() {
        var verifycode = this.verifycode.trim();

        if (verifycode == this.code) {
          this.hiddenentercode = true;
          this.hiddenenterpwd = false;
        } else {
          // Alert message (start)
          let alert = this.alertCtrl.create({
            message: "Verification code not matching",
            buttons: ['OK']
          });
          alert.then(_alert => {
            _alert.present();
          }); // Alert message (end)
        }
      }

      changepassword() {
        var password = this.newpassword.trim();
        var email = this.forgot_email.trim();

        if (password != '') {
          const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
              'Accept': 'application/json'
            })
          };
          this.httpClient.post(this._global.domainURL + "updatepassword", {
            "email": email,
            "password": password
          }, httpOptions).subscribe(val => {
            if (typeof val.data != "undefined") {
              console.log("data : " + JSON.stringify(val.data));

              if (val.data.success == 1) {
                this.hiddencode = true;
                this.hiddenenteremail = false;
                this.hiddenentercode = true;
                this.hiddenenterpwd = true;
                this.disablesubmit = false; // Alert message (start)

                let alert = this.alertCtrl.create({
                  message: val.message,
                  buttons: ['OK']
                });
                alert.then(_alert => {
                  _alert.present();
                }); // Alert message (end)

                this.router.navigateByUrl('/login/0');
              } else {
                // Alert message (start)
                let alert = this.alertCtrl.create({
                  message: val.message,
                  buttons: ['OK']
                });
                alert.then(_alert => {
                  _alert.present();
                }); // Alert message (end)
              }
            }
          }, response => {
            console.log("Get call in error", response);
          }, () => {
            console.log("The Get observable is now completed.");
          });
        } else {
          // Alert message (start)
          let alert = this.alertCtrl.create({
            message: "Please enter password.",
            buttons: ['OK']
          });
          alert.then(_alert => {
            _alert.present();
          }); // Alert message (end)
        }
      }

      getCode(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789#';
        var charactersLength = characters.length;

        for (var i = 0; i < length; i++) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }

        this.code = result;
      } // Open Login Page


      openLogin() {
        this.router.navigateByUrl('/login/0');
      }

    };

    ForgotpwdPage.ctorParameters = () => [{
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
    }];

    ForgotpwdPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-forgotpwd',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./forgotpwd.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/forgotpwd/forgotpwd.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./forgotpwd.page.scss */
      "./src/app/forgotpwd/forgotpwd.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]])], ForgotpwdPage);
    /***/
  }
}]);
//# sourceMappingURL=forgotpwd-forgotpwd-module-es5.js.map