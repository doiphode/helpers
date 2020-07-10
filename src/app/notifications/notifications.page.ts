import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import {AlertController, MenuController, LoadingController,IonInfiniteScroll  } from "@ionic/angular";
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';
import { GlobalService } from '../global.service';
import { ActivatedRoute } from '@angular/router';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {
	  public notificationsList = [];
	  public hiddennotfound = true;
    public hiddennearby = true;
    public countexe :number = 0;
    public countexe2 :number = 0;
    public enablenotification = false;
    public enablenearby = false;

  	constructor(private alertCtrl: AlertController,public menuCtrl:  MenuController,private router: Router,private _global: GlobalService,private httpClient:HttpClient,public loadingController:LoadingController,private activatedRoute: ActivatedRoute,public myapp: AppComponent) {
       	
    }

  	ngOnInit() {
  	}

    ionViewDidEnter(infiniteScroll){
        this.myapp.aboutmenu = 0;
        if(this._global.userrole == this._global.userrole2){
            if(this._global.enablenotification == 0){
                this.enablenotification = false;
            }else{
                this.enablenotification = true;
            }
            if(this._global.enablenearby == 0){
                this.enablenearby = false;
            }else{
                this.enablenearby = true;
            }
        }
      
        if(this._global.userrole == 3){
            this.hiddennearby = false;
        }

        this.myapp.notifycount = 0;
        this.getNotifications();

    }

    changeStatus(){
        
        var token = this._global.token; 
        var userid = this._global.userid;

        if(userid > 0 && this._global.userrole == this._global.userrole2){

            const httpOptions = {
                headers: new HttpHeaders({
                  'Accept': 'application/json',
                  'Authorization': 'Bearer ' + token
                })
            };

            var status = 0;
            if(this.enablenotification){
              status = 1;
            }
            this.httpClient.post(this._global.domainURL+"enableNotification",{
                "userid": userid,
                "status": status
            },httpOptions)
            .subscribe(
                (val:any) => {
           
                  if (typeof val.data != "undefined") {
                      
                      var message = val.message;
                                

                      if(val.data.success == 1){
                      
                          this._global.enablenotification = status;
                      }else{
                          this.enablenotification = !this.enablenotification;
                      } 

                      if(this.countexe > 0){
                          this.getNotifications();
                      }

                      if(this.countexe > 0)
                      this._global.showToast(message); // Send toast notification 
                      this.countexe = 1;                  
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

    changeNearByStatus(){
        var token = this._global.token; 
        var userid = this._global.userid;

        if(this._global.userrole == 3 && userid > 0 && this._global.userrole == this._global.userrole2){

            const httpOptions = {
                headers: new HttpHeaders({
                  'Accept': 'application/json',
                  'Authorization': 'Bearer ' + token
                })
            };

            var status = 0;
            if(this.enablenearby){
              status = 1;
            }
            this.httpClient.post(this._global.domainURL+"enableNearbyNotification",{
                "userid": userid,
                "status": status
            },httpOptions)
            .subscribe(
                (val:any) => {
           
                  if (typeof val.data != "undefined") {
                      
                      var message = val.message;
                                

                      if(val.data.success == 1){
                          
                          this._global.enablenearby = status;
                      }else{
                          this.enablenearby = !this.enablenearby;
                      } 

                      if(this.countexe2 > 0){
                          this._global.showToast(message); // Send toast notification 
                          this.getNotifications();
                      }
                      
                      this.countexe2 = 1;                  
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

  	getNotifications(){
        
  		  var token = this._global.token; 
        var userid = this._global.userid;
        
        if(userid > 0 && this._global.userrole == this._global.userrole2){

            const httpOptions = {
              	headers: new HttpHeaders({
                	'Accept': 'application/json',
                	'Authorization': 'Bearer ' + token
              	})
            };

            this.httpClient.post(this._global.domainURL+"getNotifications",{
                "userid": userid,
            },httpOptions)
            .subscribe(
              	(val:any) => {
           
                	if (typeof val.data != "undefined") {
                  
                    	if(val.data.success == 1){
                    			
    		                  this.notificationsList = val.data.list;
    		           		   console.log('response : ' + JSON.stringify(this.notificationsList) );               	
    	                    if(this.notificationsList.length <= 0){
    	                      this.hiddennotfound = false;
    	                    }else{
    	                      this.hiddennotfound = true;
    	                    }
    		                
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

    viewRequest(id){

        var token = this._global.token; 
        var userid = this._global.userid;
        var userrole = this._global.userrole;
        const httpOptions = {
            headers: new HttpHeaders({
              'Accept': 'application/json',
              'Authorization': 'Bearer ' + token
            })
        };

        this.httpClient.post(this._global.domainURL+"viewRequest",{
            "id": id,
        },httpOptions)
        .subscribe(
          (val:any) => {
           
              if (typeof val.data != "undefined") {
                  
                  if(val.data.success == 1){
                          
                      var cartid = val.data.id;
                      var type = val.data.type;


                      if(userrole == 2){
                        
                          if(type == "Food"){
                              this.router.navigateByUrl('/foodrequest/'+cartid+'/1/1');
                          }
                          if(type == "Essentials"){
                              this.router.navigateByUrl('/essentialsrequest/'+cartid+'/1/1');
                          }
                          if(type == "Childcare"){
                              this.router.navigateByUrl('/childcarerequest/'+cartid+'/1/1');
                          }
                      } 
                      if(userrole == 3){
                          if(type == 'Food'){
                              this.router.navigateByUrl('/foodrequestdetails/'+id+'/1');
                          }
                          if(type == 'Essentials'){
                              this.router.navigateByUrl('/essentialsrequestdetails/'+id + '/1');
                          }
                          if(type == 'Childcare'){
                              this.router.navigateByUrl('/childcarerequestdetails/'+id +'/1');
                          }
                      }
                    
                   
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


    clearNotification(id,type,index){

        var token = this._global.token; 
        var userid = this._global.userid;

        const httpOptions = {
            headers: new HttpHeaders({
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token
            })
        };

        this.httpClient.post(this._global.domainURL+"clearNotification",{
            "userid": userid,
            "id": id,
            "type": type
        },httpOptions)
        .subscribe(
            (val:any) => {
           
                if (typeof val.data != "undefined") {
                  
                    if(val.data.success == 1){
                        if(type == 1){
                            this.notificationsList = [];

                        }

                        if(type == 2){
                            this.notificationsList.splice(index, 1);
                        }
                        
                        // Notification count
                        this.myapp.notifycount = val.data.countnotification;
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
