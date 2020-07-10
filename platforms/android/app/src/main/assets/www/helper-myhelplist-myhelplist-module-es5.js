(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["helper-myhelplist-myhelplist-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/helper/myhelplist/myhelplist.page.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/helper/myhelplist/myhelplist.page.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHelperMyhelplistMyhelplistPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button>\n        \n      </ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"apphead\"><img src=\"../assets/banner.png\" style=\" vertical-align: middle;\"></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<ion-grid class='requestgrid' >\n      \t<ion-row color=\"primary\" justify-content-center class='formcenter'>\n\n        \t<ion-col align-self-center size-md=\"12\" size-lg=\"12\" size-xs=\"12\">\n          \n\t          \t<div class=\"heading\" padding>\n\t            \t<h3 class=\"hospitalname\" color=\"tertiary\">My Help List</h3>\n\t          \t</div>\n\n\t          \t<div class=\"requestsummary\" padding [hidden]=hiddenrequestnotfound>\n            \t\t<label >Your help list is empty</label>\n          \t\t</div>\n\n          \t\t<div class=\"requestsummary\" padding [hidden]=hiddenrequestfound>\n            \t\t<label >You have confirmed to help with the following requests</label>\n          \t\t</div>\n\n          \t\t<div style=\"margin-top: 40px;\" padding [hidden]=hiddenrequestfound>\n          \t\t\t<!-- Received -->\n\t\t            <ion-card *ngFor=\"let item of itemsList;\"   >\n\t\t                <ion-card-header >\n\t\t                    <ion-grid class=\"cardgrid\" (click)=\"viewrequest(item['type'],item['id'])\" >\n\t\t                      <ion-row class=\"row\">\n\t\t                        <ion-col class=\"col1\" size='7' >\n\t\t                            <ion-label>{{item['type']}}</ion-label>\n\t\t                        </ion-col>\n\t\t                        <ion-col class=\"col2\" size='5'>\n\t\t                             <ion-label>Status: <span *ngIf=\"item['remain'] == 'Confirmed'\" style=\"color: green;\">{{item['remain']}}</span><span *ngIf=\"item['remain'] == 'Delivered'\" style=\"color: orange;\">{{item['remain']}}</span></ion-label>\n\t\t                        </ion-col>\n\t\t                      \n\t\t                      </ion-row>\n\t\t                      <ion-row class=\"row\">\n\t\t                        <ion-col class=\"col1\" size='7'>\n\t\t                            <ion-label>Hospital: {{item['hospital']}}</ion-label>\n\t\t                        </ion-col>\n\t\t                        <ion-col class=\"col1\" size='5'>\n\t\t                            <ion-label>Staff: {{item['staffname']}}</ion-label>\n\t\t                        </ion-col>\n\t\t                      </ion-row>\n\t\t                    </ion-grid>\n\t\t                </ion-card-header>\n\t\t            </ion-card>\n          \t\t</div>\n          \t\t<div class=\"requestitems\" [hidden]=hiddenrequestfound style=\"display: none;\">\n\t\t          \t<table width='100%' border='1' style='border-collapse: collapse;'>\n\t\t          \t\t<thead>\n\t\t          \t\t\t<tr>\n\t\t          \t\t\t\t<th width='20%'>Request type</th>\n\t\t          \t\t\t\t<th width='30%'>Hospital</th>\n\t\t          \t\t\t\t<th width='30%'>Staff name</th>\n\t\t          \t\t\t\t<th width='20%'>Status</th>\n\t\t          \t\t\t</tr>\n\t\t          \t\t</thead>\n\t\t          \t\t<tbody>\n\t\t          \t\t\t<tr *ngFor=\"let item of itemsList;\" (click)=\"viewrequest(item['type'],item['id'])\" >\n\t\t          \t\t\t\t<td>{{item['type']}}</td>\n\t\t          \t\t\t\t<td>{{item['hospital']}}</td>\n\t\t          \t\t\t\t<td>{{item['staffname']}}</td>\n\t\t          \t\t\t\t<td>{{item['remain']}}</td>\n\t\t          \t\t\t</tr>\n\n\t\t          \t\t\t<tr  [hidden]=hiddennotfound>\n\t\t\t                  <td colspan='4'>No record found.</td>\n\t\t\t                </tr>\n\t\t          \t\t</tbody>\n\t\t          \t</table>\n\t\t        </div>\n\n          \t\t<div class=\"backbutton\" padding>\n          \t\t\t<ion-button size=\"medium\" type=\"button\" class=\"requestsbutton\"  (click)=\"back()\">&#60; Back</ion-button>\n          \t\t</div>\n\n          \t\t<ion-item class=\"contactnote\" lines=\"none\">\n\t\t        \t<p>* Please show the receipts where required, so that the NHS staff can pay the correct amount. Thank you for helping!</p>\n\t\t      \t</ion-item>\n\n\n        \t</ion-col>\n      \t</ion-row>\n    </ion-grid>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/helper/myhelplist/myhelplist-routing.module.ts":
  /*!****************************************************************!*\
    !*** ./src/app/helper/myhelplist/myhelplist-routing.module.ts ***!
    \****************************************************************/

  /*! exports provided: MyhelplistPageRoutingModule */

  /***/
  function srcAppHelperMyhelplistMyhelplistRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyhelplistPageRoutingModule", function () {
      return MyhelplistPageRoutingModule;
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


    var _myhelplist_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./myhelplist.page */
    "./src/app/helper/myhelplist/myhelplist.page.ts");

    const routes = [{
      path: '',
      component: _myhelplist_page__WEBPACK_IMPORTED_MODULE_3__["MyhelplistPage"]
    }];
    let MyhelplistPageRoutingModule = class MyhelplistPageRoutingModule {};
    MyhelplistPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MyhelplistPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/helper/myhelplist/myhelplist.module.ts":
  /*!********************************************************!*\
    !*** ./src/app/helper/myhelplist/myhelplist.module.ts ***!
    \********************************************************/

  /*! exports provided: MyhelplistPageModule */

  /***/
  function srcAppHelperMyhelplistMyhelplistModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyhelplistPageModule", function () {
      return MyhelplistPageModule;
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


    var _myhelplist_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./myhelplist-routing.module */
    "./src/app/helper/myhelplist/myhelplist-routing.module.ts");
    /* harmony import */


    var _myhelplist_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./myhelplist.page */
    "./src/app/helper/myhelplist/myhelplist.page.ts");

    let MyhelplistPageModule = class MyhelplistPageModule {};
    MyhelplistPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _myhelplist_routing_module__WEBPACK_IMPORTED_MODULE_5__["MyhelplistPageRoutingModule"]],
      declarations: [_myhelplist_page__WEBPACK_IMPORTED_MODULE_6__["MyhelplistPage"]]
    })], MyhelplistPageModule);
    /***/
  },

  /***/
  "./src/app/helper/myhelplist/myhelplist.page.scss":
  /*!********************************************************!*\
    !*** ./src/app/helper/myhelplist/myhelplist.page.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHelperMyhelplistMyhelplistPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".requestgrid {\n  text-align: center;\n  margin-bottom: 50px; }\n\n.hospitalname {\n  border: 1px solid #5BCAA4;\n  width: 200px;\n  margin: 0 auto;\n  margin-top: 40px;\n  background: #5BCAA4;\n  color: white;\n  border-radius: 10px;\n  text-align: center; }\n\n.heading {\n  margin-top: 50px;\n  margin-bottom: 50px; }\n\n.heading h2 {\n    text-align: left; }\n\n.requestlist {\n  height: 200px;\n  max-height: 200px;\n  border: 1px solid black;\n  overflow: auto;\n  width: 100%; }\n\n.requestsummary {\n  margin-top: 40px;\n  margin-bottom: 40px;\n  font-weight: normal;\n  font-size: 19px; }\n\n.rawfood {\n  margin-top: 40px;\n  margin-bottom: 40px;\n  font-weight: bold;\n  font-size: 17px; }\n\n.textcontent {\n  width: 80%;\n  margin: 0 auto;\n  border: 1px solid black;\n  padding: 5px;\n  margin-top: 10px;\n  margin-bottom: 10px; }\n\n.contactnote {\n  color: darkgray;\n  font-size: 15px;\n  margin-top: 70px;\n  text-align: left; }\n\n.backbutton {\n  margin-top: 40px; }\n\n.thankyou {\n  margin-top: 20px;\n  margin-bottom: 20px;\n  text-align: center; }\n\n.thankyou p {\n  width: 100%; }\n\ntable thead {\n  background: lightgray;\n  font-weight: normal; }\n\ntable th, table td {\n  padding-top: 5px;\n  padding-bottom: 5px;\n  padding-left: 3px;\n  padding-right: 3px; }\n\n.cardgrid {\n  font-size: 15px;\n  color: gray;\n  padding: 0;\n  margin: 0;\n  text-align: left; }\n\nion-card-header {\n  padding: 7px !important;\n  color: darkgray; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVscGVyL215aGVscGxpc3QvRDpcXGlvbmljMlxcaG9zcGl0YWwvc3JjXFxhcHBcXGhlbHBlclxcbXloZWxwbGlzdFxcbXloZWxwbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxrQkFBa0I7RUFFbEIsbUJBQW1CLEVBQUE7O0FBR3BCO0VBQ0MseUJBQXlCO0VBQ3RCLFlBQVk7RUFDWixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGtCQUFrQixFQUFBOztBQUd0QjtFQUVDLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQTs7QUFIcEI7SUFNRSxnQkFBZ0IsRUFBQTs7QUFLbEI7RUFDSSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QsV0FBVyxFQUFBOztBQUdmO0VBQ0MsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDaEIsZUFBZSxFQUFBOztBQUVuQjtFQUNDLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2QsZUFBZSxFQUFBOztBQUduQjtFQUNDLFVBQVU7RUFDVixjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7O0FBR3BCO0VBQ0MsZUFBZTtFQUNmLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7O0FBR2pCO0VBQ0MsZ0JBQWdCLEVBQUE7O0FBR2pCO0VBQ0MsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixrQkFBa0IsRUFBQTs7QUFFbkI7RUFDQyxXQUFXLEVBQUE7O0FBR1o7RUFFUSxxQkFBcUI7RUFDckIsbUJBQW1CLEVBQUE7O0FBSDNCO0VBTVEsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7O0FBSzFCO0VBQ0ksZUFBZTtFQUNmLFdBQVc7RUFDWCxVQUFVO0VBQ1YsU0FBUztFQUNULGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLHVCQUF1QjtFQUN2QixlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9oZWxwZXIvbXloZWxwbGlzdC9teWhlbHBsaXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZXF1ZXN0Z3JpZHtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG5cdG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbi5ob3NwaXRhbG5hbWV7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgIzVCQ0FBNDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgIGJhY2tncm91bmQ6ICM1QkNBQTQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uaGVhZGluZ3tcclxuXHRcclxuXHRtYXJnaW4tdG9wOiA1MHB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDUwcHg7XHJcblxyXG5cdGgye1xyXG5cdFx0dGV4dC1hbGlnbjogbGVmdDtcclxuXHJcblx0fVxyXG59XHJcblxyXG4ucmVxdWVzdGxpc3R7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgbWF4LWhlaWdodDogMjAwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjazsgXHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ucmVxdWVzdHN1bW1hcnl7XHJcblx0bWFyZ2luLXRvcDogNDBweDtcclxuXHRtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG5cdGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDE5cHg7XHJcbn1cclxuLnJhd2Zvb2R7XHJcblx0bWFyZ2luLXRvcDogNDBweDtcclxuXHRtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcblxyXG4udGV4dGNvbnRlbnR7XHJcblx0d2lkdGg6IDgwJTtcclxuXHRtYXJnaW46IDAgYXV0bztcclxuXHRib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuXHRwYWRkaW5nOiA1cHg7XHJcblx0bWFyZ2luLXRvcDogMTBweDtcclxuXHRtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uY29udGFjdG5vdGV7XHJcblx0Y29sb3I6IGRhcmtncmF5O1xyXG5cdGZvbnQtc2l6ZTogMTVweDtcclxuXHRtYXJnaW4tdG9wOiA3MHB4O1xyXG5cdHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5iYWNrYnV0dG9ue1xyXG5cdG1hcmdpbi10b3A6IDQwcHg7XHJcbn1cclxuXHJcbi50aGFua3lvdXtcclxuXHRtYXJnaW4tdG9wOiAyMHB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi50aGFua3lvdSBwe1xyXG5cdHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG50YWJsZXtcclxuXHR0aGVhZHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodGdyYXk7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIH1cclxuXHR0aCx0ZHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzcHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogM3B4O1xyXG4gICAgfVxyXG5cdC8vXHJcbn1cclxuXHJcbi5jYXJkZ3JpZHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGNvbG9yOiBncmF5O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbmlvbi1jYXJkLWhlYWRlcntcclxuICAgIHBhZGRpbmc6IDdweCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IGRhcmtncmF5O1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/helper/myhelplist/myhelplist.page.ts":
  /*!******************************************************!*\
    !*** ./src/app/helper/myhelplist/myhelplist.page.ts ***!
    \******************************************************/

  /*! exports provided: MyhelplistPage */

  /***/
  function srcAppHelperMyhelplistMyhelplistPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyhelplistPage", function () {
      return MyhelplistPage;
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

    let MyhelplistPage = class MyhelplistPage {
      constructor(alertCtrl, menuCtrl, router, _global, httpClient, loadingController, activatedRoute, myapp) {
        this.alertCtrl = alertCtrl;
        this.menuCtrl = menuCtrl;
        this.router = router;
        this._global = _global;
        this.httpClient = httpClient;
        this.loadingController = loadingController;
        this.activatedRoute = activatedRoute;
        this.myapp = myapp; //

        this.id = "";
        this.itemsList = [];
        this.hiddennotfound = true;
        this.hiddenrequestfound = true;
        this.hiddenrequestnotfound = true;
        this.otherchecked = true;
        this.otheritem = "";
        this.readymeal = "";
        this.name = "";
        this.request_date = "-";
        this.hospitalname = "-";
        this.contactno = "-";
      }

      ngOnInit() {}

      ionViewDidEnter() {
        this.myapp.aboutmenu = 0;
        this.getDetails();
      }

      getDetails() {
        var token = this._global.token;
        var userid = this._global.userid;

        if (userid > 0) {
          const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              'Accept': 'application/json',
              'Authorization': 'Bearer ' + token
            })
          };
          this.httpClient.post(this._global.domainURL + "myhelplist", {
            "userid": userid
          }, httpOptions).subscribe(val => {
            if (typeof val.data != "undefined") {
              if (val.data.status == 1) {
                // Notification count
                this.myapp.notifycount = val.data.countnotification;
                this.itemsList = val.data.list;

                if (this.itemsList.length == 0) {
                  this.hiddennotfound = false;
                  this.hiddenrequestnotfound = false;
                  this.hiddenrequestfound = true;
                } else {
                  this.hiddennotfound = true;
                  this.hiddenrequestfound = false;
                  this.hiddenrequestnotfound = true;
                } //this.timeRemain();


                console.log('response : ' + JSON.stringify(val.data));
              }
            }
          }, response => {
            console.log("Get call in error", response);
          }, () => {
            console.log("The Get observable is now completed.");
          });
        } else {
          this.hiddennotfound = false;
          this.hiddenrequestnotfound = false;
          this.hiddenrequestfound = true;
        }
      }

      back() {
        this.router.navigateByUrl('/searchhospitals');
      }

      timeRemain() {
        var temp = this;
        this._global.helpertimer = setInterval(function () {
          for (var i = 0; i < temp.itemsList.length; i++) {
            var type = temp.itemsList[i]['type'];
            var status = Number(temp.itemsList[i]['status']);
            var timeremain = Number(temp.itemsList[i]['seconds']);

            if (type != 'Childcare' && timeremain > 0 && status == 1) {
              timeremain = timeremain - 1; //  console.log('run : ' + type + ", timeremain : " + timeremain);

              temp.itemsList[i]['remain'] = temp.secondsToHms(timeremain);
              temp.itemsList[i]['seconds'] = timeremain;
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

      viewrequest(type, id) {
        if (type == 'Food') {
          this.foodrequestDetails(id);
        }

        if (type == 'Essentials') {
          this.essentialsrequestDetails(id);
        }

        if (type == 'Childcare') {
          this.childcarerequestDetails(id);
        }
      }

      foodrequestDetails(id) {
        this.router.navigateByUrl('/foodrequestdetails/' + id + '/1');
      }

      essentialsrequestDetails(id) {
        this.router.navigateByUrl('/essentialsrequestdetails/' + id + '/1');
      }

      childcarerequestDetails(id) {
        this.router.navigateByUrl('/childcarerequestdetails/' + id + '/1');
      }

    };

    MyhelplistPage.ctorParameters = () => [{
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
      type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
    }, {
      type: _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]
    }];

    MyhelplistPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-myhelplist',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./myhelplist.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/helper/myhelplist/myhelplist.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./myhelplist.page.scss */
      "./src/app/helper/myhelplist/myhelplist.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]])], MyhelplistPage);
    /***/
  }
}]);
//# sourceMappingURL=helper-myhelplist-myhelplist-module-es5.js.map