(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["staff-childcarerequest-childcarerequest-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/staff/childcarerequest/childcarerequest.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/staff/childcarerequest/childcarerequest.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"myrequests\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"apphead\">Helpers</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n\n\t<ion-grid class=\"requestgrid\" >\n      <ion-row color=\"primary\" justify-content-center class='formcenter'>\n\n        <ion-col align-self-center size-md=\"12\" size-lg=\"12\" size-xs=\"12\">\n\n            <!-- Entry form (start) -->\n            <div [hidden]=hiddenentryform>\n                <div class=\"divtextcenter\"  text-center>\n                  <label >Request for...</label>\n                </div>\n              \n                <div  padding>\n                  <h3 class=\"requestitemheading\" color=\"tertiary\">Childcare</h3>\n                </div>\n                \n                <div padding>\n\n                    <!-- Children 1 (start) -->\n                    <ion-list class=\"childdetails\" >\n                        <ion-item style=\"display: none;\" >\n                            <ion-input name=\"email\" placeholder=\"Enter child1 name\" required [(ngModel)]='childname1' [disabled]=\"disablename1\" ></ion-input>\n                        </ion-item>\n\n\n                        <ion-item >\n                            <h4 class=\"childnumber\">Child one</h4>\n                        </ion-item>\n\n                        <ion-item >\n                            <ion-select class=\"selectel\" placeholder=\"Age\" [(ngModel)]='childage1' [disabled]=\"disableage1\" >\n                                    \n                                <ion-select-option *ngFor=\"let age of childages1;\" [value]='age'>\n                                  {{ age }}\n                                </ion-select-option>\n                            </ion-select>\n                        </ion-item>\n\n                        <ion-item >\n\n                            <ion-select class=\"selectel\" placeholder=\"Gender\" [(ngModel)]='childgender1' [disabled]=\"disablegender1\" >\n                                 \n                                <ion-select-option value='Boy'>Boy</ion-select-option>\n                                <ion-select-option value='Girl'>Girl</ion-select-option>\n                            </ion-select>\n\n                        </ion-item>\n                        <ion-item *ngFor=\"let day of childdays1;\" >\n                            <ion-label>{{day['name']}}</ion-label>\n                            <ion-checkbox slot=\"end\" value=\"{{day['num']}}\" [(ngModel)]=\"day['checked']\" disabled=\"{{day['disabled']}}\" ></ion-checkbox>\n                        </ion-item>\n                        <ion-item >\n                          Recurring<ion-toggle class=\"recurringtoggle\" color=\"success\" [(ngModel)]='recurring1' [disabled]=\"disablerecurring1\" ></ion-toggle>\n                        </ion-item>\n                    </ion-list>\n                    <!-- Children 1 (end) -->\n\n                    <!-- Children 2 (start) -->\n                    <ion-list class=\"childdetails\" [hidden]=hiddenchild2 >\n                        <ion-item style=\"display: none;\" >\n                          <ion-input name=\"email\" placeholder=\"Enter child2 name\" required  [(ngModel)]='childname2' [disabled]=\"disablename2\" ></ion-input>\n                        </ion-item>\n\n                        <ion-item >\n                            <h4 class=\"childnumber\">Child two</h4>\n                        </ion-item>\n\n                        <ion-item >\n                            <ion-select class=\"selectel\" placeholder=\"Age\" [(ngModel)]='childage2' [disabled]=\"disableage1\" >\n                                    \n                                <ion-select-option *ngFor=\"let age of childages2;\" [value]='age'>\n                                  {{ age }}\n                                </ion-select-option>\n                            </ion-select>\n                        </ion-item>\n\n                        <ion-item >\n                            <ion-select class=\"selectel\" placeholder=\"Gender\" [(ngModel)]='childgender2' [disabled]=\"disablegender2\" >\n                                <ion-select-option value='Boy'>Boy</ion-select-option>\n                                <ion-select-option value='Girl'>Girl</ion-select-option>\n                                \n                            </ion-select>\n                        </ion-item>\n\n                        <ion-item *ngFor=\"let day of childdays2;\" >\n                            <ion-label>{{day['name']}}</ion-label>\n                            <ion-checkbox slot=\"end\" value=\"{{day['num']}}\" [(ngModel)]=\"day['checked']\" disabled=\"{{day['disabled']}}\" ></ion-checkbox>\n                        </ion-item>\n                        <ion-item >\n                          Recurring<ion-toggle class=\"recurringtoggle\" color=\"success\" [(ngModel)]='recurring2' [disabled]=\"disablerecurring2\"  ></ion-toggle>\n                        </ion-item>\n                    </ion-list>\n                    <!-- Children 2 (end) -->\n\n                </div>\n\n                <ion-item lines=\"none\">\n                  <ion-button size=\"medium\" type=\"button\" (click)=\"addmore()\" [hidden]=hiddenaddmore >Add more children...</ion-button>\n                </ion-item>\n\n                <ion-item class=\"morecomment\" >\n                  <ion-textarea class=\"textarea\" placeholder=\"More comments here...\"   [(ngModel)]='staff_notes' [disabled]=\"disablecomment\"></ion-textarea>\n                </ion-item>\n            </div>\n            <!-- Entry form (end) -->\n\n            <!-- View form (start) -->\n            <div [hidden]=hiddenviewform>\n                <div  padding>\n                  <h3 class=\"requestitemheading2\" color=\"tertiary\">Childcare Information</h3>\n                </div>\n                \n                <div padding *ngIf=\"status==1\" lines=\"none\" style=\"margin-top: 10px;\">\n                  <ion-button size=\"medium\" type=\"button\" class=\"requestsbutton\" (click)=\"contactstaff()\">Contact</ion-button>\n                \n                </div>\n\n                <div [hidden]=hiddennotifications>\n                  <ion-item class=\"divraw\" *ngIf=\"notificationList.length > 0\" >\n                    <label >Notifications</label>\n                  </ion-item>\n\n                  <table class=\"notificationTable\" width='100%' border='1' style='border-collapse: collapse;' *ngIf=\"notificationList.length > 0\">\n                      <thead>\n                          <tr>\n                            <th widht='60%'>Notification</th>\n                            <th widht='40%'>Date & Time</th>\n                          </tr>\n                      </thead>\n                      <tbody>\n                          <tr *ngFor=\"let item of notificationList;\">\n                            <td>{{item['message']}}</td>\n                            <td>{{item['created_at']}}</td>\n                          </tr>\n                      </tbody>\n                  </table>\n               </div>\n\n                <div [hidden]=hiddenviewhelperdetails class=\"helperdetail\">\n                  <ion-grid style=\"margin-top: 20px;\">\n                  \n                    <ion-row class=\"row\">\n                        <ion-col class=\"col1\" size='4.5'>\n                            <ion-label>Helper name</ion-label>\n                        </ion-col>\n                        <ion-col class=\"col2\" size='7'>\n                            <label>{{hname}}</label>\n                        </ion-col>\n                    </ion-row>\n\n                  </ion-grid>\n                </div>\n                \n                <div class=\"childdetailstable\">\n\n                  <ion-grid style=\"margin-top: 20px;\">\n                  \n                    <ion-row class=\"row\">\n                        <ion-col class=\"col1\" size='4.5'>\n                            <ion-label>Child Age</ion-label>\n                        </ion-col>\n                        <ion-col class=\"col2\" size='7'>\n                            <label>{{childage1}}</label>\n                        </ion-col>\n                    </ion-row>\n\n                    <ion-row class=\"row\">\n                        <ion-col class=\"col1\" size='4.5'>\n                            <ion-label>Gender</ion-label>\n                        </ion-col>\n                        <ion-col class=\"col2\" size='7'>\n                            <label>{{childgender1}}</label>\n                        </ion-col>\n                    </ion-row>\n\n                    <ion-row class=\"row\">\n                        <ion-col class=\"col1\" size='4.5'>\n                            <ion-label>Days</ion-label>\n                        </ion-col>\n                        <ion-col class=\"col2\" size='7'>\n                            <label>{{child1reviewdays}}</label>\n                        </ion-col>\n                    </ion-row>\n\n                    <ion-row class=\"row\">\n                        <ion-col class=\"col1\" size='4.5'>\n                            <ion-label>Recurring</ion-label>\n                        </ion-col>\n                        <ion-col class=\"col2\" size='7'>\n                            <label>{{child1recurring}}</label>\n                        </ion-col>\n                    </ion-row>\n\n                   \n                    <div class=\"child2details\" [hidden]=hiddenchildrow2>\n                      <ion-row class=\"row\">\n                          <ion-col class=\"col1\" size='4.5'>\n                              <ion-label>Child Age</ion-label>\n                          </ion-col>\n                          <ion-col class=\"col2\" size='7'>\n                              <label>{{childage2}}</label>\n                          </ion-col>\n                      </ion-row>\n\n                      <ion-row class=\"row\">\n                          <ion-col class=\"col1\" size='4.5'>\n                              <ion-label>Gender</ion-label>\n                          </ion-col>\n                          <ion-col class=\"col2\" size='7'>\n                              <label>{{childgender2}}</label>\n                          </ion-col>\n                      </ion-row>\n\n                      <ion-row class=\"row\">\n                          <ion-col class=\"col1\" size='4.5'>\n                              <ion-label>Days</ion-label>\n                          </ion-col>\n                          <ion-col class=\"col2\" size='7'>\n                              <label>{{child2reviewdays}}</label>\n                          </ion-col>\n                      </ion-row>\n\n                      <ion-row class=\"row\">\n                          <ion-col class=\"col1\" size='4.5'>\n                              <ion-label>Recurring</ion-label>\n                          </ion-col>\n                          <ion-col class=\"col2\" size='7'>\n                              <label>{{child2recurring}}</label>\n                          </ion-col>\n                      </ion-row>\n\n                    </div>\n\n                  </ion-grid>\n\n                </div>\n\n                <ion-item class=\"morecomment\" *ngIf=\"staff_notes2.trim() != '' \">\n                  <ion-textarea class=\"textarea\" placeholder=\"More comments here...\"   [(ngModel)]='staff_notes2' disabled=\"disabled\"></ion-textarea>\n                </ion-item>\n\n            </div>\n            <!-- View form (end) -->\n\n          \t<div style=\"display: none;\">\n              <ion-item>\n                <ion-label position=\"floating\">Requesting for date</ion-label>\n                <ion-datetime displayFormat=\"DD/MM/YYYY\" min=\"{{requestminDate}}\" max=\"{{requestmaxDate}}\" [(ngModel)]='requestDate' disabled=\"{{disablrequestDate}}\" ></ion-datetime>\n              </ion-item>\n              <ion-item style=\"display: none;\">\n                <ion-label position=\"floating\">Request Time</ion-label>\n                <ion-datetime displayFormat=\"H:mm:s\" [(ngModel)]='requestTime' disabled=\"{{disablrequestTime}}\"></ion-datetime>\n              </ion-item>\n            </div>\n\n          \t<div [hidden]=hiddenreviewbutton padding>\n              <ion-button size=\"medium\" type=\"button\" class=\"requestsbutton\" (click)=\"requestItems()\" >Review</ion-button>\n            </div>\n            \n            <ion-item [hidden]=hiddenfeedback>\n              <ion-textarea class=\"textarea\" placeholder=\"Enter feedback\" [(ngModel)]='feedback' maxlength=\"400\"  ></ion-textarea>\n            </ion-item>\n            <div [hidden]=hiddenfeedback padding>\n              <ion-button size=\"medium\" type=\"button\" class=\"requestsbutton\" (click)=\"feedbackRequestItems()\" >Feedback</ion-button>\n            </div>\n\n            <div *ngIf=\"status == 1\" style=\"margin-top: 30px;\">\n              <ion-label>Help received? <ion-toggle color=\"success\" [(ngModel)]='checked' (ionChange)=\"receivedRequest()\" style=\"padding-top: 3px;padding-bottom: 6px; margin-left: 10px;vertical-align: middle;\"></ion-toggle></ion-label>\n            </div>\n            \n            <div class=\"divsubmitbutton\" padding>\n              <ion-button [hidden]=hiddeneditsubmit size=\"medium\" type=\"button\" class=\"requestsbutton\" (click)=\"editRequest()\" >Edit</ion-button>&nbsp;\n              <ion-button [hidden]=hiddenrequestsubmit size=\"medium\" type=\"button\" class=\"requestsbutton\" (click)=\"submitRequest()\" >{{submitlabel}}</ion-button>\n              <ion-button [hidden]=hiddenrepostrequest size=\"medium\" type=\"button\" class=\"requestsbutton\" (click)=\"submitRequest()\" >Re-post</ion-button>\n              \n              <ion-item [hidden]=hiddenrequestcancel lines=\"none\" >\n                <ion-button size=\"medium\" color=\"danger\" type=\"button\" class=\"requestsbutton\" (click)=\"cancelRequest()\" >Cancel Request</ion-button>\n              </ion-item>\n            </div>\n          \n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/staff/childcarerequest/childcarerequest-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/staff/childcarerequest/childcarerequest-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: ChildcarerequestPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildcarerequestPageRoutingModule", function() { return ChildcarerequestPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _childcarerequest_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./childcarerequest.page */ "./src/app/staff/childcarerequest/childcarerequest.page.ts");




const routes = [
    {
        path: '',
        component: _childcarerequest_page__WEBPACK_IMPORTED_MODULE_3__["ChildcarerequestPage"]
    }
];
let ChildcarerequestPageRoutingModule = class ChildcarerequestPageRoutingModule {
};
ChildcarerequestPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ChildcarerequestPageRoutingModule);



/***/ }),

/***/ "./src/app/staff/childcarerequest/childcarerequest.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/staff/childcarerequest/childcarerequest.module.ts ***!
  \*******************************************************************/
/*! exports provided: ChildcarerequestPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildcarerequestPageModule", function() { return ChildcarerequestPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _childcarerequest_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./childcarerequest-routing.module */ "./src/app/staff/childcarerequest/childcarerequest-routing.module.ts");
/* harmony import */ var _childcarerequest_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./childcarerequest.page */ "./src/app/staff/childcarerequest/childcarerequest.page.ts");







let ChildcarerequestPageModule = class ChildcarerequestPageModule {
};
ChildcarerequestPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _childcarerequest_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChildcarerequestPageRoutingModule"]
        ],
        declarations: [_childcarerequest_page__WEBPACK_IMPORTED_MODULE_6__["ChildcarerequestPage"]]
    })
], ChildcarerequestPageModule);



/***/ }),

/***/ "./src/app/staff/childcarerequest/childcarerequest.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/staff/childcarerequest/childcarerequest.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".requestgrid {\n  text-align: center; }\n\n.textarea {\n  text-align: left; }\n\n.divtextcenter {\n  margin-top: 50px; }\n\n.recurringtoggle {\n  position: absolute;\n  right: 0; }\n\n.childnumber {\n  margin-top: 10px; }\n\n.childdetails {\n  margin-top: 50px; }\n\n.selectel {\n  width: 100%; }\n\n.requestsbutton {\n  margin: auto;\n  margin-top: 50px;\n  width: 150px; }\n\n.morecomment {\n  margin-top: 20px; }\n\n.requestitemheading {\n  border: 1px solid #5BCAA4;\n  width: 200px;\n  margin: 0 auto;\n  margin-top: 40px;\n  background: #5BCAA4;\n  color: white;\n  border-radius: 10px; }\n\n.requestitemheading2 {\n  border: 1px solid #5BCAA4;\n  width: 260px;\n  margin: 0 auto;\n  margin-top: 40px;\n  background: #5BCAA4;\n  color: white;\n  border-radius: 10px; }\n\n.divraw {\n  text-align: left;\n  padding-left: 20x;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  font-weight: bold; }\n\n.divsubmitbutton {\n  margin-bottom: 50px; }\n\n.childdetailstable {\n  overflow: auto;\n  margin-top: 50px; }\n\n.childdetailstable .row {\n    border-bottom: 1px solid darkgray;\n    padding-top: 7px;\n    padding-bottom: 7px; }\n\n.childdetailstable .row .col1 {\n      text-align: left; }\n\n.childdetailstable .row .col2 {\n      text-align: right;\n      padding-right: 0; }\n\n.childdetailstable .child2details {\n    margin-top: 30px; }\n\ntable thead {\n  background: lightgray; }\n\ntable th, table td {\n  padding-top: 5px;\n  padding-bottom: 5px;\n  padding-left: 3px;\n  padding-right: 3px; }\n\n.notificationTable td {\n  text-align: left; }\n\n.helperdetail {\n  margin-top: 20px; }\n\n.helperdetail .row {\n    margin-left: 10px; }\n\n.helperdetail ion-label {\n    font-weight: bold; }\n\n.helperdetail .col1 {\n    text-align: left; }\n\n.helperdetail .col2 {\n    text-align: right;\n    padding-right: 0; }\n\n.helperdetail .col2 label {\n      color: gray; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhZmYvY2hpbGRjYXJlcmVxdWVzdC9EOlxcaW9uaWMyXFxob3NwaXRhbC9zcmNcXGFwcFxcc3RhZmZcXGNoaWxkY2FyZXJlcXVlc3RcXGNoaWxkY2FyZXJlcXVlc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Msa0JBQWtCLEVBQUE7O0FBRW5CO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0MsZ0JBQWdCLEVBQUE7O0FBRWpCO0VBQ0ksa0JBQWtCO0VBQ2xCLFFBQVEsRUFBQTs7QUFFWjtFQUNJLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLFdBQVcsRUFBQTs7QUFFZjtFQUNDLFlBQVk7RUFBQyxnQkFBZ0I7RUFBQyxZQUFZLEVBQUE7O0FBSTNDO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBR3BCO0VBRUkseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osbUJBQW1CLEVBQUE7O0FBRXZCO0VBQ0kseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLGNBQWM7RUFDZCxnQkFBZ0IsRUFBQTs7QUFGcEI7SUFJUSxpQ0FBaUM7SUFDakMsZ0JBQWdCO0lBQ2hCLG1CQUFtQixFQUFBOztBQU4zQjtNQVNZLGdCQUFnQixFQUFBOztBQVQ1QjtNQVlZLGlCQUFpQjtNQUNqQixnQkFBZ0IsRUFBQTs7QUFiNUI7SUFxQlEsZ0JBQWdCLEVBQUE7O0FBSXhCO0VBR1EscUJBQXFCLEVBQUE7O0FBSDdCO0VBTVEsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7O0FBSzFCO0VBRVEsZ0JBQWdCLEVBQUE7O0FBS3hCO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBRHBCO0lBSVEsaUJBQWlCLEVBQUE7O0FBSnpCO0lBT1EsaUJBQWlCLEVBQUE7O0FBUHpCO0lBVVEsZ0JBQWdCLEVBQUE7O0FBVnhCO0lBYVEsaUJBQWlCO0lBQ2pCLGdCQUFnQixFQUFBOztBQWR4QjtNQWdCWSxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zdGFmZi9jaGlsZGNhcmVyZXF1ZXN0L2NoaWxkY2FyZXJlcXVlc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlcXVlc3Rncmlke1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4udGV4dGFyZWF7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi5kaXZ0ZXh0Y2VudGVye1xyXG5cdG1hcmdpbi10b3A6IDUwcHg7XHJcbn1cclxuLnJlY3VycmluZ3RvZ2dsZXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG59XHJcbi5jaGlsZG51bWJlcntcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuLmNoaWxkZGV0YWlsc3tcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7ICAgIFxyXG59XHJcbi5zZWxlY3RlbHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5yZXF1ZXN0c2J1dHRvbntcclxuXHRtYXJnaW46IGF1dG87bWFyZ2luLXRvcDogNTBweDt3aWR0aDogMTUwcHg7XHJcblxyXG59XHJcblxyXG4ubW9yZWNvbW1lbnR7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4ucmVxdWVzdGl0ZW1oZWFkaW5ne1xyXG4gICAgXHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNUJDQUE0O1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzVCQ0FBNDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuLnJlcXVlc3RpdGVtaGVhZGluZzJ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNUJDQUE0O1xyXG4gICAgd2lkdGg6IDI2MHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzVCQ0FBNDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5kaXZyYXd7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uZGl2c3VibWl0YnV0dG9ue1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxufVxyXG5cclxuLmNoaWxkZGV0YWlsc3RhYmxle1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgLnJvd3tcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZGFya2dyYXk7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDdweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogN3B4O1xyXG5cclxuICAgICAgICAuY29sMXtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbDJ7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gICAgICAgICAgICBsYWJlbHtcclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jaGlsZDJkZXRhaWxze1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbnRhYmxle1xyXG5cclxuICAgIHRoZWFke1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JheTtcclxuICAgIH1cclxuICAgIHRoLHRke1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDNweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzcHg7XHJcbiAgICB9XHJcbiAgIFxyXG4gICAgXHJcbn1cclxuLm5vdGlmaWNhdGlvblRhYmxle1xyXG4gICAgdGR7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi5oZWxwZXJkZXRhaWx7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG5cclxuICAgIC5yb3d7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICB9XHJcbiAgICBpb24tbGFiZWx7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgICAuY29sMXtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgfVxyXG4gICAgLmNvbDJ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMDtcclxuICAgICAgICBsYWJlbHtcclxuICAgICAgICAgICAgY29sb3I6IGdyYXk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/staff/childcarerequest/childcarerequest.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/staff/childcarerequest/childcarerequest.page.ts ***!
  \*****************************************************************/
/*! exports provided: ChildcarerequestPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildcarerequestPage", function() { return ChildcarerequestPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../global.service */ "./src/app/global.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ "./node_modules/@ionic-native/android-permissions/ngx/index.js");
/* harmony import */ var _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/sms/ngx */ "./node_modules/@ionic-native/sms/ngx/index.js");











let ChildcarerequestPage = class ChildcarerequestPage {
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
        this.childname1 = "";
        this.childage1 = 0;
        this.childgender1 = "";
        this.childname2 = "";
        this.childage2 = 0;
        this.childgender2 = "";
        this.staff_notes = "";
        this.staff_notes2 = "";
        this.recurring1 = false;
        this.recurring2 = false;
        this.isSubmitted = 0;
        this.expire = true;
        this.edit = 1;
        this.checked = false;
        this.hiddenviewhelperdetails = true;
        this.hiddenhelper = true;
        this.hiddennotifications = true;
        this.notificationList = [];
        this.hname = "";
        this.hemail = "";
        this.request_date = "";
        this.hcontactno = "";
        this.feedback = "";
        this.hiddenfeedback = true;
        this.hiddenentryform = true;
        this.hiddenviewform = true;
        this.hiddenchildrow2 = true;
        this.hiddenotheritems = true;
        this.hiddenaddmore = false;
        this.hiddenchild2 = true;
        this.hiddendate = true;
        this.hiddenreviewbutton = true;
        this.hiddeneditsubmit = true;
        this.hiddenrequestsubmit = true;
        this.hiddenrepostrequest = true;
        this.hiddenrequestcancel = true;
        this.disablename1 = false;
        this.disableage1 = false;
        this.disablegender1 = false;
        this.disablerecurring1 = false;
        this.disablename2 = false;
        this.disableage2 = false;
        this.disablegender2 = false;
        this.disablerecurring2 = false;
        this.disablecomment = false;
        this.requestDate = '';
        this.requestDate2 = '';
        this.requestminDate = '';
        this.requestmaxDate = '';
        this.requestTime = '';
        this.disablrequestDate = false;
        this.disablrequestTime = false;
        this.checkother = false;
        this.childages1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
        this.childages2 = this.childages1;
        this.childdays1 = [
            {
                "num": 1,
                "name": "Monday",
                "name2": "Mon",
                "checked": false,
                "disabled": false
            },
            {
                "num": 2,
                "name": "Tuesday",
                "name2": "Tue",
                "checked": false,
                "disabled": false
            },
            {
                "num": 3,
                "name": "Wednesday",
                "name2": "Wed",
                "checked": false,
                "disabled": false
            },
            {
                "num": 4,
                "name": "Thursday",
                "name2": "Thurs",
                "checked": false,
                "disabled": false
            },
            {
                "num": 5,
                "name": "Friday",
                "name2": "Fri",
                "checked": false,
                "disabled": false
            },
            {
                "num": 6,
                "name": "Saturday",
                "name2": "Sat",
                "checked": false,
                "disabled": false
            },
            {
                "num": 7,
                "name": "Sunday",
                "name2": "Sun",
                "checked": false,
                "disabled": false
            },
        ];
        this.childdays2 = [
            {
                "num": 1,
                "name": "Monday",
                "name2": "Mon",
                "checked": false,
                "disabled": false
            },
            {
                "num": 2,
                "name": "Tuesday",
                "name2": "Tue",
                "checked": false,
                "disabled": false
            },
            {
                "num": 3,
                "name": "Wednesday",
                "name2": "Wed",
                "checked": false,
                "disabled": false
            },
            {
                "num": 4,
                "name": "Thursday",
                "name2": "Thurs",
                "checked": false,
                "disabled": false
            },
            {
                "num": 5,
                "name": "Friday",
                "name2": "Fri",
                "checked": false,
                "disabled": false
            },
            {
                "num": 6,
                "name": "Saturday",
                "name2": "Sat",
                "checked": false,
                "disabled": false
            },
            {
                "num": 7,
                "name": "Sunday",
                "name2": "Sun",
                "checked": false,
                "disabled": false
            },
        ];
        this.child1reviewdays = "";
        this.child2reviewdays = "";
        this.child1recurring = "No";
        this.child2recurring = "No";
        //this.menuCtrl.enable(false);
        console.log("construct");
    }
    ngOnInit() {
        this.id = this.activatedRoute.snapshot.paramMap.get('id');
        this.view = this.activatedRoute.snapshot.paramMap.get('view');
        this.request = this.activatedRoute.snapshot.paramMap.get('request');
        this.getActiveRequest();
    }
    ionViewDidEnter() {
        this.myapp.aboutmenu = 0;
        this.request = this.activatedRoute.snapshot.paramMap.get('request');
        if (this.request == 1) {
            this.submitlabel = "Back";
        }
        if (this._global.userid == 0) {
            this.hiddendate = false;
        }
        else {
            this.hiddendate = true;
        }
        this.requestDate = this._global.currentDate();
        this.requestminDate = this._global.currentDate();
        this.requestmaxDate = this._global.maxDate();
    }
    getActiveRequest() {
        if (this._global.userid > 0) {
            var token = this._global.token;
            console.log('token : ' + token);
            var userid = this._global.userid;
            const httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + token
                })
            };
            this.httpClient.post(this._global.domainURL + "childcareactiverequest", {
                "nhs_staff_id": userid,
                "id": this.id
            }, httpOptions)
                .subscribe((val) => {
                if (typeof val.data != "undefined") {
                    this.hiddendate = false;
                    console.log('response : ' + JSON.stringify(val.data));
                    this.status = val.data.status;
                    // Notification count
                    this.myapp.notifycount = val.data.countnotification;
                    if (val.data.isSubmitted == 1) {
                        this.childname1 = val.data.child_one;
                        this.childage1 = val.data.child_one_age;
                        this.childgender1 = val.data.child_one_gender;
                        this.childname2 = val.data.child_two;
                        this.childage2 = val.data.child_two_age;
                        this.childgender2 = val.data.child_two_gender;
                        this.hiddenaddmore = true;
                        this.expire = val.data.expire;
                        this.notificationList = val.data.notifications;
                        this.requestDate = val.data.rdate;
                        this.requestTime = val.data.rtime;
                        if (val.data.child_one_recurring == 1) {
                            this.recurring1 = true;
                        }
                        if (val.data.child_two_recurring == 1) {
                            this.recurring2 = true;
                        }
                        if (this.view > 0 && val.data.status > 0) {
                            this.hiddenviewhelperdetails = false;
                            this.hname = val.data.name;
                            this.request_date = val.data.requestdate;
                            this.hemail = val.data.email;
                            this.hcontactno = val.data.contact;
                        }
                        if (val.data.status == 0 && this.childgender2.length > 2) {
                            this.hiddenaddmore = true;
                        }
                        else {
                            this.hiddenaddmore = false;
                        }
                        if (this.childgender2.length > 2) {
                            this.hiddenchild2 = false;
                            this.hiddenaddmore = true;
                        }
                        if (val.data.status > 0) {
                            this.hiddenaddmore = false;
                        }
                        for (var i = 0; i < this.childdays1.length; i++) {
                            if (val.data.child_one_days.indexOf(this.childdays1[i]['num']) >= 0) {
                                this.childdays1[i]['checked'] = true;
                            }
                            else {
                                this.childdays1[i]['checked'] = false;
                            }
                        }
                        for (var i = 0; i < this.childdays2.length; i++) {
                            if (val.data.child_two_days.indexOf(this.childdays2[i]['num']) >= 0) {
                                this.childdays2[i]['checked'] = true;
                            }
                            else {
                                this.childdays2[i]['checked'] = false;
                            }
                        }
                        this.staff_notes = val.data.staff_notes;
                        if (this.staff_notes == '-') {
                            this.staff_notes = "";
                        }
                        if (val.data.status == 1) {
                            this.disablename1 = true;
                            this.disableage1 = true;
                            this.disablegender1 = true;
                            this.disablename2 = true;
                            this.disableage1 = true;
                            this.disablegender2 = true;
                            this.disablerecurring1 = true;
                            this.disablerecurring2 = true;
                            this.disablrequestDate = true;
                            this.disablrequestTime = true;
                            this.hiddenreviewbutton = true;
                            this.hiddenaddmore = true;
                            for (var i = 0; i < this.childdays1.length; i++) {
                                this.childdays1[i]['disabled'] = true;
                            }
                            for (var i = 0; i < this.childdays2.length; i++) {
                                this.childdays2[i]['disabled'] = true;
                            }
                            this.disablecomment = true;
                        }
                        if (val.data.status == 2) {
                            if (val.data.edit == 0) {
                                this.hiddenaddmore = true;
                                this.disablename1 = true;
                                this.disableage1 = true;
                                this.disablegender1 = true;
                                this.disablename2 = true;
                                this.disableage1 = true;
                                this.disablegender2 = true;
                                this.disablerecurring1 = true;
                                this.disablerecurring2 = true;
                                this.disablrequestDate = true;
                                this.disablrequestTime = true;
                                this.feedback = val.data.feedback;
                                this.hiddenreviewbutton = true;
                                this.hiddenfeedback = false;
                                for (var i = 0; i < this.childdays1.length; i++) {
                                    this.childdays1[i]['disabled'] = true;
                                }
                                for (var i = 0; i < this.childdays2.length; i++) {
                                    this.childdays2[i]['disabled'] = true;
                                }
                                this.disablecomment = true;
                            }
                        }
                    }
                    else {
                        this.expire = val.data.expire;
                    }
                    this.isSubmitted = val.data.isSubmitted;
                    if (this.view == 2) {
                        this.hiddennotifications = false;
                    }
                    if (this.view > 0) {
                        this.hiddenentryform = true;
                        this.hiddenviewform = false;
                        this.requestItems();
                    }
                    else {
                        this.hiddenentryform = false;
                        this.hiddenviewform = true;
                        this.hiddenreviewbutton = false;
                    }
                }
            }, response => {
                console.log("Get call in error", response);
            }, () => {
                console.log("The Get observable is now completed.");
            });
        }
        else {
            this.expire = false;
            this.hiddendate = false;
            this.hiddenentryform = false;
            this.hiddenreviewbutton = false;
        }
    }
    addmore() {
        var count = 0;
        for (var i = 0; i < this.childdays1.length; i++) {
            if (this.childdays1[i]['checked'] == true) {
                count++;
            }
        }
        if (this.childgender1.trim() != '' && this.childage1 > 0 && count > 0) {
            this.hiddenchild2 = false;
            this.hiddenaddmore = true;
        }
        else {
            // Alert message (start)
            let alert = this.alertCtrl.create({
                message: "Please fill child 1 details",
                buttons: ['OK']
            });
            alert.then((_alert) => {
                _alert.present();
            });
            // Alert message (end)
        }
    }
    requestItems() {
        var selectedDays1 = new Array();
        var selectedDays2 = new Array();
        var count1 = 0;
        var count2 = 0;
        for (var i = 0; i < this.childdays1.length; i++) {
            if (this.childdays1[i]['checked'] == true) {
                if (this.childdays1[i]['name'] != 'Recurring') {
                    selectedDays1.push(this.childdays1[i]['name2']);
                }
                count1++;
            }
        }
        if (this.recurring1) {
            this.child1recurring = "Yes";
        }
        else {
            this.child1recurring = "No";
        }
        for (var i = 0; i < this.childdays2.length; i++) {
            if (this.childdays2[i]['checked'] == true) {
                if (this.childdays2[i]['name'] != 'Recurring') {
                    selectedDays2.push(this.childdays2[i]['name2']);
                }
                count2++;
            }
        }
        if (this.recurring2) {
            this.child2recurring = "Yes";
        }
        else {
            this.child2recurring = "No";
        }
        this.child1reviewdays = selectedDays1.join(", ");
        this.child2reviewdays = selectedDays2.join(", ");
        var valid = false;
        if (count1 > 0 && this.childage1 > 0 && this.childgender1 != '') {
            valid = true;
        }
        console.log("count2 : " + count2 + ', age : ' + this.childage2 + ", gender : " + this.childgender2);
        if (count2 > 0 && this.childage2 > 0 && this.childgender2 != '') {
            this.hiddenchildrow2 = false;
        }
        else {
            this.hiddenchildrow2 = true;
        }
        if (valid) {
            this.hiddendate = true;
            this.disablrequestDate = true;
            this.disablrequestTime = true;
            if (this.view > 0 && this.status > 0) {
                this.hiddeneditsubmit = true;
                this.hiddenrepostrequest = true;
                this.hiddenrequestsubmit = true;
                this.hiddenrequestcancel = true;
                if (this.view == 2) {
                    this.hiddenhelper = true;
                }
                else {
                    this.hiddenhelper = false;
                }
            }
            else {
                this.hiddenentryform = true;
                this.hiddenviewform = false;
                if (this.requestDate.length > 3) {
                    var split_date = this.requestDate.split("-");
                    var dd = split_date[2];
                    var mm = split_date[1];
                    var yy = split_date[0];
                    this.requestDate2 = dd + "/" + mm + "/" + yy;
                }
                this.hiddenaddmore = true;
                this.hiddenreviewbutton = true;
                this.hiddeneditsubmit = false;
                this.disablename1 = true;
                this.disableage1 = true;
                this.disablegender1 = true;
                this.disablename2 = true;
                this.disableage2 = true;
                this.disablegender2 = true;
                this.disablecomment = true;
                this.disablerecurring1 = true;
                this.disablerecurring2 = true;
                this.staff_notes2 = this.staff_notes;
                for (var i = 0; i < this.childdays1.length; i++) {
                    this.childdays1[i]['disabled'] = true;
                }
                for (var i = 0; i < this.childdays2.length; i++) {
                    this.childdays2[i]['disabled'] = true;
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
                        console.log("expire");
                        this.hiddenrepostrequest = false;
                        this.hiddenrequestsubmit = true;
                    }
                    else {
                        this.hiddenrequestsubmit = false;
                        this.hiddenrepostrequest = true;
                    }
                }
            }
            if (this.status > 0) {
                this.hiddenrequestcancel = false;
            }
        }
        else {
            // Alert message (start)
            let alert = this.alertCtrl.create({
                message: "Please fill child 1 details",
                buttons: ['OK']
            });
            alert.then((_alert) => {
                _alert.present();
            });
            // Alert message (end)
        }
    }
    editRequest() {
        this.hiddendate = false;
        this.hiddenentryform = false;
        this.hiddenviewform = true;
        if (!this.hiddenchild2) {
            this.hiddenaddmore = true;
        }
        else {
            this.hiddenaddmore = false;
        }
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
        this.disablename1 = false;
        this.disableage1 = false;
        this.disablegender1 = false;
        this.disablename2 = false;
        this.disableage2 = false;
        this.disablegender2 = false;
        this.disablecomment = false;
        this.disablerecurring1 = false;
        this.disablerecurring2 = false;
        this.disablrequestDate = false;
        this.disablrequestTime = false;
        for (var i = 0; i < this.childdays1.length; i++) {
            this.childdays1[i]['disabled'] = false;
            this.childdays2[i]['disabled'] = false;
        }
    }
    submitRequest() {
        var selectedDays1 = new Array();
        var selectedDays2 = new Array();
        var sendrequest = 0;
        var child1Recurring = 0;
        var child2Recurring = 0;
        if (this._global.userid > 0 && this._global.userrole == this._global.userrole2) {
            for (var i = 0; i < this.childdays1.length; i++) {
                if (this.childdays1[i]['checked'] == true) {
                    selectedDays1.push(this.childdays1[i]['num']);
                }
            }
            if (this.recurring1) {
                child1Recurring = 1;
            }
            if (this.childgender1.length > 2 && this.childage1 > 0) {
                for (var i = 0; i < this.childdays2.length; i++) {
                    if (this.childdays2[i]['checked'] == true) {
                        selectedDays2.push(this.childdays2[i]['num']);
                    }
                }
            }
            if (this.recurring2) {
                child2Recurring = 1;
            }
            if (selectedDays1.length == 0) {
                sendrequest = 0;
            }
            else {
                sendrequest = 1;
            }
            if (sendrequest == 1) {
                console.log("Send request");
                // Send request
                const httpOptions = {
                    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                        'Accept': 'application/json',
                        'Authorization': 'Bearer ' + this._global.token
                    })
                };
                this.httpClient.post(this._global.domainURL + "submitChildcareRequest", {
                    "id": this.id,
                    "nhs_staff_id": this._global.userid,
                    "child_one": "-",
                    "child_one_age": this.childage1,
                    "child_one_gender": this.childgender1,
                    "child_one_days": selectedDays1,
                    "child_one_recurring": child1Recurring,
                    "child_two": "-",
                    "child_two_age": this.childage2,
                    "child_two_gender": this.childgender2,
                    "child_two_days": selectedDays2,
                    "child_two_recurring": child2Recurring,
                    "staff_notes": this.staff_notes,
                    "expire": this.expire,
                    "requestDate": this.requestDate,
                    "requestTime": this.requestTime,
                }, httpOptions)
                    .subscribe((val) => {
                    //console.log('success : ' + JSON.stringify(val));
                    var message = val.message;
                    // Notification count
                    this.myapp.notifycount = val.data.countnotification;
                    if (!val.success) {
                        console.log('data : ' + val.success);
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
        this.httpClient.post(this._global.domainURL + "cancelChildcareRequest", {
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
                            this.router.navigateByUrl('/login/3');
                        }
                    }
                ]
            });
            yield alert.present();
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
            this.httpClient.post(this._global.domainURL + "childCareFeedback", {
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
                                "type": "Childcare"
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
ChildcarerequestPage.ctorParameters = () => [
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
ChildcarerequestPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-childcarerequest',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./childcarerequest.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/staff/childcarerequest/childcarerequest.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./childcarerequest.page.scss */ "./src/app/staff/childcarerequest/childcarerequest.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_7__["AndroidPermissions"],
        _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_8__["SMS"]])
], ChildcarerequestPage);



/***/ })

}]);
//# sourceMappingURL=staff-childcarerequest-childcarerequest-module-es2015.js.map