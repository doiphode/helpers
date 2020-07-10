(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfileProfilePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button>\n        \n      </ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"apphead\"><img src=\"assets/banner.png\" style=\" vertical-align: middle;\"></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <ion-row>\n       \t<ion-col style='font-size: 15px;'>\n\n            <ion-grid style=\"margin-top: 20px;\">\n                  <ion-row class=\"row\">\n                    <ion-col class=\"col1\" size='3.5'>\n                        <ion-label>First Name</ion-label>\n                    </ion-col>\n                    <ion-col class=\"col2\" size='8.5'>\n                      <ion-input type=\"text\" [(ngModel)]='firstname' placeholder=\"First Name\" class=\"textel\" required ></ion-input>\n                    </ion-col>\n                  \n                  </ion-row>\n\n                  <ion-row class=\"row\">\n                    <ion-col class=\"col1\" size='3.5'>\n                        <ion-label>Last Name</ion-label>\n                    </ion-col>\n                    <ion-col class=\"col2\" size='8.5'>\n                      <ion-input type=\"text\" [(ngModel)]='lastname' placeholder=\"Last Name\" class=\"textel\" name=\"name\" required></ion-input>\n                    </ion-col>\n                  \n                  </ion-row>\n\n                  <ion-row class=\"row\">\n                    <ion-col class=\"col1\" size='3.5'>\n                        <ion-label>Email</ion-label>\n                    </ion-col>\n                    <ion-col class=\"col2 collbl\" size='8.5' style=\"margin-bottom: 17px; padding-left: 13px;\">\n                      <ion-label>{{email}}</ion-label>  \n                      <ion-input type=\"text\" [(ngModel)]='email' placeholder=\"Email\" name=\"email\" class=\"textel\" style=\"display: none;\" disabled></ion-input>\n                    </ion-col>\n                  \n                  </ion-row>\n\n                  <ion-row class=\"row\" *ngIf=\"userrole == 3\">\n                    <ion-col class=\"col1\" size='3.5'>\n                        <ion-label>Postcode</ion-label>\n                    </ion-col>\n                    <ion-col class=\"col2\" size='8.5'>\n                      <ion-input type=\"text\" [(ngModel)]='postcode' placeholder=\"Postcode\" class=\"textel\" name=\"postcode\"  ></ion-input>\n                    </ion-col>\n                  \n                  </ion-row>\n\n                  <ion-row  class=\"row\" *ngIf=\"userrole == 2\">\n                    <ion-col class=\"col1\" size='3.5'>\n                        <ion-label>Hospital</ion-label>\n                    </ion-col>\n                    <ion-col class=\"col2 \" size='8.5' >\n                      <ion-input type=\"text\" [(ngModel)]='hospital' placeholder=\"Hospital\" class=\"textel\" name=\"hospital\" (ionInput)=\"searchHospital($event)\"></ion-input>\n                    </ion-col>\n                  \n                  </ion-row>\n\n                  <ion-row [hidden]=hiddenhospital class=\"row\" *ngIf=\"userrole == 2\"> \n                      <ion-col size='12'>\n                        <div >\n                          <strong *ngIf=\"hospitalList.length == 0\">{{searchlabel}}</strong>\n                          <ion-list *ngIf=\"hospitalList.length > 0\">\n                              <ion-item *ngFor=\"let hospital of hospitalList\" (click)=\"selectHospital(hospital['id'],hospital['name'])\"  >{{ hospital['name'] }}</ion-item>\n                          </ion-list>\n                      </div>\n                      </ion-col>\n                  </ion-row>\n\n                  <ion-row class=\"row\" >\n                    <ion-col class=\"col1\" size='3.5'>\n                        <ion-label>Phone</ion-label>\n                    </ion-col>\n                    <ion-col class=\"col2\" size='8.5'>\n\n                      <ion-input  [(ngModel)]='contact' placeholder=\"Your contact no.\" name=\"contact\" (keypress)=\"numberOnlyValidation($event)\" maxlength=\"11\" class=\"textel\" ></ion-input>\n                    </ion-col>\n                  \n                  </ion-row>\n\n                  <ion-row class=\"row\" *ngIf=\"userrole == 2\" style=\"padding-bottom: 15px;\">\n                    <ion-col class=\"col1\" size='3.5'>\n                        <ion-label>User type</ion-label>\n                    </ion-col>\n                    <ion-col class=\"col2 collbl\" size='8.5' style=\" padding-left: 13px;\">\n                        <ion-label >Staff</ion-label>\n                    </ion-col>\n                  \n                  </ion-row>\n \n                  <ion-row class=\"row\" *ngIf=\"userrole == 3\" style=\"padding-bottom: 15px;\">\n                    <ion-col class=\"col1\" size='3.5'>\n                        <ion-label>User type</ion-label>\n                    </ion-col>\n                    <ion-col class=\"col2 collbl\" size='8.5' style=\"  padding-left: 13px;\">\n                        <ion-label >Helper</ion-label>\n                    </ion-col>\n                  \n                  </ion-row>\n\n                  <ion-row class=\"changepwdrow\" >\n                    <ion-col class=\"col1\" style=\"line-height: 14px;\" >\n                        <ion-label class=\"changepassword\" (click)=\"toggleChangePassword()\"><strong>Change your password</strong></ion-label>\n                    </ion-col>\n                    \n                  </ion-row>\n\n                  <ion-row class=\"row\" [hidden]=hiddenpassword>\n                    <ion-col class=\"col1\" size='3.5'>\n                        <ion-label style=\"vertical-align: middle;\">Current Password</ion-label>\n                    </ion-col>\n                    <ion-col class=\"col2\" size='8.5'>\n                        <ion-input type=\"password\" [(ngModel)]='oldpassword' placeholder=\"Enter current password\" minlength=\"6\" maxlength=\"20\" class=\"textel\" ></ion-input>\n                    </ion-col>\n                  \n                  </ion-row>\n\n                  <ion-row class=\"row\" [hidden]=hiddenpassword>\n                    <ion-col class=\"col1\" size='3.5'>\n                        <ion-label>Password</ion-label>\n                    </ion-col>\n                    <ion-col class=\"col2\" size='8.5'>\n                        <ion-input type=\"password\" [(ngModel)]='password' placeholder=\"Enter new password\" minlength=\"6\" maxlength=\"20\" class=\"textel\" ></ion-input>\n                    </ion-col>\n                  \n                  </ion-row>\n\n                   <ion-row class=\"row\" [hidden]=hiddenpassword>\n                    <ion-col class=\"col1\" size='3.5'>\n                        <ion-label style=\"vertical-align: middle;\">Re-enter password</ion-label>\n                    </ion-col>\n                    <ion-col class=\"col2\" size='8.5'>\n                        <ion-input type=\"password\" [(ngModel)]='repassword' placeholder=\"Re-enter password\" minlength=\"6\" maxlength=\"20\" class=\"textel\" ></ion-input>\n                    </ion-col>\n                  \n                  </ion-row>\n\n\n\n              </ion-grid>\n\n        </ion-col>\n    </ion-row>\n\n    <ion-row *ngIf=\" (userrole == 2 || userrole == 3) && userid > 0 && userrole2 == userrole\" >\n       \t<ion-item class=\"signup-col\" lines=\"none\" style=\"margin: 0 auto;\">\n          \t<ion-button size=\"medium\" class=\"submit-btn\" (click)=\"updateProfile()\" full type=\"submit\" >Save</ion-button>\n       \t</ion-item>\n    </ion-row>\n\n    <ion-row style=\"display: none;\" >\n        <ion-col class=\"col1 deleteaccount\" style=\"font-size: 15px;\" >\n            <ion-label (click)=\"deleteAccount()\"><strong>Delete my account</strong></ion-label>\n        </ion-col>\n    </ion-row>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/profile/profile-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/profile/profile-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: ProfilePageRoutingModule */

  /***/
  function srcAppProfileProfileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function () {
      return ProfilePageRoutingModule;
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


    var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./profile.page */
    "./src/app/profile/profile.page.ts");

    const routes = [{
      path: '',
      component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    }];
    let ProfilePageRoutingModule = class ProfilePageRoutingModule {};
    ProfilePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ProfilePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/profile/profile.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/profile/profile.module.ts ***!
    \*******************************************/

  /*! exports provided: ProfilePageModule */

  /***/
  function srcAppProfileProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function () {
      return ProfilePageModule;
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


    var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./profile-routing.module */
    "./src/app/profile/profile-routing.module.ts");
    /* harmony import */


    var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./profile.page */
    "./src/app/profile/profile.page.ts");

    let ProfilePageModule = class ProfilePageModule {};
    ProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"]],
      declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
    })], ProfilePageModule);
    /***/
  },

  /***/
  "./src/app/profile/profile.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/profile/profile.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfileProfilePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".row {\n  border-bottom: 1px solid darkgray; }\n  .row .col1 ion-label {\n    line-height: 0;\n    vertical-align: bottom; }\n  .row .col2 {\n    color: darkgray;\n    text-align: right; }\n  .row .col2 .textel {\n      --placeholder-opacity: 1 !important; }\n  .row .col2 ion-label {\n      line-height: 0;\n      vertical-align: bottom; }\n  .changepwdrow {\n  margin-top: 15px;\n  padding-bottom: 15px;\n  border: 0; }\n  .changepassword {\n  color: #5BCAA4;\n  line-height: 1px; }\n  .deleteaccount {\n  bottom: 0;\n  position: absolute;\n  margin: 0 auto;\n  text-align: center;\n  margin-bottom: 40px;\n  color: darkgray;\n  line-height: 1px; }\n  .collbl.ios {\n  padding-left: 8px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9EOlxcaW9uaWMyXFxob3NwaXRhbC9zcmNcXGFwcFxccHJvZmlsZVxccHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxpQ0FBaUMsRUFBQTtFQURsQztJQUlHLGNBQWM7SUFDZCxzQkFBc0IsRUFBQTtFQUx6QjtJQVNFLGVBQWU7SUFDZixpQkFBaUIsRUFBQTtFQVZuQjtNQVlHLG1DQUFzQixFQUFBO0VBWnpCO01BZ0JHLGNBQWM7TUFDZCxzQkFBc0IsRUFBQTtFQUt6QjtFQUNDLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsU0FBUyxFQUFBO0VBR1Y7RUFDSSxjQUFjO0VBQ2pCLGdCQUFnQixFQUFBO0VBR2pCO0VBQ0MsU0FBUztFQUNOLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUN0QixlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7RUFHakI7RUFDQyw0QkFBNEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93e1xyXG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBkYXJrZ3JheTtcclxuXHQuY29sMXtcclxuXHRcdGlvbi1sYWJlbHtcclxuXHRcdFx0bGluZS1oZWlnaHQ6IDA7XHJcblx0XHRcdHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcblx0XHR9XHJcblx0fVxyXG5cdC5jb2wye1xyXG5cdFx0Y29sb3I6IGRhcmtncmF5O1xyXG5cdFx0dGV4dC1hbGlnbjogcmlnaHQ7XHJcblx0XHQudGV4dGVse1xyXG5cdFx0XHQtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDEgIWltcG9ydGFudDtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0aW9uLWxhYmVse1xyXG5cdFx0XHRsaW5lLWhlaWdodDogMDtcclxuXHRcdFx0dmVydGljYWwtYWxpZ246IGJvdHRvbTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbi5jaGFuZ2Vwd2Ryb3d7XHJcblx0bWFyZ2luLXRvcDogMTVweDtcclxuXHRwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuXHRib3JkZXI6IDA7XHJcbn1cclxuXHJcbi5jaGFuZ2VwYXNzd29yZHtcclxuICAgIGNvbG9yOiAjNUJDQUE0O1xyXG5cdGxpbmUtaGVpZ2h0OiAxcHg7XHJcbn1cclxuXHJcbi5kZWxldGVhY2NvdW50e1x0XHJcblx0Ym90dG9tOiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG5cdGNvbG9yOiBkYXJrZ3JheTtcclxuXHRsaW5lLWhlaWdodDogMXB4O1x0XHJcbn1cclxuXHJcbi5jb2xsYmwuaW9ze1xyXG5cdHBhZGRpbmctbGVmdDogOHB4ICFpbXBvcnRhbnQ7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/profile/profile.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/profile/profile.page.ts ***!
    \*****************************************/

  /*! exports provided: ProfilePage */

  /***/
  function srcAppProfileProfilePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePage", function () {
      return ProfilePage;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../global.service */
    "./src/app/global.service.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../app.component */
    "./src/app/app.component.ts");

    let ProfilePage = class ProfilePage {
      constructor(alertCtrl, httpClient, router, _global, loadingController, myapp) {
        this.alertCtrl = alertCtrl;
        this.httpClient = httpClient;
        this.router = router;
        this._global = _global;
        this.loadingController = loadingController;
        this.myapp = myapp;
        this.userData = [];
        this.firstname = '';
        this.lastname = '';
        this.email = '-';
        this.contact = '';
        this.hospital = '-';
        this.hospitalid = 0;
        this.oldpassword = '';
        this.password = '';
        this.repassword = '';
        this.userrole = '';
        this.userrole2 = '';
        this.userid = '';
        this.postcode = '';
        this.searchrequest = '';
        this.searchrequestcount = 0;
        this.hiddenpassword = true;
        this.hiddenhospital = true;
        this.hospitalList = [];
        this.searchlabel = "Searching...";
      }

      ngOnInit() {
        this.getUserDetails();
      }

      ionViewDidEnter() {
        this.myapp.aboutmenu = 0;
        this.getUserDetails();
      }

      toggleChangePassword() {
        this.hiddenpassword = !this.hiddenpassword;
      }

      numberOnlyValidation(event) {
        const pattern = /[0-9.,]/;
        let inputChar = String.fromCharCode(event.charCode);

        if (!pattern.test(inputChar)) {
          // invalid character, prevent input
          event.preventDefault();
        }
      }

      getUserDetails() {
        this.userrole = this._global.userrole;
        this.userrole2 = this._global.userrole2;
        this.userid = this._global.userid;
        var userid = this._global.userid;
        var token = this._global.token;
        const httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + token
          })
        };

        if (userid > 0 && this.userrole2 == this.userrole) {
          this.httpClient.post(this._global.domainURL + "user", {
            "userid": userid
          }, httpOptions).subscribe(val => {
            if (typeof val.data != "undefined") {
              this.userData = val.data;
              this.firstname = val.data.firstname;
              this.lastname = val.data.lastname;
              this.email = val.data.email;
              this.hospital = val.data.hospital;
              this.hospitalid = val.data.hospitalid;
              this.contact = val.data.contact;
              this.postcode = val.data.postcode; //console.log('response : ' + JSON.stringify(val.data) );
              // Notification count

              this.myapp.notifycount = val.data.countnotification;
            }
          }, response => {
            console.log("Get call in error", response);
          }, () => {
            console.log("The Get observable is now completed.");
          });
        }
      }

      updateProfile() {
        var userid = this._global.userid;
        var firstname = this.firstname.trim();
        var lastname = this.lastname.trim();
        var oldpassword = this.oldpassword.trim();
        var password = this.password.trim();
        var repassword = this.repassword.trim();
        var contact = this.contact.toString().trim();
        var postcode = this.postcode.trim();
        var valid = true;

        if (firstname == '' && lastname == '') {
          valid = false; // Alert message (start)

          let alert = this.alertCtrl.create({
            message: "Please enter Firstname and Lastname",
            buttons: ['OK']
          });
          alert.then(_alert => {
            _alert.present();
          }); // Alert message (end)
        }

        if (valid && oldpassword != '' && (password == '' || repassword == '')) {
          valid = false; // Alert message (start)

          let alert = this.alertCtrl.create({
            message: "Please enter new password and confirm password",
            buttons: ['OK']
          });
          alert.then(_alert => {
            _alert.present();
          }); // Alert message (end)
        }

        if (valid && contact.length != 11 && contact != '') {
          valid = false; // Alert message (start)

          let alert = this.alertCtrl.create({
            message: "Enter a valid phone number",
            buttons: ['OK']
          });
          alert.then(_alert => {
            _alert.present();
          }); // Alert message (end)
        }

        if (valid && contact.substr(0, 2) != '07') {
          valid = false; // Alert message (start)

          let alert = this.alertCtrl.create({
            message: "Enter a valid phone number",
            buttons: ['OK']
          });
          alert.then(_alert => {
            _alert.present();
          }); // Alert message (end)
        }

        if (this._global.userrole == 2 && valid && !(this.hospital.trim() != '' && this.hospitalid > 0)) {
          valid = false;
          console.log("id : " + this.hospitalid + ", name : " + this.hospital); // Alert message (start)

          let alert = this.alertCtrl.create({
            message: "Please select a hospital.",
            buttons: ['OK']
          });
          alert.then(_alert => {
            _alert.present();
          }); // Alert message (end)
        }

        if (valid) {
          const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              'Accept': 'application/json',
              'Authorization': 'Bearer ' + this._global.token
            })
          };
          this.httpClient.post(this._global.domainURL + "updateuser", {
            "userid": userid,
            "firstname": firstname,
            "lastname": lastname,
            "oldpassword": oldpassword,
            "password": password,
            "confirmpassword": repassword,
            "contact": contact,
            "postcode": postcode,
            "hospitalid": this.hospitalid,
            "hospital": this.hospital.trim()
          }, httpOptions).subscribe(val => {
            if (typeof val.data != "undefined") {
              // Notification count
              this.myapp.notifycount = val.data.countnotification;

              if (!val.data.success) {
                // Alert message (start)
                let alert = this.alertCtrl.create({
                  message: val.message,
                  buttons: ['OK']
                });
                alert.then(_alert => {
                  _alert.present();
                }); // Alert message (end)
              } else {
                var message = val.message;
                this.oldpassword = "";
                this.password = "";
                this.repassword = "";

                this._global.showToast(message); // Send toast notification

              } //console.log('response : ' + JSON.stringify(val.data) );

            }
          }, response => {
            console.log("Get call in error", response);
          }, () => {
            console.log("The Get observable is now completed.");
          });
        }
      }

      searchHospital(event) {
        this.hospital = event.target.value;

        if (this.hospital.trim() == '') {
          this.hospitalList = [];
          this.hiddenhospital = true;
        }

        this.hiddenhospital = true;
        const httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Accept': 'application/json'
          })
        };

        if (this.searchrequestcount > 0) {
          this.searchrequest.unsubscribe(); // To cancel the get request.
        }

        this.searchrequestcount += 1;
        this.searchrequest = this.httpClient.post(this._global.domainURL + "getNearHospitals", {
          "userid": 0,
          "page": 1,
          "postcode": "",
          "hospital": this.hospital
        }, httpOptions).subscribe(val => {
          if (typeof val.data != "undefined") {
            if (val.data.success == 1) {
              this.hiddenhospital = false;
              this.hospitalList = val.data.hospital;
              this.searchrequestcount = 0;

              if (this.hospitalList.length == 0) {
                this.searchlabel = "Not found.";
              } //  console.log('response : ' + JSON.stringify(val.data) );
              // Notification count


              this.myapp.notifycount = val.data.countnotification;
            }
          }
        }, response => {
          console.log("Get call in error", response);
        }, () => {
          console.log("The Get observable is now completed.");
        });
      }

      selectHospital(id, name) {
        //  console.log("select hospital : " + name + ", id : " + id);
        this.hospital = name;
        this.hospitalid = id;
        this.hospitalList = [];
        this.hiddenhospital = true;
      }

      deleteAccount() {
        this.presentAlertConfirm();
      }

      presentAlertConfirm() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const alert = yield this.alertCtrl.create({
            header: 'Confirm!',
            message: 'Are you sure?',
            buttons: [{
              text: 'Cancel',
              role: 'cancel',
              cssClass: 'secondary',
              handler: blah => {
                console.log('Confirm Cancel: blah');
              }
            }, {
              text: 'Okay',
              handler: () => {
                console.log('Confirm Okay');
                var token = this._global.token;
                var userid = this._global.userid;
                const httpOptions = {
                  headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + token
                  })
                };
                this.httpClient.post(this._global.domainURL + "deleteaccount", {
                  "userid": userid
                }, httpOptions).subscribe(val => {
                  if (typeof val.data != "undefined") {
                    var message = val.message;

                    this._global.showToast(message); // Send toast notification                


                    if (val.data.success == 1) {
                      // Notification count
                      this.myapp.notifycount = val.data.countnotification;
                      this.myapp.logout();
                      console.log('response : ' + JSON.stringify(val.data));
                    }
                  }
                }, response => {
                  console.log("Get call in error", response);
                }, () => {
                  console.log("The Get observable is now completed.");
                });
              }
            }]
          });
          yield alert.present();
        });
      }

    };

    ProfilePage.ctorParameters = () => [{
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
    }, {
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
    }, {
      type: _global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
    }, {
      type: _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]
    }];

    ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./profile.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./profile.page.scss */
      "./src/app/profile/profile.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]])], ProfilePage);
    /***/
  }
}]);
//# sourceMappingURL=profile-profile-module-es5.js.map