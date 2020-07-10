(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["helper-childcarerequestdetails-childcarerequestdetails-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/helper/childcarerequestdetails/childcarerequestdetails.page.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/helper/childcarerequestdetails/childcarerequestdetails.page.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"searchhospitals\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"apphead\">Helpers</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<ion-grid class='requestgrid' >\n      \t<ion-row color=\"primary\" justify-content-center class='formcenter'>\n\n        \t<ion-col align-self-center size-md=\"12\" size-lg=\"12\" size-xs=\"12\">\n          \n\t          \t<div class=\"heading\" padding>\n\t            \t<h3 class=\"hospitalname\" color=\"tertiary\">Request Summary {{id}}</h3>\n\t          \t</div>\n\n\t          \t\n            <div class=\"staffdetail\">\n              \n\n              <ion-grid style=\"margin-top: 20px;\">\n\n\n                  <ion-row class=\"row\">\n                      <ion-col class=\"col1\" size='4.5'>\n                          <ion-label>Request type</ion-label>\n                      </ion-col>\n                      <ion-col class=\"col2\" size='7.5'>\n                        <ion-label>Childcare</ion-label>\n                      </ion-col>\n                    \n                  </ion-row>\n\n                  <ion-row class=\"row\">\n                      <ion-col class=\"col1\" size='4.5'>\n                          <ion-label>Hospital name</ion-label>\n                      </ion-col>\n                      <ion-col class=\"col2\" size='7.5'>\n                        <ion-label>{{hospitalname}}</ion-label>\n                      </ion-col>\n                    \n                  </ion-row>\n\n                  <ion-row class=\"row\">\n                      <ion-col class=\"col1\" size='4.5'>\n                          <ion-label>Requestor name</ion-label>\n                      </ion-col>\n                      <ion-col class=\"col2\" size='7.5'>\n                        <ion-label>{{name}}</ion-label>\n                      </ion-col>\n                    \n                  </ion-row>\n\n\n                </ion-grid>\n\n            </div>\n\t          \n\n\t\t      \t<div class=\"requestsummary\" padding>\n            \t\t<label >Childcare information</label>\n          \t\t</div>\n\n                <div class=\"childdetailstable\">\n\n                  <ion-grid style=\"margin-top: 20px;\">\n                  \n                    <ion-row class=\"row\">\n                        <ion-col class=\"col1\" size='4.5'>\n                            <ion-label>Child Age</ion-label>\n                        </ion-col>\n                        <ion-col class=\"col2\" size='7'>\n                            <label>{{childage1}}</label>\n                        </ion-col>\n                    </ion-row>\n\n                    <ion-row class=\"row\">\n                        <ion-col class=\"col1\" size='4.5'>\n                            <ion-label>Gender</ion-label>\n                        </ion-col>\n                        <ion-col class=\"col2\" size='7'>\n                            <label>{{childgender1}}</label>\n                        </ion-col>\n                    </ion-row>\n\n                    <ion-row class=\"row\">\n                        <ion-col class=\"col1\" size='4.5'>\n                            <ion-label>Days</ion-label>\n                        </ion-col>\n                        <ion-col class=\"col2\" size='7'>\n                            <label>{{child1reviewdays}}</label>\n                        </ion-col>\n                    </ion-row>\n\n                    <ion-row class=\"row\">\n                        <ion-col class=\"col1\" size='4.5'>\n                            <ion-label>Recurring</ion-label>\n                        </ion-col>\n                        <ion-col class=\"col2\" size='7'>\n                            <label>{{child1recurring}}</label>\n                        </ion-col>\n                    </ion-row>\n\n                   \n\n                    <div class=\"child2details\" [hidden]=hiddenchildrow2>\n                      <ion-row class=\"row\">\n                          <ion-col class=\"col1\" size='4.5'>\n                              <ion-label>Child Age</ion-label>\n                          </ion-col>\n                          <ion-col class=\"col2\" size='7'>\n                              <label>{{childage2}}</label>\n                          </ion-col>\n                      </ion-row>\n\n                      <ion-row class=\"row\">\n                          <ion-col class=\"col1\" size='4.5'>\n                              <ion-label>Gender</ion-label>\n                          </ion-col>\n                          <ion-col class=\"col2\" size='7'>\n                              <label>{{childgender2}}</label>\n                          </ion-col>\n                      </ion-row>\n\n                      <ion-row class=\"row\">\n                          <ion-col class=\"col1\" size='4.5'>\n                              <ion-label>Days</ion-label>\n                          </ion-col>\n                          <ion-col class=\"col2\" size='7'>\n                              <label>{{child2reviewdays}}</label>\n                          </ion-col>\n                      </ion-row>\n\n                      <ion-row class=\"row\">\n                          <ion-col class=\"col1\" size='4.5'>\n                              <ion-label>Recurring</ion-label>\n                          </ion-col>\n                          <ion-col class=\"col2\" size='7'>\n                              <label>{{child2recurring}}</label>\n                          </ion-col>\n                      </ion-row>\n\n                    </div>\n\n                  </ion-grid>\n\n                  \n                </div>\n\n                <ion-item [hidden]=hiddenstaffnote class=\"morecomment\" >\n                  \t<div class='textcontent'>\n          \t\t\t\t  <p>{{staff_notes}}</p>\n          \t\t\t</div>\n              </ion-item>\n\n              <div padding style=\"margin-top: 15px; margin-bottom: 15px;display: none;\" >\n                <ion-item>\n                  <ion-label position=\"floating\">Request Date</ion-label>\n                  <ion-datetime displayFormat=\"YYYY-MM-DD\" [(ngModel)]='requestDate' min=\"{{requestminDate}}\" max=\"{{requestmaxDate}}\" [disabled]=disableddateTime ></ion-datetime> \n                </ion-item>\n                <ion-item>\n                  <ion-label position=\"floating\">Request Time</ion-label>\n                  <ion-datetime displayFormat=\"H:mm:s\" [(ngModel)]='requestTime' [disabled]=disableddateTime></ion-datetime>\n                </ion-item>\n              </div>\n\n              <div padding *ngIf=\"status==0\" style=\"margin-top: 10px;\">\n                <ion-button size=\"medium\" type=\"button\" class=\"requestsbutton\" (click)=\"contactstaff()\">Contact</ion-button>\n                <ion-button size=\"medium\" type=\"button\" class=\"requestsbutton\" (click)=\"pickrequest()\">Offer help</ion-button>\n              </div>\n\n              <div padding *ngIf=\"status==1\" lines=\"none\" style=\"margin-top: 10px;\">\n                <ion-button size=\"medium\" type=\"button\" class=\"requestsbutton\" (click)=\"contactstaff()\">Contact</ion-button>\n                <ion-button size=\"medium\" type=\"button\" class=\"requestsbutton\" (click)=\"cancelrequest()\">Cancel</ion-button>\n              </div>\n              \n          \t\t<ion-item class=\"contactnote\" lines=\"none\" [hidden]=hiddenreviewrequest>\n\t\t        \t<p>{{helpcontactmsg}}</p>\n\t\t      \t</ion-item>\n            <div class=\"searchbutton\" padding>\n                \n                <ion-button size=\"medium\" type=\"button\" class=\"requestsbutton\"  (click)=\"searchHospital()\">Search Hospitals</ion-button>\n              </div>\n        \t</ion-col>\n      \t</ion-row>\n    </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/helper/childcarerequestdetails/childcarerequestdetails-routing.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/helper/childcarerequestdetails/childcarerequestdetails-routing.module.ts ***!
  \******************************************************************************************/
/*! exports provided: ChildcarerequestdetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildcarerequestdetailsPageRoutingModule", function() { return ChildcarerequestdetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _childcarerequestdetails_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./childcarerequestdetails.page */ "./src/app/helper/childcarerequestdetails/childcarerequestdetails.page.ts");




const routes = [
    {
        path: '',
        component: _childcarerequestdetails_page__WEBPACK_IMPORTED_MODULE_3__["ChildcarerequestdetailsPage"]
    }
];
let ChildcarerequestdetailsPageRoutingModule = class ChildcarerequestdetailsPageRoutingModule {
};
ChildcarerequestdetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ChildcarerequestdetailsPageRoutingModule);



/***/ }),

/***/ "./src/app/helper/childcarerequestdetails/childcarerequestdetails.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/helper/childcarerequestdetails/childcarerequestdetails.module.ts ***!
  \**********************************************************************************/
/*! exports provided: ChildcarerequestdetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildcarerequestdetailsPageModule", function() { return ChildcarerequestdetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _childcarerequestdetails_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./childcarerequestdetails-routing.module */ "./src/app/helper/childcarerequestdetails/childcarerequestdetails-routing.module.ts");
/* harmony import */ var _childcarerequestdetails_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./childcarerequestdetails.page */ "./src/app/helper/childcarerequestdetails/childcarerequestdetails.page.ts");







let ChildcarerequestdetailsPageModule = class ChildcarerequestdetailsPageModule {
};
ChildcarerequestdetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _childcarerequestdetails_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChildcarerequestdetailsPageRoutingModule"]
        ],
        declarations: [_childcarerequestdetails_page__WEBPACK_IMPORTED_MODULE_6__["ChildcarerequestdetailsPage"]]
    })
], ChildcarerequestdetailsPageModule);



/***/ }),

/***/ "./src/app/helper/childcarerequestdetails/childcarerequestdetails.page.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/helper/childcarerequestdetails/childcarerequestdetails.page.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".requestgrid {\n  text-align: center;\n  margin-bottom: 50px; }\n\n.hospitalname {\n  border: 1px solid #5BCAA4;\n  width: 290px;\n  margin: 0 auto;\n  margin-top: 40px;\n  background: #5BCAA4;\n  color: white;\n  text-align: center;\n  border-radius: 10px; }\n\n.heading {\n  margin-top: 50px;\n  margin-bottom: 50px; }\n\n.heading h2 {\n    text-align: left; }\n\n.row {\n  text-align: left;\n  font-size: 15px;\n  border-bottom: 1px solid darkgray;\n  padding-bottom: 15px; }\n\n.row .col1 ion-label {\n    line-height: 0;\n    vertical-align: bottom;\n    font-weight: bold; }\n\n.row .col2 {\n    /*color: darkgray; */\n    text-align: right; }\n\n.row .col2 ion-label {\n      line-height: 0;\n      vertical-align: bottom; }\n\n.row .col2 label {\n      line-height: 0px;\n      vertical-align: bottom; }\n\n.staffdetail .col2 {\n  color: darkgray; }\n\n.requestlist {\n  height: 200px;\n  max-height: 200px;\n  border: 1px solid black;\n  overflow: auto;\n  width: 100%; }\n\n.requestsummary {\n  margin-top: 40px;\n  margin-bottom: 25px;\n  font-weight: bold;\n  font-size: 19px; }\n\n.rawfood {\n  margin-top: 40px;\n  margin-bottom: 40px;\n  font-weight: bold;\n  font-size: 17px; }\n\n.textcontent {\n  width: 80%;\n  margin: 0 auto;\n  border: 1px solid darkgray;\n  padding: 5px;\n  margin-top: 10px;\n  margin-bottom: 10px; }\n\n.contactnote {\n  color: darkgray;\n  font-size: 15px;\n  margin-top: 40px;\n  text-align: left; }\n\ntable th, table td {\n  padding-top: 5px;\n  padding-bottom: 5px;\n  padding-left: 1px;\n  padding-right: 1px; }\n\n.searchbutton {\n  margin-top: 15px; }\n\n.childdetailstable th {\n  font-size: 15px; }\n\n.childdetailstable .child2details {\n  margin-top: 30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVscGVyL2NoaWxkY2FyZXJlcXVlc3RkZXRhaWxzL0Q6XFxpb25pYzJcXGhvc3BpdGFsL3NyY1xcYXBwXFxoZWxwZXJcXGNoaWxkY2FyZXJlcXVlc3RkZXRhaWxzXFxjaGlsZGNhcmVyZXF1ZXN0ZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxrQkFBa0I7RUFFbEIsbUJBQW1CLEVBQUE7O0FBR3BCO0VBQ0MseUJBQXlCO0VBQ3RCLFlBQVk7RUFDWixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG1CQUFtQixFQUFBOztBQUd2QjtFQUVDLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQTs7QUFIcEI7SUFNRSxnQkFBZ0IsRUFBQTs7QUFLbEI7RUFDQyxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlDQUFpQztFQUNqQyxvQkFBb0IsRUFBQTs7QUFKckI7SUFPRyxjQUFjO0lBQ2Qsc0JBQXNCO0lBQ3RCLGlCQUFpQixFQUFBOztBQVRwQjtJQWFFLG9CQUFBO0lBQ0EsaUJBQWlCLEVBQUE7O0FBZG5CO01BaUJHLGNBQWM7TUFDZCxzQkFBc0IsRUFBQTs7QUFsQnpCO01BcUJHLGdCQUFnQjtNQUNoQixzQkFBc0IsRUFBQTs7QUFJekI7RUFHRSxlQUFlLEVBQUE7O0FBS2pCO0VBQ0ksYUFBYTtFQUNiLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsY0FBYztFQUNkLFdBQVcsRUFBQTs7QUFHZjtFQUNDLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2QsZUFBZSxFQUFBOztBQUVuQjtFQUNDLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2QsZUFBZSxFQUFBOztBQUduQjtFQUNDLFVBQVU7RUFDVixjQUFjO0VBQ2QsMEJBQTBCO0VBQzFCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7O0FBR3BCO0VBQ0MsZUFBZTtFQUNmLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7O0FBR2pCO0VBRVEsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7O0FBSzFCO0VBQ0MsZ0JBQWdCLEVBQUE7O0FBR2pCO0VBRUUsZUFBZSxFQUFBOztBQUZqQjtFQU1RLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvaGVscGVyL2NoaWxkY2FyZXJlcXVlc3RkZXRhaWxzL2NoaWxkY2FyZXJlcXVlc3RkZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZXF1ZXN0Z3JpZHtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG5cdG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbi5ob3NwaXRhbG5hbWV7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgIzVCQ0FBNDtcclxuICAgIHdpZHRoOiAyOTBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgIGJhY2tncm91bmQ6ICM1QkNBQTQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4uaGVhZGluZ3tcclxuXHRcclxuXHRtYXJnaW4tdG9wOiA1MHB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDUwcHg7XHJcblxyXG5cdGgye1xyXG5cdFx0dGV4dC1hbGlnbjogbGVmdDtcclxuXHJcblx0fVxyXG59XHJcblxyXG4ucm93e1xyXG5cdHRleHQtYWxpZ246IGxlZnQ7XHJcblx0Zm9udC1zaXplOiAxNXB4O1xyXG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBkYXJrZ3JheTtcclxuXHRwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuXHQuY29sMXtcclxuXHRcdGlvbi1sYWJlbHtcclxuXHRcdFx0bGluZS1oZWlnaHQ6IDA7XHJcblx0XHRcdHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcblx0XHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdFx0fVxyXG5cdH1cclxuXHQuY29sMntcclxuXHRcdC8qY29sb3I6IGRhcmtncmF5OyAqL1xyXG5cdFx0dGV4dC1hbGlnbjogcmlnaHQ7XHJcblx0XHRcclxuXHRcdGlvbi1sYWJlbHtcclxuXHRcdFx0bGluZS1oZWlnaHQ6IDA7XHJcblx0XHRcdHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcblx0XHR9IFxyXG5cdFx0bGFiZWx7XHJcblx0XHRcdGxpbmUtaGVpZ2h0OiAwcHg7XHJcblx0XHRcdHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcblx0XHR9XHJcblx0fVx0XHJcbn1cclxuLnN0YWZmZGV0YWlse1xyXG5cdC5jb2wye1xyXG5cdFx0XHJcblx0XHRjb2xvcjogZGFya2dyYXk7XHJcblx0XHRcclxuXHR9XHJcbn1cclxuXHJcbi5yZXF1ZXN0bGlzdHtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAyMDBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyBcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5yZXF1ZXN0c3VtbWFyeXtcclxuXHRtYXJnaW4tdG9wOiA0MHB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDI1cHg7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE5cHg7XHJcbn1cclxuLnJhd2Zvb2R7XHJcblx0bWFyZ2luLXRvcDogNDBweDtcclxuXHRtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcblxyXG4udGV4dGNvbnRlbnR7XHJcblx0d2lkdGg6IDgwJTtcclxuXHRtYXJnaW46IDAgYXV0bztcclxuXHRib3JkZXI6IDFweCBzb2xpZCBkYXJrZ3JheTtcclxuXHRwYWRkaW5nOiA1cHg7XHJcblx0bWFyZ2luLXRvcDogMTBweDtcclxuXHRtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uY29udGFjdG5vdGV7XHJcblx0Y29sb3I6IGRhcmtncmF5O1xyXG5cdGZvbnQtc2l6ZTogMTVweDtcclxuXHRtYXJnaW4tdG9wOiA0MHB4O1xyXG5cdHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbnRhYmxle1xyXG4gICAgdGgsdGR7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMXB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDFweDtcclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG4uc2VhcmNoYnV0dG9ue1xyXG5cdG1hcmdpbi10b3A6IDE1cHg7XHJcbn1cclxuXHJcbi5jaGlsZGRldGFpbHN0YWJsZXtcclxuXHR0aHtcclxuXHRcdGZvbnQtc2l6ZTogMTVweDtcclxuXHR9XHJcblxyXG5cdC5jaGlsZDJkZXRhaWxze1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICB9XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/helper/childcarerequestdetails/childcarerequestdetails.page.ts":
/*!********************************************************************************!*\
  !*** ./src/app/helper/childcarerequestdetails/childcarerequestdetails.page.ts ***!
  \********************************************************************************/
/*! exports provided: ChildcarerequestdetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildcarerequestdetailsPage", function() { return ChildcarerequestdetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../global.service */ "./src/app/global.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ "./node_modules/@ionic-native/android-permissions/ngx/index.js");
/* harmony import */ var _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/sms/ngx */ "./node_modules/@ionic-native/sms/ngx/index.js");











let ChildcarerequestdetailsPage = class ChildcarerequestdetailsPage {
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
        this.hiddenstaffnote = true;
        this.hiddenreviewrequest = false;
        this.hiddenchildrow1 = true;
        this.hiddenchildrow2 = true;
        this.disableddateTime = false;
        this.requestDate = '';
        this.requestminDate = '';
        this.requestmaxDate = '';
        this.requestTime = '';
        this.childname1 = "";
        this.childage1 = 1;
        this.childgender1 = "";
        this.childname2 = "";
        this.child1reviewdays = "";
        this.child1recurring = "";
        this.childage2 = 1;
        this.childgender2 = "";
        this.child2reviewdays = "";
        this.child2recurring = "";
        this.staff_notes = "";
        this.staff_notes2 = "";
        this.name = "-";
        this.request_date = "-";
        this.hospitalname = "-";
        this.contactno = "-";
        this.status = 0;
        this.helpcontactmsg = "";
        console.log("construct");
    }
    ionViewDidEnter() {
        this.myapp.aboutmenu = 0;
        this.helpcontactmsg = this.myapp.helpcontactmsg;
        this.requestDate = this._global.currentDate();
        this.requestminDate = this._global.currentDate();
        this.requestmaxDate = this._global.maxDate();
    }
    ngOnInit() {
        this.id = this.activatedRoute.snapshot.paramMap.get('id');
        this.view = this.activatedRoute.snapshot.paramMap.get('view');
        this.getDetails();
        console.log("id : " + this.id);
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
        this.httpClient.post(this._global.domainURL + "childcareRequestDetails", {
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
                //	if(val.data.status == 1){
                // Notification count
                this.myapp.notifycount = val.data.countnotification;
                this.childname1 = val.data.childname1;
                this.childage1 = val.data.childage1;
                this.childgender1 = val.data.childgender1;
                this.child1reviewdays = val.data.childdays1;
                this.child1recurring = val.data.childRecurring1;
                this.childname2 = val.data.childname2;
                this.childage2 = val.data.childage2;
                this.childgender2 = val.data.childgender2;
                this.child2reviewdays = val.data.childdays2;
                this.child2recurring = val.data.childRecurring2;
                this.requestDate = val.data.rdate;
                this.requestTime = val.data.rtime;
                this.hiddenchildrow1 = false;
                if (val.data.childgender2.length > 2) {
                    this.hiddenchildrow2 = false;
                }
                else {
                    this.hiddenchildrow2 = true;
                }
                this.staff_notes = val.data.staff_notes;
                if (this.staff_notes == '-') {
                    this.staff_notes = "";
                }
                if (this.staff_notes != '') {
                    this.hiddenstaffnote = false;
                }
                else {
                    this.hiddenstaffnote = true;
                }
                this.name = val.data.name;
                this.request_date = val.data.requestdate;
                this.hospitalname = val.data.hospital;
                this.contactno = val.data.contact;
                console.log('response : ' + JSON.stringify(val.data));
                //	}                
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
                            this.httpClient.post(this._global.domainURL + "pickchildcareRequest", {
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
ChildcarerequestdetailsPage.ctorParameters = () => [
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
ChildcarerequestdetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-childcarerequestdetails',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./childcarerequestdetails.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/helper/childcarerequestdetails/childcarerequestdetails.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./childcarerequestdetails.page.scss */ "./src/app/helper/childcarerequestdetails/childcarerequestdetails.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_7__["AndroidPermissions"],
        _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_8__["SMS"]])
], ChildcarerequestdetailsPage);



/***/ })

}]);
//# sourceMappingURL=helper-childcarerequestdetails-childcarerequestdetails-module-es2015.js.map