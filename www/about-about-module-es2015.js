(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["about-about-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button>\n       \n      </ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"apphead\"><img src=\"assets/banner.png\" style=\" vertical-align: middle;\"></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\t<ion-grid  class='requestgrid' >\n      <ion-row color=\"primary\" justify-content-center class='formcenter'>\n    \n        <ion-col align-self-center size-md=\"12\" size-lg=\"12\" size-xs=\"12\">\n          \t<div class=\"heading\" padding>\n\t            <h3 class=\"termcondition\" color=\"tertiary\">About this app</h3>\n\t           </div>\n          \n          \t<div class=\"content\" padding>\n\n              <p>This app is developed to provide a dedicated platform for NHS staff to place a request for Childcare where Nurseries and Individuals can contact them if they can babysit their children. The NHS staff can also request/order food through this app where general public, councils or restaurants can see and deliver ready meals to them. In addition to these, the staff can also request for Essential items, groceries, etc. for them and pay the Helpers the value of receipt. </p>\n\n              <p>This app does not take any payment from either the NHS staff or from Helpers. This App can be browsed by a non-logged in user to see any requests in hospitals near any particular postcode. It however, asks the user to login if either they want to place a request as Staff or to view a request in detail as Helper.</p>\n\n              <h4 class=\"contenth4\">Information for 'NHS Staff' user</h4>\n              <p>Please be advised that this app does not take any payments, do not give any bank details or card details with anybody. Once you place a request, it appears on your Hospital's request list where people can see the overview for detailed request they will have to log in, this is where your contact details will be revealed where the Helper would contact you. Please note that you must give your correct details for the Helper to contact or help you. This app is not developed by the NHS so you can your own personal email and phone.</p>\n\n              <p>Any request that you have placed on the App will remain for a maximum of seven days, it will then show on your 'My requests' page as expired and will ask if you want to re-post the request. This will then go back to the hospital's requests page, this potentially can be played in loop until your request is fulfilled. One you receive the items please click on 'Received' on 'My requests' page</p>\n\n              <p>Please make sure you show your staff id to the helper to avoid any misuse of the app by non-NHS staff. At the same time please ask for the items receipt where required to pay the helper the correct amount. We do not encourage asking for help for free as we have to be considerate to the Helper's time and effort. At the same time we want to provide a platform where you can request for items you don't have time for to buy or if you have any difficulty.</p>\n\n              <p>Please see if the Helper is DBS checked before accepting help from any individual.</p>\n\n              <p>For any more queries please email us at info@helpournhs.com using the subject line 'NHS Staff query'.</p>\n\n              <h4 class=\"contenth4\">Information for 'Helper' user</h4>\n\n              <p>Firstly, thank you for helping our NHS heroes through this platform. We appreciate your time and effort to Help the NHS Staff.</p>\n\n              <p>You can get to browse the app without logging in where you can search for Hospital requests near your profile postcode by default or by specifying the postcode manually or by hospital name. You will then be asked to login if you want to see a request in detail and to contact a NHS Staff.</p>\n\n              <p>If you are buying any items for the staff, please keep the receipt with you and show it to the staff at the time of delivery so that they can pay the correct amount to you.</p>\n\n              <p>Once you confirm to help any request, we advise you to contact the Staff for more clarification and any possible changes to the request.</p>\n\n              <p>For any more queries please email us at info@helpournhs.com using the subject line 'Helper query'.</p>\n\n          \t</div>\n\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/about/about-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/about/about-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AboutPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageRoutingModule", function() { return AboutPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about.page */ "./src/app/about/about.page.ts");




const routes = [
    {
        path: '',
        component: _about_page__WEBPACK_IMPORTED_MODULE_3__["AboutPage"]
    }
];
let AboutPageRoutingModule = class AboutPageRoutingModule {
};
AboutPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AboutPageRoutingModule);



/***/ }),

/***/ "./src/app/about/about.module.ts":
/*!***************************************!*\
  !*** ./src/app/about/about.module.ts ***!
  \***************************************/
/*! exports provided: AboutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageModule", function() { return AboutPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _about_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about-routing.module */ "./src/app/about/about-routing.module.ts");
/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about.page */ "./src/app/about/about.page.ts");







let AboutPageModule = class AboutPageModule {
};
AboutPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _about_routing_module__WEBPACK_IMPORTED_MODULE_5__["AboutPageRoutingModule"]
        ],
        declarations: [_about_page__WEBPACK_IMPORTED_MODULE_6__["AboutPage"]]
    })
], AboutPageModule);



/***/ }),

/***/ "./src/app/about/about.page.scss":
/*!***************************************!*\
  !*** ./src/app/about/about.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".requestgrid {\n  text-align: center;\n  margin-bottom: 50px; }\n\n.heading {\n  margin-top: 50px;\n  margin-bottom: 30px; }\n\n.content {\n  min-height: 400px;\n  text-align: left !important;\n  padding: 10px; }\n\n.content h4 {\n    font-weight: bold; }\n\n.content .contenth4 {\n    margin-top: 40px; }\n\n.content p {\n    margin-top: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvRDpcXGlvbmljMlxcaG9zcGl0YWwvc3JjXFxhcHBcXGFib3V0XFxhYm91dC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxrQkFBa0I7RUFFbEIsbUJBQW1CLEVBQUE7O0FBR3BCO0VBRUMsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBOztBQUlwQjtFQUNDLGlCQUFpQjtFQUNqQiwyQkFBMkI7RUFDM0IsYUFBYSxFQUFBOztBQUhkO0lBTUUsaUJBQWlCLEVBQUE7O0FBTm5CO0lBU0UsZ0JBQWdCLEVBQUE7O0FBVGxCO0lBWUUsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hYm91dC9hYm91dC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVxdWVzdGdyaWR7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuXHRtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG59XHJcblxyXG4uaGVhZGluZ3tcclxuXHRcclxuXHRtYXJnaW4tdG9wOiA1MHB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDMwcHg7XHJcblxyXG59XHJcblxyXG4uY29udGVudHtcclxuXHRtaW4taGVpZ2h0OiA0MDBweDtcclxuXHR0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcblx0cGFkZGluZzogMTBweDtcclxuXHRcclxuXHRoNHtcclxuXHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdH1cclxuXHQuY29udGVudGg0e1xyXG5cdFx0bWFyZ2luLXRvcDogNDBweDtcclxuXHR9XHJcblx0cHtcclxuXHRcdG1hcmdpbi10b3A6IDIwcHg7XHJcblx0fVxyXG59XHJcblxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/about/about.page.ts":
/*!*************************************!*\
  !*** ./src/app/about/about.page.ts ***!
  \*************************************/
/*! exports provided: AboutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPage", function() { return AboutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../global.service */ "./src/app/global.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");








let AboutPage = class AboutPage {
    constructor(alertCtrl, menuCtrl, router, _global, httpClient, loadingController, myapp, nativeStorage) {
        this.alertCtrl = alertCtrl;
        this.menuCtrl = menuCtrl;
        this.router = router;
        this._global = _global;
        this.httpClient = httpClient;
        this.loadingController = loadingController;
        this.myapp = myapp;
        this.nativeStorage = nativeStorage;
        this.menuCtrl.enable(true);
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.myapp.aboutmenu = 1;
    }
};
AboutPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"] },
    { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_7__["NativeStorage"] }
];
AboutPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about.page.scss */ "./src/app/about/about.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_7__["NativeStorage"]])
], AboutPage);



/***/ })

}]);
//# sourceMappingURL=about-about-module-es2015.js.map