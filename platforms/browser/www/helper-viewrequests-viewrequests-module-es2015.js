(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["helper-viewrequests-viewrequests-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/helper/viewrequests/viewrequests.page.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/helper/viewrequests/viewrequests.page.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"searchhospitals\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"apphead\">Helpers</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t\n\t<ion-grid class='requestgrid' >\n      \t<ion-row color=\"primary\" justify-content-center class='formcenter'>\n\n        \t<ion-col align-self-center size-md=\"12\" size-lg=\"12\" size-xs=\"12\">\n          \t\t<div  padding>\n            \t\t<h3 class=\"hospitalname\" color=\"tertiary\">{{hospitalname}}</h3>\n          \t\t</div>\n          \t\t\n\n          \t\t<div style=\"margin-top: 40px;\" padding [hidden]=hiddenrequestfound>\n          \t\t\t<!-- Received -->\n\t\t            <ion-card *ngFor=\"let list of requestsList;\"   >\n\t\t                <ion-card-header >\n\t\t                    <ion-grid class=\"cardgrid\" (click)=\"viewrequest(list['type'],list['id'])\">\n\t\t                      <ion-row class=\"row\">\n\t\t                        <ion-col class=\"col1\" size='12' >\n\t\t                            <ion-label style=\"font-weight: bold;\">{{list['type']}}</ion-label>\n\t\t                        </ion-col>\n\t\t                        \t\t                      \n\t\t                      </ion-row>\n\t\t                      <ion-row class=\"row\" *ngIf=\"list['type'] == 'Food'\">\n\t\t                        <ion-col class=\"col1\" size='12'>\n\t\t                            <ion-label>Meals: {{list['ready_meal']}} </ion-label>\n\t\t                        </ion-col>\n\t\t                       \n\t\t                      </ion-row>\n\n\t\t                      <ion-row class=\"row\" *ngIf=\"list['type'] == 'Essentials'\">\n\t\t                        <ion-col class=\"col1\" size='12'>\n\t\t                            <ion-label [innerHTML]=\"list['items']\"></ion-label>\n\t\t                       </ion-col>\n\t\t                        </ion-row>\n\t\t                       <ion-row class=\"row\" *ngIf=\"list['type'] == 'Childcare'\">\n\t\t                        \t<ion-col class=\"col1\" size='7'>\n\t\t\t                            <ion-label>For: {{list['childdetail']}}</ion-label>\n\t\t\t                        </ion-col>\n\t\t\t                        <ion-col class=\"col2\" size='5'>\n\t\t\t                             <ion-label>Recurring: {{list['recurring']}}</ion-label>\n\t\t\t                        </ion-col>\n\t\t                      </ion-row>\n\t\t                      <ion-row class=\"row\" >\n\t\t                        <ion-col class=\"col1\" size='12'>\n\t\t                            <ion-label>Requested for: {{list['date']}} </ion-label>\n\t\t                        </ion-col>\n\t\t                       \n\t\t                      </ion-row>\n\t\t                    </ion-grid>\n\t\t                </ion-card-header>\n\t\t            </ion-card>\n\n\t\t            <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadMoreRequests($event)\" [hidden]=hiddenloadmore1>\n\t\t\t              \t<ion-infinite-scroll-content\n\t\t\t                loadingSpinner=\"bubbles\"\n\t\t\t                loadingText=\"Loading more data...\">\n\t\t\t              \t</ion-infinite-scroll-content>\n\t\t\t        </ion-infinite-scroll>\n          \t\t</div>\n\n\t          \t<ion-item [hidden]=hiddenfoodrequests lines=\"none\" class=\"heading\" padding>\n\t            \t<h2>Food</h2>\n\t          \t</ion-item>\n\n\t          \t<ion-item [hidden]=hiddenfoodrequests lines=\"none\" >\n            \t\t<div class=\"requestlist\" >\n            \t\t\t<ion-row class=\"headerrow\"  >\n\t\t\t\t        \t<ion-col col-6>\n\t\t\t\t\t\t    \tRead meal\n\t\t\t\t\t\t  \t</ion-col>\n\t\t\t\t\t\t    <ion-col col-6>\n\t\t\t\t\t\t     \tRequested for\n\t\t\t\t\t\t    </ion-col>\n\t\t\t\t        </ion-row>\n            \t\t\t<ion-row style=\"border-top: groove;\" *ngFor=\"let list of foodList;let last=last;\" (click)=\"foodrequestDetails(list['id'])\" >\n\t\t\t\t        \t<ion-col col-6>\n\t\t\t\t\t\t    \t{{list['ready_meal']}} \n\t\t\t\t\t\t  \t</ion-col>\n\t\t\t\t\t\t    <ion-col col-6>\n\t\t\t\t\t\t     \t{{list['date']}}\n\t\t\t\t\t\t    </ion-col>\n\t\t\t\t        </ion-row>\n\n\t\t\t\t\t\t<ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadMoreFoodrequests($event)\" [hidden]=hiddenloadmore1>\n\t\t\t              \t<ion-infinite-scroll-content\n\t\t\t                loadingSpinner=\"bubbles\"\n\t\t\t                loadingText=\"Loading more data...\">\n\t\t\t              \t</ion-infinite-scroll-content>\n\t\t\t            </ion-infinite-scroll>\n\n\t\t\t\t\t</div>\n          \t\t</ion-item>\n\t          \t\n\t          \t<ion-item [hidden]=hiddenessentialrequests class=\"heading\" lines=\"none\" padding>\n\t            \t<h2>Essentials</h2>\n\t          \t</ion-item>\n\n\t          \t<ion-item [hidden]=hiddenessentialrequests lines=\"none\" >\n            \t\t<div class=\"requestlist\" >\n            \t\t\t<ion-row class=\"headerrow\" >\n\t\t\t\t        \t<ion-col col-6>\n\t\t\t\t\t\t    \tMeals\n\t\t\t\t\t\t  \t</ion-col>\n\t\t\t\t\t\t    <ion-col col-6>\n\t\t\t\t\t\t     \tRequested for\n\t\t\t\t\t\t    </ion-col>\n\t\t\t\t        </ion-row>\n            \t\t\t<ion-row style=\"border-top: groove;\" *ngFor=\"let list of essentialList;\" (click)=\"essentialsrequestDetails(list['id'])\" >\n\t\t\t\t        \t<ion-col col-6 [innerHTML]=\"list['items']\">\n\t\t\t\t\t\t    \n\t\t\t\t\t\t  \t</ion-col>\n\t\t\t\t\t\t    <ion-col col-6>\n\t\t\t\t\t\t     \t{{list['date']}}\n\t\t\t\t\t\t    </ion-col>\n\t\t\t\t        </ion-row>\n\n\t\t\t\t\t\t<ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadMoreEssentialrequests($event)\" [hidden]=hiddenloadmore2>\n\t\t\t              \t<ion-infinite-scroll-content\n\t\t\t                loadingSpinner=\"bubbles\"\n\t\t\t                loadingText=\"Loading more data...\">\n\t\t\t              \t</ion-infinite-scroll-content>\n\t\t\t            </ion-infinite-scroll>\n\n\t\t\t\t\t</div>\n          \t\t</ion-item>\n\n          \t\t<ion-item [hidden]=hiddenchildcarerequests lines=\"none\" class=\"heading\" padding>\n\t            \t<h2>ChildCare</h2>\n\t          \t</ion-item>\n\n\t          \t<ion-item [hidden]=hiddenchildcarerequests lines=\"none\">\n            \t\t<div class=\"requestlist\">\n            \t\t\t<ion-row class=\"headerrow\" >\n\t\t\t\t        \t<ion-col col-4>\n\t\t\t\t\t\t    \tQueue\n\t\t\t\t\t\t  \t</ion-col>\n\t\t\t\t\t\t  \t<ion-col col-4>\n\t\t\t\t\t\t    \tAge\n\t\t\t\t\t\t  \t</ion-col>\n\t\t\t\t\t\t    <ion-col col-4>\n\t\t\t\t\t\t     \tRequested for\n\t\t\t\t\t\t    </ion-col>\n\t\t\t\t        </ion-row>\n            \t\t\t<ion-row style=\"border-top: groove;\" *ngFor=\"let list of childcareList;\" (click)=\"childcarerequestDetails(list['id'])\" >\n\t\t\t\t        \t<ion-col col-4>\n\t\t\t\t\t\t    \t{{list['child']}}\n\t\t\t\t\t\t  \t</ion-col>\n\t\t\t\t\t\t    <ion-col col-4>\n\t\t\t\t\t\t     \t{{list['age']}}\n\t\t\t\t\t\t    </ion-col>\n\t\t\t\t\t\t    <ion-col col-4>\n\t\t\t\t\t\t     \t{{list['days']}}\n\t\t\t\t\t\t    </ion-col>\n\t\t\t\t        </ion-row>\n\n\t\t\t\t\t\t<ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadMoreChildcarerequests($event)\" [hidden]=hiddenloadmore3 >\n\t\t\t              \t<ion-infinite-scroll-content\n\t\t\t                loadingSpinner=\"bubbles\"\n\t\t\t                loadingText=\"Loading more data...\">\n\t\t\t              \t</ion-infinite-scroll-content>\n\t\t\t            </ion-infinite-scroll>\n\n\t\t\t\t\t</div>\n          \t\t</ion-item>\n\n\n        \t</ion-col>\n      \t</ion-row>\n    </ion-grid>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/helper/viewrequests/viewrequests-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/helper/viewrequests/viewrequests-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: ViewrequestsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewrequestsPageRoutingModule", function() { return ViewrequestsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _viewrequests_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./viewrequests.page */ "./src/app/helper/viewrequests/viewrequests.page.ts");




const routes = [
    {
        path: '',
        component: _viewrequests_page__WEBPACK_IMPORTED_MODULE_3__["ViewrequestsPage"]
    }
];
let ViewrequestsPageRoutingModule = class ViewrequestsPageRoutingModule {
};
ViewrequestsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ViewrequestsPageRoutingModule);



/***/ }),

/***/ "./src/app/helper/viewrequests/viewrequests.module.ts":
/*!************************************************************!*\
  !*** ./src/app/helper/viewrequests/viewrequests.module.ts ***!
  \************************************************************/
/*! exports provided: ViewrequestsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewrequestsPageModule", function() { return ViewrequestsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _viewrequests_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./viewrequests-routing.module */ "./src/app/helper/viewrequests/viewrequests-routing.module.ts");
/* harmony import */ var _viewrequests_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./viewrequests.page */ "./src/app/helper/viewrequests/viewrequests.page.ts");







let ViewrequestsPageModule = class ViewrequestsPageModule {
};
ViewrequestsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _viewrequests_routing_module__WEBPACK_IMPORTED_MODULE_5__["ViewrequestsPageRoutingModule"]
        ],
        declarations: [_viewrequests_page__WEBPACK_IMPORTED_MODULE_6__["ViewrequestsPage"]]
    })
], ViewrequestsPageModule);



/***/ }),

/***/ "./src/app/helper/viewrequests/viewrequests.page.scss":
/*!************************************************************!*\
  !*** ./src/app/helper/viewrequests/viewrequests.page.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".requestgrid {\n  text-align: center; }\n\n.hospitalname {\n  border: 1px solid #5BCAA4;\n  margin: 0 auto;\n  margin-top: 40px;\n  background: #5BCAA4;\n  color: white;\n  text-align: center;\n  border-radius: 10px; }\n\n.heading h2 {\n  text-align: left;\n  margin-top: 40px;\n  font-size: 21px; }\n\n.requestlist {\n  height: auto;\n  max-height: 200px;\n  border: 1px solid black;\n  overflow: auto;\n  width: 100%; }\n\n.headerrow {\n  background: lightgray; }\n\n.requestlist .foodlist {\n  border-bottom: groove; }\n\nion-row:last-child {\n  border-bottom: 0 !important; }\n\n.cardgrid {\n  font-size: 15px;\n  color: gray;\n  padding: 0;\n  margin: 0;\n  text-align: left; }\n\nion-card-header {\n  padding: 7px !important;\n  color: darkgray; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVscGVyL3ZpZXdyZXF1ZXN0cy9EOlxcaW9uaWMyXFxob3NwaXRhbC9zcmNcXGFwcFxcaGVscGVyXFx2aWV3cmVxdWVzdHNcXHZpZXdyZXF1ZXN0cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxrQkFBa0IsRUFBQTs7QUFHbkI7RUFDQyx5QkFBeUI7RUFDdEIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixtQkFBbUIsRUFBQTs7QUFHdkI7RUFFRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ1YsZUFBZSxFQUFBOztBQUl2QjtFQUNJLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxXQUFXLEVBQUE7O0FBR2Y7RUFFSSxxQkFBcUIsRUFBQTs7QUFJekI7RUFFUSxxQkFBcUIsRUFBQTs7QUFJN0I7RUFDSSwyQkFBMkIsRUFBQTs7QUFHL0I7RUFDSSxlQUFlO0VBQ2YsV0FBVztFQUNYLFVBQVU7RUFDVixTQUFTO0VBQ1QsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksdUJBQXVCO0VBQ3ZCLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hlbHBlci92aWV3cmVxdWVzdHMvdmlld3JlcXVlc3RzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZXF1ZXN0Z3JpZHtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5ob3NwaXRhbG5hbWV7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgIzVCQ0FBNDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgIGJhY2tncm91bmQ6ICM1QkNBQTQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4uaGVhZGluZ3tcclxuXHRoMntcclxuXHRcdHRleHQtYWxpZ246IGxlZnQ7XHJcblx0XHRtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjFweDtcclxuXHR9XHJcbn1cclxuXHJcbi5yZXF1ZXN0bGlzdHtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7IFxyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmhlYWRlcnJvd3tcclxuICAgXHJcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGdyYXk7XHJcbiAgIFxyXG59XHJcblxyXG4ucmVxdWVzdGxpc3R7XHJcbiAgICAuZm9vZGxpc3R7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogZ3Jvb3ZlO1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuaW9uLXJvdzpsYXN0LWNoaWxkIHtcclxuICAgIGJvcmRlci1ib3R0b206IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNhcmRncmlke1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuaW9uLWNhcmQtaGVhZGVye1xyXG4gICAgcGFkZGluZzogN3B4ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogZGFya2dyYXk7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/helper/viewrequests/viewrequests.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/helper/viewrequests/viewrequests.page.ts ***!
  \**********************************************************/
/*! exports provided: ViewrequestsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewrequestsPage", function() { return ViewrequestsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../global.service */ "./src/app/global.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../app.component */ "./src/app/app.component.ts");









let ViewrequestsPage = class ViewrequestsPage {
    constructor(alertCtrl, menuCtrl, router, _global, httpClient, loadingController, activatedRoute, myapp) {
        this.alertCtrl = alertCtrl;
        this.menuCtrl = menuCtrl;
        this.router = router;
        this._global = _global;
        this.httpClient = httpClient;
        this.loadingController = loadingController;
        this.activatedRoute = activatedRoute;
        this.myapp = myapp;
        this.hospitalid = "";
        this.hospitalname = "";
        this.hiddenloadmore1 = true;
        this.hiddenloadmore2 = true;
        this.hiddenloadmore3 = true;
        this.hiddenfoodrequests = true;
        this.hiddenessentialrequests = true;
        this.hiddenchildcarerequests = true;
        this.hiddenrequestfound = true;
        this.foodList = [];
        this.essentialList = [];
        this.childcareList = [];
        this.requestsList = [];
        this.start1 = 0;
        this.start2 = 0;
        this.start3 = 0;
    }
    ionViewDidEnter(infiniteScroll) {
        this.myapp.aboutmenu = 0;
        this.hospitalid = this.activatedRoute.snapshot.paramMap.get('id');
        this.hospitalname = this.activatedRoute.snapshot.paramMap.get('name');
        this.foodList = [];
        this.essentialList = [];
        this.childcareList = [];
        this.requestsList = [];
        this.start1 = 0;
        this.start2 = 0;
        this.start3 = 0;
        this.hospitalRequests(infiniteScroll);
        // this.foodRequests(infiniteScroll);
        // this.essentialsRequests(infiniteScroll);
        // this.childcareRequests(infiniteScroll);
    }
    ngOnInit() {
        this.hospitalid = this.activatedRoute.snapshot.paramMap.get('id');
        this.hospitalname = this.activatedRoute.snapshot.paramMap.get('name');
    }
    hospitalRequests(infiniteScroll) {
        var token = this._global.token;
        var userid = this._global.userid;
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token
            })
        };
        this.httpClient.post(this._global.domainURL + "hospitalrequests", {
            "userid": userid,
            "start": this.start1,
            "hospitalid": this.hospitalid
        }, httpOptions)
            .subscribe((val) => {
            if (typeof val.data != "undefined") {
                if (val.data.status == 1) {
                    if (val.data.lastid > 0) {
                        // Notification count
                        this.myapp.notifycount = val.data.countnotification;
                        this.requestsList = this.requestsList.concat(val.data.requests);
                        if (this.requestsList.length > 5) {
                            this.hiddenloadmore1 = false;
                        }
                        else {
                            this.hiddenloadmore1 = true;
                        }
                        this.start1 = val.data.lastid;
                        console.log('response : ' + JSON.stringify(val.data));
                        console.log('len : ' + this.requestsList.length);
                    }
                    if (this.requestsList.length == 0) {
                        this.hiddenrequestfound = true;
                    }
                    else {
                        this.hiddenrequestfound = false;
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
    foodRequests(infiniteScroll) {
        var token = this._global.token;
        var userid = this._global.userid;
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token
            })
        };
        this.httpClient.post(this._global.domainURL + "foodRequests", {
            "userid": userid,
            "start": this.start1,
            "hospitalid": this.hospitalid
        }, httpOptions)
            .subscribe((val) => {
            if (typeof val.data != "undefined") {
                if (val.data.status == 1) {
                    // Notification count
                    this.myapp.notifycount = val.data.countnotification;
                    if (val.data.lastid > 0) {
                        this.foodList = this.foodList.concat(val.data.requests);
                        if (this.foodList.length > 5) {
                            this.hiddenloadmore1 = false;
                        }
                        else {
                            this.hiddenloadmore1 = true;
                        }
                        this.start1 = val.data.lastid;
                        console.log('response : ' + JSON.stringify(val.data));
                        console.log('len : ' + this.foodList.length);
                    }
                    if (this.foodList.length == 0) {
                        this.hiddenfoodrequests = true;
                    }
                    else {
                        this.hiddenfoodrequests = false;
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
    loadMoreRequests(infiniteScroll) {
        this.hospitalRequests(infiniteScroll);
        infiniteScroll.target.disabled = true;
    }
    loadMoreFoodrequests(infiniteScroll) {
        this.foodRequests(infiniteScroll);
        infiniteScroll.target.disabled = true;
    }
    essentialsRequests(infiniteScroll) {
        var token = this._global.token;
        var userid = this._global.userid;
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token
            })
        };
        this.httpClient.post(this._global.domainURL + "essentialRequests", {
            "userid": userid,
            "start": this.start2,
            "hospitalid": this.hospitalid
        }, httpOptions)
            .subscribe((val) => {
            if (typeof val.data != "undefined") {
                if (val.data.status == 1) {
                    // Notification count
                    this.myapp.notifycount = val.data.countnotification;
                    if (val.data.lastid > 0) {
                        this.hiddenessentialrequests = false;
                        this.essentialList = this.essentialList.concat(val.data.requests);
                        if (this.essentialList.length > 5) {
                            this.hiddenloadmore2 = false;
                        }
                        else {
                            this.hiddenloadmore2 = true;
                        }
                        this.start2 = val.data.lastid;
                        console.log('response : ' + JSON.stringify(val.data));
                    }
                    else {
                        this.hiddenessentialrequests = true;
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
    loadMoreEssentialrequests(infiniteScroll) {
        this.essentialsRequests(infiniteScroll);
        infiniteScroll.target.disabled = true;
    }
    childcareRequests(infiniteScroll) {
        var token = this._global.token;
        var userid = this._global.userid;
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token
            })
        };
        this.httpClient.post(this._global.domainURL + "childcareRequests", {
            "userid": userid,
            "start": this.start3,
            "hospitalid": this.hospitalid
        }, httpOptions)
            .subscribe((val) => {
            if (typeof val.data != "undefined") {
                if (val.data.status == 1) {
                    // Notification count
                    this.myapp.notifycount = val.data.countnotification;
                    if (val.data.lastid > 0) {
                        this.childcareList = this.childcareList.concat(val.data.requests);
                        if (this.childcareList.length > 5) {
                            this.hiddenloadmore3 = false;
                        }
                        else {
                            this.hiddenloadmore3 = true;
                        }
                        this.start3 = val.data.lastid;
                        console.log('response : ' + JSON.stringify(val.data));
                    }
                    if (this.childcareList.length == 0) {
                        this.hiddenchildcarerequests = true;
                    }
                    else {
                        this.hiddenchildcarerequests = false;
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
    loadMoreChildcarerequests(infiniteScroll) {
        this.childcareRequests(infiniteScroll);
        infiniteScroll.target.disabled = true;
    }
    foodrequestDetails(id) {
        if (this._global.userid > 0 && this._global.userrole == this._global.userrole2) {
            this.router.navigateByUrl('/foodrequestdetails/' + id + '/0');
        }
        else {
            this.presentAlertConfirmNoLogin();
        }
    }
    essentialsrequestDetails(id) {
        if (this._global.userid > 0 && this._global.userrole == this._global.userrole2) {
            this.router.navigateByUrl('/essentialsrequestdetails/' + id + '/0');
        }
        else {
            this.presentAlertConfirmNoLogin();
        }
    }
    childcarerequestDetails(id) {
        if (this._global.userid > 0 && this._global.userrole == this._global.userrole2) {
            this.router.navigateByUrl('/childcarerequestdetails/' + id + '/0');
        }
        else {
            this.presentAlertConfirmNoLogin();
        }
    }
    presentAlertConfirmNoLogin() {
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
                            this.router.navigateByUrl('/login/0');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    viewrequest(type, id) {
        if (type == "Food") {
            this.foodrequestDetails(id);
        }
        if (type == "Essentials") {
            this.essentialsrequestDetails(id);
        }
        if (type == "Childcare") {
            this.childcarerequestDetails(id);
        }
    }
};
ViewrequestsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"])
], ViewrequestsPage.prototype, "infiniteScroll", void 0);
ViewrequestsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-viewrequests',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./viewrequests.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/helper/viewrequests/viewrequests.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./viewrequests.page.scss */ "./src/app/helper/viewrequests/viewrequests.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]])
], ViewrequestsPage);



/***/ })

}]);
//# sourceMappingURL=helper-viewrequests-viewrequests-module-es2015.js.map