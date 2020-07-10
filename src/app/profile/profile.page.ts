import { Component, OnInit } from '@angular/core';
import {AlertController, MenuController, LoadingController } from "@ionic/angular";
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';
import { GlobalService } from '../global.service';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
	public userData: any=[];
	public firstname: any='';
	public lastname: any='';
	public email: any='-';
	public contact: any='';
	public hospital: any='-';
	public hospitalid: any=0;
	public oldpassword: any='';
	public password: any='';
	public repassword: any='';

	public userrole: any='';
	public userrole2: any='';
	public userid: any='';
	public postcode: any='';

  public searchrequest: any='';
  public searchrequestcount = 0;

	public hiddenpassword = true;
  public hiddenhospital = true;

  public hospitalList = [];

    public searchlabel = "Searching...";

  	constructor(private alertCtrl: AlertController,private httpClient:HttpClient, 
	    private router: Router,
	    private _global: GlobalService,
	    public loadingController:LoadingController,
	    public myapp: AppComponent
	    ) { }

  	ngOnInit() {
  		this.getUserDetails();
  	}

  	ionViewDidEnter(){
  		this.myapp.aboutmenu = 0;
  		this.getUserDetails();
  	}

  	toggleChangePassword(){
  		this.hiddenpassword = !this.hiddenpassword;
  	}

  	 numberOnlyValidation(event: any) {
	    const pattern = /[0-9.,]/;
	    let inputChar = String.fromCharCode(event.charCode);

	    if (!pattern.test(inputChar)) {
	      // invalid character, prevent input
	      event.preventDefault();
	    }
	  }
	  
  	getUserDetails(){
  		this.userrole = this._global.userrole;
  		this.userrole2 = this._global.userrole2;
  		this.userid = this._global.userid;
  		var userid = this._global.userid;
  		var token = this._global.token; 

  		const httpOptions = {
  		    headers: new HttpHeaders({
  		      'Accept': 'application/json',
  		      'Authorization': 'Bearer ' + token
  		    })
  		};

  		if(userid > 0 && this.userrole2 == this.userrole){
					
    		this.httpClient.post(this._global.domainURL+"user",{
		    	"userid": userid
			  },httpOptions)
      		.subscribe(
          		(val:any) => {
            
		            if (typeof val.data != "undefined") {
		              
		              	this.userData = val.data;
		              	this.firstname = val.data.firstname;
		              	this.lastname = val.data.lastname;
		              	this.email = val.data.email;
		              	this.hospital = val.data.hospital;
                    this.hospitalid = val.data.hospitalid;
		              	this.contact = val.data.contact;
		              	this.postcode = val.data.postcode;
		              	//console.log('response : ' + JSON.stringify(val.data) );
		                
                    // Notification count
                    this.myapp.notifycount = val.data.countnotification;

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

  	updateProfile(){
  		var userid = this._global.userid;
  		var firstname = this.firstname.trim();
  		var lastname = this.lastname.trim();
  		var oldpassword = this.oldpassword.trim();
  		var password = this.password.trim();
  		var repassword = this.repassword.trim();
  		var contact = this.contact.toString().trim();
  		var postcode = this.postcode.trim();

  		var valid = true;
  		if(firstname == '' && lastname == ''){
  			valid = false;
  			// Alert message (start)
			let alert = this.alertCtrl.create({
						   
				message: "Please enter Firstname and Lastname",
				buttons: ['OK']
			});
			alert.then((_alert: any)=> {
				_alert.present();
			})
			// Alert message (end)
  		}

  		if(valid && oldpassword != '' && (password == '' || repassword == '') ){
  			valid = false;

  			// Alert message (start)
  			let alert = this.alertCtrl.create({
  						   
  				message: "Please enter new password and confirm password",
  				buttons: ['OK']
  			});
  			alert.then((_alert: any)=> {
  				_alert.present();
  			})
  			// Alert message (end)
  		}

  		if(valid && (contact.length != 11 && contact != '' ) ){
  			valid = false;
  			// Alert message (start)
  			let alert = this.alertCtrl.create({
  						   
  				message: "Enter a valid phone number",
  				buttons: ['OK']
  			});
  			alert.then((_alert: any)=> {
  				_alert.present();
  			})
  			// Alert message (end)
  		}

      if(valid && contact.substr(0, 2) != '07'  ){
          valid = false;
          // Alert message (start)
          let alert = this.alertCtrl.create({
                   
            message: "Enter a valid phone number",
            buttons: ['OK']
          });
          alert.then((_alert: any)=> {
            _alert.present();
          })
          // Alert message (end)
      }

      if(this._global.userrole == 2 && valid && !(this.hospital.trim() != '' && this.hospitalid > 0) ){
        valid = false;

        console.log("id : " + this.hospitalid + ", name : " + this.hospital);
        // Alert message (start)
        let alert = this.alertCtrl.create({
                 
          message: "Please select a hospital.",
          buttons: ['OK']
        });
        alert.then((_alert: any)=> {
          _alert.present();
        })
        // Alert message (end)
      }
  		if(valid){

  			const httpOptions = {
			    headers: new HttpHeaders({
			      'Accept': 'application/json',
			      'Authorization': 'Bearer ' + this._global.token
			    })
			};

	    	this.httpClient.post(this._global.domainURL+"updateuser",{
			    "userid": userid,
			    "firstname": firstname,
			    "lastname": lastname,
			    "oldpassword": oldpassword,
			    "password": password,
			    "confirmpassword": repassword,
			    "contact": contact,
			    "postcode": postcode,
          "hospitalid": this.hospitalid,
          "hospital": this.hospital.trim()
			},httpOptions)
	      	.subscribe(
	          	(val:any) => {
	             
		            if (typeof val.data != "undefined") {
		              	
                    // Notification count
                    this.myapp.notifycount = val.data.countnotification;

		              	if(!val.data.success){
		              		// Alert message (start)
        				  		let alert = this.alertCtrl.create({
          						    message: val.message,
          						    buttons: ['OK']
          						});
          						alert.then((_alert: any)=> {
          					        _alert.present();
        					    })
        					    // Alert message (end)
		              	}else{
		              		var message = val.message;
		              		this.oldpassword = "";
		              		this.password = "";
		              		this.repassword = "";
		              		
		              		this._global.showToast(message); // Send toast notification
		              	}
		              	//console.log('response : ' + JSON.stringify(val.data) );
		        		

						
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

    searchHospital(event){
        
        this.hospital = event.target.value;

        if(this.hospital.trim() == ''){
            this.hospitalList = [];
            this.hiddenhospital = true;
        }

        this.hiddenhospital = true;
        const httpOptions = {
            headers: new HttpHeaders({
              'Accept': 'application/json',
            })
        };

        if(this.searchrequestcount > 0){
          this.searchrequest.unsubscribe(); // To cancel the get request.
        }
        
        this.searchrequestcount+=1;
        this.searchrequest = this.httpClient.post(this._global.domainURL+"getNearHospitals",{
            "userid": 0,
            "page": 1,
            "postcode": "",
            "hospital": this.hospital
        },httpOptions)
        .subscribe(
            (val:any) => {
       
              if (typeof val.data != "undefined") {
              
                  if(val.data.success == 1){
                      this.hiddenhospital = false;
                    this.hospitalList = val.data.hospital;
                    this.searchrequestcount = 0;
                    if(this.hospitalList.length == 0){
                        this.searchlabel = "Not found.";
                    }
                  //  console.log('response : ' + JSON.stringify(val.data) );

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

    selectHospital(id,name){

      //  console.log("select hospital : " + name + ", id : " + id);
      this.hospital = name;
      this.hospitalid = id;

      this.hospitalList = [];
      this.hiddenhospital = true;
    }

  	deleteAccount(){
        this.presentAlertConfirm();
    }

    async presentAlertConfirm() {
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
              console.log('Confirm Okay');
              var token = this._global.token; 
              var userid = this._global.userid;
              
              const httpOptions = {
                  headers: new HttpHeaders({
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + token
                  })
              };

              this.httpClient.post(this._global.domainURL+"deleteaccount",{
                  "userid": userid,
              },httpOptions)
              .subscribe(
                  (val:any) => {
             
                    if (typeof val.data != "undefined") {
                        var message = val.message;


                        this._global.showToast(message); // Send toast notification                
                        if(val.data.success == 1){

                            // Notification count
                            this.myapp.notifycount = val.data.countnotification;

                            this.myapp.logout();
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
}
