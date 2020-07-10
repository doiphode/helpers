(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["logintype-logintype-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/logintype/logintype.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/logintype/logintype.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button>\n        \n      </ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"apphead\"><img src=\"assets/banner.png\" style=\" vertical-align: middle;\"></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\t<ion-grid class=\"logintypegrid\" >\n      <ion-row color=\"primary\" justify-content-center class='formcenter'>\n    \n        <ion-col align-self-center size-md=\"12\" size-lg=\"12\" size-xs=\"12\">\n          <div class=\"diventeras\"  text-center>\n            <!-- <h3><img src=\"assets/icon/favicon-96x96.png\"></h3> -->\n            <label >Enter as</label>\n          </div>\n          \n          <div  padding>\n            <ion-button size=\"medium\" type=\"button\" class=\"logintypebutton\" (click)=\"staffrequests();\" >NHS Staff</ion-button>\n          </div>\n\n          <div padding>\n            <ion-button size=\"medium\" type=\"button\" class=\"logintypebutton\" (click)=\"helperrequests();\">Helper</ion-button>\n          </div>\n          \n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/logintype/logintype-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/logintype/logintype-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: LogintypePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogintypePageRoutingModule", function() { return LogintypePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _logintype_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logintype.page */ "./src/app/logintype/logintype.page.ts");




const routes = [
    {
        path: '',
        component: _logintype_page__WEBPACK_IMPORTED_MODULE_3__["LogintypePage"]
    }
];
let LogintypePageRoutingModule = class LogintypePageRoutingModule {
};
LogintypePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LogintypePageRoutingModule);



/***/ }),

/***/ "./src/app/logintype/logintype.module.ts":
/*!***********************************************!*\
  !*** ./src/app/logintype/logintype.module.ts ***!
  \***********************************************/
/*! exports provided: LogintypePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogintypePageModule", function() { return LogintypePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _logintype_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./logintype-routing.module */ "./src/app/logintype/logintype-routing.module.ts");
/* harmony import */ var _logintype_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./logintype.page */ "./src/app/logintype/logintype.page.ts");







let LogintypePageModule = class LogintypePageModule {
};
LogintypePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _logintype_routing_module__WEBPACK_IMPORTED_MODULE_5__["LogintypePageRoutingModule"]
        ],
        declarations: [_logintype_page__WEBPACK_IMPORTED_MODULE_6__["LogintypePage"]]
    })
], LogintypePageModule);



/***/ }),

/***/ "./src/app/logintype/logintype.page.scss":
/*!***********************************************!*\
  !*** ./src/app/logintype/logintype.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".logintypegrid {\n  text-align: center; }\n\n.diventeras {\n  margin-top: 50px; }\n\n.logintypebutton {\n  margin: auto;\n  margin-top: 50px;\n  width: 150px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW50eXBlL0Q6XFxpb25pYzJcXGhvc3BpdGFsL3NyY1xcYXBwXFxsb2dpbnR5cGVcXGxvZ2ludHlwZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDQyxrQkFBa0IsRUFBQTs7QUFHbkI7RUFDQyxnQkFBZ0IsRUFBQTs7QUFHakI7RUFDQyxZQUFZO0VBQUMsZ0JBQWdCO0VBQUMsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbG9naW50eXBlL2xvZ2ludHlwZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtbG9naW50eXBle1xyXG5cdFxyXG59XHJcblxyXG4ubG9naW50eXBlZ3JpZHtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5kaXZlbnRlcmFze1xyXG5cdG1hcmdpbi10b3A6IDUwcHg7XHJcbn1cclxuXHJcbi5sb2dpbnR5cGVidXR0b257XHJcblx0bWFyZ2luOiBhdXRvO21hcmdpbi10b3A6IDUwcHg7d2lkdGg6IDE1MHB4O1xyXG5cdFxyXG59Il19 */");

/***/ }),

/***/ "./src/app/logintype/logintype.page.ts":
/*!*********************************************!*\
  !*** ./src/app/logintype/logintype.page.ts ***!
  \*********************************************/
/*! exports provided: LogintypePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogintypePage", function() { return LogintypePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../global.service */ "./src/app/global.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");








let LogintypePage = class LogintypePage {
    //
    constructor(alertCtrl, menuCtrl, router, _global, httpClient, loadingController, myapp, route) {
        this.alertCtrl = alertCtrl;
        this.menuCtrl = menuCtrl;
        this.router = router;
        this._global = _global;
        this.httpClient = httpClient;
        this.loadingController = loadingController;
        this.myapp = myapp;
        this.route = route;
        this.price = '';
        this.menuCtrl.enable(true);
        //this.price = this.route.snapshot.params['price'];
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.myapp.aboutmenu = 0;
        if (this._global.userid > 0) {
            if (this._global.userrole == 2) {
                this.myapp.staffmenu();
                this.router.navigateByUrl('/requests');
            }
            if (this._global.userrole == 3) {
                this.myapp.helpermenu();
                this.router.navigateByUrl('/searchhospitals');
            }
        }
        else {
            this.myapp.loginmenu();
        }
    }
    stafflogin() {
        this.router.navigateByUrl('/login/0');
    }
    staffrequests() {
        this._global.userrole = 2;
        this.myapp.staffmenunologin();
        this.router.navigateByUrl('/requests');
    }
    helperlogin() {
        this.router.navigateByUrl('/helperlogin');
    }
    helperrequests() {
        this._global.userrole = 3;
        this.myapp.helpermenunologin();
        this.router.navigateByUrl('/searchhospitals');
    }
};
LogintypePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
];
LogintypePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-logintype',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./logintype.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/logintype/logintype.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./logintype.page.scss */ "./src/app/logintype/logintype.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
], LogintypePage);



/***/ })

}]);
//# sourceMappingURL=logintype-logintype-module-es2015.js.map