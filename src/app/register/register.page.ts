import { Component, OnInit } from '@angular/core';
import {AlertController, MenuController, LoadingController } from "@ionic/angular";
import { GlobalService } from '../global.service';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';
import {AppComponent} from '../app.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
	   
     public id: any=0;

    public hiddenhospitalname = true;
    public hiddenpostcode = true;

  	public show:boolean=false;
  	public postcode = "";
  	public hospital = "";
    public hospitalid: any= "0";
  	public hospitalList = [];
  	public hospitalList2 = [];

  	public usertype: number = 0;
  	public reg_fname: any="";
  	public reg_lname: any="";
  	public reg_username: any="";
  	public reg_email: any="";
    public reg_mobile: any="";
  	public reg_password: any="";
  	public reg_confirmpassword: any="";

  	constructor(private alertCtrl: AlertController,
  	private httpClient:HttpClient,
  	private router: Router,
  	public menuCtrl: MenuController,
  	private _global: GlobalService,
    public myapp: AppComponent,
  	public loadingController:LoadingController,
    private activatedRoute: ActivatedRoute
    ) {
  		  this.menuCtrl.enable(true);
  	}

  	ngOnInit() {
        if(this.usertype == 3 || this.usertype == 0){
          this.hiddenhospitalname = true;
        }else{
          this.hiddenhospitalname = false;
        }
  	}
    
    ionViewDidEnter(){
        this.id = this.activatedRoute.snapshot.paramMap.get('id');
        this.myapp.aboutmenu = 0;

        if(this._global.userid > 0){
            if(this._global.userrole == 2){
                this.myapp.staffmenu();
                this.router.navigateByUrl('/requests');
            }

            if(this._global.userrole == 3){
                this.myapp.helpermenu();
                this.router.navigateByUrl('/searchhospitals');
            }
        }else{
            this.myapp.loginmenu();
        }
      
    }

    numberOnlyValidation(event: any) {
      const pattern = /[0-9.,]/;
      let inputChar = String.fromCharCode(event.charCode);

      if (!pattern.test(inputChar)) {
        // invalid character, prevent input
        event.preventDefault();
      }
    }
    
  	// Register user
  	registerUser(){

  		var firstname = this.reg_fname.trim();
  		var lastname = this.reg_lname.trim();
  		//var username = this.reg_username.trim();
  		var email = this.reg_email.trim();
      var mobile = this.reg_mobile.toString();
  		var password = this.reg_password.trim();
  		var confirmpassword = this.reg_confirmpassword.trim();
  		var role = this.usertype;
  		var postcode = this.postcode.trim();
  		var hospital = this.hospital.trim();

      var isValid = false;var isValidMobile = true;
      if(role == 2 && firstname != '' && lastname != '' && email != '' && password !='' && confirmpassword != '' && hospital != ''){
          postcode = "0";
          isValid = true;
      }
      if(role == 3 && firstname != '' && lastname != '' && email != '' && password !='' && confirmpassword != '' && postcode != '' ){
          isValid = true;
      }

     
      if(firstname != '' && lastname != '' && email != '' && password !='' && confirmpassword != '' && postcode != '' && (mobile.length != 11 && mobile != '' ) ){
          isValid = false;
          isValidMobile = false;
      }

  	  if(isValid && mobile == '' ){
          isValid = false;
          isValidMobile = false;
      }

      if(isValid && mobile.substr(0, 2) != '07'  ){
          isValid = false;
          isValidMobile = false;
      }

  		if(isValid){

  			// Start loader
  			this._global.startWaitMessage(this,1);

  			this.httpClient.post(this._global.domainURL + "register",{
			    "firstname": firstname,
			    "lastname": lastname,
			    "email": email,
          "contact": mobile,
			    "password": password,
			    "confirmpassword": confirmpassword,
			    "role": role,	
			    'postcode': postcode,
			    'hospital': this.hospital,
			    'hospitalid': this.hospitalid,
          "devicetoken": this._global.devicetoken
			  })
			  .subscribe(
			    (val:any) => {
			    // console.log("POST call successful value returned in body",
			    //                    val);
			     	  // Stop loader
		       		this._global.stopWaitMessage(this);

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
    						  // Alert message (start)
    				  		let alert = this.alertCtrl.create({
    						    message: val.message,
    						    buttons: ['OK']
    						  });
    						  alert.then((_alert: any)=> {
    					        _alert.present();
    					    })

                  setTimeout(()=>{
                      alert.then((_alert: any)=> {
                          _alert.dismiss();
                      })
                      
                  }, 2000);
    					    // Alert message (end)

                  // Send to Login page
                  this.openLoginPage();

                  /*
                  if(this.id > 0 && role == 2){
                      var id = this.id;

                      this._global.token = val.data.token;
                      this._global.userid = val.data.userid;
                      this._global.userFullname = val.data.name;
                      this._global.userrole = val.data.role;
                      this._global.userrole2 = val.data.role;
                      this._global.enablenotification = val.data.notification;
                      this._global.enablenearby = val.data.nearby;

                      // Save key to storage 
                      this._global.saveToStorage(email,password,val.data.role);

                      this.myapp.addNameEmailtoMenu(val.data.name,email);

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
                      // Send to Login page
                      this.openLoginPage();
                  } */

                  
    					}
			    },
			    response => {
			        console.log("POST call in error", response);
			    },
			    () => {
			        console.log("The POST observable is now completed.");
			    });
  		}else{

          var message = "Please fill all fields.";
          if(!isValidMobile){
              message = "Enter a valid phone number";
          }
    			
          // Alert message (start)
          let alert = this.alertCtrl.create({
            message: message,
            buttons: ['OK']
          });
            alert.then((_alert: any)=> {
            _alert.present();
          })
          // Alert message (end)
  		}

  	}

  	changepostcode(){

      //if(this.usertype == 2)
  		//this.getHospitalList();
  	}

  	searchHospital(event){
      	
        this.hospital = event.target.value;

        if(this.hospital.trim() == ''){
            this.hospitalList = [];
            this.hospitalList2 = [];
        }
        const httpOptions = {
          	headers: new HttpHeaders({
            	'Accept': 'application/json',
          	})
        };

        this.httpClient.post(this._global.domainURL+"getNearHospitals",{
            "userid": 0,
            "page": 1,
            "postcode": "",
            "hospital": this.hospital
        },httpOptions)
        .subscribe(
          	(val:any) => {
       
            	if (typeof val.data != "undefined") {
              
                	if(val.data.success == 1){
                			
		                this.hospitalList = val.data.hospital;
		                this.hospitalList2 = val.data.hospital;
		               	
		              //  console.log('response : ' + JSON.stringify(val.data) );

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
      this.hospitalList2 = [];
    }
  	// Open Login Page
  	openLoginPage(){
  		this.router.navigateByUrl('/login/'+this.id);
  	}

  	openLoginType(){
  		this.router.navigateByUrl('/logintype');
  	}	

    openTermcondition(){
      this.router.navigateByUrl('/termcondition');
    }
    openPolicy(){
      this.router.navigateByUrl('/policy');
    }
  	onUsertypeChange(selectedValue: any) {

      if(this.usertype == 3){
        this.hiddenhospitalname = true;
        this.hiddenpostcode = false;
      }else if(this.usertype == 2){
        this.hiddenhospitalname = false;
        this.hiddenpostcode = true;
      }else{
        this.hiddenhospitalname = true;
        this.hiddenpostcode = true;
      }
 		 // Get Area of study Schools
  
  	}


}
