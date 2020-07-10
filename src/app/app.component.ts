import { Component, OnInit } from '@angular/core';

import { AlertController, LoadingController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { GlobalService } from './global.service';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { MenuController } from "@ionic/angular";
import {SocialSharing} from '@ionic-native/social-sharing/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { FCM } from '@ionic-native/fcm/ngx';

//import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal/ngx';

import { Badge } from '@ionic-native/badge/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
    public device = 0;
    public selectedIndex = 0;
    public userfullname = "";
    public useremail = "";
    public userrole: any='';
    public devicetoken = "";
    public menutype = 1;
    public aboutmenu = 0;
    public nrequestid = 0;
    public notifycount: any= 0;
    public nrequestType = "";
    public nrequestuserrole: number = 0;

    public helpcontactmsg = "* We suggest you contact the concerned NHS staff to confirm the above request to accommondate any possible changes they may want to make.";

    public loginmenu_arr = [
        {
          title: 'Home',
          url: '/logintype',
          icon: 'home'
        },
        {
          title: 'Login/Register',
          url: '/login/0',
          icon: 'log-in'
        },
        {
          title: 'About',
          url: '/about',
          icon: 'call'
        },
      /*  {
          title: 'App feedback',
          url: '/givefeedback',
          icon: 'chatbubbles'
        }, */
    ];

    public staffmenu_arr = [
        {
          title: 'My profile',
          url: '/profile',
          icon: 'person'
        },
        {
          title: 'My requests',
          url: '/myrequests',
          icon: 'bicycle'
        },
        {
          title: 'Make a request',
          url: '/requests',
          icon: 'cart'
        },
        {
          title: 'Switch user type',
          url: '/logintype',
          icon: 'log-out'
        },
        {
          title: 'Notifications',
          url: '/notifications',
          icon: 'notifications'
        },
        /*  {
          title: 'App feedback',
          url: '/givefeedback',
          icon: 'chatbubbles'
        }, */
        {
          title: 'Logout',
          url: '/logout',
          icon: 'log-out'
        }
    ];

    public staffmenunologin_arr = [
        {
          title: 'Home',
          url: '/logintype',
          icon: 'home'
        },
        {
          title: 'Login/Register',
          url: '/login/0',
          icon: 'log-in'
        },
        {
          title: 'Switch user type',
          url: '/logintype',
          icon: 'log-out'
        },
        {
          title: 'About',
          url: '/about',
          icon: 'call'
        },
        /*  {
          title: 'App feedback',
          url: '/givefeedback',
          icon: 'chatbubbles'
        }, */
    ];

    public helpermenu_arr = [
        {
          title: 'My profile',
          url: '/profile',
          icon: 'person'
        },
        {
          title: 'My help list',
          url: '/myhelplist',
          icon: 'cart'
        },
        {
          title: "Search hospitals",
          url: '/searchhospitals',
          icon: 'medkit'
        },
        {
          title: 'Switch user type',
          url: '/logintype',
          icon: 'log-out'
        },
        {
          title: 'Notifications',
          url: '/notifications',
          icon: 'notifications'
        },
        /*  {
          title: 'App feedback',
          url: '/givefeedback',
          icon: 'chatbubbles'
        }, */
        {
          title: 'Logout',
          url: '/logout',
          icon: 'log-out'
        }
    ];

    public helpermenunologin_arr = [
        {
          title: 'Home',
          url: '/logintype',
          icon: 'home'
        },
        {
          title: 'Login/Register',
          url: '/login/0',
          icon: 'log-in'
        },
        {
          title: "Search hospitals",
          url: '/searchhospitals',
          icon: 'medkit'
        },
        {
          title: 'Switch user type',
          url: '/logintype',
          icon: 'log-out'
        },
        {
          title: 'About',
          url: '/about',
          icon: 'call'
        },
        /*  {
          title: 'App feedback',
          url: '/givefeedback',
          icon: 'chatbubbles'
        }, */
        
    ];

    public appPages = [
     
    ];

    constructor(
      private platform: Platform,
      private splashScreen: SplashScreen,
      private statusBar: StatusBar,
      private _global: GlobalService,
      private httpClient:HttpClient,
      private router: Router,
      public menuCtrl: MenuController,
      public socialSharing: SocialSharing,
      private fcm: FCM,
      //private payPal: PayPal,
      private alertCtrl: AlertController,
      private nativeStorage: NativeStorage,
      private badge: Badge
    ) {
      this.initializeApp();
        this.appPages = this.loginmenu_arr;
      //events.subscribe('user:helperlogin',()=>{
      //  this.appPages = this.helperappPages;
      //});

        
    }

    getFromStorage(){
       
        this.nativeStorage.getItem('loginkey')
        .then(
          data =>{
              
              if(data.email.length > 4 && data.pwd.length > 4){
                  this.checklogin(data.email,data.pwd);
              }              
          },
          error => console.error(error)
        );

    }

    initializeApp() {


        this.platform.ready().then(() => {
        this.statusBar.styleDefault();


        /*
        this.platform.backButton.subscribeWithPriority(9999, () => {
          document.addEventListener('backbutton', function (event) {
            event.preventDefault();
            event.stopPropagation();
           
          }, false);
        }); */
      

        this.splashScreen.hide();

        // FCM (start)
        this.fcm.getToken().then(token => {
          console.log(token);
         // alert("get token2 : " + token);
          this.devicetoken = token;
          this._global.devicetoken = token;

          this.getFromStorage();
        });
        this.fcm.onTokenRefresh().subscribe(token => {
          console.log(token);
          //alert("refresh token : " + token);
        });

        this.fcm.onNotification().subscribe(data => {
          console.log(data);
          
          if (data.wasTapped) {
              console.log('Received in background');
              //alert('Received in background');
              var page = data.landing_page;
              var requestid = data.requestid;
              var userrole = data.userrole;
              var type = data.type;

            // alert("page : " + page + ", request: " + requestid + ", role : " + userrole + ", type : " + type);

              // Staff
              if(this._global.userrole == userrole && userrole == 2){

                  if(type == "Food"){
                      this.router.navigateByUrl('/foodrequest/'+requestid+"/1");
                  }
                  if(type == "Essentials"){
                      this.router.navigateByUrl('/essentialsrequest/'+requestid+"/1");
                  }
                  if(type == "Childcare"){
                      this.router.navigateByUrl('/childcarerequest/'+requestid+"/1");
                  }
                  
              }

              // Helper
              if(this._global.userrole == userrole && userrole == 3){

                  if(type == "Food"){
                      this.router.navigateByUrl('/foodrequestdetails/'+requestid+"/1");
                  }
                  if(type == "Essentials"){
                      this.router.navigateByUrl('/essentialsrequestdetails/'+requestid+"/1");
                  }
                  if(type == "Childcare"){
                      this.router.navigateByUrl('/childcarerequestdetails/'+requestid+"/1");
                  }
                  
              }

              if(this._global.userrole != 2 && this._global.userrole != 3){
                  this.nrequestType = type;
                  this.nrequestid = requestid;
                  this.nrequestuserrole = userrole;
              }
              
          } else {
              this.notifycount = Number(this.notifycount) + 1;
            
              this.router.navigate([data.landing_page, data.price]);
          }
        });

        this.fcm.subscribeToTopic('people');
        this.fcm.unsubscribeFromTopic('marketing');
        // FCM (end)
      });

    }

    ngOnInit() {
      const path = window.location.pathname.split('folder/')[1];
      console.log('called');
      if (path !== undefined) {
        this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
      }

    }

    loginmenu(){
        this.appPages = this.loginmenu_arr;
        this.selectedIndex = 1;
        this.menutype = 1;
    }
    staffmenu(){
      
      this.appPages = this.staffmenu_arr;
      this.selectedIndex = 2;
      this.menutype = 2;
    }
    helpermenu(){
      
      this.appPages = this.helpermenu_arr;
      this.selectedIndex = 2;
      this.menutype = 3;
    }
    staffmenunologin(){
      
      this.appPages = this.staffmenunologin_arr;
      this.selectedIndex = 2;
      this.menutype = 2;
    }
    helpermenunologin(){
      
      this.appPages = this.helpermenunologin_arr;
      this.selectedIndex = 2;
      this.menutype = 3;
    }

    addNameEmailtoMenu(name,email){
      this.userfullname = name;
      this.useremail = email;
    }

    switchusertype(){

        if(this._global.userrole == 2){

           console.log("switch user type2 : " + this._global.userrole);
          this._global.userrole = 3;

          if(this._global.userid > 0)
              this.helpermenu();
          else
              this.helpermenunologin();
          this.router.navigateByUrl('/searchhospitals');
        }else{

           console.log("switch user type3 : " + this._global.userrole);
          this._global.userrole = 2;

          if(this._global.userid > 0)
              this.staffmenu();
          else
              this.staffmenunologin();
          this.router.navigateByUrl('/requests');
        }
    }

    logout(){

        clearInterval(this._global.stafftimer);
        clearInterval(this._global.helpertimer);

        // Delete user token (start)
        var token = this._global.token;
        var userid = this._global.userid;

        const httpOptions = {
          headers: new HttpHeaders({
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + token
          })
        };

        this.httpClient.post(this._global.domainURL + "logout",{
              "userid": userid
        },httpOptions)
        .subscribe(
            (val:any) => {

              console.log('response : ' + JSON.stringify(val) );
            },
            response => {
                console.log("Get call in error", response);
            },
            () => {
                console.log("The Get observable is now completed.");
            });
        // Delete user token (end)
      
        this._global.token = '';
        this._global.userFullname = '';
        this._global.userrole = 0;
        this._global.userrole2 = 0;
        this._global.username = '';
        this._global.userid = 0;
        this.userfullname = "";
        this.useremail = "";

        this.nrequestType = "";
        this.nrequestid = 0;
        this.nrequestuserrole = 0;

        this._global.clearStorage();
        this.appPages = this.loginmenu_arr;
        this.selectedIndex = 0;
        this.router.navigateByUrl('/login/0');

    }

    shareApp(){
      
      var appurl = "https://helpournhs.com/apk/app-debug.apk";
      this.socialSharing.share("","","",appurl).then(()=>{
      
      });
    }

    openLoginType(){
        this.menuCtrl.toggle();
        this.router.navigateByUrl('/logintype');
    }
    
    donate(){
    /*  this.payPal.init({
        PayPalEnvironmentProduction: 'YOUR_PRODUCTION_CLIENT_ID',
        PayPalEnvironmentSandbox: 'AVfi-myUc69mMKAX12e_MpnMsUtxnqtLLrDf-Kfq_Icks0GupuafgKV39iKsUdPcKY8Bbxb8TAtXu5kL'
      }).then(() => {
        // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
        this.payPal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({
          // Only needed if you get an "Internal Service Error" after PayPal login!
          //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
        })).then(() => {
          let payment = new PayPalPayment('3.33', 'USD', 'Description', 'sale');
          this.payPal.renderSinglePaymentUI(payment).then(() => {
                //
                // Alert message (start)
                let alert = this.alertCtrl.create({
                    
                    message: 'Successfully donated',
                    buttons: ['OK']
                });
                alert.then((_alert: any)=> {
                      _alert.present();
                  }) 
                  // Alert message (end)
            // Successfully paid

            // Example sandbox response
            //
            // {
            //   "client": {
            //     "environment": "sandbox",
            //     "product_name": "PayPal iOS SDK",
            //     "paypal_sdk_version": "2.16.0",
            //     "platform": "iOS"
            //   },
            //   "response_type": "payment",
            //   "response": {
            //     "id": "PAY-1AB23456CD789012EF34GHIJ",
            //     "state": "approved",
            //     "create_time": "2016-10-03T13:33:33Z",
            //     "intent": "sale"
            //   }
            // }
          }, () => {
            // Error or render dialog closed without being successful
          });
        }, () => {
          // Error in configuration
        });
      }, () => {
        // Error in initialization, maybe PayPal isn't supported or something else
      }); */
    } 

    checklogin(email,password){
        
       
        this.httpClient.post(this._global.domainURL+"login",{
            "email": email,
            "password": password,
            "type": 2,
            "devicetoken": this.devicetoken
        })
        .subscribe(
            (val:any) => {
              console.log('success : ' + JSON.stringify(val));

              if(!val.data.success){
                console.log('data : ' + val.success + ' - yo');
                
              }else{
                this._global.token = val.data.token;
                this._global.userid = val.data.userid;
                this._global.userFullname = val.data.name;
                this._global.userrole = val.data.role;
                this._global.userrole2 = val.data.role;

                this.addNameEmailtoMenu(val.data.name,val.data.email);
                
                // Notification count
                this.notifycount = val.data.countnotification;
                
              //  alert("requestid : " + this.nrequestid + ", role : " + this.nrequestuserrole + ", type : " + this.nrequestType);
                if(this.nrequestid > 0 && this.nrequestuserrole == this._global.userrole){
                   
                    var requestid = this.nrequestid;

                    var rtype = this.nrequestType;
            

                    // Staff
                    if(this._global.userrole == 2){
                        this.staffmenu();
                        if(rtype == "Food"){
                            this.router.navigateByUrl('/foodrequest/'+requestid+"/1");
                        }
                        if(rtype == "Essentials"){
                            this.router.navigateByUrl('/essentialsrequest/'+requestid+"/1");
                        }
                        if(rtype == "Childcare"){
                            this.router.navigateByUrl('/childcarerequest/'+requestid+"/1");
                        }
                        
                    }

                    // Helper
                    if(this._global.userrole == 3){
                        this.helpermenu();
                        if(rtype == "Food"){
                            this.router.navigateByUrl('/foodrequestdetails/'+requestid+"/1");
                        }
                        if(rtype == "Essentials"){
                            this.router.navigateByUrl('/essentialsrequestdetails/'+requestid+"/1");
                        }
                        if(rtype == "Childcare"){
                            this.router.navigateByUrl('/childcarerequestdetails/'+requestid+"/1");
                        }
                        
                    }

                }else{
                    if(val.data.role == 2){
                        this.staffmenu();
                      
                        this.router.navigateByUrl('/requests');
                    }else{
                        this.helpermenu();
                        this.router.navigateByUrl('/searchhospitals');
                    }
                }
                
                                
              } 
          
        },
        response => {
              //alert("POST call in error"+ JSON.stringify(response) );
          console.log("POST call in error", response);
                    
        },
        () => {
            //alert("The POST observable is now completed.");
            console.log("The POST observable is now completed.");
        });
    
    }
}
