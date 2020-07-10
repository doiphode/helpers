(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["staff-requests-requests-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/staff/requests/requests.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/staff/requests/requests.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppStaffRequestsRequestsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button>\n       \n      </ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"apphead\"><img src=\"../assets/banner.png\" style=\" vertical-align: middle;\"></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\t<ion-grid class=\"requestgrid\" >\n      <ion-row color=\"primary\" justify-content-center class='formcenter'>\n\n        <ion-col align-self-center size-md=\"12\" size-lg=\"12\" size-xs=\"12\">\n          <div class=\"divtextcenter\"  text-center>\n            <!-- <h3><img src=\"assets/icon/favicon-96x96.png\"></h3> -->\n            <label >Request for...</label>\n          </div>\n          \n          <div padding>\n            <ion-button size=\"medium\" color=\"tertiary\" type=\"button\" class=\"requestsbutton\" (click)=\"childcarerequest()\" >Childcare</ion-button>\n          </div>\n          \n          <div  padding>\n            <ion-button size=\"medium\" color=\"tertiary\" type=\"button\" class=\"requestsbutton\" (click)=\"foodrequest()\" >Food</ion-button>\n          </div>\n\n          <div padding>\n            <ion-button size=\"medium\" color=\"tertiary\" type=\"button\" class=\"requestsbutton\" (click)=\"essentialsrequest()\">Essentials</ion-button>\n          </div>\n\n          <div class=\"footerheading\">\n            <ion-label>Helping the <span style=\"font-weight: 900;\n    font-size: 24px;\n    font-style: italic;margin-left: 5px;\n    color: #5BCAA4;\">NHS</span></ion-label>\n          </div>\n\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/staff/requests/requests-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/staff/requests/requests-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: RequestsPageRoutingModule */

  /***/
  function srcAppStaffRequestsRequestsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RequestsPageRoutingModule", function () {
      return RequestsPageRoutingModule;
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


    var _requests_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./requests.page */
    "./src/app/staff/requests/requests.page.ts");

    const routes = [{
      path: '',
      component: _requests_page__WEBPACK_IMPORTED_MODULE_3__["RequestsPage"]
    }];
    let RequestsPageRoutingModule = class RequestsPageRoutingModule {};
    RequestsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], RequestsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/staff/requests/requests.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/staff/requests/requests.module.ts ***!
    \***************************************************/

  /*! exports provided: RequestsPageModule */

  /***/
  function srcAppStaffRequestsRequestsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RequestsPageModule", function () {
      return RequestsPageModule;
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


    var _requests_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./requests-routing.module */
    "./src/app/staff/requests/requests-routing.module.ts");
    /* harmony import */


    var _requests_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./requests.page */
    "./src/app/staff/requests/requests.page.ts");

    let RequestsPageModule = class RequestsPageModule {};
    RequestsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _requests_routing_module__WEBPACK_IMPORTED_MODULE_5__["RequestsPageRoutingModule"]],
      declarations: [_requests_page__WEBPACK_IMPORTED_MODULE_6__["RequestsPage"]]
    })], RequestsPageModule);
    /***/
  },

  /***/
  "./src/app/staff/requests/requests.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/staff/requests/requests.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppStaffRequestsRequestsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".requestgrid {\n  text-align: center; }\n\n.divtextcenter {\n  margin-top: 50px; }\n\n.requestsbutton {\n  margin: auto;\n  margin-top: 50px;\n  width: 150px; }\n\n.footerheading {\n  bottom: 0;\n  position: fixed;\n  margin: 0 auto;\n  width: 100%;\n  margin-bottom: 30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhZmYvcmVxdWVzdHMvRDpcXGlvbmljMlxcaG9zcGl0YWwvc3JjXFxhcHBcXHN0YWZmXFxyZXF1ZXN0c1xccmVxdWVzdHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Msa0JBQWtCLEVBQUE7O0FBR25CO0VBQ0MsZ0JBQWdCLEVBQUE7O0FBR2pCO0VBQ0MsWUFBWTtFQUFDLGdCQUFnQjtFQUFDLFlBQVksRUFBQTs7QUFJM0M7RUFDQyxTQUFTO0VBQ04sZUFBZTtFQUNmLGNBQWM7RUFDZCxXQUFXO0VBQ1gsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zdGFmZi9yZXF1ZXN0cy9yZXF1ZXN0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVxdWVzdGdyaWR7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZGl2dGV4dGNlbnRlcntcclxuXHRtYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcblxyXG4ucmVxdWVzdHNidXR0b257XHJcblx0bWFyZ2luOiBhdXRvO21hcmdpbi10b3A6IDUwcHg7d2lkdGg6IDE1MHB4O1xyXG5cclxufVxyXG5cclxuLmZvb3RlcmhlYWRpbmd7XHJcblx0Ym90dG9tOiAwO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/staff/requests/requests.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/staff/requests/requests.page.ts ***!
    \*************************************************/

  /*! exports provided: RequestsPage */

  /***/
  function srcAppStaffRequestsRequestsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RequestsPage", function () {
      return RequestsPage;
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


    var _global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../global.service */
    "./src/app/global.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../app.component */
    "./src/app/app.component.ts");

    let RequestsPage = class RequestsPage {
      constructor(alertCtrl, menuCtrl, router, _global, httpClient, loadingController, myapp) {
        this.alertCtrl = alertCtrl;
        this.menuCtrl = menuCtrl;
        this.router = router;
        this._global = _global;
        this.httpClient = httpClient;
        this.loadingController = loadingController;
        this.myapp = myapp;
        this.menuCtrl.enable(true);
      }

      ngOnInit() {}

      ionViewDidEnter() {
        this.myapp.aboutmenu = 0;
      }

      foodrequest() {
        this.router.navigateByUrl('/foodrequest/0/0/0');
      }

      essentialsrequest() {
        this.router.navigateByUrl('/essentialsrequest/0/0/0');
      }

      childcarerequest() {
        this.router.navigateByUrl('/childcarerequest/0/0/0');
      }

    };

    RequestsPage.ctorParameters = () => [{
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
    }, {
      type: _global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"]
    }, {
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
    }, {
      type: _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]
    }];

    RequestsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-requests',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./requests.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/staff/requests/requests.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./requests.page.scss */
      "./src/app/staff/requests/requests.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]])], RequestsPage);
    /***/
  }
}]);
//# sourceMappingURL=staff-requests-requests-module-es5.js.map