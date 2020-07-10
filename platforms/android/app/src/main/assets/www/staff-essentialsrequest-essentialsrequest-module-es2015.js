(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["staff-essentialsrequest-essentialsrequest-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/staff/essentialsrequest/essentialsrequest.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/staff/essentialsrequest/essentialsrequest.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"myrequests\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"apphead\"><img src=\"../assets/banner.png\" style=\" vertical-align: middle;\"></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\t<ion-grid class=\"requestgrid\" >\n      <ion-row color=\"primary\" justify-content-center class='formcenter'>\n\n        <ion-col align-self-center size-md=\"12\" size-lg=\"12\" size-xs=\"12\">\n          <div class=\"divtextcenter\"  text-center>\n            <label >Request for...</label>\n          </div>\n          \n          <div  padding>\n            <h3 class=\"requestitemheading\" color=\"tertiary\">Essentials</h3>\n          </div>\n\n          <div padding *ngIf=\"status==1\" lines=\"none\" style=\"margin-top: 10px;\">\n              <ion-button size=\"medium\" type=\"button\" class=\"requestsbutton\" (click)=\"contactstaff()\">Contact</ion-button>\n                \n          </div>\n\n          <div [hidden]=hiddennotifications>\n              <ion-item class=\"divraw\" *ngIf=\"notificationList.length > 0\">\n                  <label >Notifications</label>\n              </ion-item>\n\n              <table class=\"notificationTable\" width='100%' border='1' style='border-collapse: collapse;' *ngIf=\"notificationList.length > 0\">\n                  <thead>\n                      <tr>\n                          <th widht='60%'>Notification</th>\n                          <th widht='40%'>Date & Time</th>\n                      </tr>\n                  </thead>\n                  <tbody>\n                      <tr *ngFor=\"let item of notificationList;\">\n                          <td>{{item['message']}}</td>\n                          <td>{{item['created_at']}}</td>\n                      </tr>\n                  </tbody>\n              </table>\n          </div>\n\n          <div [hidden]=hiddenviewhelperdetails class=\"helperdetail\">\n              <ion-grid style=\"margin-top: 20px;\">\n                  \n                <ion-row class=\"row\">\n                    <ion-col class=\"col1\" size='4.5'>\n                        <ion-label>Helper name</ion-label>\n                    </ion-col>\n                    <ion-col class=\"col2\" size='7'>\n                        <label>{{hname}}</label>\n                    </ion-col>\n                </ion-row>\n\n              </ion-grid>\n          </div>\n\n          <ion-item class=\"divraw\" style='display: none;'>\n            <label >Raw</label>\n          </ion-item>\n          \n          <div class=\"divraw\" padding>\n\n            <ion-card *ngFor=\"let category of categoryList; let i = index\" [hidden]=\"category['hidden']\" >\n                  \n              <ion-card-header  >\n                <ion-card-title style='text-align: left;' (click)=\"expandCategory(i)\"  class=\"categoryname\"> \n                  {{category['name']}} \n                  <ion-icon *ngIf=\"!category['expand']\" name=\"chevron-up-outline\" style=\"float: right;\"></ion-icon><ion-icon name=\"chevron-down-outline\" style=\"float: right;\" *ngIf=\"category['expand']\"></ion-icon>\n                </ion-card-title>\n                <div style=\"width: 100%;\" *ngIf=\"category['expand']\" >\n                    <ion-textarea [(ngModel)]='category[\"text\"]' class=\"textarea categorytextarea\" [placeholder]=\"category['placeholder']\" disabled=\"{{category['disabled']}}\"  ></ion-textarea>\n                </div>\n              </ion-card-header>\n\n            </ion-card>\n\n            \n            <ion-list style=\"display: none;\">\n              <ion-item *ngFor=\"let product of productsList;\" >\n                <ion-label>{{product['name']}}</ion-label>\n                <ion-checkbox slot=\"end\" [(ngModel)]='product.checked' value=\"{{product['id']}}\" disabled=\"{{product.disabled}}\" ></ion-checkbox>\n              </ion-item>\n\n              <ion-item>\n                <ion-label>Other</ion-label>\n                <ion-checkbox slot=\"end\" [(ngModel)]='checkother' value=\"other\" (ionChange)=\"selectOther()\" [disabled]=disableother></ion-checkbox>\n              </ion-item>\n            </ion-list> \n\n            <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadMore($event)\">\n              <ion-infinite-scroll-content\n                loadingSpinner=\"bubbles\"\n                loadingText=\"Loading more data...\">\n              </ion-infinite-scroll-content>\n            </ion-infinite-scroll>\n\n\n          </div>\n\n          <ion-item [hidden]=hiddenotheritems>\n            <ion-textarea class=\"textarea\" placeholder=\"Request for other items here..\" [disabled]=disableother [(ngModel)]='otherrequest' ></ion-textarea>\n          </ion-item>\n\n          <div >\n            <ion-item>\n              <ion-label position=\"floating\">Requesting for date</ion-label>\n              <ion-datetime displayFormat=\"DD/MM/YYYY\" min=\"{{requestminDate}}\" max=\"{{requestmaxDate}}\" [(ngModel)]='requestDate' disabled=\"{{disablrequestDate}}\" ></ion-datetime>\n            </ion-item>\n            <ion-item style='display: none;'>\n              <ion-label position=\"floating\">Request Time</ion-label>\n              <ion-datetime displayFormat=\"H:mm:s\" [(ngModel)]='requestTime' disabled=\"{{disablrequestTime}}\"></ion-datetime>\n            </ion-item>\n          </div>\n          \n          <div [hidden]=hiddenreviewbutton padding>\n            <ion-button size=\"medium\" type=\"button\" class=\"requestsbutton\" (click)=\"requestItems()\" >Review</ion-button>\n          </div>\n          \n          <ion-item [hidden]=hiddenfeedback>\n            <ion-textarea class=\"textarea\" placeholder=\"Enter feedback\" [(ngModel)]='feedback' maxlength=\"400\"  ></ion-textarea>\n          </ion-item>\n          <div [hidden]=hiddenfeedback padding>\n            <ion-button size=\"medium\" type=\"button\" class=\"requestsbutton\" (click)=\"feedbackRequestItems()\" >Feedback</ion-button>\n          </div>\n\n          <div *ngIf=\"status == 1\" style=\"margin-top: 30px;\">\n            <ion-label>Help received? <ion-toggle color=\"success\" [(ngModel)]='checked' (ionChange)=\"receivedRequest()\" style=\"padding-top: 3px;padding-bottom: 6px; margin-left: 10px;vertical-align: middle;\"></ion-toggle></ion-label>\n          </div>\n          \n          <div class=\"divsubmitbutton\" padding>\n            <ion-button [hidden]=hiddeneditsubmit size=\"medium\" type=\"button\" class=\"requestsbutton\" (click)=\"editRequest()\" >Edit</ion-button>&nbsp;\n            <ion-button [hidden]=hiddenrequestsubmit size=\"medium\" type=\"button\" class=\"requestsbutton\" (click)=\"submitRequest()\" >{{submitlabel}}</ion-button>\n            <ion-button [hidden]=hiddenrepostrequest size=\"medium\" type=\"button\" class=\"requestsbutton\" (click)=\"submitRequest()\" >Re-post</ion-button>\n\n            <ion-item [hidden]=hiddenrequestcancel lines=\"none\">\n              <ion-button size=\"medium\" type=\"button\" class=\"requestsbutton\" (click)=\"cancelRequest()\" color=\"danger\" >Cancel Request</ion-button>\n            </ion-item>\n          </div>\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n\n    \n</ion-content>\n");

/***/ }),

/***/ "./src/app/staff/essentialsrequest/essentialsrequest-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/staff/essentialsrequest/essentialsrequest-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: EssentialsrequestPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EssentialsrequestPageRoutingModule", function() { return EssentialsrequestPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _essentialsrequest_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./essentialsrequest.page */ "./src/app/staff/essentialsrequest/essentialsrequest.page.ts");




const routes = [
    {
        path: '',
        component: _essentialsrequest_page__WEBPACK_IMPORTED_MODULE_3__["EssentialsrequestPage"]
    }
];
let EssentialsrequestPageRoutingModule = class EssentialsrequestPageRoutingModule {
};
EssentialsrequestPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EssentialsrequestPageRoutingModule);



/***/ }),

/***/ "./src/app/staff/essentialsrequest/essentialsrequest.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/staff/essentialsrequest/essentialsrequest.module.ts ***!
  \*********************************************************************/
/*! exports provided: EssentialsrequestPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EssentialsrequestPageModule", function() { return EssentialsrequestPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _essentialsrequest_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./essentialsrequest-routing.module */ "./src/app/staff/essentialsrequest/essentialsrequest-routing.module.ts");
/* harmony import */ var _essentialsrequest_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./essentialsrequest.page */ "./src/app/staff/essentialsrequest/essentialsrequest.page.ts");







let EssentialsrequestPageModule = class EssentialsrequestPageModule {
};
EssentialsrequestPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _essentialsrequest_routing_module__WEBPACK_IMPORTED_MODULE_5__["EssentialsrequestPageRoutingModule"]
        ],
        declarations: [_essentialsrequest_page__WEBPACK_IMPORTED_MODULE_6__["EssentialsrequestPage"]]
    })
], EssentialsrequestPageModule);



/***/ }),

/***/ "./src/app/staff/essentialsrequest/essentialsrequest.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/staff/essentialsrequest/essentialsrequest.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".requestgrid {\n  text-align: center; }\n\n.textarea {\n  text-align: left; }\n\n.divtextcenter {\n  margin-top: 50px; }\n\n.requestsbutton {\n  margin: auto;\n  margin-top: 50px;\n  width: 150px; }\n\n.categoryname {\n  text-align: left;\n  font-size: 18px;\n  font-weight: normal; }\n\n.requestitemheading {\n  border: 1px solid #5BCAA4;\n  width: 200px;\n  margin: 0 auto;\n  margin-top: 40px;\n  background: #5BCAA4;\n  color: white;\n  border-radius: 10px; }\n\n.divraw {\n  text-align: left;\n  padding-left: 20x;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  font-weight: bold; }\n\n.divsubmitbutton {\n  margin-bottom: 50px; }\n\n.categorytextarea {\n  height: 100px;\n  border: 1px solid black;\n  border-radius: 5px;\n  margin-top: 5px;\n  padding: 5px;\n  font-weight: normal; }\n\ntextarea {\n  padding: 5px; }\n\n.helperdetail {\n  margin-top: 20px; }\n\n.helperdetail .row {\n    margin-left: 10px; }\n\n.helperdetail ion-label {\n    font-weight: bold; }\n\n.helperdetail .col1 {\n    text-align: left; }\n\n.helperdetail .col2 {\n    text-align: right;\n    padding-right: 0; }\n\n.helperdetail .col2 label {\n      color: gray; }\n\ntable thead {\n  background: lightgray; }\n\ntable th, table td {\n  padding-top: 5px;\n  padding-bottom: 5px;\n  padding-left: 3px;\n  padding-right: 3px; }\n\ntable td {\n  text-align: left; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhZmYvZXNzZW50aWFsc3JlcXVlc3QvRDpcXGlvbmljMlxcaG9zcGl0YWwvc3JjXFxhcHBcXHN0YWZmXFxlc3NlbnRpYWxzcmVxdWVzdFxcZXNzZW50aWFsc3JlcXVlc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Msa0JBQWtCLEVBQUE7O0FBRW5CO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0MsZ0JBQWdCLEVBQUE7O0FBR2pCO0VBQ0MsWUFBWTtFQUFDLGdCQUFnQjtFQUFDLFlBQVksRUFBQTs7QUFJM0M7RUFDSSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLG1CQUFtQixFQUFBOztBQUV2QjtFQUVJLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osY0FBYztFQUNkLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNiLG1CQUFtQixFQUFBOztBQUd0QjtFQUNJLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsWUFBWTtFQUNaLG1CQUFtQixFQUFBOztBQUV2QjtFQUNJLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFEcEI7SUFJUSxpQkFBaUIsRUFBQTs7QUFKekI7SUFPUSxpQkFBaUIsRUFBQTs7QUFQekI7SUFVUSxnQkFBZ0IsRUFBQTs7QUFWeEI7SUFhUSxpQkFBaUI7SUFDakIsZ0JBQWdCLEVBQUE7O0FBZHhCO01BZ0JZLFdBQVcsRUFBQTs7QUFNdkI7RUFFUSxxQkFBcUIsRUFBQTs7QUFGN0I7RUFLUSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTs7QUFSMUI7RUFXUSxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3N0YWZmL2Vzc2VudGlhbHNyZXF1ZXN0L2Vzc2VudGlhbHNyZXF1ZXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZXF1ZXN0Z3JpZHtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnRleHRhcmVhe1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4uZGl2dGV4dGNlbnRlcntcclxuXHRtYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcblxyXG4ucmVxdWVzdHNidXR0b257XHJcblx0bWFyZ2luOiBhdXRvO21hcmdpbi10b3A6IDUwcHg7d2lkdGg6IDE1MHB4O1xyXG5cclxufVxyXG5cclxuLmNhdGVnb3J5bmFtZXtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcbi5yZXF1ZXN0aXRlbWhlYWRpbmd7XHJcbiAgICBcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM1QkNBQTQ7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNUJDQUE0O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4uZGl2cmF3e1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHBhZGRpbmctbGVmdDogMjB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmRpdnN1Ym1pdGJ1dHRvbntcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbi5jYXRlZ29yeXRleHRhcmVhe1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG50ZXh0YXJlYXtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLmhlbHBlcmRldGFpbHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcblxyXG4gICAgLnJvd3tcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIH1cclxuICAgIGlvbi1sYWJlbHtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICAgIC5jb2wxe1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9XHJcbiAgICAuY29sMntcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gICAgICAgIGxhYmVse1xyXG4gICAgICAgICAgICBjb2xvcjogZ3JheTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxudGFibGV7XHJcbiAgICB0aGVhZHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodGdyYXk7XHJcbiAgICB9XHJcbiAgICB0aCx0ZHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzcHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogM3B4O1xyXG4gICAgfVxyXG4gICAgdGR7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIH1cclxuICAgIFxyXG59Il19 */");

/***/ }),

/***/ "./src/app/staff/essentialsrequest/essentialsrequest.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/staff/essentialsrequest/essentialsrequest.page.ts ***!
  \*******************************************************************/
/*! exports provided: EssentialsrequestPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EssentialsrequestPage", function() { return EssentialsrequestPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../global.service */ "./src/app/global.service.ts");
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ "./node_modules/@ionic-native/android-permissions/ngx/index.js");
/* harmony import */ var _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/sms/ngx */ "./node_modules/@ionic-native/sms/ngx/index.js");











let EssentialsrequestPage = class EssentialsrequestPage {
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
        this.expire = true;
        this.checked = false;
        this.hiddenviewhelperdetails = true;
        this.hiddenhelper = true;
        this.hiddennotifications = true;
        this.notificationList = [];
        this.hname = "";
        this.hemail = "";
        this.request_date = "";
        this.hcontactno = "";
        this.edit = 1;
        this.feedback = "";
        this.hiddenfeedback = true;
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
        this.categoryList = [];
        this.selectedArray = [];
        this.start = 0;
        this.requestDate = '';
        this.requestminDate = '';
        this.requestmaxDate = '';
        this.requestTime = '';
        this.disablrequestDate = false;
        this.disablrequestTime = false;
        //this.menuCtrl.enable(false);
        console.log("construct");
    }
    ngOnInit() {
        this.id = this.activatedRoute.snapshot.paramMap.get('id');
        this.view = this.activatedRoute.snapshot.paramMap.get('view');
        this.request = this.activatedRoute.snapshot.paramMap.get('request');
        //this.getProductsList(this.infiniteScroll);
        this.getCategory();
    }
    ionViewDidEnter() {
        this.myapp.aboutmenu = 0;
        this.request = this.activatedRoute.snapshot.paramMap.get('request');
        if (this.request == 1) {
            this.submitlabel = "Back";
        }
        this.requestDate = this._global.currentDate();
        this.requestminDate = this._global.currentDate();
        this.requestmaxDate = this._global.maxDate();
    }
    selectOther() {
        console.log("clicked");
        this.hiddenotheritems = !this.checkother;
    }
    getCategory() {
        var token = this._global.token;
        console.log('token : ' + token);
        var userid = this._global.userid;
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token
            })
        };
        this.httpClient.post(this._global.domainURL + "getEssentialCategory", {
            "userid": userid,
            "id": this.id
        }, httpOptions)
            .subscribe((val) => {
            if (typeof val.data != "undefined") {
                // Notification count
                this.myapp.notifycount = val.data.countnotification;
                this.categoryList = val.data.category;
                this.expire = val.data.expire;
                this.status = val.data.status;
                this.notificationList = val.data.notifications;
                if (val.data.isSubmitted == 1) {
                    this.isSubmitted = val.data.isSubmitted;
                    this.requestDate = val.data.rdate;
                    this.requestTime = val.data.rtime;
                }
                if (this.view > 0 && val.data.status > 0) {
                    this.hiddenviewhelperdetails = false;
                    this.hname = val.data.name;
                    this.request_date = val.data.requestdate;
                    this.hemail = val.data.email;
                    this.hcontactno = val.data.contact;
                }
                if (val.data.status == 0) {
                    this.hiddenreviewbutton = false;
                    this.hiddenfeedback = true;
                }
                if (val.data.status == 1) {
                    this.disablrequestDate = true;
                    this.disablrequestTime = true;
                    this.hiddenreviewbutton = true;
                    for (var i = 0; i < this.categoryList.length; i++) {
                        this.categoryList[i]['disabled'] = true;
                    }
                }
                if (val.data.status == 2) {
                    if (val.data.edit == 0) {
                        this.feedback = val.data.feedback;
                        this.hiddenreviewbutton = true;
                        this.hiddenfeedback = false;
                        this.disablereadymeal = true;
                        this.disablrequestDate = true;
                        for (var i = 0; i < this.categoryList.length; i++) {
                            this.categoryList[i]['disabled'] = true;
                        }
                    }
                }
                if (this.view == 2) {
                    this.hiddennotifications = false;
                }
                if (this.view > 0) {
                    this.requestItems();
                }
                else {
                    this.hiddenreviewbutton = false;
                }
            }
        }, response => {
            console.log("Get call in error", response);
        }, () => {
            console.log("The Get observable is now completed.");
        });
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
        this.httpClient.post(this._global.domainURL + "items", {
            "type": 2,
            "start": this.start,
            "userid": userid,
            "id": this.id
        }, httpOptions)
            .subscribe((val) => {
            if (typeof val.data != "undefined") {
                if (val.data.lastid > 0) {
                    // Notification count
                    this.myapp.notifycount = val.data.countnotification;
                    this.productsList = this.productsList.concat(val.data.products);
                    this.start = val.data.lastid;
                    console.log('response : ' + JSON.stringify(val.data.readymeal));
                    if (val.data.otherchecked == 1) {
                        this.checkother = true;
                        //this.hiddenotheritems = false;
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
                    if (val.data.status == 1) {
                        this.hiddenreviewbutton = true;
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
                            for (var i = 0; i < this.productsList.length; i++) {
                                this.productsList[i]['disabled'] = true;
                            }
                        }
                    }
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
    }
    loadMore(infiniteScroll) {
        //  this.getProductsList(infiniteScroll);
        infiniteScroll.target.disabled = true;
    }
    requestItems() {
        var count = 0;
        for (var i = 0; i < this.categoryList.length; i++) {
            if (this.categoryList[i]['text'].trim() != '') {
                count++;
            }
        }
        if (count > 0) {
            console.log("request item");
            this.hiddenreviewbutton = true;
            this.hiddeneditsubmit = false;
            this.disableother = true;
            this.disablrequestDate = true;
            this.disablrequestTime = true;
            for (var i = 0; i < this.productsList.length; i++) {
                this.productsList[i]['disabled'] = true;
            }
            for (var i = 0; i < this.categoryList.length; i++) {
                this.categoryList[i]['disabled'] = true;
                if (this.categoryList[i]['text'] == '') {
                    this.categoryList[i]['hidden'] = true;
                }
            }
            if (this.view > 0 && this.status > 0) {
                this.hiddeneditsubmit = true;
                this.hiddenrepostrequest = true;
                this.hiddenrequestsubmit = true;
                this.hiddenrequestcancel = false;
                if (this.view == 2) {
                    this.hiddenhelper = true;
                }
                else {
                    this.hiddenhelper = false;
                }
            }
            else {
                if (this.status > 0) {
                    this.hiddenrequestcancel = false;
                }
                if (this.isSubmitted == 1) {
                    this.hiddenrequestcancel = false;
                    if (this.expire) {
                        this.hiddenrepostrequest = false;
                        this.hiddenrequestsubmit = true;
                    }
                    else {
                        this.hiddenrequestsubmit = false;
                        this.hiddenrepostrequest = true;
                    }
                }
                else {
                    this.hiddenrequestcancel = true;
                    if (this.expire) {
                        this.hiddenrepostrequest = false;
                        this.hiddenrequestsubmit = true;
                    }
                    else {
                        this.hiddenrequestsubmit = false;
                        this.hiddenrepostrequest = true;
                    }
                }
            }
        }
        else {
            // Alert message (start)
            let alert = this.alertCtrl.create({
                message: "Please enter a request",
                buttons: ['OK']
            });
            alert.then((_alert) => {
                _alert.present();
            });
            // Alert message (end)
        }
    }
    editRequest() {
        this.hiddenreviewbutton = false;
        this.hiddeneditsubmit = true;
        this.hiddenrequestcancel = true;
        if (this.expire) {
            this.hiddenrepostrequest = true;
            this.hiddenrequestsubmit = true;
        }
        else {
            this.hiddenrequestsubmit = true;
            this.hiddenrepostrequest = true;
        }
        this.disablrequestDate = false;
        this.disablrequestTime = false;
        this.disableother = false;
        for (var i = 0; i < this.productsList.length; i++) {
            this.productsList[i]['disabled'] = false;
        }
        for (var i = 0; i < this.categoryList.length; i++) {
            this.categoryList[i]['disabled'] = false;
            this.categoryList[i]['hidden'] = false;
        }
    }
    submitRequest() {
        var selectedProducts = new Array();
        var selectedProductsIndex = new Array();
        var sendrequest = 0;
        if (this._global.userid > 0 && this._global.userrole == this._global.userrole2) {
            /*for(var i=0;i<this.productsList.length;i++){
  
                if(this.productsList[i]['checked'] == true){
                  selectedProducts.push(this.productsList[i]['id']);
                  selectedProductsIndex.push(i);
                }
            
            }
  
            if(selectedProducts.length == 0){
                sendrequest = 0;
                var otherrequest = this.otherrequest.trim();
                if(this.checkother && otherrequest != ''){
                    sendrequest = 1;
                }else{
                    // Alert message (start)
                    let alert = this.alertCtrl.create({
                       
                        message: "Please select a item.",
                        buttons: ['OK']
                    });
                    alert.then((_alert: any)=> {
                          _alert.present();
                    })
                    // Alert message (end)
                }
                
            }else{
                
                sendrequest = 1;
  
            } */
            var category_arr = new Array();
            var categoryval_arr = new Array();
            for (var i = 0; i < this.categoryList.length; i++) {
                var text = this.categoryList[i]['text'].trim();
                category_arr.push(this.categoryList[i]['id']);
                categoryval_arr.push(text);
                console.log("text : " + text);
                if (text != '') {
                    sendrequest = 1;
                }
            }
            if (sendrequest == 1) {
                console.log("Send request");
                // Send request
                console.log('clicked : ' + selectedProducts);
                const httpOptions = {
                    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                        'Accept': 'application/json',
                        'Authorization': 'Bearer ' + this._global.token
                    })
                };
                this.httpClient.post(this._global.domainURL + "submitEssentialRequest", {
                    "id": this.id,
                    "nhs_staff_id": this._global.userid,
                    "category_arr": category_arr,
                    "categoryval_arr": categoryval_arr,
                    "expire": this.expire,
                    "requestDate": this.requestDate,
                    "requestTime": this.requestTime,
                }, httpOptions)
                    .subscribe((val) => {
                    //console.log('success : ' + JSON.stringify(val));
                    // Notification count
                    this.myapp.notifycount = val.data.countnotification;
                    var message = val.message;
                    if (!val.success) {
                        console.log('data : ' + val.success + ' - yo');
                    }
                    else {
                        this.expire = false;
                        this.editRequest();
                        this.myapp.selectedIndex = 1;
                        this.router.navigateByUrl('/myrequests');
                    }
                    if (this.submitlabel == "Submit")
                        this._global.showToast(message); // Send toast notification
                }, response => {
                    //  alert("POST call in error"+ JSON.stringify(response) );
                    console.log("POST call in error", response);
                }, () => {
                    //  alert("The POST observable is now completed.");
                    console.log("The POST observable is now completed.");
                });
            }
            else {
                // Alert message (start)
                let alert = this.alertCtrl.create({
                    message: "Please enter a item.",
                    buttons: ['OK']
                });
                alert.then((_alert) => {
                    _alert.present();
                });
                // Alert message (end)
            }
            console.log('selectedProducts : ' + JSON.stringify(selectedProducts));
        }
        else {
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
        this.httpClient.post(this._global.domainURL + "cancelEssentialRequest", {
            "nhs_staff_id": this._global.userid,
            "id": this.id
        }, httpOptions)
            .subscribe((val) => {
            console.log('success : ' + JSON.stringify(val));
            var message = val.message;
            // Notification count
            this.myapp.notifycount = val.data.countnotification;
            if (!val.success) {
                console.log('data : ' + val.success + ' - yo');
            }
            else {
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
            this.httpClient.post(this._global.domainURL + "essentialFeedback", {
                "id": this.id,
                "feedback": feedback,
            }, httpOptions)
                .subscribe((val) => {
                console.log('success : ' + JSON.stringify(val));
                // Notification count
                this.myapp.notifycount = val.data.countnotification;
                var message = val.message;
                if (!val.success) {
                    console.log('data : ' + val.success + ' - yo');
                }
                else {
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
        else {
            // Alert message (start)
            let alert = this.alertCtrl.create({
                message: "Please enter feedback.",
                buttons: ['OK']
            });
            alert.then((_alert) => {
                _alert.present();
            });
            // Alert message (end)
        }
    }
    presentAlertConfirm() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: '',
                message: '',
                cssClass: 'loginalert',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'alertbutton1',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Login',
                        cssClass: 'alertbutton2',
                        handler: () => {
                            this.router.navigateByUrl('/login/2');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    expandCategory(index) {
        this.categoryList[index]['expand'] = !this.categoryList[index]['expand'];
    }
    receivedRequest() {
        if (this.status == 1 && this.checked)
            this.presentReceiveAlertConfirm(this.id);
    }
    presentReceiveAlertConfirm(id) {
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
                                "type": "Essentials"
                            }, httpOptions)
                                .subscribe((val) => {
                                if (typeof val.data != "undefined") {
                                    var message = val.message;
                                    // Notification count
                                    this.myapp.notifycount = val.data.countnotification;
                                    this._global.showToast(message); // Send toast notification                
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
        this._global.sendSMS(this.hcontactno, 'Req. ' + this.id + ': ');
    }
};
EssentialsrequestPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"] },
    { type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_7__["AndroidPermissions"] },
    { type: _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_8__["SMS"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"])
], EssentialsrequestPage.prototype, "infiniteScroll", void 0);
EssentialsrequestPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-essentialsrequest',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./essentialsrequest.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/staff/essentialsrequest/essentialsrequest.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./essentialsrequest.page.scss */ "./src/app/staff/essentialsrequest/essentialsrequest.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_7__["AndroidPermissions"],
        _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_8__["SMS"]])
], EssentialsrequestPage);



/***/ })

}]);
//# sourceMappingURL=staff-essentialsrequest-essentialsrequest-module-es2015.js.map