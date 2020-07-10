(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notifications-notifications-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/notifications.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/notifications.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNotificationsNotificationsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button>\n        \n      </ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"apphead\"><img src=\"assets/banner.png\" style=\" vertical-align: middle;\"></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t\n\t<ion-grid >\n      \t<ion-row color=\"primary\" justify-content-center class='formcenter'>\n\n        \t<ion-col align-self-center size-md=\"12\" size-lg=\"12\" size-xs=\"12\">\n          \t\t\n              <ion-item>\n                <ion-label>Enable app notifications</ion-label>\n                <label><ion-toggle color=\"success\" [(ngModel)]='enablenotification' (ionChange)=\"changeStatus()\" ></ion-toggle></label>\n              </ion-item>\n\n              <ion-item [hidden]=hiddennearby >\n                <ion-label>Request from nearby Hospitals</ion-label>\n                <label><ion-toggle color=\"success\" [(ngModel)]='enablenearby' (ionChange)=\"changeNearByStatus()\" ></ion-toggle></label>\n              </ion-item>\n              \n              <ion-item lines=\"none\" *ngIf=\"notificationsList.length > 0\" >\n\n                  <ion-button size=\"medium\" type=\"button\" class=\"requestsbutton\"  (click)=\"clearNotification(0,1,0)\" style=\"position: absolute;right: 0;\">Clear All</ion-button>\n                \n              </ion-item>\n\n\t          \t<div padding>\n\t          \t\t\n\t            \t<ion-card *ngFor=\"let item of notificationsList; let i = index\">\n    \t\t\t\t\t  \t<ion-card-header (click)=\"viewRequest(item['requestid'])\" >\n    \t\t\t\t\t    \t<ion-card-title style=\"font-size: 20px;\">{{item['message']}}</ion-card-title>\n    \t\t\t\t\t    \t<p>{{item['created_at']}}</p>\n                    \n    \t\t\t\t\t  \t</ion-card-header>\n\n                  <ion-card-content>\n                    <p style=\"text-align: right;\"><ion-label (click)=\"clearNotification(item['id'],2,i)\">Clear</ion-label></p>\n                  </ion-card-content>\n    \t\t\t\t\t  </ion-card>\n\t          \t</div>\n        \t</ion-col>\n      \t</ion-row>\n    </ion-grid>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/notifications/notifications-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/notifications/notifications-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: NotificationsPageRoutingModule */

  /***/
  function srcAppNotificationsNotificationsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationsPageRoutingModule", function () {
      return NotificationsPageRoutingModule;
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


    var _notifications_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./notifications.page */
    "./src/app/notifications/notifications.page.ts");

    const routes = [{
      path: '',
      component: _notifications_page__WEBPACK_IMPORTED_MODULE_3__["NotificationsPage"]
    }];
    let NotificationsPageRoutingModule = class NotificationsPageRoutingModule {};
    NotificationsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], NotificationsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/notifications/notifications.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/notifications/notifications.module.ts ***!
    \*******************************************************/

  /*! exports provided: NotificationsPageModule */

  /***/
  function srcAppNotificationsNotificationsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationsPageModule", function () {
      return NotificationsPageModule;
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


    var _notifications_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./notifications-routing.module */
    "./src/app/notifications/notifications-routing.module.ts");
    /* harmony import */


    var _notifications_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./notifications.page */
    "./src/app/notifications/notifications.page.ts");

    let NotificationsPageModule = class NotificationsPageModule {};
    NotificationsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _notifications_routing_module__WEBPACK_IMPORTED_MODULE_5__["NotificationsPageRoutingModule"]],
      declarations: [_notifications_page__WEBPACK_IMPORTED_MODULE_6__["NotificationsPage"]]
    })], NotificationsPageModule);
    /***/
  },

  /***/
  "./src/app/notifications/notifications.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/notifications/notifications.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNotificationsNotificationsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdGlmaWNhdGlvbnMvbm90aWZpY2F0aW9ucy5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/notifications/notifications.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/notifications/notifications.page.ts ***!
    \*****************************************************/

  /*! exports provided: NotificationsPage */

  /***/
  function srcAppNotificationsNotificationsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationsPage", function () {
      return NotificationsPage;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../global.service */
    "./src/app/global.service.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../app.component */
    "./src/app/app.component.ts");

    let NotificationsPage = class NotificationsPage {
      constructor(alertCtrl, menuCtrl, router, _global, httpClient, loadingController, activatedRoute, myapp) {
        this.alertCtrl = alertCtrl;
        this.menuCtrl = menuCtrl;
        this.router = router;
        this._global = _global;
        this.httpClient = httpClient;
        this.loadingController = loadingController;
        this.activatedRoute = activatedRoute;
        this.myapp = myapp;
        this.notificationsList = [];
        this.hiddennotfound = true;
        this.hiddennearby = true;
        this.countexe = 0;
        this.countexe2 = 0;
        this.enablenotification = false;
        this.enablenearby = false;
      }

      ngOnInit() {}

      ionViewDidEnter(infiniteScroll) {
        this.myapp.aboutmenu = 0;

        if (this._global.userrole == this._global.userrole2) {
          if (this._global.enablenotification == 0) {
            this.enablenotification = false;
          } else {
            this.enablenotification = true;
          }

          if (this._global.enablenearby == 0) {
            this.enablenearby = false;
          } else {
            this.enablenearby = true;
          }
        }

        if (this._global.userrole == 3) {
          this.hiddennearby = false;
        }

        this.myapp.notifycount = 0;
        this.getNotifications();
      }

      changeStatus() {
        var token = this._global.token;
        var userid = this._global.userid;

        if (userid > 0 && this._global.userrole == this._global.userrole2) {
          const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              'Accept': 'application/json',
              'Authorization': 'Bearer ' + token
            })
          };
          var status = 0;

          if (this.enablenotification) {
            status = 1;
          }

          this.httpClient.post(this._global.domainURL + "enableNotification", {
            "userid": userid,
            "status": status
          }, httpOptions).subscribe(val => {
            if (typeof val.data != "undefined") {
              var message = val.message;

              if (val.data.success == 1) {
                this._global.enablenotification = status;
              } else {
                this.enablenotification = !this.enablenotification;
              }

              if (this.countexe > 0) {
                this.getNotifications();
              }

              if (this.countexe > 0) this._global.showToast(message); // Send toast notification 

              this.countexe = 1;
            }
          }, response => {
            console.log("Get call in error", response);
          }, () => {
            console.log("The Get observable is now completed.");
          });
        }
      }

      changeNearByStatus() {
        var token = this._global.token;
        var userid = this._global.userid;

        if (this._global.userrole == 3 && userid > 0 && this._global.userrole == this._global.userrole2) {
          const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              'Accept': 'application/json',
              'Authorization': 'Bearer ' + token
            })
          };
          var status = 0;

          if (this.enablenearby) {
            status = 1;
          }

          this.httpClient.post(this._global.domainURL + "enableNearbyNotification", {
            "userid": userid,
            "status": status
          }, httpOptions).subscribe(val => {
            if (typeof val.data != "undefined") {
              var message = val.message;

              if (val.data.success == 1) {
                this._global.enablenearby = status;
              } else {
                this.enablenearby = !this.enablenearby;
              }

              if (this.countexe2 > 0) {
                this._global.showToast(message); // Send toast notification 


                this.getNotifications();
              }

              this.countexe2 = 1;
            }
          }, response => {
            console.log("Get call in error", response);
          }, () => {
            console.log("The Get observable is now completed.");
          });
        }
      }

      getNotifications() {
        var token = this._global.token;
        var userid = this._global.userid;

        if (userid > 0 && this._global.userrole == this._global.userrole2) {
          const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              'Accept': 'application/json',
              'Authorization': 'Bearer ' + token
            })
          };
          this.httpClient.post(this._global.domainURL + "getNotifications", {
            "userid": userid
          }, httpOptions).subscribe(val => {
            if (typeof val.data != "undefined") {
              if (val.data.success == 1) {
                this.notificationsList = val.data.list;
                console.log('response : ' + JSON.stringify(this.notificationsList));

                if (this.notificationsList.length <= 0) {
                  this.hiddennotfound = false;
                } else {
                  this.hiddennotfound = true;
                }
              }
            }
          }, response => {
            console.log("Get call in error", response);
          }, () => {
            console.log("The Get observable is now completed.");
          });
        }
      }

      viewRequest(id) {
        var token = this._global.token;
        var userid = this._global.userid;
        var userrole = this._global.userrole;
        const httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + token
          })
        };
        this.httpClient.post(this._global.domainURL + "viewRequest", {
          "id": id
        }, httpOptions).subscribe(val => {
          if (typeof val.data != "undefined") {
            if (val.data.success == 1) {
              var cartid = val.data.id;
              var type = val.data.type;

              if (userrole == 2) {
                if (type == "Food") {
                  this.router.navigateByUrl('/foodrequest/' + cartid + '/1/1');
                }

                if (type == "Essentials") {
                  this.router.navigateByUrl('/essentialsrequest/' + cartid + '/1/1');
                }

                if (type == "Childcare") {
                  this.router.navigateByUrl('/childcarerequest/' + cartid + '/1/1');
                }
              }

              if (userrole == 3) {
                if (type == 'Food') {
                  this.router.navigateByUrl('/foodrequestdetails/' + id + '/1');
                }

                if (type == 'Essentials') {
                  this.router.navigateByUrl('/essentialsrequestdetails/' + id + '/1');
                }

                if (type == 'Childcare') {
                  this.router.navigateByUrl('/childcarerequestdetails/' + id + '/1');
                }
              }
            }
          }
        }, response => {
          console.log("Get call in error", response);
        }, () => {
          console.log("The Get observable is now completed.");
        });
      }

      clearNotification(id, type, index) {
        var token = this._global.token;
        var userid = this._global.userid;
        const httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + token
          })
        };
        this.httpClient.post(this._global.domainURL + "clearNotification", {
          "userid": userid,
          "id": id,
          "type": type
        }, httpOptions).subscribe(val => {
          if (typeof val.data != "undefined") {
            if (val.data.success == 1) {
              if (type == 1) {
                this.notificationsList = [];
              }

              if (type == 2) {
                this.notificationsList.splice(index, 1);
              } // Notification count


              this.myapp.notifycount = val.data.countnotification;
            }
          }
        }, response => {
          console.log("Get call in error", response);
        }, () => {
          console.log("The Get observable is now completed.");
        });
      }

    };

    NotificationsPage.ctorParameters = () => [{
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
    }, {
      type: _global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"]
    }, {
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
    }, {
      type: _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]
    }];

    NotificationsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-notifications',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./notifications.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/notifications.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./notifications.page.scss */
      "./src/app/notifications/notifications.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]])], NotificationsPage);
    /***/
  }
}]);
//# sourceMappingURL=notifications-notifications-module-es5.js.map