import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import {AlertController, MenuController, LoadingController,IonInfiniteScroll  } from "@ionic/angular";
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';
import {AppComponent} from '../../app.component';
import { GlobalService } from '../../global.service';
import { ActivatedRoute } from '@angular/router';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { SMS,SmsOptions } from '@ionic-native/sms/ngx';

@Component({
  selector: 'app-essentialsrequest',
  templateUrl: './essentialsrequest.page.html',
  styleUrls: ['./essentialsrequest.page.scss'],
})
export class EssentialsrequestPage implements OnInit {
    @ViewChild(IonInfiniteScroll,{static: false}) infiniteScroll: IonInfiniteScroll;

    public id = "";
    public view: any= 0;
    public request: any= 0;

    public submitlabel = "Submit";

    public status: any= 0;
    public otherrequest = "";
    public readymeal = "";
    public isSubmitted = 0;
    public expire = true;
    public checked = false;

    public hiddenviewhelperdetails = true;
    public hiddenhelper = true;
    public hiddennotifications = true;
    public notificationList: any=[];
    public hname: any= "";
    public hemail: any= "";
    public request_date: any= "";
    public hcontactno: any= "";

    public edit = 1;
    public feedback = "";
    public hiddenfeedback = true;
    
    public hiddenotheritems = true;
    public hiddenreviewbutton = true;
    public hiddeneditsubmit = true;
    public hiddenrequestsubmit = true;
    public hiddenrepostrequest = true;
    public hiddenrequestcancel = true;
    public checkother = false;

    public disableother = false;
    public disablereadymeal = false;

    public productsList: any=[];
    public categoryList: any=[];
    public selectedArray: any=[];
    public start :number = 0;

    public requestDate: any='';
    public requestminDate: any='';
    public requestmaxDate: any='';
    public requestTime: any='';
    public disablrequestDate = false;
    public disablrequestTime = false;

    constructor(private alertCtrl: AlertController,public menuCtrl:  MenuController,private router: Router,private _global: GlobalService,private httpClient:HttpClient,public loadingController:LoadingController,private activatedRoute: ActivatedRoute,public myapp: AppComponent,public androidPermissions: AndroidPermissions,
      private sms: SMS) {
      //this.menuCtrl.enable(false);
        console.log("construct");
    }

    ngOnInit() {
        this.id = this.activatedRoute.snapshot.paramMap.get('id');
        this.view = this.activatedRoute.snapshot.paramMap.get('view');
        this.request = this.activatedRoute.snapshot.paramMap.get('request');
        //this.getProductsList(this.infiniteScroll);

        this.getCategory();
    }

    ionViewDidEnter(){
        this.myapp.aboutmenu = 0;

        this.request = this.activatedRoute.snapshot.paramMap.get('request');

        if(this.request == 1){
            this.submitlabel = "Back";
        }

        this.requestDate = this._global.currentDate();
        this.requestminDate = this._global.currentDate();
        this.requestmaxDate = this._global.maxDate();
    }

    selectOther(){
      console.log("clicked");
      this.hiddenotheritems = !this.checkother;
    }

    getCategory(){
        var token = this._global.token; 
      
        console.log('token : ' + token);
        var userid = this._global.userid;
        
        const httpOptions = {
          headers: new HttpHeaders({
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + token
          })
        };

        this.httpClient.post(this._global.domainURL+"getEssentialCategory",{
            "userid": userid,
            "id": this.id
        },httpOptions)
        .subscribe(
          (val:any) => {
       
            if (typeof val.data != "undefined") {
                
                // Notification count
                this.myapp.notifycount = val.data.countnotification;
               
                this.categoryList = val.data.category;
                this.expire = val.data.expire;
                this.status = val.data.status;

                this.notificationList = val.data.notifications;

                if(val.data.isSubmitted == 1){
                    this.isSubmitted = val.data.isSubmitted;
                    this.requestDate = val.data.rdate;
                    this.requestTime = val.data.rtime;
                } 

                if(this.view > 0 && val.data.status > 0){
                    this.hiddenviewhelperdetails = false;
                    this.hname = val.data.name;
                    this.request_date = val.data.requestdate;
                    this.hemail = val.data.email;
                    this.hcontactno = val.data.contact;
                }
                
                    if(val.data.status == 0){
                        this.hiddenreviewbutton = false;
                        this.hiddenfeedback = true;
                    }
                    
                    if(val.data.status == 1){
                        this.disablrequestDate = true;
                        this.disablrequestTime = true;
                        this.hiddenreviewbutton = true;
                        for(var i=0;i<this.categoryList.length;i++){
                          this.categoryList[i]['disabled'] = true;
                        }
                    }
                    if(val.data.status == 2){
                        if(val.data.edit == 0){
                            this.feedback = val.data.feedback;
                            this.hiddenreviewbutton = true;
                            this.hiddenfeedback = false;
                            this.disablereadymeal = true;
                            this.disablrequestDate = true;                            
                            for(var i=0;i<this.categoryList.length;i++){
                              this.categoryList[i]['disabled'] = true;
                            }
                        }
                    }
                    
                    if(this.view == 2){
                        this.hiddennotifications = false;
                    }

                    if(this.view > 0){
                        this.requestItems();
                    }else{
                        this.hiddenreviewbutton = false;
                    }  
        
            }  
            
          },
          response => {

              console.log("Get call in error", response);
          },
          () => {
              console.log("The Get observable is now completed.");
          });
    }

    getProductsList(infiniteScroll){

        var token = this._global.token; 
      
        console.log('token : ' + token);
        var userid = this._global.userid;
        
        const httpOptions = {
          headers: new HttpHeaders({
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + token
          })
        };

        this.httpClient.post(this._global.domainURL+"items",{
            "type": 2,
            "start": this.start,
            "userid": userid,
            "id": this.id
        },httpOptions)
        .subscribe(
          (val:any) => {
       
            if (typeof val.data != "undefined") {
              
                if(val.data.lastid > 0){

                  // Notification count
                  this.myapp.notifycount = val.data.countnotification;

                  this.productsList = this.productsList.concat(val.data.products);
                  this.start = val.data.lastid;
                  
                    console.log('response : ' + JSON.stringify(val.data.readymeal) );

                    if(val.data.otherchecked == 1){
                        this.checkother = true;
                        //this.hiddenotheritems = false;
                        //this.disableother = true;
                        this.otherrequest = val.data.otheritem;
                    }

                    if(val.data.isSubmitted == 1){
                        this.isSubmitted = val.data.isSubmitted;
                    } 

                    if(val.data.status == 0){
                        this.hiddenreviewbutton = false;
                        this.hiddenfeedback = true;
                    }
                    if(val.data.status == 1){
                   
                        this.hiddenreviewbutton = true;
                       
                            this.disableother = true;
                            
                            for(var i=0;i<this.productsList.length;i++){
                              this.productsList[i]['disabled'] = true;
                            }
                    }
                    if(val.data.status == 2){
                        if(val.data.edit == 0){
                            this.feedback = val.data.feedback;
                            this.hiddenreviewbutton = true;
                            this.hiddenfeedback = false;
                            this.disableother = true;
                            
                            for(var i=0;i<this.productsList.length;i++){
                              this.productsList[i]['disabled'] = true;
                            }
                        }
                    }
                    
                }                
        
            }  
            if (infiniteScroll) {
              infiniteScroll.target.complete();
            }
          },
          response => {

              console.log("Get call in error", response);
          },
          () => {
              console.log("The Get observable is now completed.");
          });
    }


    loadMore(infiniteScroll) {
      
    //  this.getProductsList(infiniteScroll);
     
      infiniteScroll.target.disabled = true;
      
    }

    requestItems(){ 
      
      var count = 0;
      for(var i=0;i<this.categoryList.length;i++){
        if(this.categoryList[i]['text'].trim() != ''){
          count++;
        }
      }


      if(count > 0){
          console.log("request item");
          this.hiddenreviewbutton = true;
          this.hiddeneditsubmit = false;
          
          this.disableother = true;
          this.disablrequestDate = true;
          this.disablrequestTime = true;
          for(var i=0;i<this.productsList.length;i++){
            this.productsList[i]['disabled'] = true;
          }
          for(var i=0;i<this.categoryList.length;i++){
            this.categoryList[i]['disabled'] = true;
            if(this.categoryList[i]['text'] == ''){
              this.categoryList[i]['hidden'] = true;
            }
          }
          if(this.view > 0 && this.status > 0){
              this.hiddeneditsubmit = true;
              this.hiddenrepostrequest = true;
              this.hiddenrequestsubmit = true;

              this.hiddenrequestcancel = false;

              if(this.view == 2){
                this.hiddenhelper = true;
              }else{
                this.hiddenhelper = false;
              }
          }else{
              if(this.status > 0){
                  this.hiddenrequestcancel = false;
              }
              if(this.isSubmitted == 1){
            
                this.hiddenrequestcancel = false;
                
                if(this.expire){
                    this.hiddenrepostrequest = false;
                    this.hiddenrequestsubmit = true;
                }else{
                    this.hiddenrequestsubmit = false;
                    this.hiddenrepostrequest = true;
                }

              }else{
                
                this.hiddenrequestcancel = true;

                if(this.expire){
                    this.hiddenrepostrequest = false;
                    this.hiddenrequestsubmit = true;
                }else{
                    this.hiddenrequestsubmit = false;
                    this.hiddenrepostrequest = true;
                }
              }
          }
      }else{
          // Alert message (start)
          let alert = this.alertCtrl.create({       
              message: "Please enter a request",
              buttons: ['OK']
          });
          alert.then((_alert: any)=> {
              _alert.present();
          })
          // Alert message (end)
      }
            
    }

    editRequest(){
      this.hiddenreviewbutton = false;
      this.hiddeneditsubmit = true;
      
      this.hiddenrequestcancel = true;

      if(this.expire){
          this.hiddenrepostrequest = true;
          this.hiddenrequestsubmit = true;
      }else{
          this.hiddenrequestsubmit = true;
          this.hiddenrepostrequest = true;
      }

      this.disablrequestDate = false;
      this.disablrequestTime = false;

      this.disableother = false;
      for(var i=0;i<this.productsList.length;i++){
        this.productsList[i]['disabled'] = false;
      }

      for(var i=0;i<this.categoryList.length;i++){
        this.categoryList[i]['disabled'] = false;
        this.categoryList[i]['hidden'] = false;
      }
    }

    submitRequest(){
        var selectedProducts = new Array();
        var selectedProductsIndex = new Array();
        var sendrequest = 0;

        if(this._global.userid > 0 && this._global.userrole == this._global.userrole2){

          /*for(var i=0;i<this.productsList.length;i++){

              if(this.productsList[i]['checked'] == true){
                selectedProducts.push(this.productsList[i]['id']);
                selectedProductsIndex.push(i);
              }
          
          }

          if(selectedProducts.length == 0){
              sendrequest = 0;
              var otherrequest = this.otherrequest.trim();
              if(this.checkother && otherrequest != ''){
                  sendrequest = 1;
              }else{
                  // Alert message (start)
                  let alert = this.alertCtrl.create({
                     
                      message: "Please select a item.",
                      buttons: ['OK']
                  });
                  alert.then((_alert: any)=> {
                        _alert.present();
                  })
                  // Alert message (end)
              }
              
          }else{
              
              sendrequest = 1;

          } */

          var category_arr = new Array();
          var categoryval_arr = new Array();
          for(var i=0;i<this.categoryList.length;i++){
            var text = this.categoryList[i]['text'].trim();
            category_arr.push(this.categoryList[i]['id']);
            categoryval_arr.push(text);


              console.log("text : " + text);
            if(text != ''){
              sendrequest = 1;
            }
          }

          if(sendrequest == 1){
              console.log("Send request");

              // Send request
            
                console.log('clicked : ' + selectedProducts);

                const httpOptions = {
                    headers: new HttpHeaders({
                        'Accept': 'application/json',
                        'Authorization': 'Bearer ' + this._global.token
                    })
                };

                this.httpClient.post(   
                  this._global.domainURL+"submitEssentialRequest",{
                  "id": this.id,
                  "nhs_staff_id": this._global.userid,
                  "category_arr": category_arr,
                  "categoryval_arr": categoryval_arr,
                  "expire": this.expire,
                  "requestDate": this.requestDate,
                  "requestTime": this.requestTime,
                },httpOptions)
                .subscribe(
                  (val:any) => {
                      //console.log('success : ' + JSON.stringify(val));

                      // Notification count
                      this.myapp.notifycount = val.data.countnotification;

                      var message = val.message;

                      if(!val.success){
                        console.log('data : ' + val.success + ' - yo');

                      }else{
                          this.expire = false;
                          this.editRequest();
                          this.myapp.selectedIndex = 1;
                          this.router.navigateByUrl('/myrequests');
                      } 

                      if(this.submitlabel == "Submit")
                      this._global.showToast(message); // Send toast notification
                  },
                  response => {
                      //  alert("POST call in error"+ JSON.stringify(response) );
                      console.log("POST call in error", response);
                  },
                  () => {
                      //  alert("The POST observable is now completed.");
                      console.log("The POST observable is now completed.");
                  }
                );
          }else{
              // Alert message (start)
              let alert = this.alertCtrl.create({
                   
                  message: "Please enter a item.",
                  buttons: ['OK']
              });
              alert.then((_alert: any)=> {
                      _alert.present();
              })
              // Alert message (end)
          }
          console.log('selectedProducts : ' + JSON.stringify(selectedProducts) );
        }else{
          this.presentAlertConfirm();
        }
    }

    cancelRequest(){

        const httpOptions = {
            headers: new HttpHeaders({
              'Accept': 'application/json',
              'Authorization': 'Bearer ' + this._global.token
            })
        };

        this.httpClient.post(   
            this._global.domainURL+"cancelEssentialRequest",{
            "nhs_staff_id": this._global.userid,
            "id": this.id
        },httpOptions)
        .subscribe(
            (val:any) => {
                console.log('success : ' + JSON.stringify(val));

                var message = val.message;

                // Notification count
                this.myapp.notifycount = val.data.countnotification;

                if(!val.success){
                    console.log('data : ' + val.success + ' - yo');

                    }else{
                      this.router.navigateByUrl('/requests');
                    } 
                    this._global.showToast(message); // Send toast notification
                },
                response => {
                    //  alert("POST call in error"+ JSON.stringify(response) );
                    console.log("POST call in error", response);
                },
            () => {
                //  alert("The POST observable is now completed.");
                console.log("The POST observable is now completed.");
            }
        );

    }

    feedbackRequestItems(){
        var feedback = this.feedback.trim();

        if(feedback != ''){
            const httpOptions = {
                  headers: new HttpHeaders({
                      'Accept': 'application/json',
                      'Authorization': 'Bearer ' + this._global.token
                  })
              };

              this.httpClient.post(   
                this._global.domainURL+"essentialFeedback",{
                "id": this.id,
                "feedback": feedback,
              },httpOptions)
              .subscribe(
                (val:any) => {
                    console.log('success : ' + JSON.stringify(val));

                    // Notification count
                    this.myapp.notifycount = val.data.countnotification;
                    
                    var message = val.message;

                    if(!val.success){
                      console.log('data : ' + val.success + ' - yo');

                    }else{

               
                    } 
                    this._global.showToast(message); // Send toast notification
                },
                response => {
                    //  alert("POST call in error"+ JSON.stringify(response) );
                    console.log("POST call in error", response);
                },
                () => {
                    //  alert("The POST observable is now completed.");
                    console.log("The POST observable is now completed.");
                }
            );
        }else{
            // Alert message (start)
            let alert = this.alertCtrl.create({
                message: "Please enter feedback.",
                buttons: ['OK']
            });
            alert.then((_alert: any)=> {
                      _alert.present();
            })
            // Alert message (end)
        }
    }

    async presentAlertConfirm() {
      const alert = await this.alertCtrl.create({
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
                this.router.navigateByUrl('/login/2');
            }
          }
        ]
      });

      await alert.present();
    }

    expandCategory(index){
      this.categoryList[index]['expand'] = !this.categoryList[index]['expand'];
    }

    receivedRequest(){

        if(this.status == 1 && this.checked)
        this.presentReceiveAlertConfirm(this.id);
    }

    async presentReceiveAlertConfirm(id) {

      const alert = await this.alertCtrl.create({
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
                  headers: new HttpHeaders({
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + token
                  })
              };

              this.httpClient.post(this._global.domainURL+"requestReceived",{
                  "userid": userid,
                  "id": id,
                  "type": "Essentials"
              },httpOptions)
              .subscribe(
                  (val:any) => {
             
                    if (typeof val.data != "undefined") {
                        var message = val.message;

                        // Notification count
                        this.myapp.notifycount = val.data.countnotification;

                        this._global.showToast(message); // Send toast notification                
                       
                        
                    }

                  },
                  response => {
                      console.log("Get call in error", response);
                  },
                  () => {
                      console.log("The Get observable is now completed.");
                }
              );
            }
          }
        ]
      });

      await alert.present();
    }

    contactstaff(){
        this._global.sendSMS(this.hcontactno, 'Req. ' + this.id+': ');
    }
}
