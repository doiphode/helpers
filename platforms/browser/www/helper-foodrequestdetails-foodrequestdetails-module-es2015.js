(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["helper-foodrequestdetails-foodrequestdetails-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/helper/foodrequestdetails/foodrequestdetails.page.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/helper/foodrequestdetails/foodrequestdetails.page.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"searchhospitals\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"apphead\">Helpers</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<ion-grid class='requestgrid' >\n      \t<ion-row color=\"primary\" justify-content-center class='formcenter'>\n\n        \t<ion-col align-self-center size-md=\"12\" size-lg=\"12\" size-xs=\"12\">\n           \n\t          \t<div class=\"heading\" padding>\n\t            \t<h3 class=\"hospitalname\" color=\"tertiary\">Request Summary {{id}}</h3>\n\t          \t</div>\n\n              <div class=\"staffdetail\">\n                  <ion-grid style=\"margin-top: 20px;\">\n\n                    <ion-row class=\"row\">\n                      <ion-col class=\"col1\" size='4.5'>\n                          <ion-label>Request type</ion-label>\n                      </ion-col>\n                      <ion-col class=\"col2\" size='7.5'>\n                        <ion-label>Food</ion-label>\n                      </ion-col>\n                    \n                  </ion-row>\n\n                  <ion-row class=\"row\">\n                      <ion-col class=\"col1\" size='4.5'>\n                          <ion-label>Hospital name</ion-label>\n                      </ion-col>\n                      <ion-col class=\"col2\" size='7.5'>\n                        <ion-label>{{hospitalname}}</ion-label>\n                      </ion-col>\n                    \n                  </ion-row>\n\n                  <ion-row class=\"row\">\n                      <ion-col class=\"col1\" size='4.5'>\n                          <ion-label>Requestor name</ion-label>\n                      </ion-col>\n                      <ion-col class=\"col2\" size='7.5'>\n                        <ion-label>{{name}}</ion-label>\n                      </ion-col>\n                    \n                  </ion-row>\n\n                  <ion-row class=\"row\">\n                      <ion-col class=\"col1\" size='4.5'>\n                          <ion-label>Requested for</ion-label>\n                      </ion-col>\n                      <ion-col class=\"col2\" size='7.5'>\n                        <ion-label>{{request_date}}</ion-label>\n                      </ion-col>\n                    \n                  </ion-row>\n\n                </ion-grid>\n              </div>\n\t          \n\n\t\t      \t<div class=\"requestsummary\" padding style=\"display: none;\">\n            \t\t<label >Request Summary</label>\n          \t\t</div>\n\n          \t\t<div class=\"rawfood\" padding style=\"display: none;\">\n            \t\t<label >Raw food</label>\n          \t\t</div>\n\n          \t\t<div padding style=\"display: none;\">\n          \t\t\t<ion-list >\n          \t\t\t\t<ion-item *ngFor=\"let item of itemsList;\" >\n            \t\t\t\t{{item}}\n          \t\t\t\t</ion-item>\n          \t\t\t</ion-list>\n          \t\t</div>\n\n          \t\t<div [hidden]=otherchecked padding style=\"display: none;\" >\n          \t\t\t<div class='textcontent'>\n          \t\t\t\t<p>{{otheritem}}</p>\n          \t\t\t</div>\n          \t\t</div>\n\n          \t\t<div class=\"requestsummary\" style=\"margin-top: 25px;\" padding>\n            \t\t<label >Ready meals</label>\n          \t\t</div>\n\n          \t\t<div padding  >\n            \t\t<div class='textcontent'>\n          \t\t\t\t<p>{{readymeal}}</p>\n          \t\t\t</div>\n          \t\t</div>\n              \n              <div padding style=\"margin-bottom: 15px;\" >\n                <ion-item>\n                  <ion-label position=\"floating\">Requested for date</ion-label>\n\n                  <ion-datetime displayFormat=\"DD-MM-YYYY\" [(ngModel)]='requestDate'  min=\"{{requestminDate}}\" max=\"{{requestmaxDate}}\" [disabled]=disableddateTime ></ion-datetime> \n                </ion-item>\n               \n              </div>\n\n          \t\t<div padding *ngIf=\"status==0\">\n                <ion-button size=\"medium\" type=\"button\" class=\"requestsbutton\" (click)=\"contactstaff()\">Contact</ion-button>\n          \t\t\t<ion-button size=\"medium\" type=\"button\" class=\"requestsbutton\" (click)=\"pickrequest()\">Offer help</ion-button>\n          \t\t</div>\n\n              <div padding *ngIf=\"status==1\" lines=\"none\" style=\"margin-top: 10px;\">\n                <ion-button size=\"medium\" type=\"button\" class=\"requestsbutton\" (click)=\"contactstaff()\">Contact</ion-button>\n                <ion-button size=\"medium\" type=\"button\" class=\"requestsbutton\" (click)=\"cancelrequest()\">Cancel</ion-button>\n              </div>\n\n          \t\t<ion-item class=\"contactnote\" lines=\"none\" [hidden]=hiddenreviewrequest>\n\t\t        \t<p>{{helpcontactmsg}}</p>\n\t\t      \t</ion-item>\n            <div class=\"searchbutton\" padding>\n                \n                <ion-button size=\"medium\" type=\"button\" class=\"requestsbutton\"  (click)=\"searchHospital()\">Search Hospital</ion-button>\n              </div>\n        \t</ion-col>\n      \t</ion-row>\n    </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/helper/foodrequestdetails/foodrequestdetails-routing.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/helper/foodrequestdetails/foodrequestdetails-routing.module.ts ***!
  \********************************************************************************/
/*! exports provided: FoodrequestdetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodrequestdetailsPageRoutingModule", function() { return FoodrequestdetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _foodrequestdetails_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foodrequestdetails.page */ "./src/app/helper/foodrequestdetails/foodrequestdetails.page.ts");




const routes = [
    {
        path: '',
        component: _foodrequestdetails_page__WEBPACK_IMPORTED_MODULE_3__["FoodrequestdetailsPage"]
    }
];
let FoodrequestdetailsPageRoutingModule = class FoodrequestdetailsPageRoutingModule {
};
FoodrequestdetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FoodrequestdetailsPageRoutingModule);



/***/ }),

/***/ "./src/app/helper/foodrequestdetails/foodrequestdetails.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/helper/foodrequestdetails/foodrequestdetails.module.ts ***!
  \************************************************************************/
/*! exports provided: FoodrequestdetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodrequestdetailsPageModule", function() { return FoodrequestdetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _foodrequestdetails_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./foodrequestdetails-routing.module */ "./src/app/helper/foodrequestdetails/foodrequestdetails-routing.module.ts");
/* harmony import */ var _foodrequestdetails_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./foodrequestdetails.page */ "./src/app/helper/foodrequestdetails/foodrequestdetails.page.ts");







let FoodrequestdetailsPageModule = class FoodrequestdetailsPageModule {
};
FoodrequestdetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _foodrequestdetails_routing_module__WEBPACK_IMPORTED_MODULE_5__["FoodrequestdetailsPageRoutingModule"]
        ],
        declarations: [_foodrequestdetails_page__WEBPACK_IMPORTED_MODULE_6__["FoodrequestdetailsPage"]]
    })
], FoodrequestdetailsPageModule);



/***/ }),

/***/ "./src/app/helper/foodrequestdetails/foodrequestdetails.page.scss":
/*!************************************************************************!*\
  !*** ./src/app/helper/foodrequestdetails/foodrequestdetails.page.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".requestgrid {\n  text-align: center;\n  margin-bottom: 50px; }\n\n.hospitalname {\n  border: 1px solid #5BCAA4;\n  width: 290px;\n  margin: 0 auto;\n  margin-top: 40px;\n  background: #5BCAA4;\n  color: white;\n  text-align: center;\n  border-radius: 10px; }\n\n.heading {\n  margin-top: 50px;\n  margin-bottom: 50px; }\n\n.heading h2 {\n    text-align: left; }\n\n.row {\n  text-align: left;\n  font-size: 15px;\n  border-bottom: 1px solid darkgray;\n  padding-bottom: 15px; }\n\n.row .col1 ion-label {\n    line-height: 0;\n    vertical-align: bottom;\n    font-weight: bold; }\n\n.row .col2 {\n    /*color: darkgray; */\n    text-align: right;\n    color: darkgray; }\n\n.row .col2 ion-label {\n      line-height: 0;\n      vertical-align: bottom; }\n\n.requestlist {\n  height: 200px;\n  max-height: 200px;\n  border: 1px solid black;\n  overflow: auto;\n  width: 100%; }\n\n.requestsummary {\n  margin-top: 40px;\n  margin-bottom: 25px;\n  font-weight: bold;\n  font-size: 19px; }\n\n.rawfood {\n  margin-top: 40px;\n  margin-bottom: 40px;\n  font-weight: bold;\n  font-size: 17px; }\n\n.textcontent {\n  width: 80%;\n  margin: 0 auto;\n  border: 1px solid darkgray;\n  padding: 5px;\n  margin-top: 10px;\n  margin-bottom: 10px; }\n\n.contactnote {\n  color: darkgray;\n  font-size: 15px;\n  margin-top: 40px;\n  text-align: left; }\n\n.searchbutton {\n  margin-top: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVscGVyL2Zvb2RyZXF1ZXN0ZGV0YWlscy9EOlxcaW9uaWMyXFxob3NwaXRhbC9zcmNcXGFwcFxcaGVscGVyXFxmb29kcmVxdWVzdGRldGFpbHNcXGZvb2RyZXF1ZXN0ZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxrQkFBa0I7RUFFbEIsbUJBQW1CLEVBQUE7O0FBR3BCO0VBQ0MseUJBQXlCO0VBQ3RCLFlBQVk7RUFDWixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG1CQUFtQixFQUFBOztBQUd2QjtFQUVDLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQTs7QUFIcEI7SUFNRSxnQkFBZ0IsRUFBQTs7QUFNbEI7RUFDQyxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlDQUFpQztFQUNqQyxvQkFBb0IsRUFBQTs7QUFKckI7SUFPRyxjQUFjO0lBQ2Qsc0JBQXNCO0lBQ3RCLGlCQUFpQixFQUFBOztBQVRwQjtJQWFFLG9CQUFBO0lBQ0EsaUJBQWlCO0lBQ2pCLGVBQWUsRUFBQTs7QUFmakI7TUFpQkcsY0FBYztNQUNkLHNCQUFzQixFQUFBOztBQUt6QjtFQUNJLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxXQUFXLEVBQUE7O0FBR2Y7RUFDQyxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNkLGVBQWUsRUFBQTs7QUFFbkI7RUFDQyxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNkLGVBQWUsRUFBQTs7QUFHbkI7RUFDQyxVQUFVO0VBQ1YsY0FBYztFQUNkLDBCQUEwQjtFQUMxQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBOztBQUdwQjtFQUNDLGVBQWU7RUFDZixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBOztBQUdqQjtFQUNDLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvaGVscGVyL2Zvb2RyZXF1ZXN0ZGV0YWlscy9mb29kcmVxdWVzdGRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlcXVlc3Rncmlke1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcblx0bWFyZ2luLWJvdHRvbTogNTBweDtcclxufVxyXG5cclxuLmhvc3BpdGFsbmFtZXtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjNUJDQUE0O1xyXG4gICAgd2lkdGg6IDI5MHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzVCQ0FBNDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5oZWFkaW5ne1xyXG5cdFxyXG5cdG1hcmdpbi10b3A6IDUwcHg7XHJcblx0bWFyZ2luLWJvdHRvbTogNTBweDtcclxuXHJcblx0aDJ7XHJcblx0XHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cclxuXHR9XHJcbn1cclxuXHJcblxyXG4ucm93e1xyXG5cdHRleHQtYWxpZ246IGxlZnQ7XHJcblx0Zm9udC1zaXplOiAxNXB4O1xyXG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBkYXJrZ3JheTtcclxuXHRwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuXHQuY29sMXtcclxuXHRcdGlvbi1sYWJlbHtcclxuXHRcdFx0bGluZS1oZWlnaHQ6IDA7XHJcblx0XHRcdHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcblx0XHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdFx0fVxyXG5cdH1cclxuXHQuY29sMntcclxuXHRcdC8qY29sb3I6IGRhcmtncmF5OyAqL1xyXG5cdFx0dGV4dC1hbGlnbjogcmlnaHQ7XHJcblx0XHRjb2xvcjogZGFya2dyYXk7XHJcblx0XHRpb24tbGFiZWx7XHJcblx0XHRcdGxpbmUtaGVpZ2h0OiAwO1xyXG5cdFx0XHR2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuLnJlcXVlc3RsaXN0e1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7IFxyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnJlcXVlc3RzdW1tYXJ5e1xyXG5cdG1hcmdpbi10b3A6IDQwcHg7XHJcblx0bWFyZ2luLWJvdHRvbTogMjVweDtcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxufVxyXG4ucmF3Zm9vZHtcclxuXHRtYXJnaW4tdG9wOiA0MHB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDQwcHg7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbn1cclxuXHJcbi50ZXh0Y29udGVudHtcclxuXHR3aWR0aDogODAlO1xyXG5cdG1hcmdpbjogMCBhdXRvO1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkIGRhcmtncmF5O1xyXG5cdHBhZGRpbmc6IDVweDtcclxuXHRtYXJnaW4tdG9wOiAxMHB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5jb250YWN0bm90ZXtcclxuXHRjb2xvcjogZGFya2dyYXk7XHJcblx0Zm9udC1zaXplOiAxNXB4O1xyXG5cdG1hcmdpbi10b3A6IDQwcHg7XHJcblx0dGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLnNlYXJjaGJ1dHRvbntcclxuXHRtYXJnaW4tdG9wOiAxNXB4O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/helper/foodrequestdetails/foodrequestdetails.page.ts":
/*!**********************************************************************!*\
  !*** ./src/app/helper/foodrequestdetails/foodrequestdetails.page.ts ***!
  \**********************************************************************/
/*! exports provided: FoodrequestdetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodrequestdetailsPage", function() { return FoodrequestdetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../global.service */ "./src/app/global.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ "./node_modules/@ionic-native/android-permissions/ngx/index.js");
/* harmony import */ var _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/sms/ngx */ "./node_modules/@ionic-native/sms/ngx/index.js");











let FoodrequestdetailsPage = class FoodrequestdetailsPage {
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
        this.view = '';
        this.itemsList = [];
        this.otherchecked = true;
        this.otheritem = "";
        this.readymeal = "";
        this.hiddenreviewrequest = false;
        this.disableddateTime = false;
        this.requestDate = '';
        this.requestminDate = '';
        this.requestmaxDate = '';
        this.requestTime = '';
        this.name = "-";
        this.request_date = "-";
        this.hospitalname = "-";
        this.contactno = "-";
        this.status = 0;
        this.helpcontactmsg = "";
        console.log("construct");
    }
    ngOnInit() {
        this.id = this.activatedRoute.snapshot.paramMap.get('id');
        this.view = this.activatedRoute.snapshot.paramMap.get('view');
        this.getDetails();
        console.log("id : " + this.id);
    }
    ionViewDidEnter() {
        this.myapp.aboutmenu = 0;
        this.helpcontactmsg = this.myapp.helpcontactmsg;
        this.requestDate = this._global.currentDate();
        this.requestminDate = this._global.currentDate();
        this.requestmaxDate = this._global.maxDate();
        console.log("date : " + this._global.changeDateFormat(this.requestDate));
        this.requestDate = this._global.changeDateFormat(this.requestDate);
    }
    getDetails() {
        if (this.view == 1) {
            this.hiddenreviewrequest = true;
        }
        else {
            this.hiddenreviewrequest = false;
        }
        var token = this._global.token;
        var userid = this._global.userid;
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token
            })
        };
        this.httpClient.post(this._global.domainURL + "foodRequestDetails", {
            "userid": userid,
            "id": this.id
        }, httpOptions)
            .subscribe((val) => {
            if (typeof val.data != "undefined") {
                this.status = val.data.status;
                if (this.status == 0) {
                    this.disableddateTime = false;
                }
                else {
                    this.disableddateTime = true;
                }
                // Notification count
                this.myapp.notifycount = val.data.countnotification;
                //if(val.data.status == 1){
                this.itemsList = val.data.items;
                if (val.data.otherchecked == 1) {
                    this.otherchecked = false;
                    this.otheritem = val.data.otheritem;
                }
                else {
                    this.otherchecked = true;
                }
                this.otheritem = val.data.otheritem;
                this.readymeal = val.data.readymeal;
                this.requestDate = val.data.rdate;
                this.requestTime = val.data.rtime;
                this.requestDate = this._global.changeDateFormat(this.requestDate);
                this.name = val.data.name;
                this.request_date = val.data.requestdate;
                this.hospitalname = val.data.hospital;
                this.contactno = val.data.contact;
                console.log('response : ' + JSON.stringify(val.data));
                //}                
            }
        }, response => {
            console.log("Get call in error", response);
        }, () => {
            console.log("The Get observable is now completed.");
        });
    }
    pickrequest() {
        this.presentAlertConfirm();
    }
    presentAlertConfirm() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Please confirm...',
                message: 'Are you sure?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Yes',
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
                            this.httpClient.post(this._global.domainURL + "pickfoodRequest", {
                                "userid": userid,
                                "id": this.id,
                                "requestDate": this.requestDate,
                                "requestTime": this.requestTime,
                            }, httpOptions)
                                .subscribe((val) => {
                                if (typeof val.data != "undefined") {
                                    var message = val.message;
                                    this._global.showToast(message); // Send toast notification    
                                    // Notification count
                                    this.myapp.notifycount = val.data.countnotification;
                                    if (val.data.success == 1) {
                                        this.router.navigateByUrl('/myhelplist');
                                        console.log('response : ' + JSON.stringify(val.data));
                                    }
                                }
                            }, response => {
                                console.log("Get call in error", response);
                            }, () => {
                                console.log("The Get observable is now completed.");
                            });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    searchHospital() {
        this.router.navigateByUrl('/searchhospitals');
    }
    cancelrequest() {
        this.cancelAlertConfirm();
    }
    cancelAlertConfirm() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Confirm!',
                message: 'Are you sure?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
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
                            this.httpClient.post(this._global.domainURL + "cancelrequest", {
                                "id": this.id
                            }, httpOptions)
                                .subscribe((val) => {
                                if (typeof val.data != "undefined") {
                                    var message = val.message;
                                    this._global.showToast(message); // Send toast notification     
                                    // Notification count
                                    this.myapp.notifycount = val.data.countnotification;
                                    if (val.data.success == 1) {
                                        this.router.navigateByUrl('/myhelplist');
                                    }
                                }
                            }, response => {
                                console.log("Get call in error", response);
                            }, () => {
                                console.log("The Get observable is now completed.");
                            });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    contactstaff() {
        this._global.sendSMS(this.contactno, 'Req. ' + this.id + ': ');
    }
};
FoodrequestdetailsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"] },
    { type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_7__["AndroidPermissions"] },
    { type: _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_8__["SMS"] }
];
FoodrequestdetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-foodrequestdetails',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./foodrequestdetails.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/helper/foodrequestdetails/foodrequestdetails.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./foodrequestdetails.page.scss */ "./src/app/helper/foodrequestdetails/foodrequestdetails.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_7__["AndroidPermissions"],
        _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_8__["SMS"]])
], FoodrequestdetailsPage);



/***/ })

}]);
//# sourceMappingURL=helper-foodrequestdetails-foodrequestdetails-module-es2015.js.map