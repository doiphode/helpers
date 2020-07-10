(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["givefeedback-givefeedback-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/givefeedback/givefeedback.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/givefeedback/givefeedback.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppGivefeedbackGivefeedbackPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button>\n       \n      </ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"apphead\"><img src=\"assets/banner.png\" style=\" vertical-align: middle;\"></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<ion-grid>\n      <ion-row color=\"primary\" justify-content-center class='formcenter'>\n\n        <ion-col align-self-center size-md=\"12\" size-lg=\"12\" size-xs=\"12\">\n          \t\n          \t<div padding >\n          \t\t<div class=\"logintitle\"  text-center>\n\t            \t<h2>Give feedback</h2>\n\t          \t</div>\n            \t<ion-item lines=\"none\">\n            \t\t <ion-textarea class=\"feedbacktextarea\" placeholder=\"Enter feedback\" [(ngModel)]='feedback' maxlength=\"400\" row=\"15\" style=\"height: 180px;\" ></ion-textarea>\n\t              \t\n\t            </ion-item>\n\n\t            <ion-item lines=\"none\" >\n\t            \t<ion-button size=\"default\" type=\"button\"  expand=\"block\" (click)=\"submitFeedback()\">Submit</ion-button>\n\t            </ion-item>\n          \t</div>\n\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/givefeedback/givefeedback-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/givefeedback/givefeedback-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: GivefeedbackPageRoutingModule */

  /***/
  function srcAppGivefeedbackGivefeedbackRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GivefeedbackPageRoutingModule", function () {
      return GivefeedbackPageRoutingModule;
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


    var _givefeedback_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./givefeedback.page */
    "./src/app/givefeedback/givefeedback.page.ts");

    const routes = [{
      path: '',
      component: _givefeedback_page__WEBPACK_IMPORTED_MODULE_3__["GivefeedbackPage"]
    }];
    let GivefeedbackPageRoutingModule = class GivefeedbackPageRoutingModule {};
    GivefeedbackPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], GivefeedbackPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/givefeedback/givefeedback.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/givefeedback/givefeedback.module.ts ***!
    \*****************************************************/

  /*! exports provided: GivefeedbackPageModule */

  /***/
  function srcAppGivefeedbackGivefeedbackModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GivefeedbackPageModule", function () {
      return GivefeedbackPageModule;
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


    var _givefeedback_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./givefeedback-routing.module */
    "./src/app/givefeedback/givefeedback-routing.module.ts");
    /* harmony import */


    var _givefeedback_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./givefeedback.page */
    "./src/app/givefeedback/givefeedback.page.ts");

    let GivefeedbackPageModule = class GivefeedbackPageModule {};
    GivefeedbackPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _givefeedback_routing_module__WEBPACK_IMPORTED_MODULE_5__["GivefeedbackPageRoutingModule"]],
      declarations: [_givefeedback_page__WEBPACK_IMPORTED_MODULE_6__["GivefeedbackPage"]]
    })], GivefeedbackPageModule);
    /***/
  },

  /***/
  "./src/app/givefeedback/givefeedback.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/givefeedback/givefeedback.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppGivefeedbackGivefeedbackPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".logintitle {\n  margin-top: 50px;\n  margin-bottom: 40px; }\n\n.formcenter {\n  text-align: center;\n  -webkit-box-pack: center;\n          justify-content: center; }\n\nion-textarea {\n  border: 1px solid gray;\n  padding: 8px;\n  border-radius: 5px;\n  height: 190px;\n  margin-bottom: 20px; }\n\nion-button {\n  margin: 0 auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2l2ZWZlZWRiYWNrL0Q6XFxpb25pYzJcXGhvc3BpdGFsL3NyY1xcYXBwXFxnaXZlZmVlZGJhY2tcXGdpdmVmZWVkYmFjay5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksa0JBQWtCO0VBQ2xCLHdCQUF1QjtVQUF2Qix1QkFBdUIsRUFBQTs7QUFHM0I7RUFDQyxzQkFBc0I7RUFDbkIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0MsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZ2l2ZWZlZWRiYWNrL2dpdmVmZWVkYmFjay5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmxvZ2ludGl0bGV7XHJcbiAgIFx0bWFyZ2luLXRvcDogNTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbn1cclxuXHJcbi5mb3JtY2VudGVye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbmlvbi10ZXh0YXJlYXtcclxuXHRib3JkZXI6IDFweCBzb2xpZCBncmF5O1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgaGVpZ2h0OiAxOTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbmlvbi1idXR0b257XHJcblx0bWFyZ2luOiAwIGF1dG87XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/givefeedback/givefeedback.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/givefeedback/givefeedback.page.ts ***!
    \***************************************************/

  /*! exports provided: GivefeedbackPage */

  /***/
  function srcAppGivefeedbackGivefeedbackPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GivefeedbackPage", function () {
      return GivefeedbackPage;
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

    let GivefeedbackPage = class GivefeedbackPage {
      constructor(alertCtrl, menuCtrl, router, _global, httpClient, loadingController, myapp) {
        this.alertCtrl = alertCtrl;
        this.menuCtrl = menuCtrl;
        this.router = router;
        this._global = _global;
        this.httpClient = httpClient;
        this.loadingController = loadingController;
        this.myapp = myapp;
        this.feedback = '';
        this.menuCtrl.enable(true);
      }

      ngOnInit() {}

      ionViewDidEnter() {
        this.myapp.aboutmenu = 0;
        this.getFeedback();
      }

      getFeedback() {
        var userid = this._global.userid;
        var token = this._global.token;
        const httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + token
          })
        };

        if (userid > 0) {
          this.httpClient.post(this._global.domainURL + "getFeedback", {
            "userid": userid
          }, httpOptions).subscribe(val => {
            if (typeof val.data != "undefined") {
              this.feedback = val.data.feedback;
              console.log('response : ' + JSON.stringify(val.data));
            }
          }, response => {
            console.log("Get call in error", response);
          }, () => {
            console.log("The Get observable is now completed.");
          });
        }
      }

      submitFeedback() {
        var feedback = this.feedback.trim();

        if (feedback != '') {
          var userid = this._global.userid;
          var token = this._global.token;
          const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
              'Accept': 'application/json',
              'Authorization': 'Bearer ' + token
            })
          };
          this.httpClient.post(this._global.domainURL + "givefeedback", {
            "userid": userid,
            "feedback": feedback
          }, httpOptions).subscribe(val => {
            if (typeof val.data != "undefined") {
              var message = val.message;
              console.log('response : ' + JSON.stringify(val.data));

              this._global.showToast(message); // Send toast notification

            }
          }, response => {
            console.log("Get call in error", response);
          }, () => {
            console.log("The Get observable is now completed.");
          });
        } else {
          // Alert message (start)
          let alert = this.alertCtrl.create({
            message: "Please enter feedback",
            buttons: ['OK']
          });
          alert.then(_alert => {
            _alert.present();
          }); // Alert message (end)
        }
      }

    };

    GivefeedbackPage.ctorParameters = () => [{
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

    GivefeedbackPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-givefeedback',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./givefeedback.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/givefeedback/givefeedback.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./givefeedback.page.scss */
      "./src/app/givefeedback/givefeedback.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]])], GivefeedbackPage);
    /***/
  }
}]);
//# sourceMappingURL=givefeedback-givefeedback-module-es5.js.map