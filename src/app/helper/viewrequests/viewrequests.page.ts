import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import {AlertController, MenuController, LoadingController,IonInfiniteScroll  } from "@ionic/angular";
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';
import { GlobalService } from '../../global.service';
import {AppComponent} from '../../app.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewrequests',
  templateUrl: './viewrequests.page.html',
  styleUrls: ['./viewrequests.page.scss'],
})
export class ViewrequestsPage implements OnInit {

  	@ViewChild(IonInfiniteScroll,{static: false}) infiniteScroll: IonInfiniteScroll;
    public hospitalid = "";
    public hospitalname = "";

    public hiddenloadmore1 = true;
    public hiddenloadmore2 = true;
    public hiddenloadmore3 = true;

    public hiddenfoodrequests = true;
    public hiddenessentialrequests = true;
    public hiddenchildcarerequests = true;
    
    public hiddenrequestfound = true;

    public foodList: any=[];
    public essentialList: any=[];
    public childcareList: any=[];

    public requestsList: any=[];
    
    public start1 :number = 0;
    public start2 :number = 0;
    public start3 :number = 0;


  	constructor(private alertCtrl: AlertController,public menuCtrl:  MenuController,private router: Router,private _global: GlobalService,private httpClient:HttpClient,public loadingController:LoadingController,private activatedRoute: ActivatedRoute,public myapp: AppComponent) {
       
    }

    ionViewDidEnter(infiniteScroll){
        this.myapp.aboutmenu = 0;
        this.hospitalid = this.activatedRoute.snapshot.paramMap.get('id');
        this.hospitalname = this.activatedRoute.snapshot.paramMap.get('name');
        this.foodList=[];
        this.essentialList=[];
        this.childcareList=[];
        this.requestsList=[];

        this.start1 = 0;
        this.start2 = 0;
        this.start3 = 0;

        this.hospitalRequests(infiniteScroll);
       // this.foodRequests(infiniteScroll);
       // this.essentialsRequests(infiniteScroll);
       // this.childcareRequests(infiniteScroll);
    }

  	ngOnInit() {
        this.hospitalid = this.activatedRoute.snapshot.paramMap.get('id');
        this.hospitalname = this.activatedRoute.snapshot.paramMap.get('name');
  	}

    hospitalRequests(infiniteScroll){
        var token = this._global.token; 
        var userid = this._global.userid;
        
        const httpOptions = {
            headers: new HttpHeaders({
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token
            })
        };

        this.httpClient.post(this._global.domainURL+"hospitalrequests",{
                "userid": userid,
                "start": this.start1,
                "hospitalid": this.hospitalid
        },httpOptions)
        .subscribe(
            (val:any) => {
           
                if (typeof val.data != "undefined") {
                  
                      if(val.data.status == 1){

                        if(val.data.lastid > 0){
                            
                            // Notification count
                            this.myapp.notifycount = val.data.countnotification;

                            this.requestsList = this.requestsList.concat(val.data.requests);

                            if(this.requestsList.length > 5){
                                this.hiddenloadmore1 = false;
                            }else{
                                this.hiddenloadmore1 = true;
                            }
                            this.start1 = val.data.lastid;
                            
                            console.log('response : ' + JSON.stringify(val.data) );

                            console.log('len : ' + this.requestsList.length);
                            
                        }  
                        
                        if(this.requestsList.length == 0){
                              this.hiddenrequestfound = true;
                            }else{
                              this.hiddenrequestfound = false;
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
            }
        );
    }
  	foodRequests(infiniteScroll){
  	

  		var token = this._global.token; 
        var userid = this._global.userid;
        
        
            const httpOptions = {
              	headers: new HttpHeaders({
                	'Accept': 'application/json',
                	'Authorization': 'Bearer ' + token
              	})
            };

            this.httpClient.post(this._global.domainURL+"foodRequests",{
                "userid": userid,
                "start": this.start1,
                "hospitalid": this.hospitalid
            },httpOptions)
            .subscribe(
              	(val:any) => {
           
                	if (typeof val.data != "undefined") {
                  
                    	if(val.data.status == 1){

                        // Notification count
                        this.myapp.notifycount = val.data.countnotification;

                    		if(val.data.lastid > 0){
                    			
    		                  	this.foodList = this.foodList.concat(val.data.requests);

                            if(this.foodList.length > 5){
                                this.hiddenloadmore1 = false;
                            }else{
                                this.hiddenloadmore1 = true;
                            }
    		                  	this.start1 = val.data.lastid;
    		                    
    		                    console.log('response : ' + JSON.stringify(val.data) );

                            console.log('len : ' + this.foodList.length);
                            

    		                }  
                      	
                        if(this.foodList.length == 0){
                              this.hiddenfoodrequests = true;
                            }else{
                              this.hiddenfoodrequests = false;
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
            	}
            );

  	}

  	loadMoreRequests(infiniteScroll) {
      
      this.hospitalRequests(infiniteScroll);
     
      infiniteScroll.target.disabled = true;
      
    }

    loadMoreFoodrequests(infiniteScroll) {
      
      this.foodRequests(infiniteScroll);
     
      infiniteScroll.target.disabled = true;
      
    }

  	essentialsRequests(infiniteScroll){

  		var token = this._global.token; 
        var userid = this._global.userid;
        
        const httpOptions = {
          	headers: new HttpHeaders({
            	'Accept': 'application/json',
            	'Authorization': 'Bearer ' + token
          	})
        };

        this.httpClient.post(this._global.domainURL+"essentialRequests",{
            "userid": userid,
            "start": this.start2,
            "hospitalid": this.hospitalid
        },httpOptions)
        .subscribe(
          	(val:any) => {
       
            	if (typeof val.data != "undefined") {
              
                	if(val.data.status == 1){

                    // Notification count
                    this.myapp.notifycount = val.data.countnotification;

                		if(val.data.lastid > 0){
                			 this.hiddenessentialrequests = false;
		                  	this.essentialList = this.essentialList.concat(val.data.requests);

                        if(this.essentialList.length > 5){
                            this.hiddenloadmore2 = false;
                        }else{
                            this.hiddenloadmore2 = true;
                        }

		                  	this.start2 = val.data.lastid;
		                    
		                    console.log('response : ' + JSON.stringify(val.data) );

                        

		                }else{
                      this.hiddenessentialrequests = true;
                    
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
        	}
        );
  	}

  	loadMoreEssentialrequests(infiniteScroll) {
      
      this.essentialsRequests(infiniteScroll);
     
      infiniteScroll.target.disabled = true;
      
    }

  	childcareRequests(infiniteScroll){
        var token = this._global.token; 
        var userid = this._global.userid;
        
        const httpOptions = {
            headers: new HttpHeaders({
              'Accept': 'application/json',
              'Authorization': 'Bearer ' + token
            })
        };

        this.httpClient.post(this._global.domainURL+"childcareRequests",{
            "userid": userid,
            "start": this.start3,
            "hospitalid": this.hospitalid
        },httpOptions)
        .subscribe(
            (val:any) => {
       
              if (typeof val.data != "undefined") {
              
                  if(val.data.status == 1){

                    // Notification count
                    this.myapp.notifycount = val.data.countnotification;

                    if(val.data.lastid > 0){
                      
                        this.childcareList = this.childcareList.concat(val.data.requests);

                        if(this.childcareList.length > 5){
                            this.hiddenloadmore3 = false;
                        }else{
                            this.hiddenloadmore3 = true;
                        }

                        this.start3 = val.data.lastid;
                        
                        console.log('response : ' + JSON.stringify(val.data) );

                        
                    }  
                    if(this.childcareList.length == 0){
                          this.hiddenchildcarerequests = true;
                        }else{
                          this.hiddenchildcarerequests = false;
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
          }
        );
  	}

    loadMoreChildcarerequests(infiniteScroll) {
      
      this.childcareRequests(infiniteScroll);
     
      infiniteScroll.target.disabled = true;
      
    }

  	foodrequestDetails(id){
      if(this._global.userid > 0 && this._global.userrole == this._global.userrole2){
          this.router.navigateByUrl('/foodrequestdetails/'+id+'/0');
      }else{
          this.presentAlertConfirmNoLogin();
      }
  		
  	}

    essentialsrequestDetails(id){
        if(this._global.userid > 0 && this._global.userrole == this._global.userrole2){
            this.router.navigateByUrl('/essentialsrequestdetails/'+id+'/0');
        }else{
            this.presentAlertConfirmNoLogin();
        }
        
    }

    childcarerequestDetails(id){
        if(this._global.userid > 0 && this._global.userrole == this._global.userrole2){
            this.router.navigateByUrl('/childcarerequestdetails/'+id+'/0');
        }else{
            this.presentAlertConfirmNoLogin();
        }
    }

    async presentAlertConfirmNoLogin() {
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
                  this.router.navigateByUrl('/login/0');
              }
            }
          ]
        });

        await alert.present();
    }
    
    viewrequest(type,id){

        if(type == "Food"){
            this.foodrequestDetails(id);
        }

        if(type == "Essentials"){
            this.essentialsrequestDetails(id);
        }

        if(type == "Childcare"){
            this.childcarerequestDetails(id);
        }
    }
}
