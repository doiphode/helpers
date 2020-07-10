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
  selector: 'app-foodrequest',
  templateUrl: './foodrequest.page.html',
  styleUrls: ['./foodrequest.page.scss'],
})
export class FoodrequestPage implements OnInit {
    @ViewChild(IonInfiniteScroll,{static: false}) infiniteScroll: IonInfiniteScroll;
    public id = "";
    public view: any= 0;
    public request: any= 0;

    public submitlabel = "Submit";

    public status: any= 0;
    public otherrequest = "";
    public readymeal = "";
    public isSubmitted = 0;
    public edit = 1;
    public checked = false;

    public feedback = "";
    public hiddenfeedback = true;
    public hiddenitems = true;
    public expire = true;

    public hiddenviewhelperdetails = true;
    public hiddenhelper = true;
    public hiddennotifications = true;
    public notificationList: any=[];
    public hname: any= "";
    public hemail: any= "";
    public request_date: any= "";
    public hcontactno: any= "";

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
    public selectedArray: any=[];
    public start :number = 0;

    public requestDate: any='';
    public requestminDate: any='';
    public requestmaxDate: any='';
    public requestTime: any='';
    public disablrequestDate = false;
    public disablrequestTime = false;

  	constructor(private alertCtrl: AlertController,
      public menuCtrl:  MenuController,
      private router: Router,
      private _global: GlobalService,
      private httpClient:HttpClient,
      public loadingController:LoadingController,
      private activatedRoute: ActivatedRoute,
      public myapp: AppComponent,
      public androidPermissions: AndroidPermissions,
      private sms: SMS
      ) {
      this.menuCtrl.enable(true);
        console.log("construct");
    }

  	ngOnInit() {
        this.id = this.activatedRoute.snapshot.paramMap.get('id');
        this.view = this.activatedRoute.snapshot.paramMap.get('view');
        this.request = this.activatedRoute.snapshot.paramMap.get('request');
        this.getProductsList(this.infiniteScroll);
  	}

    ionViewDidEnter(){
        this.myapp.aboutmenu = 0;

        this.id = this.activatedRoute.snapshot.paramMap.get('id');
        this.view = this.activatedRoute.snapshot.paramMap.get('view');
        this.request = this.activatedRoute.snapshot.paramMap.get('request');

        if(this.request == 1){
            this.submitlabel = "Back";
        }
        console.log("date : " + this._global.currentDate());
        this.requestDate = this._global.currentDate();
        this.requestminDate = this._global.currentDate();
        this.requestmaxDate = this._global.maxDate();
    }
    
  	selectOther(){
  		console.log("clicked");
  		this.hiddenotheritems = !this.checkother;
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
        if(this._global.userid > 0 && this._global.userrole == this._global.userrole2){

            this.httpClient.post(this._global.domainURL+"items",{
                "type": 1,
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

                        //this.productsList = this.productsList.concat(val.data.products);
                        this.start = val.data.lastid;
                        this.expire = val.data.expire;
                        this.status = val.data.status;
                        this.notificationList = val.data.notifications;
                        console.log('response : ' + JSON.stringify(val.data.readymeal) );

                        this.readymeal = val.data.readymeal;
                        this.requestDate = val.data.rdate;
                        this.requestTime = val.data.rtime;
                        if(this.readymeal != ''){
                            //this.disablereadymeal = true;
                        }
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

                        if(val.data.status > 0){
                            this.hiddenrequestcancel = false;
                        }
                        
                        if(this.view > 0 && val.data.status > 0){
                            this.hiddenviewhelperdetails = false;
                            this.hname = val.data.name;
                            this.request_date = val.data.requestdate;
                            this.hemail = val.data.email;
                            this.hcontactno = val.data.contact;
                        }
                        if(val.data.status == 1){
                       
                            this.hiddenreviewbutton = true;
                            this.disablereadymeal = true;
                            this.disablrequestDate = true;
                            this.disablrequestTime = true;
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
                                this.disablereadymeal = true;
                                this.disablrequestDate = true;
                                this.disablrequestTime = true;
                                for(var i=0;i<this.productsList.length;i++){
                                  this.productsList[i]['disabled'] = true;
                                }
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
          }else{
              this.expire = false;
              this.hiddenreviewbutton = false;
          }
    }


    loadMore(infiniteScroll) {
      
      this.getProductsList(infiniteScroll);
     
      infiniteScroll.target.disabled = true;
      
    }

    requestItems(){

      if(this.readymeal.trim() != ''){
          this.hiddenreviewbutton = true;
          this.hiddeneditsubmit = false;

          this.disableother = true;
          this.disablereadymeal = true;
          this.disablrequestDate = true;
          this.disablrequestTime = true;
          for(var i=0;i<this.productsList.length;i++){
            this.productsList[i]['disabled'] = true;
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
                     
              message: "Please enter a item.",
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

      this.disableother = false;
      this.disablereadymeal = false;
      this.disablrequestDate = false;
      this.disablrequestTime = false;
      for(var i=0;i<this.productsList.length;i++){
        this.productsList[i]['disabled'] = false;
      }
    }

    submitRequest(){
        var selectedProducts = new Array();
        var selectedProductsIndex = new Array();
        var sendrequest = 0;

        if(this._global.userid > 0 && this._global.userrole == this._global.userrole2){
          for(var i=0;i<this.productsList.length;i++){

              if(this.productsList[i]['checked'] == true){
                selectedProducts.push(this.productsList[i]['id']);
                selectedProductsIndex.push(i);
              }
          
          }

          if(this.readymeal.trim() == ''){
              // Alert message (start)
                  let alert = this.alertCtrl.create({
                     
                      message: "Please enter ready meal",
                      buttons: ['OK']
                  });
                  alert.then((_alert: any)=> {
                        _alert.present();
                  })
                  // Alert message (end)
          }else{
              sendrequest = 1;
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
                  this._global.domainURL+"submitFoodRequest",{
                  "id": this.id,
                  "nhs_staff_id": this._global.userid,
                  "item_ids": selectedProducts,
                  "otheritem": this.otherrequest,
                  "ready_meal": this.readymeal,
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
                        console.log('data : ' + val.success);

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
            this._global.domainURL+"cancelFoodRequest",{
            "nhs_staff_id": this._global.userid,
            "id": this.id
        },httpOptions)
        .subscribe(
            (val:any) => {
                console.log('success : ' + JSON.stringify(val));

                var message = val.message;

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
                this._global.domainURL+"foodFeedback",{
                "id": this.id,
                "feedback": feedback,
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
                this.router.navigateByUrl('/login/1');
            }
          }
        ]
      });

      await alert.present();
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
                  "type": "Food"
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
