(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["helper-searchhospitals-searchhospitals-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/helper/searchhospitals/searchhospitals.page.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/helper/searchhospitals/searchhospitals.page.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button>\n       \n      </ion-menu-button>\n    </ion-buttons>\n   \t<ion-title class=\"apphead\"><img src=\"../assets/banner.png\" style=\" vertical-align: middle;\"></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t\n\t<ion-grid >\n      \t<ion-row color=\"primary\" justify-content-center class='formcenter'>\n\n        \t<ion-col align-self-center size-md=\"12\" size-lg=\"12\" size-xs=\"12\">\n          \t\t<div class=\"diventeras\"  text-center>\n           \t\t\t<h2>Search nearby Hospitals</h2>\n          \t\t</div>\n          \n\t          \t<div  padding>\n\t            \t<ion-searchbar placeholder=\"Enter a Postcode\"  [(ngModel)]='postcode' (ionChange)=\"changepostcode()\" ></ion-searchbar>\n\t          \t</div>\n\t          \t<div padding [hidden]=hiddenmiles>\n\t          \t\t<ion-select placeholder=\"5 Miles\" [(ngModel)]='mile' (ionChange)=\"selectDistance()\" >\n\t          \t\t\t<ion-select-option *ngFor=\"let distance of distanceArray;\" [value]=\"distance\">\n\t\t\t    \t\t\t{{ distance }} Miles\n\t\t\t    \t\t</ion-select-option>\n\t    \t\t\t</ion-select>\n\t          \t</div>\n\t          \t<div  padding>\n\t            \t<ion-searchbar placeholder=\"Search by Hospital name\" (ionInput)=\"filterHospital($event)\" [(ngModel)]='hospital' ></ion-searchbar>\n\t          \t</div>\n\n\t          \t<div class=\"diventeras\" text-center>\n           \t\t\t<h2>Results <span [hidden]=hiddennearyourpostcode>near your postcode</span> </h2>\n          \t\t</div>\n\n          \t\t<ion-item lines=\"none\" [hidden]=hiddensearching>\n\t\t      \t\t<p class=\"searching\" >Searching...</p>\n\t\t      \t</ion-item>\n\n\t\t      \t<ion-item lines=\"none\" [hidden]=hiddennotfound>\n\t\t      \t\t<p class=\"searching\" >Not found.</p>\n\t\t      \t</ion-item>\n\n\t          \t<div padding>\n\t          \t\t\n\t            \t<ion-card *ngFor=\"let item of hospitalList;\">\n\t            \t\t<div class=\"countrequests\" *ngIf=\"item['countrequests'] > 0\">\n\t            \t\t\t<div class='circle'>{{item['countrequests']}}</div>\n\t            \t\t</div>\n\t\t\t\t\t  \t<ion-card-header (click)=\"viewrequests(item['name'],item['id'],item['countrequests'])\">\n\t\t\t\t\t    \t<ion-card-title class=\"hospitalnamelbl\">{{item['name']}} {{item['distance']}}</ion-card-title>\n\t\t\t\t\t    \t<p>{{item['address']}}</p>\n\t\t\t\t\t  \t</ion-card-header>\n\n\t\t\t\t\t</ion-card>\n\t\t\t\t\t<ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadMore($event)\" >\n\t\t\t            <ion-infinite-scroll-content\n\t\t\t                loadingSpinner=\"bubbles\"\n\t\t\t                loadingText=\"Loading more data...\">\n\t\t\t            </ion-infinite-scroll-content>\n\t\t\t        </ion-infinite-scroll>\n\t          \t</div>\n        \t</ion-col>\n      \t</ion-row>\n    </ion-grid>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/helper/searchhospitals/searchhospitals-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/helper/searchhospitals/searchhospitals-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: SearchhospitalsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchhospitalsPageRoutingModule", function() { return SearchhospitalsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _searchhospitals_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./searchhospitals.page */ "./src/app/helper/searchhospitals/searchhospitals.page.ts");




const routes = [
    {
        path: '',
        component: _searchhospitals_page__WEBPACK_IMPORTED_MODULE_3__["SearchhospitalsPage"]
    }
];
let SearchhospitalsPageRoutingModule = class SearchhospitalsPageRoutingModule {
};
SearchhospitalsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SearchhospitalsPageRoutingModule);



/***/ }),

/***/ "./src/app/helper/searchhospitals/searchhospitals.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/helper/searchhospitals/searchhospitals.module.ts ***!
  \******************************************************************/
/*! exports provided: SearchhospitalsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchhospitalsPageModule", function() { return SearchhospitalsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _searchhospitals_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./searchhospitals-routing.module */ "./src/app/helper/searchhospitals/searchhospitals-routing.module.ts");
/* harmony import */ var _searchhospitals_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./searchhospitals.page */ "./src/app/helper/searchhospitals/searchhospitals.page.ts");







let SearchhospitalsPageModule = class SearchhospitalsPageModule {
};
SearchhospitalsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _searchhospitals_routing_module__WEBPACK_IMPORTED_MODULE_5__["SearchhospitalsPageRoutingModule"]
        ],
        declarations: [_searchhospitals_page__WEBPACK_IMPORTED_MODULE_6__["SearchhospitalsPage"]]
    })
], SearchhospitalsPageModule);



/***/ }),

/***/ "./src/app/helper/searchhospitals/searchhospitals.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/helper/searchhospitals/searchhospitals.page.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".searching {\n  text-align: center;\n  font-weight: bold;\n  font-size: 17px; }\n\n.circle {\n  border-radius: 50%;\n  background: red;\n  color: white;\n  width: 20px;\n  height: 20px;\n  float: right;\n  padding: 2px;\n  vertical-align: middle;\n  text-align: center; }\n\n.countrequests {\n  text-align: right;\n  width: 100%;\n  position: relative;\n  margin-bottom: 10px; }\n\n.hospitalnamelbl {\n  font-size: 20px;\n  font-weight: normal; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVscGVyL3NlYXJjaGhvc3BpdGFscy9EOlxcaW9uaWMyXFxob3NwaXRhbC9zcmNcXGFwcFxcaGVscGVyXFxzZWFyY2hob3NwaXRhbHNcXHNlYXJjaGhvc3BpdGFscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWUsRUFBQTs7QUFHaEI7RUFDQyxrQkFBa0I7RUFDZixlQUFlO0VBQ2YsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtFQUNaLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0MsaUJBQWlCO0VBQ2QsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxlQUFlO0VBQ2YsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9oZWxwZXIvc2VhcmNoaG9zcGl0YWxzL3NlYXJjaGhvc3BpdGFscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoaW5ne1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxuXHRmb250LXNpemU6IDE3cHg7XHJcbn1cclxuXHJcbi5jaXJjbGV7XHJcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZDogcmVkO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBwYWRkaW5nOiAycHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY291bnRyZXF1ZXN0c3tcclxuXHR0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLmhvc3BpdGFsbmFtZWxibHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/helper/searchhospitals/searchhospitals.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/helper/searchhospitals/searchhospitals.page.ts ***!
  \****************************************************************/
/*! exports provided: SearchhospitalsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchhospitalsPage", function() { return SearchhospitalsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../global.service */ "./src/app/global.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");










let SearchhospitalsPage = class SearchhospitalsPage {
    constructor(alertCtrl, menuCtrl, router, _global, httpClient, loadingController, activatedRoute, geolocation, myapp) {
        this.alertCtrl = alertCtrl;
        this.menuCtrl = menuCtrl;
        this.router = router;
        this._global = _global;
        this.httpClient = httpClient;
        this.loadingController = loadingController;
        this.activatedRoute = activatedRoute;
        this.geolocation = geolocation;
        this.myapp = myapp;
        this.distanceArray = [5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
        this.mile = 5;
        this.page = 1;
        this.hospitalList = [];
        this.hospitalList2 = [];
        this.hiddensearching = true;
        this.hiddennearyourpostcode = false;
        this.hiddennotfound = true;
        this.hiddenmiles = true;
        this.postcode = "";
        this.lat = '';
        this.lng = '';
        this.hospital = '';
        this.searchrequest = '';
        this.searchrequestcount = 0;
        this.menuCtrl.enable(true);
        this.getCurrentPosition();
    }
    ngOnInit() {
        //
    }
    ionViewDidEnter() {
        this.myapp.aboutmenu = 0;
        if (this.postcode == '' && this.hospital == '') {
            this.hiddennearyourpostcode = false;
        }
        else {
            this.hiddennearyourpostcode = true;
        }
    }
    changepostcode() {
        // console.log('change : ' + this.postcode);
        this.page = 1;
        this.hospitalList = [];
        this.hospitalList2 = [];
        this.hiddensearching = false;
        this.hiddennotfound = true;
        if (this.postcode != '') {
            this.hiddenmiles = false;
        }
        else {
            this.hiddenmiles = true;
        }
        this.getHospitalList2();
        if (this.postcode == '' && this.hospital == '') {
            this.hiddennearyourpostcode = false;
        }
        else {
            this.hiddennearyourpostcode = true;
        }
    }
    getCurrentPosition() {
        this.geolocation.getCurrentPosition({ maximumAge: 20000, timeout: 8000,
            enableHighAccuracy: true }).then((resp) => {
            // resp.coords.latitude
            // resp.coords.longitude
            //    console.log("success 2 : " + JSON.stringify( resp.coords));
            this.lat = resp.coords.latitude;
            this.lng = resp.coords.longitude;
            //console.log("lat : " + this.lat + ", lng : " + this.lng);
            this.getHospitalList2();
        }, er => {
            //alert("error getting location")
            console.log('Can not retrieve Location');
        }).catch((error) => {
            //alert('Error getting location'+JSON.stringify(error));
            console.log('Error getting location - ' + JSON.stringify(error));
        });
    }
    getHospitalList(infiniteScroll) {
        var token = this._global.token;
        var userid = this._global.userid;
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token
            })
        };
        if (this.searchrequestcount > 0) {
            this.searchrequest.unsubscribe(); // To cancel the get request.
        }
        this.searchrequestcount += 1;
        this.searchrequest = this.httpClient.post(this._global.domainURL + "getNearHospitals", {
            "userid": userid,
            "lat": this.lat,
            "lng": this.lng,
            "mile": this.mile,
            "hospital": this.hospital,
            "postcode": this.postcode,
            "page": this.page
        }, httpOptions)
            .subscribe((val) => {
            this.searchrequestcount = 0;
            if (typeof val.data != "undefined") {
                if (val.data.success == 1) {
                    // Notification count
                    this.myapp.notifycount = val.data.countnotification;
                    this.hospitalList = this.hospitalList.concat(val.data.hospital);
                    this.page = val.data.page;
                    this.hospitalList2 = this.hospitalList;
                    if (this.hospitalList.length <= 0) {
                        this.hiddennotfound = false;
                    }
                    else {
                        this.hiddennotfound = true;
                    }
                    // console.log('response : ' + JSON.stringify(val.data.page) );
                }
            }
            this.hiddensearching = true;
            if (infiniteScroll) {
                infiniteScroll.target.complete();
                infiniteScroll.target.disabled = false;
            }
        }, response => {
            console.log("Get call in error", response);
        }, () => {
            console.log("The Get observable is now completed.");
        });
    }
    getHospitalList2() {
        var token = this._global.token;
        var userid = this._global.userid;
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token
            })
        };
        this.page = 1;
        this.hospitalList = [];
        this.hospitalList2 = [];
        if (this.searchrequestcount > 0) {
            this.searchrequest.unsubscribe(); // To cancel the get request.
        }
        this.searchrequestcount += 1;
        this.searchrequest = this.httpClient.post(this._global.domainURL + "getNearHospitals", {
            "userid": userid,
            "lat": this.lat,
            "lng": this.lng,
            "mile": this.mile,
            "hospital": this.hospital,
            "postcode": this.postcode,
            "page": this.page
        }, httpOptions)
            .subscribe((val) => {
            this.searchrequestcount = 0;
            if (typeof val.data != "undefined") {
                if (val.data.success == 1) {
                    // Notification count
                    this.myapp.notifycount = val.data.countnotification;
                    this.hospitalList = val.data.hospital;
                    this.page = val.data.page;
                    this.hospitalList2 = this.hospitalList;
                    if (this.hospitalList.length <= 0) {
                        this.hiddennotfound = false;
                    }
                    else {
                        this.hiddennotfound = true;
                    }
                    // console.log('response : ' + JSON.stringify(val.data.page) );
                }
            }
            this.hiddensearching = true;
        }, response => {
            console.log("Get call in error", response);
        }, () => {
            console.log("The Get observable is now completed.");
        });
    }
    loadMore(infiniteScroll) {
        this.getHospitalList(infiniteScroll);
        infiniteScroll.target.disabled = true;
    }
    filterHospital(event) {
        if (this.postcode != '') {
            this.hospitalList = this.hospitalList2;
            const val = event.target.value;
            if (val && val.trim() != '') {
                this.hospitalList = this.hospitalList.filter(item => {
                    return item.name.toLowerCase().indexOf(val.toLowerCase()) > -1;
                });
            }
            if (this.hospitalList.length <= 0) {
                this.hiddennotfound = false;
            }
            else {
                this.hiddennotfound = true;
            }
        }
        else {
            this.hospital = event.target.value;
            if (this.hospital.trim() != '') {
                this.hiddensearching = false;
                this.hiddennotfound = true;
            }
            else {
                this.hiddensearching = true;
                this.hiddennotfound = false;
            }
            this.page = 1;
            this.hospitalList = [];
            this.hospitalList2 = [];
            //console.log("len : " + this.hospitalList.length + ", hospital : " + this.hospital);
            if (this.hospital != '')
                this.getHospitalList2();
        }
        if (this.postcode == '' && this.hospital == '') {
            this.hiddennearyourpostcode = false;
            this.getHospitalList2();
        }
        else {
            this.hiddennearyourpostcode = true;
        }
    }
    selectDistance() {
        this.page = 1;
        this.hospitalList = [];
        this.hospitalList2 = [];
        this.getCurrentPosition();
    }
    viewrequests(name, id, count) {
        if (count == 0) {
            // Alert message (start)
            let alert = this.alertCtrl.create({
                message: "This hospital hasn't got any requests pending",
                buttons: ['OK']
            });
            alert.then((_alert) => {
                _alert.present();
            });
            // Alert message (end)
        }
        else {
            this.router.navigateByUrl('/viewrequests/' + id + '/' + name);
        }
    }
};
SearchhospitalsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__["Geolocation"] },
    { type: _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"])
], SearchhospitalsPage.prototype, "infiniteScroll", void 0);
SearchhospitalsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-searchhospitals',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./searchhospitals.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/helper/searchhospitals/searchhospitals.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./searchhospitals.page.scss */ "./src/app/helper/searchhospitals/searchhospitals.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__["Geolocation"], _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]])
], SearchhospitalsPage);



/***/ })

}]);
//# sourceMappingURL=helper-searchhospitals-searchhospitals-module-es2015.js.map