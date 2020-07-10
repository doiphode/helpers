import { Component, OnInit } from '@angular/core';
import {AlertController, MenuController, LoadingController } from "@ionic/angular";
import { GlobalService } from '../global.service';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';
import {AppComponent} from '../app.component';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { ActivatedRoute } from '@angular/router';

import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { SMS,SmsOptions } from '@ionic-native/sms/ngx';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
	public hidden1 = true;
	//public login_email: any='staff1@welkinsystems.co.in';
	//public login_password: any='Password@123';

	public login_email: any='';
	public login_password: any='';
 
 
	public id: any=0;

	public lat: any='';
    public lng: any='';
//
  	constructor(private alertCtrl: AlertController,
  		public menuCtrl: MenuController,
  		private router: Router,
  		private _global: GlobalService,
  		private httpClient:HttpClient,
  		public loadingController:LoadingController,
  		public myapp: AppComponent,
  		private geolocation: Geolocation,
  		private nativeStorage: NativeStorage,
  		private activatedRoute: ActivatedRoute,
  		public androidPermissions: AndroidPermissions,
  		private sms: SMS
  		) {
  		this.menuCtrl.enable(true);
  		
  		this._global.getCurrentPosition();
  		this.lat = this._global.lat;
  		this.lng = this._global.lng;
  		this.myapp.staffmenu();
  	}

  	ionViewDidEnter(){
  		this.id = this.activatedRoute.snapshot.paramMap.get('id');
  		this.myapp.aboutmenu = 0;
  		this.myapp.loginmenu();
  	}
  	getlocation(){
  		this._global.getCurrentPosition();
  		this.lat = this._global.lat;
  		this.lng = this._global.lng;
  	}
    getCurrentPosition(){
      
      this.geolocation.getCurrentPosition(
        {maximumAge: 20000, timeout: 5000,
         enableHighAccuracy: true }
        ).then((resp) => {
            // resp.coords.latitude
            // resp.coords.longitude
           
            console.log("success" + JSON.stringify( resp.coords));

            this.lat=resp.coords.latitude;
            this.lng=resp.coords.longitude;
        },er=>{
            //alert("error getting location")
            console.log('Can not retrieve Location')
        }).catch((error) => {
              //alert('Error getting location'+JSON.stringify(error));
              console.log('Error getting location - '+JSON.stringify(error))
              }
        );  
    }


  	ngOnInit() {
  		
  		
  	}

  	// Login user
  	loginUser(){
  		this.getCurrentPosition();
  		
	  	if( (this.login_email !='' && this.login_email != undefined) && (this.login_password !='' && this.login_password != undefined) ){
	  		// Start loader
  			this._global.startWaitMessage(this,1);
   		
		    this.httpClient.post(this._global.domainURL+"login",{
		        "email": this.login_email,
		        "password": this.login_password,
		        "type": 2,
		        "devicetoken": this._global.devicetoken
		    })
		    .subscribe(
		        (val:any) => {
		        	//console.log('success : ' + JSON.stringify(val));

		        	// Stop loader
		        	this._global.stopWaitMessage(this);

		        	if(!val.data.success){
		        		
		        		// Alert message (start)
				  		let alert = this.alertCtrl.create({
						   
						    message: val.data,
						    buttons: ['OK']
						});
						alert.then((_alert: any)=> {
					        _alert.present();
					    })
					    // Alert message (end)
					}else{
						this._global.token = val.data.token;
						this._global.userid = val.data.userid;
						this._global.userFullname = val.data.name;
						this._global.userrole = val.data.role;
						this._global.userrole2 = val.data.role;
						this._global.enablenotification = val.data.notification;
						this._global.enablenearby = val.data.nearby;

						// Save key to storage 
						this._global.saveToStorage(this.login_email,this.login_password,val.data.role);

						this.myapp.addNameEmailtoMenu(val.data.name,this.login_email);
						
						// Notification count
						this.myapp.notifycount = val.data.countnotification;
						
						if(this.id > 0){
							var id = this.id;
							if(id == 1){
								if(this._global.userrole == 2){
				                    this.myapp.staffmenu();
				                  
				                    this.router.navigateByUrl('/foodrequest/0/0');
				                }
							}
							if(id == 2){
								if(this._global.userrole == 2){
				                    this.myapp.staffmenu();
				                  
				                    this.router.navigateByUrl('/essentialsrequest/0/0');
				                }
							}
							if(id == 3){
								if(this._global.userrole == 2){
				                    this.myapp.staffmenu();
				                  
				                    this.router.navigateByUrl('/childcarerequest/0/0');
				                }
							}

						}else{
							if(this._global.userrole == 2){
			                    this.myapp.staffmenu();
			                  
			                    this.router.navigateByUrl('/requests');
			                }else{
			                    this.myapp.helpermenu();
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
		
	  		
	  	}else{

	  		// Alert message (start)
	  		let alert = this.alertCtrl.create({
			    
			    message: 'Please enter Email-ID and Password',
			    buttons: ['OK']
			});
			alert.then((_alert: any)=> {
		        _alert.present();
		    }) 
		    // Alert message (end)
	  	}
  	
  	}

  	// Open register page
  	openRegisterPage(){
  		this.router.navigateByUrl('/register/'+this.id);
  	}

  	// Forgot password
  	openForgotPassword(){
  		this.router.navigateByUrl('/forgotpwd');
  	}


    contactstaff(){

    	alert("clicked");
        	
  		this._global.sendSMS("9479541927","Req. 1");

	
    }
}
