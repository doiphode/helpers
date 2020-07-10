import { Component, OnInit } from '@angular/core';
import {AlertController, MenuController, LoadingController } from "@ionic/angular";
import { GlobalService } from '../global.service';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-givefeedback',
  templateUrl: './givefeedback.page.html',
  styleUrls: ['./givefeedback.page.scss'],
})
export class GivefeedbackPage implements OnInit {
	
	public feedback: any='';

  	constructor(private alertCtrl: AlertController,public menuCtrl: 	MenuController,private router: Router,private _global: GlobalService,private httpClient:HttpClient,public loadingController:LoadingController,public myapp: AppComponent) {
  		this.menuCtrl.enable(true);
  	}

  	ngOnInit() {
  	}

  	ionViewDidEnter(){
        this.myapp.aboutmenu = 0;
        this.getFeedback();
    }
   

  	getFeedback(){

  		var userid = this._global.userid;
  		var token = this._global.token; 
  		const httpOptions = {
            headers: new HttpHeaders({
              'Accept': 'application/json',
              'Authorization': 'Bearer ' + token
            })
        };

 		if(userid > 0){
 			this.httpClient.post(this._global.domainURL+"getFeedback",{
		    	"userid": userid
			},httpOptions)
      		.subscribe(
          		(val:any) => {
            
		            if (typeof val.data != "undefined") {
		              
		              	this.feedback = val.data.feedback;
		              	
		              	console.log('response : ' + JSON.stringify(val.data) );
		        		
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
  	submitFeedback(){

  		var feedback = this.feedback.trim();

  		if(feedback != ''){
  			var userid = this._global.userid;
	  		var token = this._global.token; 
	  		const httpOptions = {
	            headers: new HttpHeaders({
	              'Accept': 'application/json',
	              'Authorization': 'Bearer ' + token
	            })
	        };

  			this.httpClient.post(this._global.domainURL+"givefeedback",{
		    	"userid": userid,
		    	"feedback": feedback
			},httpOptions)
      		.subscribe(
          		(val:any) => {
            
		            if (typeof val.data != "undefined") {
		              
		              	var message = val.message;

		              	console.log('response : ' + JSON.stringify(val.data) );
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


  		}else{
  			// Alert message (start)
			let alert = this.alertCtrl.create({
				message: "Please enter feedback",
				buttons: ['OK']
			});
			alert.then((_alert: any)=> {
				_alert.present();
			})
			// Alert message (end)
  		}
  	}

}
