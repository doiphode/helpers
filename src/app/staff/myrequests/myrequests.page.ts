import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import {AlertController, MenuController, LoadingController,IonInfiniteScroll  } from "@ionic/angular";
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';
import { GlobalService } from '../../global.service';
import {AppComponent} from '../../app.component';

@Component({
  selector: 'app-myrequests',
  templateUrl: './myrequests.page.html',
  styleUrls: ['./myrequests.page.scss'],
})
export class MyrequestsPage implements OnInit {
	@ViewChild(IonInfiniteScroll,{static: false}) infiniteScroll: IonInfiniteScroll;

    public acknowledgedList: any=[];
    public pendingList: any=[];
    public receivedList: any=[];
    
    public start :number = 0;

    public hiddennotfoundacknowledged = false;
    public hiddennotfoundpending = false;
    public hiddennotfoundreceived = false;

    public hiddenrow = true;
    public hiddenbutton = true;

  	constructor(private alertCtrl: AlertController,public menuCtrl:  MenuController,private router: Router,private _global: GlobalService,private httpClient:HttpClient,public loadingController:LoadingController,public myapp: AppComponent) {
      	
        this.menuCtrl.enable(true);
    }

 	  ngOnInit() {

        var userid = this._global.userid;
        if(userid > 0){
           this.getAcknowledged();
           this.getPending();
           this.getReceived();
        }
 		   
  	}

    ionViewDidEnter(infiniteScroll){
        this.myapp.aboutmenu = 0;
        var userid = this._global.userid;
        if(userid > 0){
           this.getAcknowledged();
           this.getPending();
           this.getReceived();
        }else{
            this.hiddenbutton = false;
        }
    }
    
  	getAcknowledged(){
        var token = this._global.token; 
        var userid = this._global.userid;
        
        
        const httpOptions = {
            headers: new HttpHeaders({
              'Accept': 'application/json',
              'Authorization': 'Bearer ' + token
            })
        };

        this.httpClient.post(this._global.domainURL+"acknowledgedRequests",{
            "userid": userid
        },httpOptions)
        .subscribe(
            (val:any) => {
       
              if (typeof val.data != "undefined") {
              
                  if(val.data.success == 1){
                      this.acknowledgedList = val.data.items;
                      
                      // Notification count
                      this.myapp.notifycount = val.data.countnotification;

                      console.log("len : " + this.acknowledgedList.length);
                      if(this.acknowledgedList.length > 0){
                          this.hiddennotfoundacknowledged = true;
                      }else{
                          this.hiddennotfoundacknowledged = false;
                      }

                      console.log('response : ' + JSON.stringify(val.data) );
                      this.timeRemain(); // Calculate time remaining
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

  	getPending(){
  		
        var token = this._global.token; 
        var userid = this._global.userid;
        
        const httpOptions = {
          	headers: new HttpHeaders({
            	'Accept': 'application/json',
            	'Authorization': 'Bearer ' + token
          	})
        };

        this.httpClient.post(this._global.domainURL+"pendingRequests",{
            "userid": userid
        },httpOptions)
        .subscribe(
          	(val:any) => {
       
            	if (typeof val.data != "undefined") {
              
                	if(val.data.success == 1){
                  		this.pendingList = val.data.items;

                      // Notification count
                      this.myapp.notifycount = val.data.countnotification;

                  		if(this.pendingList.length > 0){
                          this.hiddennotfoundpending = true;
                      }else{
                          this.hiddennotfoundpending = false;
                      }
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

  	getReceived(){
        var token = this._global.token; 
        var userid = this._global.userid;
        
        const httpOptions = {
            headers: new HttpHeaders({
              'Accept': 'application/json',
              'Authorization': 'Bearer ' + token
            })
        };
        //
        this.httpClient.post(this._global.domainURL+"receivedRequest",{
            "userid": userid,
            "start": this.start
        },httpOptions)
        .subscribe(
            (val:any) => {
       
              if (typeof val.data != "undefined") {
                  
                  // Notification count
                  this.myapp.notifycount = val.data.countnotification;

                  this.receivedList = val.data.items;

                  if(this.receivedList.length > 0){
                          this.hiddennotfoundreceived = true;
                      }else{
                          this.hiddennotfoundreceived = false;
                      }
                  
                  if(this.acknowledgedList.length == 0 && this.pendingList.length == 0 && this.receivedList.length == 0){
                      this.hiddenbutton = false;
                  }else{
                      this.hiddenbutton = true;
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

  	makerequest(){
  		this.router.navigateByUrl('/requests');
  	}

  	viewRequest(id,type){
  		var token = this._global.token; 
        var userid = this._global.userid;
        
        const httpOptions = {
          	headers: new HttpHeaders({
            	'Accept': 'application/json',
            	'Authorization': 'Bearer ' + token
          	})
        };

        // Food 
        if(type == "Food"){
        	this.httpClient.post(this._global.domainURL+"viewFoodRequest",{
	            "userid": userid,
	            "id": id,
	            "type": type
	        },httpOptions)
	        .subscribe(
	          	(val:any) => {
	       
	            	if (typeof val.data != "undefined") {
	              
	                	if(val.data.status == 1){

                      // Notification count
                      this.myapp.notifycount = val.data.countnotification;

	                  		this.pendingList = val.data.list;
	                  		
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

        // Essentials

        // Child care

        
  	}

    review(id,type,request){
      
        if(request == 3){
            if(type == "Food"){
              this.router.navigateByUrl('/foodrequest/'+id+'/2/1');
            }
            if(type == "Essentials"){
              this.router.navigateByUrl('/essentialsrequest/'+id+'/2/1');
            }
            if(type == "Childcare"){
              this.router.navigateByUrl('/childcarerequest/'+id+'/2/1');
            }
        }else{
            if(type == "Food"){
              this.router.navigateByUrl('/foodrequest/'+id+'/1/1');
            }
            if(type == "Essentials"){
              this.router.navigateByUrl('/essentialsrequest/'+id+'/1/1');
            }
            if(type == "Childcare"){
              this.router.navigateByUrl('/childcarerequest/'+id+'/1/1');
            }
        }
    }

    

    timeRemain(){
        var temp = this;
        this._global.stafftimer = setInterval(function(){

            for(var i=0;i<temp.acknowledgedList.length;i++){


                var type = temp.acknowledgedList[i]['type'];


                var timeremain = Number(temp.acknowledgedList[i]['seconds']);
                if(type != 'Childcare' && timeremain > 0){
                    timeremain = timeremain - 1;
                   //  console.log('run : ' + type + ", timeremain : " + timeremain);
                    temp.acknowledgedList[i]['ago'] = temp.secondsToHms(timeremain);
                    temp.acknowledgedList[i]['seconds'] = timeremain;
                }
                
            }
            
        },1000);
    }

    secondsToHms(d) {
        d = Number(d);
        var h = Math.floor(d / 3600);
        var m = Math.floor(d % 3600 / 60);
        var s = Math.floor(d % 3600 % 60);

        var hDisplay = h > 0 ? h + (h == 1 ? ":" : ":") : "";
        var mDisplay = m > 0 ? m + (m == 1 ? ":" : "") : "";
        var sDisplay = s > 0 ? s + (s == 1 ? ":" : "") : "";
       // return hDisplay + mDisplay + sDisplay; 
        return hDisplay + mDisplay; 
    }
}
