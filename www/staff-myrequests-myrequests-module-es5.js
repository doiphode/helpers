(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["staff-myrequests-myrequests-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/staff/myrequests/myrequests.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/staff/myrequests/myrequests.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppStaffMyrequestsMyrequestsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button>\n        \n      </ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"apphead\"><img src=\"../assets/banner.png\" style=\" vertical-align: middle;\"></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<ion-grid class=\"requestgrid\" >\n      <ion-row color=\"primary\" justify-content-center class='formcenter'>\n\n        <ion-col align-self-center size-md=\"12\" size-lg=\"12\" size-xs=\"12\">\n                    \n          <div  padding>\n            <h3 class=\"requestitemheading\" color=\"tertiary\">My Requests</h3>\n          </div>\n          \n          <div padding style=\"margin-top: 40px\">\n              \n              <!-- Acknowledged -->\n              <ion-card *ngFor=\"let list of acknowledgedList; let i= index\">\n                  <ion-card-header >\n                    <ion-grid class=\"cardgrid\" >\n                      <ion-row class=\"row\">\n                        <ion-col class=\"col1\" size='7' (click)=\"review(list['cartid'],list['type'],1)\">\n                            <ion-label class=\"bold\">{{list['type']}}</ion-label>\n                        </ion-col>\n                        <ion-col class=\"col2\" size='5'>\n                             <ion-label>Status: <span style=\"color: deepskyblue;\">Confirmed</span></ion-label>\n                        </ion-col>\n                      \n                      </ion-row>\n                      <ion-row class=\"row\" (click)=\"review(list['cartid'],list['type'],1)\" *ngIf=\"list['type'] == 'Childcare'\" >\n                        <ion-col class=\"col1\" size='7'>\n                            <ion-label>For: {{list['childdetail']}}</ion-label>\n                        </ion-col>\n                        <ion-col class=\"col2\" size='5'>\n                             <ion-label>Recurring: <span class=\"bold\">{{list['recurring']}}</span></ion-label>\n                        </ion-col>\n                      \n                      </ion-row>\n                    </ion-grid>\n                  </ion-card-header>\n              </ion-card>\n\n              <!-- Pending -->\n              <ion-card *ngFor=\"let list of pendingList;\" >\n                  <ion-card-header >\n                    <ion-grid class=\"cardgrid\" (click)=\"review(list['cartid'],list['type'],2)\" >\n                      <ion-row class=\"row\">\n                        <ion-col class=\"col1\" size='7' >\n                            <ion-label class=\"bold\">{{list['type']}}</ion-label>\n                        </ion-col>\n                        <ion-col class=\"col2\" size='5'>\n                             <ion-label>Status: <span *ngIf=\"!list['expire']\" style=\"color: orange;\">In queue</span><span *ngIf=\"list['expire']\" style=\"color: red;\">Expired</span></ion-label>\n                        </ion-col>\n                      \n                      </ion-row>\n                      <ion-row class=\"row\">\n                        <ion-col class=\"col1\" size='12'>\n                            <ion-label>Requested for: {{list['date']}}</ion-label>\n                        </ion-col>\n                       \n                      </ion-row>\n                    </ion-grid>\n                  </ion-card-header>\n              </ion-card>\n\n              <!-- Received -->\n              <ion-card *ngFor=\"let list of receivedList;\"  >\n                  <ion-card-header >\n                    <ion-grid class=\"cardgrid\" (click)=\"review(list['cartid'],list['type'],3)\" >\n                      <ion-row class=\"row\">\n                        <ion-col class=\"col1\" size='7' >\n                            <ion-label class=\"bold\" >{{list['type']}}</ion-label>\n                        </ion-col>\n                        <ion-col class=\"col2\" size='5'>\n                             <ion-label>Status: <span style=\"color: green;\">Completed</span></ion-label>\n                        </ion-col>\n                      \n                      </ion-row>\n                      <ion-row class=\"row\">\n                        <ion-col class=\"col1\" size='7'>\n                            <ion-label>Fulfilled on: {{list['received_date']}}</ion-label>\n                        </ion-col>\n                        <ion-col class=\"col1\" size='5'>\n                            <ion-label>Helper: <span class=\"bold\">{{list['helpername']}}</span></ion-label>\n                        </ion-col>\n                      </ion-row>\n                    </ion-grid>\n                  </ion-card-header>\n              </ion-card>\n\n          </div>\n\n          <!-- Acknowledged -->\n          <div class=\"requesttype\" padding [hidden]=hiddenrow>\n            <label >Acknowledged</label>\n          </div>\n          <div class=\"requestitems\" [hidden]=hiddenrow>\n          \t<table width='100%' border='1' style='border-collapse: collapse;'>\n          \t\t<thead>\n          \t\t\t<tr>\n          \t\t\t\t<th width='20%'>Request type</th>\n          \t\t\t\t<th width='50%'>Helper name</th>\n          \t\t\t\t<th width='30%'>Confirmed</th>\n          \t\t\t</tr>\n          \t\t</thead>\n          \t\t<tbody>\n                <tr  *ngFor=\"let list of acknowledgedList; let i= index\" >\n                  <td (click)=\"review(list['cartid'],list['type'],1)\">{{list['type']}}</td>\n                  <td (click)=\"review(list['cartid'],list['type'],1)\">{{list['helper']}}</td>\n                 \n                  <td></td>\n                </tr>\n\n                <tr  [hidden]=hiddennotfoundacknowledged>\n                  <td colspan='3'>No record found.</td>\n                </tr>\n          \t\t</tbody>\n          \t</table>\n          </div>\n\n          <!-- Pending -->\n          <div class=\"requesttype\" padding [hidden]=hiddenrow>\n            <label >Pending</label>\n          </div>\n          <div class=\"requestitems\" [hidden]=hiddenrow>\n          \t<table width='100%' border='1' style='border-collapse: collapse;'>\n          \t\t<thead>\n          \t\t\t<tr>\n          \t\t\t\t<th width='20%'>Request type</th>\n          \t\t\t\t<th width='50%'>Requested for</th>\n          \t\t\t\t<th width='30%'>Status</th>\n          \t\t\t</tr>\n          \t\t</thead>\n          \t\t<tbody>\n          \t\t\t<tr  *ngFor=\"let list of pendingList;\" (click)=\"review(list['cartid'],list['type'],2)\">\n          \t\t\t\t<td>{{list['type']}}</td>\n          \t\t\t\t<td>{{list['date']}}</td>\n          \t\t\t\t<td *ngIf=\"!list['expire']\">In queue</td>\t\n                  <td *ngIf=\"list['expire']\">Expired</td> \n          \t\t\t</tr>\n                <tr  [hidden]=hiddennotfoundpending>\n                  <td colspan='3'>No record found.</td>\n                </tr>          \t\t\t\n          \t\t</tbody>\n          \t</table>\n          </div>\n\n          <!-- Received -->\n          <div class=\"requesttype\" padding [hidden]=hiddenrow>\n            <label >Received</label>\n          </div>\n          <div class=\"requestitems\" [hidden]=hiddenrow>\n          \t<table width='100%' border='1' style='border-collapse: collapse;'>\n          \t\t<thead>\n          \t\t\t<tr>\n          \t\t\t\t<th width='20%'>Request type</th>\n          \t\t\t\t<th width='50%'>Requested for</th>\n          \t\t\t\t<th width='30%'>Completed</th>\n          \t\t\t</tr>\n          \t\t</thead>\n          \t\t<tbody>\n          \t\t\t<tr *ngFor=\"let list of receivedList;\" (click)=\"review(list['cartid'],list['type'],3)\" >\n          \t\t\t\t<td >{{list['type']}}</td>\n          \t\t\t\t<td >{{list['received_date']}}</td>\n          \t\t\t\t<td >{{list['feedbacklabel']}}</td>\t\n          \t\t\t</tr>  \n\n                <tr  [hidden]=hiddennotfoundreceived>\n                  <td colspan='3'>No record found.</td>\n                </tr>        \t\t\t\n          \t\t</tbody>\n          \t</table>\n          </div>\n\n          <div padding style=\"margin-top: 40px;\" *ngIf=\"acknowledgedList.length == 0 && pendingList.length == 0 && receivedList.length == 0\">\n              <ion-label style=\"font-weight: bold;color: #5BCAA4;\">There are no requests to show.</ion-label>\n          </div>\n\n          \t<div padding  >\n              <ion-button size=\"medium\" type=\"button\" class=\"requestsbutton\" (click)=\"makerequest()\" >Make a Request</ion-button>\n            </div>\n\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/staff/myrequests/myrequests-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/staff/myrequests/myrequests-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: MyrequestsPageRoutingModule */

  /***/
  function srcAppStaffMyrequestsMyrequestsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyrequestsPageRoutingModule", function () {
      return MyrequestsPageRoutingModule;
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


    var _myrequests_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./myrequests.page */
    "./src/app/staff/myrequests/myrequests.page.ts");

    const routes = [{
      path: '',
      component: _myrequests_page__WEBPACK_IMPORTED_MODULE_3__["MyrequestsPage"]
    }];
    let MyrequestsPageRoutingModule = class MyrequestsPageRoutingModule {};
    MyrequestsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MyrequestsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/staff/myrequests/myrequests.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/staff/myrequests/myrequests.module.ts ***!
    \*******************************************************/

  /*! exports provided: MyrequestsPageModule */

  /***/
  function srcAppStaffMyrequestsMyrequestsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyrequestsPageModule", function () {
      return MyrequestsPageModule;
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


    var _myrequests_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./myrequests-routing.module */
    "./src/app/staff/myrequests/myrequests-routing.module.ts");
    /* harmony import */


    var _myrequests_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./myrequests.page */
    "./src/app/staff/myrequests/myrequests.page.ts");

    let MyrequestsPageModule = class MyrequestsPageModule {};
    MyrequestsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _myrequests_routing_module__WEBPACK_IMPORTED_MODULE_5__["MyrequestsPageRoutingModule"]],
      declarations: [_myrequests_page__WEBPACK_IMPORTED_MODULE_6__["MyrequestsPage"]]
    })], MyrequestsPageModule);
    /***/
  },

  /***/
  "./src/app/staff/myrequests/myrequests.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/staff/myrequests/myrequests.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppStaffMyrequestsMyrequestsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".requestgrid {\n  text-align: center; }\n\n.bold {\n  font-weight: bold; }\n\n.textarea {\n  text-align: left; }\n\n.divtextcenter {\n  margin-top: 50px; }\n\n.requestsbutton {\n  margin: auto;\n  margin-top: 50px;\n  width: 150px; }\n\n.requestitemheading {\n  border: 1px solid #5BCAA4;\n  width: 200px;\n  margin: 0 auto;\n  margin-top: 40px;\n  background: #5BCAA4;\n  color: white;\n  border-radius: 10px; }\n\n.requesttype {\n  font-weight: bold;\n  margin-top: 50px;\n  margin-bottom: 10px; }\n\ntable thead {\n  background: lightgray; }\n\ntable th, table td {\n  padding-top: 5px;\n  padding-bottom: 5px;\n  padding-left: 3px;\n  padding-right: 3px; }\n\n.cardgrid {\n  font-size: 15px;\n  color: gray;\n  padding: 0;\n  margin: 0;\n  text-align: left; }\n\nion-card-header {\n  padding: 7px !important;\n  color: darkgray; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhZmYvbXlyZXF1ZXN0cy9EOlxcaW9uaWMyXFxob3NwaXRhbC9zcmNcXGFwcFxcc3RhZmZcXG15cmVxdWVzdHNcXG15cmVxdWVzdHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Msa0JBQWtCLEVBQUE7O0FBRW5CO0VBQ0ksaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0MsZ0JBQWdCLEVBQUE7O0FBRWpCO0VBQ0MsWUFBWTtFQUFDLGdCQUFnQjtFQUFDLFlBQVksRUFBQTs7QUFHM0M7RUFFSSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDQyxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBOztBQUdwQjtFQUVRLHFCQUFxQixFQUFBOztBQUY3QjtFQUtRLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBOztBQUsxQjtFQUNJLGVBQWU7RUFDZixXQUFXO0VBQ1gsVUFBVTtFQUNWLFNBQVM7RUFDVCxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSx1QkFBdUI7RUFDdkIsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc3RhZmYvbXlyZXF1ZXN0cy9teXJlcXVlc3RzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZXF1ZXN0Z3JpZHtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmJvbGR7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4udGV4dGFyZWF7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi5kaXZ0ZXh0Y2VudGVye1xyXG5cdG1hcmdpbi10b3A6IDUwcHg7XHJcbn1cclxuLnJlcXVlc3RzYnV0dG9ue1xyXG5cdG1hcmdpbjogYXV0bzttYXJnaW4tdG9wOiA1MHB4O3dpZHRoOiAxNTBweDtcclxuXHJcbn1cclxuLnJlcXVlc3RpdGVtaGVhZGluZ3tcclxuICAgIFxyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzVCQ0FBNDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgIGJhY2tncm91bmQ6ICM1QkNBQTQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4ucmVxdWVzdHR5cGV7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0bWFyZ2luLXRvcDogNTBweDtcclxuXHRtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG50YWJsZXtcclxuICAgIHRoZWFke1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JheTtcclxuICAgIH1cclxuICAgIHRoLHRke1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDNweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzcHg7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG4gXHJcbi5jYXJkZ3JpZHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGNvbG9yOiBncmF5O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbmlvbi1jYXJkLWhlYWRlcntcclxuICAgIHBhZGRpbmc6IDdweCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IGRhcmtncmF5O1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/staff/myrequests/myrequests.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/staff/myrequests/myrequests.page.ts ***!
    \*****************************************************/

  /*! exports provided: MyrequestsPage */

  /***/
  function srcAppStaffMyrequestsMyrequestsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyrequestsPage", function () {
      return MyrequestsPage;
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
    /*! ../../global.service */
    "./src/app/global.service.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../app.component */
    "./src/app/app.component.ts");

    let MyrequestsPage = class MyrequestsPage {
      constructor(alertCtrl, menuCtrl, router, _global, httpClient, loadingController, myapp) {
        this.alertCtrl = alertCtrl;
        this.menuCtrl = menuCtrl;
        this.router = router;
        this._global = _global;
        this.httpClient = httpClient;
        this.loadingController = loadingController;
        this.myapp = myapp;
        this.acknowledgedList = [];
        this.pendingList = [];
        this.receivedList = [];
        this.start = 0;
        this.hiddennotfoundacknowledged = false;
        this.hiddennotfoundpending = false;
        this.hiddennotfoundreceived = false;
        this.hiddenrow = true;
        this.hiddenbutton = true;
        this.menuCtrl.enable(true);
      }

      ngOnInit() {
        var userid = this._global.userid;

        if (userid > 0) {
          this.getAcknowledged();
          this.getPending();
          this.getReceived();
        }
      }

      ionViewDidEnter(infiniteScroll) {
        this.myapp.aboutmenu = 0;
        var userid = this._global.userid;

        if (userid > 0) {
          this.getAcknowledged();
          this.getPending();
          this.getReceived();
        } else {
          this.hiddenbutton = false;
        }
      }

      getAcknowledged() {
        var token = this._global.token;
        var userid = this._global.userid;
        const httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + token
          })
        };
        this.httpClient.post(this._global.domainURL + "acknowledgedRequests", {
          "userid": userid
        }, httpOptions).subscribe(val => {
          if (typeof val.data != "undefined") {
            if (val.data.success == 1) {
              this.acknowledgedList = val.data.items; // Notification count

              this.myapp.notifycount = val.data.countnotification;
              console.log("len : " + this.acknowledgedList.length);

              if (this.acknowledgedList.length > 0) {
                this.hiddennotfoundacknowledged = true;
              } else {
                this.hiddennotfoundacknowledged = false;
              }

              console.log('response : ' + JSON.stringify(val.data));
              this.timeRemain(); // Calculate time remaining
            }
          }
        }, response => {
          console.log("Get call in error", response);
        }, () => {
          console.log("The Get observable is now completed.");
        });
      }

      getPending() {
        var token = this._global.token;
        var userid = this._global.userid;
        const httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + token
          })
        };
        this.httpClient.post(this._global.domainURL + "pendingRequests", {
          "userid": userid
        }, httpOptions).subscribe(val => {
          if (typeof val.data != "undefined") {
            if (val.data.success == 1) {
              this.pendingList = val.data.items; // Notification count

              this.myapp.notifycount = val.data.countnotification;

              if (this.pendingList.length > 0) {
                this.hiddennotfoundpending = true;
              } else {
                this.hiddennotfoundpending = false;
              }

              console.log('response : ' + JSON.stringify(val.data));
            }
          }
        }, response => {
          console.log("Get call in error", response);
        }, () => {
          console.log("The Get observable is now completed.");
        });
      }

      getReceived() {
        var token = this._global.token;
        var userid = this._global.userid;
        const httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + token
          })
        }; //

        this.httpClient.post(this._global.domainURL + "receivedRequest", {
          "userid": userid,
          "start": this.start
        }, httpOptions).subscribe(val => {
          if (typeof val.data != "undefined") {
            // Notification count
            this.myapp.notifycount = val.data.countnotification;
            this.receivedList = val.data.items;

            if (this.receivedList.length > 0) {
              this.hiddennotfoundreceived = true;
            } else {
              this.hiddennotfoundreceived = false;
            }

            if (this.acknowledgedList.length == 0 && this.pendingList.length == 0 && this.receivedList.length == 0) {
              this.hiddenbutton = false;
            } else {
              this.hiddenbutton = true;
            }
          }
        }, response => {
          console.log("Get call in error", response);
        }, () => {
          console.log("The Get observable is now completed.");
        });
      }

      makerequest() {
        this.router.navigateByUrl('/requests');
      }

      viewRequest(id, type) {
        var token = this._global.token;
        var userid = this._global.userid;
        const httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + token
          })
        }; // Food 

        if (type == "Food") {
          this.httpClient.post(this._global.domainURL + "viewFoodRequest", {
            "userid": userid,
            "id": id,
            "type": type
          }, httpOptions).subscribe(val => {
            if (typeof val.data != "undefined") {
              if (val.data.status == 1) {
                // Notification count
                this.myapp.notifycount = val.data.countnotification;
                this.pendingList = val.data.list;
                console.log('response : ' + JSON.stringify(val.data));
              }
            }
          }, response => {
            console.log("Get call in error", response);
          }, () => {
            console.log("The Get observable is now completed.");
          });
        } // Essentials
        // Child care

      }

      review(id, type, request) {
        if (request == 3) {
          if (type == "Food") {
            this.router.navigateByUrl('/foodrequest/' + id + '/2/1');
          }

          if (type == "Essentials") {
            this.router.navigateByUrl('/essentialsrequest/' + id + '/2/1');
          }

          if (type == "Childcare") {
            this.router.navigateByUrl('/childcarerequest/' + id + '/2/1');
          }
        } else {
          if (type == "Food") {
            this.router.navigateByUrl('/foodrequest/' + id + '/1/1');
          }

          if (type == "Essentials") {
            this.router.navigateByUrl('/essentialsrequest/' + id + '/1/1');
          }

          if (type == "Childcare") {
            this.router.navigateByUrl('/childcarerequest/' + id + '/1/1');
          }
        }
      }

      timeRemain() {
        var temp = this;
        this._global.stafftimer = setInterval(function () {
          for (var i = 0; i < temp.acknowledgedList.length; i++) {
            var type = temp.acknowledgedList[i]['type'];
            var timeremain = Number(temp.acknowledgedList[i]['seconds']);

            if (type != 'Childcare' && timeremain > 0) {
              timeremain = timeremain - 1; //  console.log('run : ' + type + ", timeremain : " + timeremain);

              temp.acknowledgedList[i]['ago'] = temp.secondsToHms(timeremain);
              temp.acknowledgedList[i]['seconds'] = timeremain;
            }
          }
        }, 1000);
      }

      secondsToHms(d) {
        d = Number(d);
        var h = Math.floor(d / 3600);
        var m = Math.floor(d % 3600 / 60);
        var s = Math.floor(d % 3600 % 60);
        var hDisplay = h > 0 ? h + (h == 1 ? ":" : ":") : "";
        var mDisplay = m > 0 ? m + (m == 1 ? ":" : "") : "";
        var sDisplay = s > 0 ? s + (s == 1 ? ":" : "") : ""; // return hDisplay + mDisplay + sDisplay; 

        return hDisplay + mDisplay;
      }

    };

    MyrequestsPage.ctorParameters = () => [{
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
    }, {
      type: _global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"]
    }, {
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
    }, {
      type: _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"], {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"])], MyrequestsPage.prototype, "infiniteScroll", void 0);
    MyrequestsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-myrequests',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./myrequests.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/staff/myrequests/myrequests.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./myrequests.page.scss */
      "./src/app/staff/myrequests/myrequests.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]])], MyrequestsPage);
    /***/
  }
}]);
//# sourceMappingURL=staff-myrequests-myrequests-module-es5.js.map