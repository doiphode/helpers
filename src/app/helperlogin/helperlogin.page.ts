import { Component, OnInit } from '@angular/core';
import {AlertController, MenuController, LoadingController } from "@ionic/angular";
import { GlobalService } from '../global.service';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';
import {AppComponent} from '../app.component';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-helperlogin',
  templateUrl: './helperlogin.page.html',
  styleUrls: ['./helperlogin.page.scss'],
})
export class HelperloginPage implements OnInit {
	public lat: any='';
    public lng: any='';
    
  public hidden1 = true;
	public login_email: any='helper1@welkinsystems.co.in';
	public login_password: any='Password@123';

  	constructor(private alertCtrl: AlertController,public menuCtrl: 	MenuController,private router: Router,private _global: GlobalService,private httpClient:HttpClient,public loadingController:LoadingController,public myapp: AppComponent,private geolocation: Geolocation) {
  		this.menuCtrl.enable(true);
  		this._global.getCurrentPosition();
  		this.lat = this._global.lat;
  		this.lng = this._global.lng;
  	}
  	getlocation(){
  		this._global.getCurrentPosition();
  		this.lat = this._global.lat;
  		this.lng = this._global.lng;
  	}
  	ngOnInit() {
  		console.log('domain Url : ' + this._global.domainURL);
  	}

  	
  	// Login user
  	loginUser(){

  		console.log("clicked");
	  	if( (this.login_email !='' && this.login_email != undefined) && (this.login_password !='' && this.login_password != undefined) ){
	  		// Start loader
  			this._global.startWaitMessage(this,1);

   			console.log('email : ' + this.login_email+ ', password : ' + this.login_password);

   		
		    this.httpClient.post(this._global.domainURL+"login",{
		        "email": this.login_email,
		        "password": this.login_password,
		        "type": 3,
		        "devicetoken": this._global.devicetoken
		    })
		    .subscribe(
		        (val:any) => {
		        	console.log('success : ' + JSON.stringify(val));

		        	// Stop loader
		        	this._global.stopWaitMessage(this);

		        	if(!val.data.success){
		        		console.log('data : ' + val.success + ' - yo');
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

						// Save key to storage 
						this._global.saveToStorage(this.login_email,this.login_password,val.data.role);
						
						this.myapp.addNameEmailtoMenu(val.data.name,this.login_email);

						this.myapp.helpermenu();
						this.router.navigateByUrl('/searchhospitals');
						
			            console.log("POST call successful value returned in body",val.data.token);
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
  		this.router.navigateByUrl('/register');
  	}

  	// Forgot password
  	openForgotPassword(){
  		this.router.navigateByUrl('/forgotpwd');
  	}
}
