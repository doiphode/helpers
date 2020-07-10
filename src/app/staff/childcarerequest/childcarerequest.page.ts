import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import {AlertController, MenuController, LoadingController,IonInfiniteScroll  } from "@ionic/angular";
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';
import { GlobalService } from '../../global.service';
import { ActivatedRoute } from '@angular/router';
import {AppComponent} from '../../app.component';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { SMS,SmsOptions } from '@ionic-native/sms/ngx';

@Component({
  selector: 'app-childcarerequest',
  templateUrl: './childcarerequest.page.html',
  styleUrls: ['./childcarerequest.page.scss'],
})
export class ChildcarerequestPage implements OnInit {
    
    public id = "";
    public view: any= 0;
    public request: any= 0;

    public submitlabel = "Submit";

    public status: any= 0;
    public childname1 = "";
    public childage1 = 0;
    public childgender1 = "";
    public childname2 = "";
    public childage2 = 0;
    public childgender2 = "";
    public staff_notes = "";
    public staff_notes2 = "";

    public recurring1 = false;
    public recurring2 = false;
    public isSubmitted = 0;
    public expire = true;
    public edit = 1;
    public checked = false;

    public hiddenviewhelperdetails = true;
    public hiddenhelper = true;
    public hiddennotifications = true;
    public notificationList: any=[];
    public hname: any= "";
    public hemail: any= "";
    public request_date: any= "";
    public hcontactno: any= "";

    public feedback = "";
    public hiddenfeedback = true;

    public hiddenentryform = true;
    public hiddenviewform = true;
    public hiddenchildrow2 = true;
    public hiddenotheritems = true;
    public hiddenaddmore = false;
    public hiddenchild2 = true;

    public hiddendate = true;

    public hiddenreviewbutton = true;
    public hiddeneditsubmit = true;
    public hiddenrequestsubmit = true;
    public hiddenrepostrequest = true;
    public hiddenrequestcancel = true;

    public disablename1 = false;
    public disableage1 = false;
    public disablegender1 = false;
    public disablerecurring1 = false;
    public disablename2 = false;
    public disableage2 = false;
    public disablegender2 = false;
    public disablerecurring2 = false;
    public disablecomment = false;
    
    public requestDate: any='';
    public requestDate2: any='';
    public requestminDate: any='';
    public requestmaxDate: any='';
    public requestTime: any='';
    public disablrequestDate = false;
    public disablrequestTime = false;

	  public checkother = false;
    public childages1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
    public childages2 = this.childages1;
    public childdays1 = [
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
    public childdays2 = [
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
    
    public child1reviewdays = "";
    public child2reviewdays = "";
    public child1recurring = "No";
    public child2recurring = "No";

    constructor(private alertCtrl: AlertController,public menuCtrl:  MenuController,private router: Router,private _global: GlobalService,private httpClient:HttpClient,public loadingController:LoadingController,private activatedRoute: ActivatedRoute,public myapp: AppComponent,public androidPermissions: AndroidPermissions,
      private sms: SMS) {
      //this.menuCtrl.enable(false);
        console.log("construct");
    }

  	ngOnInit() {
        this.id = this.activatedRoute.snapshot.paramMap.get('id');
        this.view = this.activatedRoute.snapshot.paramMap.get('view');
        this.request = this.activatedRoute.snapshot.paramMap.get('request');
        this.getActiveRequest();
  	}

    ionViewDidEnter(){

        
        this.myapp.aboutmenu = 0;
        this.request = this.activatedRoute.snapshot.paramMap.get('request');

        if(this.request == 1){
            this.submitlabel = "Back";
        }
        if(this._global.userid == 0){
            this.hiddendate = false;
        }else{
            this.hiddendate = true;
        }

        this.requestDate = this._global.currentDate();
        this.requestminDate = this._global.currentDate();
        this.requestmaxDate = this._global.maxDate();
    }
    
    getActiveRequest(){
        
        if(this._global.userid > 0){

          var token = this._global.token; 
        
          console.log('token : ' + token);
          var userid = this._global.userid;
          
          const httpOptions = {
            headers: new HttpHeaders({
              'Accept': 'application/json',
              'Authorization': 'Bearer ' + token
            })
          };

          this.httpClient.post(this._global.domainURL+"childcareactiverequest",{
              "nhs_staff_id": userid,
              "id": this.id
          },httpOptions)
          .subscribe(
          (val:any) => {
            
            if (typeof val.data != "undefined") {
                this.hiddendate = false;
                console.log('response : ' + JSON.stringify(val.data) );
                this.status = val.data.status;

                // Notification count
                this.myapp.notifycount = val.data.countnotification;

                if(val.data.isSubmitted == 1){
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

                    if(val.data.child_one_recurring == 1){
                        this.recurring1 = true;
                    }
                    if(val.data.child_two_recurring == 1){
                        this.recurring2 = true;
                    }

                    if(this.view > 0 && val.data.status > 0){
                        this.hiddenviewhelperdetails = false;
                        this.hname = val.data.name;
                        this.request_date = val.data.requestdate;
                        this.hemail = val.data.email;
                        this.hcontactno = val.data.contact;
                    }

                    
                    if(val.data.status == 0 && this.childgender2.length > 2){
                        this.hiddenaddmore = true;
                    }else{
                        this.hiddenaddmore = false;
                    }

                    if(this.childgender2.length > 2){
                        this.hiddenchild2 = false;
                        this.hiddenaddmore = true;
                    }

                    

                    if(val.data.status > 0){
                        this.hiddenaddmore = false;
                    }


                    for(var i=0;i<this.childdays1.length;i++){

                        if(val.data.child_one_days.indexOf(this.childdays1[i]['num']) >= 0){
                          this.childdays1[i]['checked'] = true;
                        }else{
                          this.childdays1[i]['checked'] = false;
                        }
                    
                    }

                    for(var i=0;i<this.childdays2.length;i++){

                        if(val.data.child_two_days.indexOf(this.childdays2[i]['num']) >= 0){
                          this.childdays2[i]['checked'] = true;
                        }else{
                          this.childdays2[i]['checked'] = false;
                        }
                    
                    }

                    this.staff_notes = val.data.staff_notes;
                    if(this.staff_notes == '-'){
                        this.staff_notes = "";
                    }
                    if(val.data.status == 1){

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
                        for(var i=0;i<this.childdays1.length;i++){

                          this.childdays1[i]['disabled'] = true;
                            
                        }

                        for(var i=0;i<this.childdays2.length;i++){

                          this.childdays2[i]['disabled'] = true;
                            
                        }

                        this.disablecomment = true;
                    }

                    if(val.data.status == 2){
                        if(val.data.edit == 0){
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

                            for(var i=0;i<this.childdays1.length;i++){

                                this.childdays1[i]['disabled'] = true;
                            
                            }

                            for(var i=0;i<this.childdays2.length;i++){

                                this.childdays2[i]['disabled'] = true;
                            
                            }

                            this.disablecomment = true;
                        }
                    }

                    

                }else{
                    this.expire = val.data.expire;
                }
                this.isSubmitted = val.data.isSubmitted;    
                
                if(this.view == 2){
                    this.hiddennotifications = false;
                }

                if(this.view > 0){
                    this.hiddenentryform = true;
                    this.hiddenviewform = false;
                    this.requestItems();
                }else{
                    this.hiddenentryform = false; 
                    this.hiddenviewform = true; 
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
        }else{
          this.expire = false;
          this.hiddendate = false;
          this.hiddenentryform = false;
          this.hiddenreviewbutton = false;
        }
    }
    addmore(){
 
        var count = 0;
        for(var i=0;i<this.childdays1.length;i++){

            if(this.childdays1[i]['checked'] == true){
              count++;
            }
        
        }
       
        if(this.childgender1.trim() != '' && this.childage1 > 0 && count > 0){
            this.hiddenchild2 = false;

            this.hiddenaddmore = true;
        }else{
            // Alert message (start)
            let alert = this.alertCtrl.create({
                 
                  message: "Please fill child 1 details",
                  buttons: ['OK']
            });
            alert.then((_alert: any)=> {
                    _alert.present();
            })
            // Alert message (end)
        }
      
    }

    requestItems(){
      
      var selectedDays1 = new Array();
      var selectedDays2 = new Array();

      var count1 = 0;var count2 = 0; 
      for(var i=0;i<this.childdays1.length;i++){
        if(this.childdays1[i]['checked'] == true){

            if(this.childdays1[i]['name'] != 'Recurring'){
                selectedDays1.push(this.childdays1[i]['name2']);
            }
            
            count1++;
        }
        
      }

      if(this.recurring1){
          this.child1recurring = "Yes";
      }else{
          this.child1recurring = "No";
      }

      for(var i=0;i<this.childdays2.length;i++){
        if(this.childdays2[i]['checked'] == true){
        
            if(this.childdays2[i]['name'] != 'Recurring'){
                selectedDays2.push(this.childdays2[i]['name2']);
            }
            
            count2++;
        }
      
      }

      if(this.recurring2){
          this.child2recurring = "Yes";
      }else{
          this.child2recurring = "No";
      }
      
      this.child1reviewdays = selectedDays1.join(", ");
      this.child2reviewdays = selectedDays2.join(", ");

      var valid = false;
      if(count1 > 0 && this.childage1 > 0 && this.childgender1 != ''){
          valid = true;
      }

      console.log("count2 : " + count2 + ', age : ' + this.childage2 + ", gender : " + this.childgender2);
      if(count2 > 0 && this.childage2 > 0 && this.childgender2 != ''){
          this.hiddenchildrow2 = false;
      }else{
          this.hiddenchildrow2 = true;
      }
 
      if(valid){
          this.hiddendate = true;
          this.disablrequestDate = true;
          this.disablrequestTime = true;

          if(this.view > 0 && this.status > 0){
              this.hiddeneditsubmit = true;
              this.hiddenrepostrequest = true;
              this.hiddenrequestsubmit = true;
              this.hiddenrequestcancel = true;

              if(this.view == 2){
                this.hiddenhelper = true;
              }else{
                this.hiddenhelper = false;
              }
          }else{
              this.hiddenentryform = true;
              this.hiddenviewform = false;

              if(this.requestDate.length > 3){
                  var split_date = this.requestDate.split("-");
                  var dd = split_date[2];
                  var mm = split_date[1];
                  var yy = split_date[0];

                  this.requestDate2 = dd+"/"+mm+"/"+yy;
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

              for(var i=0;i<this.childdays1.length;i++){
                
                this.childdays1[i]['disabled'] = true;

              }
              for(var i=0;i<this.childdays2.length;i++){
               
                this.childdays2[i]['disabled'] = true;
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
                      console.log("expire");
                      this.hiddenrepostrequest = false;
                      this.hiddenrequestsubmit = true;
                  }else{
                      this.hiddenrequestsubmit = false;
                      this.hiddenrepostrequest = true;
                  }
              } 
          }

          if(this.status > 0){
             this.hiddenrequestcancel = false;
          }
          
      }else{
          // Alert message (start)
          let alert = this.alertCtrl.create({
                 
              message: "Please fill child 1 details",
              buttons: ['OK']
          });
          alert.then((_alert: any)=> {
              _alert.present();
          })
          // Alert message (end)
      }
      
    }

    editRequest(){
      this.hiddendate = false;
      this.hiddenentryform = false;
      this.hiddenviewform = true;

      if(!this.hiddenchild2){
        this.hiddenaddmore = true;
      }else{
        this.hiddenaddmore = false;
      }
      
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

      for(var i=0;i<this.childdays1.length;i++){

        this.childdays1[i]['disabled'] = false;
        this.childdays2[i]['disabled'] = false;
      }
    }

    submitRequest(){
        var selectedDays1 = new Array();
        var selectedDays2 = new Array();
     
        var sendrequest = 0;
        var child1Recurring = 0;
        var child2Recurring = 0;

        if(this._global.userid > 0 && this._global.userrole == this._global.userrole2){

            for(var i=0;i<this.childdays1.length;i++){

                if(this.childdays1[i]['checked'] == true){
                  selectedDays1.push(this.childdays1[i]['num']);

                }
            
            }

            if(this.recurring1){
                child1Recurring = 1;
            }

            if(this.childgender1.length > 2 && this.childage1 > 0){
              for(var i=0;i<this.childdays2.length;i++){

                if(this.childdays2[i]['checked'] == true){
                  selectedDays2.push(this.childdays2[i]['num']);
                
                }
            
              }
            }

            if(this.recurring2){
                child2Recurring = 1;
            }

            if(selectedDays1.length == 0){
                sendrequest = 0;
            }else{
                sendrequest = 1;
            }

            if(sendrequest == 1){
                console.log("Send request");

                // Send request
                const httpOptions = {
                   headers: new HttpHeaders({
                      'Accept': 'application/json',
                      'Authorization': 'Bearer ' + this._global.token
                   })
                };

                this.httpClient.post(   
                    this._global.domainURL+"submitChildcareRequest",{
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
                },httpOptions)
                  .subscribe(
                    (val:any) => {
                        //console.log('success : ' + JSON.stringify(val));

                        var message = val.message;
                        // Notification count
                        this.myapp.notifycount = val.data.countnotification;

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
            this._global.domainURL+"cancelChildcareRequest",{
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
                this.router.navigateByUrl('/login/3');
            }
          }
        ]
      });

      await alert.present();
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
                this._global.domainURL+"childCareFeedback",{
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
                  "type": "Childcare"
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
