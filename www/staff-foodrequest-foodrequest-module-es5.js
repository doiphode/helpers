(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["staff-foodrequest-foodrequest-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/staff/foodrequest/foodrequest.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/staff/foodrequest/foodrequest.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppStaffFoodrequestFoodrequestPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"myrequests\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"apphead\"><img src=\"../assets/banner.png\" style=\" vertical-align: middle;\"></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\t<ion-grid class=\"requestgrid\" >\n      <ion-row color=\"primary\" justify-content-center class='formcenter'>\n\n        <ion-col align-self-center size-md=\"12\" size-lg=\"12\" size-xs=\"12\">\n          <div class=\"divtextcenter\"  text-center>\n            <!-- <h3><img src=\"assets/icon/favicon-96x96.png\"></h3> -->\n            <label >Request for...</label>\n          </div> \n          \n          <div  padding>\n            <h3 class=\"requestitemheading\" color=\"tertiary\">Food</h3>\n          </div>\n\n          <div padding *ngIf=\"status==1\" lines=\"none\" style=\"margin-top: 10px;\">\n              <ion-button size=\"medium\" type=\"button\" class=\"requestsbutton\" (click)=\"contactstaff()\">Contact</ion-button>\n                \n          </div>\n\n          <ion-item class=\"divraw\" [hidden]=hiddenitems >\n            <label >Raw</label>\n          </ion-item>\n          \n          <div padding [hidden]=hiddenitems>\n            <ion-list>\n\t\t\t  \t    <ion-item *ngFor=\"let product of productsList;\" >\n\t\t\t    \t    <ion-label>{{product['name']}}</ion-label>\n\t\t\t    \t    <ion-checkbox slot=\"end\" [(ngModel)]='product.checked' value=\"{{product['id']}}\" disabled=\"{{product.disabled}}\" ></ion-checkbox>\n\t\t\t  \t    </ion-item>\n\n              <ion-item>\n                <ion-label>Other</ion-label>\n                <ion-checkbox slot=\"end\" [(ngModel)]='checkother' value=\"other\" (ionChange)=\"selectOther()\" [disabled]=disableother></ion-checkbox>\n              </ion-item>\n\t\t\t      </ion-list> \n\n            <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadMore($event)\">\n              <ion-infinite-scroll-content\n                loadingSpinner=\"bubbles\"\n                loadingText=\"Loading more data...\">\n              </ion-infinite-scroll-content>\n            </ion-infinite-scroll>\n\n          </div>\n\n          \n\n          <div [hidden]=hiddennotifications >\n              <ion-item class=\"divraw\" *ngIf=\"notificationList.length > 0\">\n                <label >Notifications</label>\n              </ion-item>\n\n              <table width='100%' border='1' style='border-collapse: collapse;' *ngIf=\"notificationList.length > 0\">\n                  <thead>\n                      <tr>\n                        <th widht='60%'>Notification</th>\n                        <th widht='40%'>Date & Time</th>\n                      </tr>\n                  </thead>\n                  <tbody>\n                      <tr *ngFor=\"let item of notificationList;\">\n                        <td>{{item['message']}}</td>\n                        <td>{{item['created_at']}}</td>\n                      </tr>\n                  </tbody>\n              </table>\n          </div>\n\n          <div [hidden]=hiddenviewhelperdetails class=\"helperdetail\">\n\n              <ion-grid style=\"margin-top: 20px;\">\n                  \n                <ion-row class=\"row\">\n                    <ion-col class=\"col1\" size='4.5'>\n                        <ion-label>Helper name</ion-label>\n                    </ion-col>\n                    <ion-col class=\"col2\" size='7'>\n                        <label>{{hname}}</label>\n                    </ion-col>\n                </ion-row>\n\n              </ion-grid>\n\n            \n          </div>\n\n          <ion-item [hidden]=hiddenotheritems>\n            <ion-textarea class=\"textarea\" placeholder=\"Request for other items here..\" [disabled]=disableother [(ngModel)]='otherrequest'  ></ion-textarea>\n          </ion-item>\n\n          <ion-item class=\"divraw\">\n            <label >Ready meals</label>\n          </ion-item>\n\n          <ion-item >\n            <ion-textarea class=\"textarea\" placeholder=\"e.g. 4 Sandwiches, 2 Diet Coke, etc.\" disabled=\"{{disablereadymeal}}\" [(ngModel)]='readymeal' ></ion-textarea>\n          </ion-item>\n\n          <div >\n            <ion-item>\n              <ion-label position=\"floating\">Requesting for date</ion-label>\n              <ion-datetime displayFormat=\"DD/MM/YYYY\" min=\"{{requestminDate}}\" max=\"{{requestmaxDate}}\" [(ngModel)]='requestDate' disabled=\"{{disablrequestDate}}\" ></ion-datetime>\n            </ion-item>\n            <ion-item style=\"display: none;\">\n              <ion-label position=\"floating\">Request Time</ion-label>\n              <ion-datetime displayFormat=\"H:mm:s\" [(ngModel)]='requestTime' disabled=\"{{disablrequestTime}}\"></ion-datetime>\n            </ion-item>\n          </div>\n\n          <div [hidden]=hiddenreviewbutton padding>\n            <ion-button size=\"medium\" type=\"button\" class=\"requestsbutton\" (click)=\"requestItems()\" >Review</ion-button>\n          </div>\n          \n          <ion-item [hidden]=hiddenfeedback>\n            <ion-textarea class=\"textarea\" placeholder=\"Enter feedback\" [(ngModel)]='feedback' maxlength=\"400\"  ></ion-textarea>\n          </ion-item>\n          \n          <div [hidden]=hiddenfeedback padding>           \n            <ion-button size=\"medium\" type=\"button\" class=\"requestsbutton\" (click)=\"feedbackRequestItems()\" >Feedback</ion-button>\n          </div>\n          \n          <div *ngIf=\"status == 1\" style=\"margin-top: 30px;\">\n            <ion-label>Help received? <ion-toggle color=\"success\" [(ngModel)]='checked' (ionChange)=\"receivedRequest()\" style=\"padding-top: 3px;padding-bottom: 6px; margin-left: 10px;vertical-align: middle;\"></ion-toggle></ion-label>\n          </div>\n\n          <div class=\"divsubmitbutton\" padding>\n            <ion-button [hidden]=hiddeneditsubmit size=\"medium\" type=\"button\" class=\"requestsbutton\" (click)=\"editRequest()\" >Edit</ion-button>&nbsp;\n            <ion-button [hidden]=hiddenrequestsubmit size=\"medium\" type=\"button\" class=\"requestsbutton\" (click)=\"submitRequest()\" >{{submitlabel}}</ion-button>\n            <ion-button [hidden]=hiddenrepostrequest size=\"medium\" type=\"button\" class=\"requestsbutton\" (click)=\"submitRequest()\" >Re-post</ion-button>\n\n            <ion-item [hidden]=hiddenrequestcancel lines=\"none\">\n              <ion-button size=\"medium\" type=\"button\" class=\"requestsbutton\" (click)=\"cancelRequest()\" color=\"danger\">Cancel Request</ion-button>\n            </ion-item>\n          </div>\n          \n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n\n    \n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/staff/foodrequest/foodrequest-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/staff/foodrequest/foodrequest-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: FoodrequestPageRoutingModule */

  /***/
  function srcAppStaffFoodrequestFoodrequestRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FoodrequestPageRoutingModule", function () {
      return FoodrequestPageRoutingModule;
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


    var _foodrequest_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./foodrequest.page */
    "./src/app/staff/foodrequest/foodrequest.page.ts");

    const routes = [{
      path: '',
      component: _foodrequest_page__WEBPACK_IMPORTED_MODULE_3__["FoodrequestPage"]
    }];
    let FoodrequestPageRoutingModule = class FoodrequestPageRoutingModule {};
    FoodrequestPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], FoodrequestPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/staff/foodrequest/foodrequest.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/staff/foodrequest/foodrequest.module.ts ***!
    \*********************************************************/

  /*! exports provided: FoodrequestPageModule */

  /***/
  function srcAppStaffFoodrequestFoodrequestModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FoodrequestPageModule", function () {
      return FoodrequestPageModule;
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


    var _foodrequest_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./foodrequest-routing.module */
    "./src/app/staff/foodrequest/foodrequest-routing.module.ts");
    /* harmony import */


    var _foodrequest_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./foodrequest.page */
    "./src/app/staff/foodrequest/foodrequest.page.ts");

    let FoodrequestPageModule = class FoodrequestPageModule {};
    FoodrequestPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _foodrequest_routing_module__WEBPACK_IMPORTED_MODULE_5__["FoodrequestPageRoutingModule"]],
      declarations: [_foodrequest_page__WEBPACK_IMPORTED_MODULE_6__["FoodrequestPage"]]
    })], FoodrequestPageModule);
    /***/
  },

  /***/
  "./src/app/staff/foodrequest/foodrequest.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/staff/foodrequest/foodrequest.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppStaffFoodrequestFoodrequestPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".requestgrid {\n  text-align: center; }\n\n.textarea {\n  text-align: left;\n  font-size: 15px; }\n\n.divtextcenter {\n  margin-top: 50px; }\n\n.requestsbutton {\n  margin: auto;\n  margin-top: 50px;\n  width: 150px; }\n\n.requestitemheading {\n  border: 1px solid #5BCAA4;\n  border-radius: 10px;\n  width: 200px;\n  margin: 0 auto;\n  margin-top: 40px;\n  background: #5BCAA4;\n  color: white; }\n\n.divraw {\n  text-align: left;\n  padding-left: 20x;\n  margin-top: 20px;\n  margin-bottom: 10px;\n  font-weight: bold; }\n\n.divsubmitbutton {\n  margin-bottom: 50px; }\n\n.helperdetail {\n  margin-top: 20px; }\n\n.helperdetail .row {\n    margin-left: 10px; }\n\n.helperdetail ion-label {\n    font-weight: bold; }\n\n.helperdetail .col1 {\n    text-align: left; }\n\n.helperdetail .col2 {\n    text-align: right;\n    padding-right: 0; }\n\n.helperdetail .col2 label {\n      color: gray; }\n\ntable thead {\n  background: lightgray; }\n\ntable th, table td {\n  padding-top: 5px;\n  padding-bottom: 5px;\n  padding-left: 3px;\n  padding-right: 3px; }\n\ntable td {\n  text-align: left; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhZmYvZm9vZHJlcXVlc3QvRDpcXGlvbmljMlxcaG9zcGl0YWwvc3JjXFxhcHBcXHN0YWZmXFxmb29kcmVxdWVzdFxcZm9vZHJlcXVlc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Msa0JBQWtCLEVBQUE7O0FBRW5CO0VBQ0ksZ0JBQWdCO0VBQ2hCLGVBQWUsRUFBQTs7QUFFbkI7RUFDQyxnQkFBZ0IsRUFBQTs7QUFHakI7RUFDQyxZQUFZO0VBQUMsZ0JBQWdCO0VBQUMsWUFBWSxFQUFBOztBQUkzQztFQUVJLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFlBQVksRUFBQTs7QUFJaEI7RUFDSSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBRHBCO0lBSVEsaUJBQWlCLEVBQUE7O0FBSnpCO0lBT1EsaUJBQWlCLEVBQUE7O0FBUHpCO0lBVVEsZ0JBQWdCLEVBQUE7O0FBVnhCO0lBYVEsaUJBQWlCO0lBQ2pCLGdCQUFnQixFQUFBOztBQWR4QjtNQWdCWSxXQUFXLEVBQUE7O0FBTXZCO0VBRVEscUJBQXFCLEVBQUE7O0FBRjdCO0VBS1EsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7O0FBUjFCO0VBV1EsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zdGFmZi9mb29kcmVxdWVzdC9mb29kcmVxdWVzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVxdWVzdGdyaWR7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi50ZXh0YXJlYXtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuLmRpdnRleHRjZW50ZXJ7XHJcblx0bWFyZ2luLXRvcDogNTBweDtcclxufVxyXG5cclxuLnJlcXVlc3RzYnV0dG9ue1xyXG5cdG1hcmdpbjogYXV0bzttYXJnaW4tdG9wOiA1MHB4O3dpZHRoOiAxNTBweDtcclxuXHJcbn1cclxuXHJcbi5yZXF1ZXN0aXRlbWhlYWRpbmd7XHJcbiAgICBcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM1QkNBQTQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzVCQ0FBNDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbn1cclxuXHJcbi5kaXZyYXd7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uZGl2c3VibWl0YnV0dG9ue1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxufVxyXG5cclxuLmhlbHBlcmRldGFpbHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcblxyXG4gICAgLnJvd3tcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIH1cclxuICAgIGlvbi1sYWJlbHtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICAgIC5jb2wxe1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9XHJcbiAgICAuY29sMntcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gICAgICAgIGxhYmVse1xyXG4gICAgICAgICAgICBjb2xvcjogZ3JheTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxudGFibGV7XHJcbiAgICB0aGVhZHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodGdyYXk7XHJcbiAgICB9XHJcbiAgICB0aCx0ZHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzcHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogM3B4O1xyXG4gICAgfVxyXG4gICAgdGR7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIH1cclxuICAgIFxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/staff/foodrequest/foodrequest.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/staff/foodrequest/foodrequest.page.ts ***!
    \*******************************************************/

  /*! exports provided: FoodrequestPage */

  /***/
  function srcAppStaffFoodrequestFoodrequestPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FoodrequestPage", function () {
      return FoodrequestPage;
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


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _global_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../global.service */
    "./src/app/global.service.ts");
    /* harmony import */


    var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/android-permissions/ngx */
    "./node_modules/@ionic-native/android-permissions/ngx/index.js");
    /* harmony import */


    var _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/sms/ngx */
    "./node_modules/@ionic-native/sms/ngx/index.js");

    let FoodrequestPage = class FoodrequestPage {
      constructor(alertCtrl, menuCtrl, router, _global, httpClient, loadingController, activatedRoute, myapp, androidPermissions, sms) {
        this.alertCtrl = alertCtrl;
        this.menuCtrl = menuCtrl;
        this.router = router;
        this._global = _global;
        this.httpClient = httpClient;
        this.loadingController = loadingController;
        this.activatedRoute = activatedRoute;
        this.myapp = myapp;
        this.androidPermissions = androidPermissions;
        this.sms = sms;
        this.id = "";
        this.view = 0;
        this.request = 0;
        this.submitlabel = "Submit";
        this.status = 0;
        this.otherrequest = "";
        this.readymeal = "";
        this.isSubmitted = 0;
        this.edit = 1;
        this.checked = false;
        this.feedback = "";
        this.hiddenfeedback = true;
        this.hiddenitems = true;
        this.expire = true;
        this.hiddenviewhelperdetails = true;
        this.hiddenhelper = true;
        this.hiddennotifications = true;
        this.notificationList = [];
        this.hname = "";
        this.hemail = "";
        this.request_date = "";
        this.hcontactno = "";
        this.hiddenotheritems = true;
        this.hiddenreviewbutton = true;
        this.hiddeneditsubmit = true;
        this.hiddenrequestsubmit = true;
        this.hiddenrepostrequest = true;
        this.hiddenrequestcancel = true;
        this.checkother = false;
        this.disableother = false;
        this.disablereadymeal = false;
        this.productsList = [];
        this.selectedArray = [];
        this.start = 0;
        this.requestDate = '';
        this.requestminDate = '';
        this.requestmaxDate = '';
        this.requestTime = '';
        this.disablrequestDate = false;
        this.disablrequestTime = false;
        this.menuCtrl.enable(true);
        console.log("construct");
      }

      ngOnInit() {
        this.id = this.activatedRoute.snapshot.paramMap.get('id');
        this.view = this.activatedRoute.snapshot.paramMap.get('view');
        this.request = this.activatedRoute.snapshot.paramMap.get('request');
        this.getProductsList(this.infiniteScroll);
      }

      ionViewDidEnter() {
        this.myapp.aboutmenu = 0;
        this.id = this.activatedRoute.snapshot.paramMap.get('id');
        this.view = this.activatedRoute.snapshot.paramMap.get('view');
        this.request = this.activatedRoute.snapshot.paramMap.get('request');

        if (this.request == 1) {
          this.submitlabel = "Back";
        }

        console.log("date : " + this._global.currentDate());
        this.requestDate = this._global.currentDate();
        this.requestminDate = this._global.currentDate();
        this.requestmaxDate = this._global.maxDate();
      }

      selectOther() {
        console.log("clicked");
        this.hiddenotheritems = !this.checkother;
      }

      getProductsList(infiniteScroll) {
        var token = this._global.token;
        console.log('token : ' + token);
        var userid = this._global.userid;
        const httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + token
          })
        };

        if (this._global.userid > 0 && this._global.userrole == this._global.userrole2) {
          this.httpClient.post(this._global.domainURL + "items", {
            "type": 1,
            "start": this.start,
            "userid": userid,
            "id": this.id
          }, httpOptions).subscribe(val => {
            if (typeof val.data != "undefined") {
              if (val.data.lastid > 0) {
                // Notification count
                this.myapp.notifycount = val.data.countnotification; //this.productsList = this.productsList.concat(val.data.products);

                this.start = val.data.lastid;
                this.expire = val.data.expire;
                this.status = val.data.status;
                this.notificationList = val.data.notifications;
                console.log('response : ' + JSON.stringify(val.data.readymeal));
                this.readymeal = val.data.readymeal;
                this.requestDate = val.data.rdate;
                this.requestTime = val.data.rtime;

                if (this.readymeal != '') {//this.disablereadymeal = true;
                }

                if (val.data.otherchecked == 1) {
                  this.checkother = true; //this.hiddenotheritems = false;
                  //this.disableother = true;

                  this.otherrequest = val.data.otheritem;
                }

                if (val.data.isSubmitted == 1) {
                  this.isSubmitted = val.data.isSubmitted;
                }

                if (val.data.status == 0) {
                  this.hiddenreviewbutton = false;
                  this.hiddenfeedback = true;
                }

                if (val.data.status > 0) {
                  this.hiddenrequestcancel = false;
                }

                if (this.view > 0 && val.data.status > 0) {
                  this.hiddenviewhelperdetails = false;
                  this.hname = val.data.name;
                  this.request_date = val.data.requestdate;
                  this.hemail = val.data.email;
                  this.hcontactno = val.data.contact;
                }

                if (val.data.status == 1) {
                  this.hiddenreviewbutton = true;
                  this.disablereadymeal = true;
                  this.disablrequestDate = true;
                  this.disablrequestTime = true;
                  this.disableother = true;

                  for (var i = 0; i < this.productsList.length; i++) {
                    this.productsList[i]['disabled'] = true;
                  }
                }

                if (val.data.status == 2) {
                  if (val.data.edit == 0) {
                    this.feedback = val.data.feedback;
                    this.hiddenreviewbutton = true;
                    this.hiddenfeedback = false;
                    this.disableother = true;
                    this.disablereadymeal = true;
                    this.disablrequestDate = true;
                    this.disablrequestTime = true;

                    for (var i = 0; i < this.productsList.length; i++) {
                      this.productsList[i]['disabled'] = true;
                    }
                  }
                }
              }

              if (this.view == 2) {
                this.hiddennotifications = false;
              }

              if (this.view > 0) {
                this.requestItems();
              } else {
                this.hiddenreviewbutton = false;
              }
            }

            if (infiniteScroll) {
              infiniteScroll.target.complete();
            }
          }, response => {
            console.log("Get call in error", response);
          }, () => {
            console.log("The Get observable is now completed.");
          });
        } else {
          this.expire = false;
          this.hiddenreviewbutton = false;
        }
      }

      loadMore(infiniteScroll) {
        this.getProductsList(infiniteScroll);
        infiniteScroll.target.disabled = true;
      }

      requestItems() {
        if (this.readymeal.trim() != '') {
          this.hiddenreviewbutton = true;
          this.hiddeneditsubmit = false;
          this.disableother = true;
          this.disablereadymeal = true;
          this.disablrequestDate = true;
          this.disablrequestTime = true;

          for (var i = 0; i < this.productsList.length; i++) {
            this.productsList[i]['disabled'] = true;
          }

          if (this.view > 0 && this.status > 0) {
            this.hiddeneditsubmit = true;
            this.hiddenrepostrequest = true;
            this.hiddenrequestsubmit = true;
            this.hiddenrequestcancel = false;

            if (this.view == 2) {
              this.hiddenhelper = true;
            } else {
              this.hiddenhelper = false;
            }
          } else {
            if (this.status > 0) {
              this.hiddenrequestcancel = false;
            }

            if (this.isSubmitted == 1) {
              this.hiddenrequestcancel = false;

              if (this.expire) {
                this.hiddenrepostrequest = false;
                this.hiddenrequestsubmit = true;
              } else {
                this.hiddenrequestsubmit = false;
                this.hiddenrepostrequest = true;
              }
            } else {
              this.hiddenrequestcancel = true;

              if (this.expire) {
                this.hiddenrepostrequest = false;
                this.hiddenrequestsubmit = true;
              } else {
                this.hiddenrequestsubmit = false;
                this.hiddenrepostrequest = true;
              }
            }
          }
        } else {
          // Alert message (start)
          let alert = this.alertCtrl.create({
            message: "Please enter a item.",
            buttons: ['OK']
          });
          alert.then(_alert => {
            _alert.present();
          }); // Alert message (end)
        }
      }

      editRequest() {
        this.hiddenreviewbutton = false;
        this.hiddeneditsubmit = true;
        this.hiddenrequestcancel = true;

        if (this.expire) {
          this.hiddenrepostrequest = true;
          this.hiddenrequestsubmit = true;
        } else {
          this.hiddenrequestsubmit = true;
          this.hiddenrepostrequest = true;
        }

        this.disableother = false;
        this.disablereadymeal = false;
        this.disablrequestDate = false;
        this.disablrequestTime = false;

        for (var i = 0; i < this.productsList.length; i++) {
          this.productsList[i]['disabled'] = false;
        }
      }

      submitRequest() {
        var selectedProducts = new Array();
        var selectedProductsIndex = new Array();
        var sendrequest = 0;

        if (this._global.userid > 0 && this._global.userrole == this._global.userrole2) {
          for (var i = 0; i < this.productsList.length; i++) {
            if (this.productsList[i]['checked'] == true) {
              selectedProducts.push(this.productsList[i]['id']);
              selectedProductsIndex.push(i);
            }
          }

          if (this.readymeal.trim() == '') {
            // Alert message (start)
            let alert = this.alertCtrl.create({
              message: "Please enter ready meal",
              buttons: ['OK']
            });
            alert.then(_alert => {
              _alert.present();
            }); // Alert message (end)
          } else {
            sendrequest = 1;
          }

          if (sendrequest == 1) {
            console.log("Send request"); // Send request

            console.log('clicked : ' + selectedProducts);
            const httpOptions = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + this._global.token
              })
            };
            this.httpClient.post(this._global.domainURL + "submitFoodRequest", {
              "id": this.id,
              "nhs_staff_id": this._global.userid,
              "item_ids": selectedProducts,
              "otheritem": this.otherrequest,
              "ready_meal": this.readymeal,
              "expire": this.expire,
              "requestDate": this.requestDate,
              "requestTime": this.requestTime
            }, httpOptions).subscribe(val => {
              //console.log('success : ' + JSON.stringify(val));
              // Notification count
              this.myapp.notifycount = val.data.countnotification;
              var message = val.message;

              if (!val.success) {
                console.log('data : ' + val.success);
              } else {
                this.expire = false;
                this.editRequest();
                this.myapp.selectedIndex = 1;
                this.router.navigateByUrl('/myrequests');
              }

              if (this.submitlabel == "Submit") this._global.showToast(message); // Send toast notification
            }, response => {
              //  alert("POST call in error"+ JSON.stringify(response) );
              console.log("POST call in error", response);
            }, () => {
              //  alert("The POST observable is now completed.");
              console.log("The POST observable is now completed.");
            });
          }

          console.log('selectedProducts : ' + JSON.stringify(selectedProducts));
        } else {
          this.presentAlertConfirm();
        }
      }

      cancelRequest() {
        const httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + this._global.token
          })
        };
        this.httpClient.post(this._global.domainURL + "cancelFoodRequest", {
          "nhs_staff_id": this._global.userid,
          "id": this.id
        }, httpOptions).subscribe(val => {
          console.log('success : ' + JSON.stringify(val));
          var message = val.message;

          if (!val.success) {
            console.log('data : ' + val.success + ' - yo');
          } else {
            this.router.navigateByUrl('/requests');
          }

          this._global.showToast(message); // Send toast notification

        }, response => {
          //  alert("POST call in error"+ JSON.stringify(response) );
          console.log("POST call in error", response);
        }, () => {
          //  alert("The POST observable is now completed.");
          console.log("The POST observable is now completed.");
        });
      }

      feedbackRequestItems() {
        var feedback = this.feedback.trim();

        if (feedback != '') {
          const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              'Accept': 'application/json',
              'Authorization': 'Bearer ' + this._global.token
            })
          };
          this.httpClient.post(this._global.domainURL + "foodFeedback", {
            "id": this.id,
            "feedback": feedback
          }, httpOptions).subscribe(val => {
            console.log('success : ' + JSON.stringify(val));
            var message = val.message; // Notification count

            this.myapp.notifycount = val.data.countnotification;

            if (!val.success) {
              console.log('data : ' + val.success + ' - yo');
            } else {}

            this._global.showToast(message); // Send toast notification

          }, response => {
            //  alert("POST call in error"+ JSON.stringify(response) );
            console.log("POST call in error", response);
          }, () => {
            //  alert("The POST observable is now completed.");
            console.log("The POST observable is now completed.");
          });
        } else {
          // Alert message (start)
          let alert = this.alertCtrl.create({
            message: "Please enter feedback.",
            buttons: ['OK']
          });
          alert.then(_alert => {
            _alert.present();
          }); // Alert message (end)
        }
      }

      presentAlertConfirm() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const alert = yield this.alertCtrl.create({
            header: '',
            message: '',
            cssClass: 'loginalert',
            buttons: [{
              text: 'Cancel',
              role: 'cancel',
              cssClass: 'alertbutton1',
              handler: blah => {
                console.log('Confirm Cancel: blah');
              }
            }, {
              text: 'Login',
              cssClass: 'alertbutton2',
              handler: () => {
                this.router.navigateByUrl('/login/1');
              }
            }]
          });
          yield alert.present();
        });
      }

      receivedRequest() {
        if (this.status == 1 && this.checked) this.presentReceiveAlertConfirm(this.id);
      }

      presentReceiveAlertConfirm(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const alert = yield this.alertCtrl.create({
            header: 'Confirm!',
            message: 'Are you sure?',
            buttons: [{
              text: 'Cancel',
              role: 'cancel',
              cssClass: 'secondary',
              handler: blah => {
                this.checked = false;
              }
            }, {
              text: 'Okay',
              handler: () => {
                var token = this._global.token;
                var userid = this._global.userid;
                const httpOptions = {
                  headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + token
                  })
                };
                this.httpClient.post(this._global.domainURL + "requestReceived", {
                  "userid": userid,
                  "id": id,
                  "type": "Food"
                }, httpOptions).subscribe(val => {
                  if (typeof val.data != "undefined") {
                    var message = val.message; // Notification count

                    this.myapp.notifycount = val.data.countnotification;

                    this._global.showToast(message); // Send toast notification                

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

      contactstaff() {
        this._global.sendSMS(this.hcontactno, 'Req. ' + this.id + ': ');
      }

    };

    FoodrequestPage.ctorParameters = () => [{
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
    }, {
      type: _global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"]
    }, {
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
    }, {
      type: _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
    }, {
      type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_7__["AndroidPermissions"]
    }, {
      type: _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_8__["SMS"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"], {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"])], FoodrequestPage.prototype, "infiniteScroll", void 0);
    FoodrequestPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-foodrequest',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./foodrequest.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/staff/foodrequest/foodrequest.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./foodrequest.page.scss */
      "./src/app/staff/foodrequest/foodrequest.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_7__["AndroidPermissions"], _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_8__["SMS"]])], FoodrequestPage);
    /***/
  }
}]);
//# sourceMappingURL=staff-foodrequest-foodrequest-module-es5.js.map