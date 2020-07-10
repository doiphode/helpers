import { Component, OnInit } from '@angular/core';
import {AlertController, MenuController, LoadingController } from "@ionic/angular";
import { GlobalService } from '../global.service';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-forgotpwd',
  templateUrl: './forgotpwd.page.html',
  styleUrls: ['./forgotpwd.page.scss'],
})
export class ForgotpwdPage implements OnInit {
	
	public forgot_email = "";
	public code: any='';
	public verifycode: any='';
	public newpassword: any='';

	public hiddencode = true;
	public hiddenenteremail = false;
	public hiddenentercode = true;
	public hiddenenterpwd = true;
	public disablesubmit = false;

  	constructor(private alertCtrl: AlertController,public menuCtrl: 	MenuController,private router: Router,private _global: GlobalService,private httpClient:HttpClient,public loadingController:LoadingController,public myapp: AppComponent) {
  		this.menuCtrl.enable(true);
  	}

  	ngOnInit() {
  	}

  	ionViewDidEnter(){
  		this.myapp.aboutmenu = 0;
  	}

  	sendEmail(){

  		this.getCode(10); // Get code

  		var email = this.forgot_email.trim();

  		console.log("email : " + email);
  		var isvalid = true;

  		if(email == ''){
  			isvalid = false;
  			// Alert message (start)
			let alert = this.alertCtrl.create({
				message: "Please enter email",
				buttons: ['OK']
			});
			alert.then((_alert: any)=> {
				_alert.present();
			})
			// Alert message (end)

  		}

  		if(isvalid && !this._global.validateEmail(email)){
  			isvalid = false;

  			// Alert message (start)
			let alert = this.alertCtrl.create({
				message: "Enter valid email-id",
				buttons: ['OK']
			});
			alert.then((_alert: any)=> {
				_alert.present();
			})
			// Alert message (end)

  		}

  		if(isvalid){
  			const httpOptions = {
	    		headers: new HttpHeaders({
	    		    'Accept': 'application/json'
	    		})
	    	};

	  		this.httpClient.post(this._global.domainURL+"sendemail",{
	    		"email": email,
	    		"code": this.code
	    	},httpOptions)
	      	.subscribe(
	          (val:any) => {
	            
	            if (typeof val.data != "undefined") {
	                
	                console.log("data : " + JSON.stringify(val.data) );
	              	if(val.data.success == 1){
	              		this.hiddenenteremail = true;
	              		this.hiddenentercode = false;
			        	this.disablesubmit = true;
					}else{
						this.disablesubmit = false;
					}

					// Alert message (start)
					let alert = this.alertCtrl.create({
						message: val.message,
						buttons: ['OK']
					});
					alert.then((_alert: any)=> {
						_alert.present();
					})
					// Alert message (end)
	            }  
	           
	          },
	          response => {

	              console.log("Get call in error", response);
	          },
	          () => {
	              console.log("The Get observable is now completed.");
	          });
  		}  		

  	}

  	checkCode(){
  		var verifycode = this.verifycode.trim();

  		if(verifycode == this.code){
  			this.hiddenentercode = true;
  			this.hiddenenterpwd = false;
  		}else{
  			// Alert message (start)
			let alert = this.alertCtrl.create({
				message: "Verification code not matching",
				buttons: ['OK']
			});
			alert.then((_alert: any)=> {
				_alert.present();
			})
			// Alert message (end)
  		}

  	}

  	changepassword(){
  		var password = this.newpassword.trim();
  		var email = this.forgot_email.trim();
  		if(password != ''){
  			const httpOptions = {
	    		headers: new HttpHeaders({
	    		    'Accept': 'application/json'
	    		})
	    	};

	  		this.httpClient.post(this._global.domainURL+"updatepassword",{
	    		"email": email,
	    		"password": password
	    	},httpOptions)
	      	.subscribe(
	          (val:any) => {
	            
	            if (typeof val.data != "undefined") {
	                
	                console.log("data : " + JSON.stringify(val.data) );
	              	if(val.data.success == 1){
	              		
			        	this.hiddencode = true;
						this.hiddenenteremail = false;
						this.hiddenentercode = true;
						this.hiddenenterpwd = true;
						this.disablesubmit = false;

						// Alert message (start)
						let alert = this.alertCtrl.create({
							message: val.message,
							buttons: ['OK']
						});
						alert.then((_alert: any)=> {
							_alert.present();
						})
						// Alert message (end)

						this.router.navigateByUrl('/login/0');

					}else{
						// Alert message (start)
						let alert = this.alertCtrl.create({
							message: val.message,
							buttons: ['OK']
						});
						alert.then((_alert: any)=> {
							_alert.present();
						})
						// Alert message (end)
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
  			// Alert message (start)
			let alert = this.alertCtrl.create({
				message: "Please enter password.",
				buttons: ['OK']
			});
			alert.then((_alert: any)=> {
				_alert.present();
			})
			// Alert message (end)
  		}
  	}
  	getCode(length) {
	   	var result           = '';
	   	var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789#';
	   	var charactersLength = characters.length;
	   	for ( var i = 0; i < length; i++ ) {
	      result += characters.charAt(Math.floor(Math.random() * charactersLength));
	   	}
	   	this.code = result;
	}

	// Open Login Page
  	openLogin(){
  		this.router.navigateByUrl('/login/0');
  	}
}
