import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import {AlertController, MenuController, LoadingController,IonInfiniteScroll  } from "@ionic/angular";
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';
import { GlobalService } from '../../global.service';
import {AppComponent} from '../../app.component';
import { ActivatedRoute } from '@angular/router';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { SMS,SmsOptions } from '@ionic-native/sms/ngx';

@Component({
  selector: 'app-foodrequestdetails',
  templateUrl: './foodrequestdetails.page.html',
  styleUrls: ['./foodrequestdetails.page.scss'],
})
export class FoodrequestdetailsPage implements OnInit {

  	public id = "";
    public view: any='';
    
  	public itemsList: any=[];
  	public otherchecked = true;
  	public otheritem = "";
  	public readymeal = "";

    public hiddenreviewrequest = false;

    public disableddateTime = true;
    public requestDate: any='';
    public requestminDate: any='';
    public requestmaxDate: any='';
    public requestTime: any='';

  	public name = "-";
  	public request_date = "-";
  	public hospitalname = "-";
  	public contactno = "-";
    public status: any=0;

    public helpcontactmsg: any="";
    

  	constructor(private alertCtrl: AlertController,public menuCtrl:  MenuController,private router: Router,private _global: GlobalService,private httpClient:HttpClient,
      public loadingController:LoadingController,
      private activatedRoute: ActivatedRoute,
      public myapp: AppComponent,
      public androidPermissions: AndroidPermissions,
      private sms: SMS) {
      	
        console.log("construct");
       
    }

  	ngOnInit() {
  		this.id = this.activatedRoute.snapshot.paramMap.get('id');
      this.view = this.activatedRoute.snapshot.paramMap.get('view');
  		this.getDetails();
  		console.log("id : " + this.id);
  	}

    ionViewDidEnter(){
        this.myapp.aboutmenu = 0;
        this.helpcontactmsg = this.myapp.helpcontactmsg;
        this.requestDate = this._global.currentDate();
        this.requestminDate = this._global.currentDate();
        this.requestmaxDate = this._global.maxDate();

        console.log("date : " + this._global.changeDateFormat(this.requestDate));
        
        this.requestDate = this._global.changeDateFormat(this.requestDate);

    }

  	getDetails(){
        
        if(this.view == 1){
          this.hiddenreviewrequest = true;
        }else{
          this.hiddenreviewrequest = false;
        }
  		  var token = this._global.token; 
        var userid = this._global.userid;
        
        const httpOptions = {
          	headers: new HttpHeaders({
            	'Accept': 'application/json',
            	'Authorization': 'Bearer ' + token
          	})
        };

        this.httpClient.post(this._global.domainURL+"foodRequestDetails",{
            "userid": userid,
            "id": this.id
        },httpOptions)
        .subscribe(
          	(val:any) => {
       
            	if (typeof val.data != "undefined") {
                  this.status = val.data.status;

                  if(this.status == 0){
                      this.disableddateTime = false;
                  }else{
                      this.disableddateTime = true;
                  }
                  // Notification count
                  this.myapp.notifycount = val.data.countnotification;

                	//if(val.data.status == 1){
                			
		                this.itemsList = val.data.items;
                    
		                if(val.data.otherchecked == 1){
		                	this.otherchecked = false;
		                	this.otheritem = val.data.otheritem;
		                }else{
		                	this.otherchecked = true;
		                }
		                this.otheritem = val.data.otheritem;
		                this.readymeal = val.data.readymeal;
                    this.requestDate = val.data.rdate;
                    this.requestTime = val.data.rtime;

                    this.requestDate = this._global.changeDateFormat(this.requestDate);


		                this.name = val.data.name;
		                this.request_date = val.data.requestdate;
		                this.hospitalname = val.data.hospital;
		                this.contactno = val.data.contact;

		                console.log('response : ' + JSON.stringify(val.data) );

                	//}                
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

    pickrequest(){
        this.presentAlertConfirm();
    }

    async presentAlertConfirm() {
      const alert = await this.alertCtrl.create({
        header: 'Please confirm...',
        message: 'Are you sure?',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
              console.log('Confirm Cancel: blah');
            }
          }, {
            text: 'Yes',
            handler: () => {
              console.log('Confirm Okay');
              var token = this._global.token; 
              var userid = this._global.userid;
              
              const httpOptions = {
                  headers: new HttpHeaders({
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + token
                  })
              };

              this.httpClient.post(this._global.domainURL+"pickfoodRequest",{
                  "userid": userid,
                  "id": this.id,
                  "requestDate": this.requestDate,
                  "requestTime": this.requestTime,
              },httpOptions)
              .subscribe(
                  (val:any) => {
             
                    if (typeof val.data != "undefined") {
                        var message = val.message;
                        this._global.showToast(message); // Send toast notification    

                        // Notification count
                        this.myapp.notifycount = val.data.countnotification;

                        if(val.data.success == 1){
                            this.router.navigateByUrl('/myhelplist');
                            console.log('response : ' + JSON.stringify(val.data) );

                        }
                        
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

    searchHospital(){
      this.router.navigateByUrl('/searchhospitals');
    }

    cancelrequest(){

        this.cancelAlertConfirm();

    }

    async cancelAlertConfirm() {
      const alert = await this.alertCtrl.create({
        header: 'Confirm!',
        message: 'Are you sure?',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
              console.log('Confirm Cancel: blah');
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

              this.httpClient.post(this._global.domainURL+"cancelrequest",{
                  "id": this.id
              },httpOptions)
              .subscribe(
                (val:any) => {
                   
                  if (typeof val.data != "undefined") {
                      var message = val.message;
                      this._global.showToast(message); // Send toast notification     

                      // Notification count
                      this.myapp.notifycount = val.data.countnotification;
                                 
                      if(val.data.success == 1){
                          this.router.navigateByUrl('/myhelplist');
                      }     
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
        this._global.sendSMS(this.contactno, 'Req. ' + this.id+': ');
    }

}
