(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRegisterRegisterPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button>\n       \n      </ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"apphead\">Helpers</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<ion-grid>\n      <ion-row color=\"primary\" justify-content-center class='formcenter'>\n\n        <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n          <div text-center class=\"divtextcenter\">\n            <ion-label>Registration form</ion-label>\n          </div>\n          <div padding>\n            <ion-item>\n            \t<ion-input type=\"text\" class='inputel' [(ngModel)]='reg_fname' placeholder=\"First Name\"></ion-input>\n            </ion-item>\n            <ion-item>\n              \t<ion-input type=\"text\" class='inputel' [(ngModel)]='reg_lname' placeholder=\"Last Name\"></ion-input>\n            </ion-item>\n            <ion-item style='display: none;'>\n              \t<ion-input type=\"text\" class='inputel' [(ngModel)]='reg_username' placeholder=\"Username\"></ion-input>\n            </ion-item>\n            <ion-item>\n              \t<ion-input type=\"text\" class='inputel' [(ngModel)]='reg_email' placeholder=\"Email\"></ion-input>\n            </ion-item>\n            <ion-item >\n                <ion-input [(ngModel)]='reg_mobile' class='inputel' placeholder=\"Mobile number\" (keypress)=\"numberOnlyValidation($event)\" maxlength=\"11\"  ></ion-input>\n            </ion-item>\n            <ion-item>\n              \t<ion-input type=\"password\" class='inputel' [(ngModel)]='reg_password' placeholder='Password' minlength=\"6\" maxlength=\"20\"></ion-input>\n            </ion-item>\n            <ion-item> \n              \t<ion-input type=\"password\" class='inputel' [(ngModel)]='reg_confirmpassword' placeholder='Confirm Password' minlength=\"6\" maxlength=\"20\"></ion-input>\n            </ion-item>\n            <ion-item>\n            \t<ion-label class='inputel' >User Type</ion-label>\n              \t<ion-select placeholder=\"Select\" [(ngModel)]=\"usertype\" (ionChange)=\"onUsertypeChange($event)\" >\n      \t\t\t    <ion-select-option [value]=\"0\" >Select</ion-select-option>\n                <ion-select-option [value]=\"2\" >Staff</ion-select-option>\n      \t\t\t    <ion-select-option [value]=\"3\" >Helper</ion-select-option>\n      \t\t\t      \n      \t\t\t   </ion-select>\n            </ion-item>\n            <ion-item [hidden]=hiddenpostcode >\n                <ion-input [(ngModel)]=\"postcode\" placeholder='Your Postcode' (ionChange)=\"changepostcode()\" ></ion-input>\n            </ion-item>\n\n            <div [hidden]=hiddenhospitalname>\n                \n                <ion-searchbar type=\"text\" [(ngModel)]=\"hospital\" (ionInput)=\"searchHospital($event)\" placeholder=\"Enter Hospital name\" style=\"text-align: left;\"></ion-searchbar>\n\n                <ion-list *ngIf=\"hospitalList.length > 0\">\n                    <ion-item *ngFor=\"let hospital of hospitalList\" (click)=\"selectHospital(hospital['id'],hospital['name'])\"  >{{ hospital['name'] }}</ion-item>\n                </ion-list>\n            </div>\n            \n          </div>\n          <div padding>\n          \t<ion-item lines=\"none\" style=\"border: 0;\">\n              <ion-button size=\"medium\" type=\"button\" (click)='registerUser()'  expand=\"block\">REGISTER</ion-button>\n            </ion-item>\n            \n          </div>\n          <div padding class=\"text-center\" class=\"loginbutton\">\n          \t<span (click)='openLoginPage()'><b>Login</b></span> \n          </div>\n\n          <ion-item lines=\"none\" >\n              <p class=\"p_termcondition\" >By registering you agree to the <br><label class=\"termcondition\" (click)=\"openTermcondition()\">Terms and Conditions</label> & <label class=\"termcondition\" (click)=\"openPolicy()\">Privacy Policy</label></p>\n          </ion-item>\n\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/register/register-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/register/register-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: RegisterPageRoutingModule */

  /***/
  function srcAppRegisterRegisterRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function () {
      return RegisterPageRoutingModule;
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


    var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./register.page */
    "./src/app/register/register.page.ts");

    const routes = [{
      path: '',
      component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
    }];
    let RegisterPageRoutingModule = class RegisterPageRoutingModule {};
    RegisterPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], RegisterPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/register/register.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/register/register.module.ts ***!
    \*********************************************/

  /*! exports provided: RegisterPageModule */

  /***/
  function srcAppRegisterRegisterModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function () {
      return RegisterPageModule;
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


    var _register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./register-routing.module */
    "./src/app/register/register-routing.module.ts");
    /* harmony import */


    var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./register.page */
    "./src/app/register/register.page.ts");

    let RegisterPageModule = class RegisterPageModule {};
    RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _register_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterPageRoutingModule"]],
      declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
    })], RegisterPageModule);
    /***/
  },

  /***/
  "./src/app/register/register.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/register/register.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppRegisterRegisterPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".formcenter {\n  text-align: center;\n  -webkit-box-pack: center;\n          justify-content: center; }\n\n.loginbutton {\n  margin-top: 10px; }\n\n.p_termcondition {\n  text-align: center;\n  line-height: 25px;\n  width: 100%;\n  font-size: 16px; }\n\n.termcondition {\n  text-decoration: underline;\n  color: blue; }\n\n.divtextcenter {\n  margin-top: 50px;\n  margin-bottom: 10px; }\n\n.inputel {\n  font-size: 15px; }\n\nion-button {\n  --background: #5BCAA4;\n  width: 60%;\n  margin: 0 auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvRDpcXGlvbmljMlxcaG9zcGl0YWwvc3JjXFxhcHBcXHJlZ2lzdGVyXFxyZWdpc3Rlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0I7RUFDbEIsd0JBQXVCO1VBQXZCLHVCQUF1QixFQUFBOztBQUUzQjtFQUNDLGdCQUFnQixFQUFBOztBQUVqQjtFQUNDLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsV0FBVztFQUNYLGVBQWUsRUFBQTs7QUFFaEI7RUFDQywwQkFBMEI7RUFDMUIsV0FBVyxFQUFBOztBQUVaO0VBQ0MsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBOztBQUVwQjtFQUNDLGVBQWUsRUFBQTs7QUFFaEI7RUFDSSxxQkFBYTtFQUNiLFVBQVU7RUFDVixjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybWNlbnRlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5sb2dpbmJ1dHRvbntcclxuXHRtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbi5wX3Rlcm1jb25kaXRpb257XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG4udGVybWNvbmRpdGlvbntcclxuXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuXHRjb2xvcjogYmx1ZTtcclxufVxyXG4uZGl2dGV4dGNlbnRlcntcclxuXHRtYXJnaW4tdG9wOiA1MHB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLmlucHV0ZWx7XHJcblx0Zm9udC1zaXplOiAxNXB4O1xyXG59XHJcbmlvbi1idXR0b257XHJcbiAgICAtLWJhY2tncm91bmQ6ICM1QkNBQTQ7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/register/register.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/register/register.page.ts ***!
    \*******************************************/

  /*! exports provided: RegisterPage */

  /***/
  function srcAppRegisterRegisterPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterPage", function () {
      return RegisterPage;
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

    let RegisterPage = class RegisterPage {
      constructor(alertCtrl, httpClient, router, menuCtrl, _global, myapp, loadingController, activatedRoute) {
        this.alertCtrl = alertCtrl;
        this.httpClient = httpClient;
        this.router = router;
        this.menuCtrl = menuCtrl;
        this._global = _global;
        this.myapp = myapp;
        this.loadingController = loadingController;
        this.activatedRoute = activatedRoute;
        this.id = 0;
        this.hiddenhospitalname = true;
        this.hiddenpostcode = true;
        this.show = false;
        this.postcode = "";
        this.hospital = "";
        this.hospitalid = "0";
        this.hospitalList = [];
        this.hospitalList2 = [];
        this.usertype = 0;
        this.reg_fname = "";
        this.reg_lname = "";
        this.reg_username = "";
        this.reg_email = "";
        this.reg_mobile = "";
        this.reg_password = "";
        this.reg_confirmpassword = "";
        this.menuCtrl.enable(true);
      }

      ngOnInit() {
        if (this.usertype == 3 || this.usertype == 0) {
          this.hiddenhospitalname = true;
        } else {
          this.hiddenhospitalname = false;
        }
      }

      ionViewDidEnter() {
        this.id = this.activatedRoute.snapshot.paramMap.get('id');
        this.myapp.aboutmenu = 0;

        if (this._global.userid > 0) {
          if (this._global.userrole == 2) {
            this.myapp.staffmenu();
            this.router.navigateByUrl('/requests');
          }

          if (this._global.userrole == 3) {
            this.myapp.helpermenu();
            this.router.navigateByUrl('/searchhospitals');
          }
        } else {
          this.myapp.loginmenu();
        }
      }

      numberOnlyValidation(event) {
        const pattern = /[0-9.,]/;
        let inputChar = String.fromCharCode(event.charCode);

        if (!pattern.test(inputChar)) {
          // invalid character, prevent input
          event.preventDefault();
        }
      } // Register user


      registerUser() {
        var firstname = this.reg_fname.trim();
        var lastname = this.reg_lname.trim(); //var username = this.reg_username.trim();

        var email = this.reg_email.trim();
        var mobile = this.reg_mobile.toString();
        var password = this.reg_password.trim();
        var confirmpassword = this.reg_confirmpassword.trim();
        var role = this.usertype;
        var postcode = this.postcode.trim();
        var hospital = this.hospital.trim();
        var isValid = false;
        var isValidMobile = true;

        if (role == 2 && firstname != '' && lastname != '' && email != '' && password != '' && confirmpassword != '' && hospital != '') {
          postcode = "0";
          isValid = true;
        }

        if (role == 3 && firstname != '' && lastname != '' && email != '' && password != '' && confirmpassword != '' && postcode != '') {
          isValid = true;
        }

        if (firstname != '' && lastname != '' && email != '' && password != '' && confirmpassword != '' && postcode != '' && mobile.length != 11 && mobile != '') {
          isValid = false;
          isValidMobile = false;
        }

        if (isValid && mobile == '') {
          isValid = false;
          isValidMobile = false;
        }

        if (isValid && mobile.substr(0, 2) != '07') {
          isValid = false;
          isValidMobile = false;
        }

        if (isValid) {
          // Start loader
          this._global.startWaitMessage(this, 1);

          this.httpClient.post(this._global.domainURL + "register", {
            "firstname": firstname,
            "lastname": lastname,
            "email": email,
            "contact": mobile,
            "password": password,
            "confirmpassword": confirmpassword,
            "role": role,
            'postcode': postcode,
            'hospital': this.hospital,
            'hospitalid': this.hospitalid,
            "devicetoken": this._global.devicetoken
          }).subscribe(val => {
            // console.log("POST call successful value returned in body",
            //                    val);
            // Stop loader
            this._global.stopWaitMessage(this);

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
              // Alert message (start)
              let alert = this.alertCtrl.create({
                message: val.message,
                buttons: ['OK']
              });
              alert.then(_alert => {
                _alert.present();
              });
              setTimeout(() => {
                alert.then(_alert => {
                  _alert.dismiss();
                });
              }, 2000); // Alert message (end)
              // Send to Login page

              this.openLoginPage();
              /*
              if(this.id > 0 && role == 2){
                  var id = this.id;
                      this._global.token = val.data.token;
                  this._global.userid = val.data.userid;
                  this._global.userFullname = val.data.name;
                  this._global.userrole = val.data.role;
                  this._global.userrole2 = val.data.role;
                  this._global.enablenotification = val.data.notification;
                  this._global.enablenearby = val.data.nearby;
                      // Save key to storage
                  this._global.saveToStorage(email,password,val.data.role);
                      this.myapp.addNameEmailtoMenu(val.data.name,email);
                      if(id == 1){
                    if(this._global.userrole == 2){
                        this.myapp.staffmenu();
                              
                        this.router.navigateByUrl('/foodrequest/0/0');
                    }
                  }
                  if(id == 2){
                    if(this._global.userrole == 2){
                        this.myapp.staffmenu();
                              
                        this.router.navigateByUrl('/essentialsrequest/0/0');
                    }
                  }
                  if(id == 3){
                    if(this._global.userrole == 2){
                        this.myapp.staffmenu();
                              
                        this.router.navigateByUrl('/childcarerequest/0/0');
                    }
                  }
                  }else{
                  // Send to Login page
                  this.openLoginPage();
              } */
            }
          }, response => {
            console.log("POST call in error", response);
          }, () => {
            console.log("The POST observable is now completed.");
          });
        } else {
          var message = "Please fill all fields.";

          if (!isValidMobile) {
            message = "Enter a valid phone number";
          } // Alert message (start)


          let alert = this.alertCtrl.create({
            message: message,
            buttons: ['OK']
          });
          alert.then(_alert => {
            _alert.present();
          }); // Alert message (end)
        }
      }

      changepostcode() {//if(this.usertype == 2)
        //this.getHospitalList();
      }

      searchHospital(event) {
        this.hospital = event.target.value;

        if (this.hospital.trim() == '') {
          this.hospitalList = [];
          this.hospitalList2 = [];
        }

        const httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
            'Accept': 'application/json'
          })
        };
        this.httpClient.post(this._global.domainURL + "getNearHospitals", {
          "userid": 0,
          "page": 1,
          "postcode": "",
          "hospital": this.hospital
        }, httpOptions).subscribe(val => {
          if (typeof val.data != "undefined") {
            if (val.data.success == 1) {
              this.hospitalList = val.data.hospital;
              this.hospitalList2 = val.data.hospital; //  console.log('response : ' + JSON.stringify(val.data) );
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
        this.hospitalList2 = [];
      } // Open Login Page


      openLoginPage() {
        this.router.navigateByUrl('/login/' + this.id);
      }

      openLoginType() {
        this.router.navigateByUrl('/logintype');
      }

      openTermcondition() {
        this.router.navigateByUrl('/termcondition');
      }

      openPolicy() {
        this.router.navigateByUrl('/policy');
      }

      onUsertypeChange(selectedValue) {
        if (this.usertype == 3) {
          this.hiddenhospitalname = true;
          this.hiddenpostcode = false;
        } else if (this.usertype == 2) {
          this.hiddenhospitalname = false;
          this.hiddenpostcode = true;
        } else {
          this.hiddenhospitalname = true;
          this.hiddenpostcode = true;
        } // Get Area of study Schools

      }

    };

    RegisterPage.ctorParameters = () => [{
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
    }, {
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
    }, {
      type: _global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"]
    }, {
      type: _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
    }];

    RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-register',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./register.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./register.page.scss */
      "./src/app/register/register.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"], _global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"], _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])], RegisterPage);
    /***/
  }
}]);
//# sourceMappingURL=register-register-module-es5.js.map