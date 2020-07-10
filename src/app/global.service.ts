import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import {Router} from '@angular/router';
import { Observable } from 'rxjs';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { SMS,SmsOptions } from '@ionic-native/sms/ngx';
@Injectable({
  providedIn: 'root'
})
export class GlobalService {
    
    public enablenotification: number = 0;
    public enablenearby: number = 0;

    public stafftimer: any='';
    public helpertimer: any='';
    public devicetoken: any='';
    public lat: any='';
    public lng: any='';
	  public isLive: boolean;
  	public domainURL: string;
  	public userFullname: string;
  	public userid: number = 0;
    public userrole: number = 0;
    public userrole2: number = 0;
  	public username: string = '';
    public token: string;
  	public loadermsg1: string = "Please wait...";
  	public loadermsg2: string = "Please wait while data is Loading ...";
    
  	constructor(public toastController: ToastController,
        private router: Router,
        private httpClient:HttpClient,
        private geolocation: Geolocation,
        private nativeStorage: NativeStorage,
        public androidPermissions: AndroidPermissions,
        private sms: SMS
        ) { 

  		  this.isLive = true;
  		  if(this.isLive){
         
            this.domainURL = "https://helpournhs.com/api/";
         	      
  		  }else{
  			    this.domainURL = "http://localhost:8000/api/";
  		  }
  	}

    validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }


  	// Start loader
  	startWaitMessage(el,type){

  		// Start loader
      el._global.presentLoading(el,type).then(a => console.log('presented'));
  	}

  	async presentLoading(el,type) {

		  let messageTxt = this.loadermsg1;
		  if(type == 1){
			   messageTxt = this.loadermsg1;
		  }
		  if(type == 2){
			   messageTxt = this.loadermsg2;
		  }

     

		  let loading = await el.loadingController.create({
		      message: messageTxt,

		  });
		  return await loading.present();
	  }

  	// Stop loader
	  stopWaitMessage(el){
		  el._global.dismiss(el).then(() => console.log('abort presenting'));
	  }

    async dismiss(el) {

      return await el.loadingController.dismiss().then(() => console.log('dismissed'));
    }

    // Send toast notification
    async showToast(toastMessage){
        const toast = await this.toastController.create({
          message: toastMessage,
          duration: 2000
        });
        toast.present();
    }

    getCurrentPosition(){
      
      this.geolocation.getCurrentPosition(
        {maximumAge: 20000, timeout: 8000,
         enableHighAccuracy: true }
        ).then((resp) => {
            // resp.coords.latitude
            // resp.coords.longitude
           
            console.log("success 2 : " + JSON.stringify( resp.coords));

            this.lat=resp.coords.latitude
            this.lng=resp.coords.longitude
        },er=>{
            //alert("error getting location")
            console.log('Can not retrieve Location')
        }).catch((error) => {
              //alert('Error getting location'+JSON.stringify(error));
              console.log('Error getting location - '+JSON.stringify(error))
              }
        );  
    }

    saveToStorage(email,password,role){
      this.nativeStorage.setItem('loginkey', { 'email': email,'pwd': password,'role': role })
      .then(
          (data) => console.log('stored'),
          error => console.error('Error storing item', error)
      );
    }

    

    clearStorage() {
        this.nativeStorage.clear()
          .then(
            data => console.log(data),
            error => console.error(error)
          );
    } 

    currentDate(){
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      var yyyy = today.getFullYear();

      let today2 = yyyy + '-' + mm + '-' + dd;
      return today2;
    }

    maxDate(){

        var result = new Date();
        result.setDate(result.getDate() + 7);

        var dd = String(result.getDate()).padStart(2, '0');
        var mm = String(result.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = result.getFullYear();

        let today = yyyy + '-' + mm + '-' + dd;
       

        return today;
    }

    changeDateFormat(strdate){

        var split_date = strdate.split("-");
        var dd = split_date[2];
        var mm = split_date[1];
        var yy = split_date[0];

        return dd+"-"+mm+"-"+yy;
    }

    sendSMS(contactno,message){

       /* this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.SEND_SMS).then((result) => {

           
        }).catch((err) => {
         alert(JSON.stringify(err));
        }); */
         var options:SmsOptions={
              replaceLineBreaks:false,
              android:{
                intent:'INTENT'
              }
            }
            message = "Helpers App " + message;
            this.sms.send(contactno, message,options).then((result) => {
               // alert("sent: " + JSON.stringify(result));
            }, (error) => {
                //alert("error: " + JSON.stringify(error) );
            });
    }
}
