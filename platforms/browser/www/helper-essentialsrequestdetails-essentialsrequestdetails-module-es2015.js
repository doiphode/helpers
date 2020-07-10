(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["helper-essentialsrequestdetails-essentialsrequestdetails-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/helper/essentialsrequestdetails/essentialsrequestdetails.page.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/helper/essentialsrequestdetails/essentialsrequestdetails.page.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"searchhospitals\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"apphead\">Helpers</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<ion-grid class='requestgrid' >\n      \t<ion-row color=\"primary\" justify-content-center class='formcenter'>\n\n        \t<ion-col align-self-center size-md=\"12\" size-lg=\"12\" size-xs=\"12\">\n          \n\t          \t<div class=\"heading\" padding>\n\t            \t<h3 class=\"hospitalname\" color=\"tertiary\">Request Summary {{id}}</h3>\n\t          \t</div>\n\n\t          \t\n              <div class=\"staffdetail\">\n\n                  <ion-grid style=\"margin-top: 20px;\">\n\n                    <ion-row class=\"row\">\n                      <ion-col class=\"col1\" size='4.5'>\n                          <ion-label>Request type</ion-label>\n                      </ion-col>\n                      <ion-col class=\"col2\" size='7.5'>\n                        <ion-label>Essential</ion-label>\n                      </ion-col>\n                    \n                    </ion-row>\n\n                     <ion-row class=\"row\">\n                      <ion-col class=\"col1\" size='4.5'>\n                          <ion-label>Hospital name</ion-label>\n                      </ion-col>\n                      <ion-col class=\"col2\" size='7.5'>\n                        <ion-label>{{hospitalname}}</ion-label>\n                      </ion-col>\n                    \n                    </ion-row>\n\n                    <ion-row class=\"row\">\n                        <ion-col class=\"col1\" size='4.5'>\n                            <ion-label>Requestor name</ion-label>\n                        </ion-col>\n                        <ion-col class=\"col2\" size='7.5'>\n                          <ion-label>{{name}}</ion-label>\n                        </ion-col>\n                      \n                    </ion-row>\n\n                    <ion-row class=\"row\">\n                        <ion-col class=\"col1\" size='4.5'>\n                            <ion-label>Requested for</ion-label>\n                        </ion-col>\n                        <ion-col class=\"col2\" size='7.5'>\n                          <ion-label>{{request_date}}</ion-label>\n                        </ion-col>\n                      \n                    </ion-row>\n\n                </ion-grid>\n\n              </div>\n\t          \t\n\n\t\t      \t<div class=\"requestsummary\" padding style=\"display: none;\">\n            \t\t<label >Request Summary</label>\n          \t\t</div>\n\n          \t\n\n          \t\t<div padding style=\"display: none;\">\n          \t\t\t<ion-list >\n          \t\t\t\t<ion-item *ngFor=\"let item of itemsList;\" >\n            \t\t\t\t{{item}}\n          \t\t\t\t</ion-item>\n          \t\t\t</ion-list>\n          \t\t</div>\n\n          \t\t<div [hidden]=otherchecked padding style=\"display: none;\">\n          \t\t\t<div class='textcontent'>\n          \t\t\t\t<p>{{otheritem}}</p>\n          \t\t\t</div>\n          \t\t</div>\n\n              <ion-card *ngFor=\"let category of categoryList; let i = index\"  >\n                  \n                <ion-card-header >\n                  <ion-card-title style='text-align: left;' (click)=\"expandCategory(i)\" class=\"categoryname\">\n                    {{category['name']}} \n                    <ion-icon *ngIf=\"!category['expand']\" name=\"chevron-up-outline\" style=\"float: right;\"></ion-icon><ion-icon name=\"chevron-down-outline\" style=\"float: right;\" *ngIf=\"category['expand']\"></ion-icon>\n                  </ion-card-title>\n                  <div style=\"width: 100%;\" *ngIf=\"category['expand']\" >\n                      <ion-textarea [(ngModel)]='category[\"text\"]' class=\"textarea categorytextarea\" placeholder=\"Enter details..\" readonly=\"readonly\"  ></ion-textarea>\n                  </div> \n                </ion-card-header>\n\n              </ion-card>\n\n              <div padding style=\"margin-bottom: 15px;\" >\n                <ion-item>\n                  <ion-label position=\"floating\">Requested for date</ion-label>\n                  <ion-datetime displayFormat=\"YYYY-MM-DD\" [(ngModel)]='requestDate' min=\"{{requestminDate}}\" max=\"{{requestmaxDate}}\" [disabled]=disableddateTime ></ion-datetime> \n                </ion-item>\n                \n              </div>\n                        \t\n              <div padding *ngIf=\"status==0\">\n                <ion-button size=\"medium\" type=\"button\" class=\"requestsbutton\" (click)=\"contactstaff()\">Contact</ion-button>\n                <ion-button size=\"medium\" type=\"button\" class=\"requestsbutton\" (click)=\"pickrequest()\">Offer help</ion-button>\n              </div>\n\n              <div padding *ngIf=\"status==1\" lines=\"none\" style=\"margin-top: 10px;\">\n                <ion-button size=\"medium\" type=\"button\" class=\"requestsbutton\" (click)=\"contactstaff()\">Contact</ion-button>\n                <ion-button size=\"medium\" type=\"button\" class=\"requestsbutton\" (click)=\"cancelrequest()\">Cancel</ion-button>\n              </div>\n\n\n          \t\t<ion-item class=\"contactnote\" lines=\"none\" [hidden]=hiddenreviewrequest>\n\t\t        \t<p>{{helpcontactmsg}}</p>\n\t\t      \t</ion-item>\n            \n            <div class=\"backbutton\" padding>\n                \n                <ion-button size=\"medium\" type=\"button\" class=\"requestsbutton\"  (click)=\"searchHospital()\">Search Hospital</ion-button>\n              </div>\n        \t</ion-col>\n      \t</ion-row>\n    </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/helper/essentialsrequestdetails/essentialsrequestdetails-routing.module.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/helper/essentialsrequestdetails/essentialsrequestdetails-routing.module.ts ***!
  \********************************************************************************************/
/*! exports provided: EssentialsrequestdetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EssentialsrequestdetailsPageRoutingModule", function() { return EssentialsrequestdetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _essentialsrequestdetails_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./essentialsrequestdetails.page */ "./src/app/helper/essentialsrequestdetails/essentialsrequestdetails.page.ts");




const routes = [
    {
        path: '',
        component: _essentialsrequestdetails_page__WEBPACK_IMPORTED_MODULE_3__["EssentialsrequestdetailsPage"]
    }
];
let EssentialsrequestdetailsPageRoutingModule = class EssentialsrequestdetailsPageRoutingModule {
};
EssentialsrequestdetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EssentialsrequestdetailsPageRoutingModule);



/***/ }),

/***/ "./src/app/helper/essentialsrequestdetails/essentialsrequestdetails.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/helper/essentialsrequestdetails/essentialsrequestdetails.module.ts ***!
  \************************************************************************************/
/*! exports provided: EssentialsrequestdetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EssentialsrequestdetailsPageModule", function() { return EssentialsrequestdetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _essentialsrequestdetails_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./essentialsrequestdetails-routing.module */ "./src/app/helper/essentialsrequestdetails/essentialsrequestdetails-routing.module.ts");
/* harmony import */ var _essentialsrequestdetails_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./essentialsrequestdetails.page */ "./src/app/helper/essentialsrequestdetails/essentialsrequestdetails.page.ts");







let EssentialsrequestdetailsPageModule = class EssentialsrequestdetailsPageModule {
};
EssentialsrequestdetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _essentialsrequestdetails_routing_module__WEBPACK_IMPORTED_MODULE_5__["EssentialsrequestdetailsPageRoutingModule"]
        ],
        declarations: [_essentialsrequestdetails_page__WEBPACK_IMPORTED_MODULE_6__["EssentialsrequestdetailsPage"]]
    })
], EssentialsrequestdetailsPageModule);



/***/ }),

/***/ "./src/app/helper/essentialsrequestdetails/essentialsrequestdetails.page.scss":
/*!************************************************************************************!*\
  !*** ./src/app/helper/essentialsrequestdetails/essentialsrequestdetails.page.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".requestgrid {\n  text-align: center;\n  margin-bottom: 50px; }\n\n.hospitalname {\n  border: 1px solid #5BCAA4;\n  width: 290px;\n  margin: 0 auto;\n  margin-top: 40px;\n  background: #5BCAA4;\n  color: white;\n  text-align: center;\n  border-radius: 10px; }\n\n.categoryname {\n  text-align: left;\n  font-size: 18px;\n  font-weight: normal; }\n\n.heading {\n  margin-top: 50px;\n  margin-bottom: 50px; }\n\n.heading h2 {\n    text-align: left; }\n\n.row {\n  text-align: left;\n  font-size: 15px;\n  border-bottom: 1px solid darkgray;\n  padding-bottom: 15px; }\n\n.row .col1 ion-label {\n    line-height: 0;\n    vertical-align: bottom;\n    font-weight: bold; }\n\n.row .col2 {\n    /*color: darkgray; */\n    text-align: right;\n    color: darkgray; }\n\n.row .col2 ion-label {\n      line-height: 0;\n      vertical-align: bottom; }\n\n.requestlist {\n  height: 200px;\n  max-height: 200px;\n  border: 1px solid black;\n  overflow: auto;\n  width: 100%; }\n\n.requestsummary {\n  margin-top: 40px;\n  margin-bottom: 25px;\n  font-weight: bold;\n  font-size: 19px; }\n\n.rawfood {\n  margin-top: 40px;\n  margin-bottom: 40px;\n  font-weight: bold;\n  font-size: 17px; }\n\n.textcontent {\n  width: 80%;\n  margin: 0 auto;\n  border: 1px solid darkgray;\n  padding: 5px;\n  margin-top: 10px;\n  margin-bottom: 10px; }\n\n.contactnote {\n  color: darkgray;\n  font-size: 15px;\n  margin-top: 40px;\n  text-align: left; }\n\n.categorytextarea {\n  height: 100px;\n  border: 1px solid black;\n  border-radius: 5px;\n  text-align: left;\n  margin-top: 5px;\n  padding: 5px; }\n\n.searchbutton {\n  margin-top: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVscGVyL2Vzc2VudGlhbHNyZXF1ZXN0ZGV0YWlscy9EOlxcaW9uaWMyXFxob3NwaXRhbC9zcmNcXGFwcFxcaGVscGVyXFxlc3NlbnRpYWxzcmVxdWVzdGRldGFpbHNcXGVzc2VudGlhbHNyZXF1ZXN0ZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxrQkFBa0I7RUFFbEIsbUJBQW1CLEVBQUE7O0FBR3BCO0VBQ0MseUJBQXlCO0VBQ3RCLFlBQVk7RUFDWixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG1CQUFtQixFQUFBOztBQUV2QjtFQUNJLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsbUJBQW1CLEVBQUE7O0FBRXZCO0VBRUMsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBOztBQUhwQjtJQU1FLGdCQUFnQixFQUFBOztBQUtsQjtFQUNDLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUNBQWlDO0VBQ2pDLG9CQUFvQixFQUFBOztBQUpyQjtJQU9HLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIsaUJBQWlCLEVBQUE7O0FBVHBCO0lBYUUsb0JBQUE7SUFDQSxpQkFBaUI7SUFDakIsZUFBZSxFQUFBOztBQWZqQjtNQWlCRyxjQUFjO01BQ2Qsc0JBQXNCLEVBQUE7O0FBS3pCO0VBQ0ksYUFBYTtFQUNiLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsY0FBYztFQUNkLFdBQVcsRUFBQTs7QUFHZjtFQUNDLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2QsZUFBZSxFQUFBOztBQUVuQjtFQUNDLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2QsZUFBZSxFQUFBOztBQUduQjtFQUNDLFVBQVU7RUFDVixjQUFjO0VBQ2QsMEJBQTBCO0VBQzFCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7O0FBSXBCO0VBQ0MsZUFBZTtFQUNmLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7O0FBR2pCO0VBQ0ksYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixZQUFZLEVBQUE7O0FBSWhCO0VBQ0MsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9oZWxwZXIvZXNzZW50aWFsc3JlcXVlc3RkZXRhaWxzL2Vzc2VudGlhbHNyZXF1ZXN0ZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVxdWVzdGdyaWR7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuXHRtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG59XHJcblxyXG4uaG9zcGl0YWxuYW1le1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICM1QkNBQTQ7XHJcbiAgICB3aWR0aDogMjkwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNUJDQUE0O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4uY2F0ZWdvcnluYW1le1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuLmhlYWRpbmd7XHJcblx0XHJcblx0bWFyZ2luLXRvcDogNTBweDtcclxuXHRtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG5cclxuXHRoMntcclxuXHRcdHRleHQtYWxpZ246IGxlZnQ7XHJcblxyXG5cdH1cclxufVxyXG5cclxuLnJvd3tcclxuXHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cdGZvbnQtc2l6ZTogMTVweDtcclxuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgZGFya2dyYXk7XHJcblx0cGFkZGluZy1ib3R0b206IDE1cHg7XHJcblx0LmNvbDF7XHJcblx0XHRpb24tbGFiZWx7XHJcblx0XHRcdGxpbmUtaGVpZ2h0OiAwO1xyXG5cdFx0XHR2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG5cdFx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHRcdH1cclxuXHR9XHJcblx0LmNvbDJ7XHJcblx0XHQvKmNvbG9yOiBkYXJrZ3JheTsgKi9cclxuXHRcdHRleHQtYWxpZ246IHJpZ2h0O1xyXG5cdFx0Y29sb3I6IGRhcmtncmF5O1xyXG5cdFx0aW9uLWxhYmVse1xyXG5cdFx0XHRsaW5lLWhlaWdodDogMDtcclxuXHRcdFx0dmVydGljYWwtYWxpZ246IGJvdHRvbTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbi5yZXF1ZXN0bGlzdHtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAyMDBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyBcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5yZXF1ZXN0c3VtbWFyeXtcclxuXHRtYXJnaW4tdG9wOiA0MHB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDI1cHg7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE5cHg7XHJcbn1cclxuLnJhd2Zvb2R7XHJcblx0bWFyZ2luLXRvcDogNDBweDtcclxuXHRtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcblxyXG4udGV4dGNvbnRlbnR7XHJcblx0d2lkdGg6IDgwJTtcclxuXHRtYXJnaW46IDAgYXV0bztcclxuXHRib3JkZXI6IDFweCBzb2xpZCBkYXJrZ3JheTtcclxuXHRwYWRkaW5nOiA1cHg7XHJcblx0bWFyZ2luLXRvcDogMTBweDtcclxuXHRtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cclxufVxyXG5cclxuLmNvbnRhY3Rub3Rle1xyXG5cdGNvbG9yOiBkYXJrZ3JheTtcclxuXHRmb250LXNpemU6IDE1cHg7XHJcblx0bWFyZ2luLXRvcDogNDBweDtcclxuXHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uY2F0ZWdvcnl0ZXh0YXJlYXtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcblxyXG4uc2VhcmNoYnV0dG9ue1xyXG5cdG1hcmdpbi10b3A6IDE1cHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/helper/essentialsrequestdetails/essentialsrequestdetails.page.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/helper/essentialsrequestdetails/essentialsrequestdetails.page.ts ***!
  \**********************************************************************************/
/*! exports provided: EssentialsrequestdetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EssentialsrequestdetailsPage", function() { return EssentialsrequestdetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../global.service */ "./src/app/global.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ "./node_modules/@ionic-native/android-permissions/ngx/index.js");
/* harmony import */ var _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/sms/ngx */ "./node_modules/@ionic-native/sms/ngx/index.js");











let EssentialsrequestdetailsPage = class EssentialsrequestdetailsPage {
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
        this.categoryList = [];
        this.otherchecked = true;
        this.otheritem = "";
        this.readymeal = "";
        this.disableddateTime = false;
        this.hiddenreviewrequest = false;
        this.name = "-";
        this.request_date = "-";
        this.hospitalname = "-";
        this.contactno = "-";
        this.requestDate = '';
        this.requestminDate = '';
        this.requestmaxDate = '';
        this.requestTime = '';
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
        this.httpClient.post(this._global.domainURL + "essentialRequestDetails", {
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
                //if(val.data.status == 1){
                // Notification count
                this.myapp.notifycount = val.data.countnotification;
                this.categoryList = val.data.category;
                this.name = val.data.name;
                this.request_date = val.data.requestdate;
                this.hospitalname = val.data.hospital;
                this.contactno = val.data.contact;
                this.requestDate = val.data.rdate;
                this.requestTime = val.data.rtime;
                console.log('response : ' + JSON.stringify(val.data));
                //}                
            }
        }, response => {
            console.log("Get call in error", response);
        }, () => {
            console.log("The Get observable is now completed.");
        });
    }
    expandCategory(index) {
        this.categoryList[index]['expand'] = !this.categoryList[index]['expand'];
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
                            this.httpClient.post(this._global.domainURL + "pickessentialRequest", {
                                "userid": userid,
                                "id": this.id,
                                "requestDate": this.requestDate,
                                "requestTime": this.requestTime,
                            }, httpOptions)
                                .subscribe((val) => {
                                if (typeof val.data != "undefined") {
                                    var message = val.message;
                                    this._global.showToast(message); // Send toast notification                
                                    if (val.data.success == 1) {
                                        // Notification count
                                        this.myapp.notifycount = val.data.countnotification;
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
EssentialsrequestdetailsPage.ctorParameters = () => [
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
EssentialsrequestdetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-essentialsrequestdetails',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./essentialsrequestdetails.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/helper/essentialsrequestdetails/essentialsrequestdetails.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./essentialsrequestdetails.page.scss */ "./src/app/helper/essentialsrequestdetails/essentialsrequestdetails.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_7__["AndroidPermissions"],
        _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_8__["SMS"]])
], EssentialsrequestdetailsPage);



/***/ })

}]);
//# sourceMappingURL=helper-essentialsrequestdetails-essentialsrequestdetails-module-es2015.js.map