import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import {AlertController, MenuController, LoadingController,IonInfiniteScroll  } from "@ionic/angular";
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';
import { GlobalService } from '../../global.service';
import {AppComponent} from '../../app.component';
import { ActivatedRoute } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Observable } from "rxjs";  

@Component({
  selector: 'app-searchhospitals',
  templateUrl: './searchhospitals.page.html',
  styleUrls: ['./searchhospitals.page.scss'],
})
export class SearchhospitalsPage implements OnInit {
    @ViewChild(IonInfiniteScroll,{static: false}) infiniteScroll: IonInfiniteScroll;

	  public distanceArray: any=[5,10,20,30,40,50,60,70,80,90,100];
  	public mile = 5;
    public page = 1;
	  public hospitalList = [];
	  public hospitalList2 = [];
	
    public hiddensearching = true;
    public hiddennearyourpostcode = false;
    public hiddennotfound = true;
    public hiddenmiles = true;

    public postcode = "";
    public lat: any='';
    public lng: any='';
    public hospital: any='';

    public searchrequest: any='';
    public searchrequestcount = 0;

  	constructor(private alertCtrl: AlertController,public menuCtrl:  MenuController,private router: Router,private _global: GlobalService,private httpClient:HttpClient,public loadingController:LoadingController,private activatedRoute: ActivatedRoute,private geolocation: Geolocation,public myapp: AppComponent) {
        this.menuCtrl.enable(true);
       	this.getCurrentPosition();
    }

  	ngOnInit() {
  		//
  	}

    ionViewDidEnter(){
        this.myapp.aboutmenu = 0;

        if(this.postcode == '' && this.hospital == ''){
          this.hiddennearyourpostcode = false;
        }else{
            this.hiddennearyourpostcode = true;
        }  
    }

    changepostcode(){
     // console.log('change : ' + this.postcode);
      this.page = 1;
      this.hospitalList = [];
      this.hospitalList2 = [];
      this.hiddensearching = false;
      this.hiddennotfound = true;
      if(this.postcode != ''){
        this.hiddenmiles = false;
      }else{
        this.hiddenmiles = true;
      }
      this.getHospitalList2();

      if(this.postcode == '' && this.hospital == ''){
          this.hiddennearyourpostcode = false;

      }else{
          this.hiddennearyourpostcode = true;
      } 
    }

  	getCurrentPosition(){
      	
      	this.geolocation.getCurrentPosition(
        	{maximumAge: 20000, timeout: 8000,
         	enableHighAccuracy: true }
        ).then((resp) => {
            // resp.coords.latitude
            // resp.coords.longitude
           	
        //    console.log("success 2 : " + JSON.stringify( resp.coords));

            this.lat= resp.coords.latitude;
            this.lng= resp.coords.longitude;

            //console.log("lat : " + this.lat + ", lng : " + this.lng);

            this.getHospitalList2();
        },er=>{
            //alert("error getting location")
            console.log('Can not retrieve Location')
        }).catch((error) => {
             //alert('Error getting location'+JSON.stringify(error));
             console.log('Error getting location - '+JSON.stringify(error))
          }
        );  
    }

  	getHospitalList(infiniteScroll){
      
  		  var token = this._global.token; 
        var userid = this._global.userid;
        
        const httpOptions = {
          	headers: new HttpHeaders({
            	'Accept': 'application/json',
            	'Authorization': 'Bearer ' + token
          	})
        };

        if(this.searchrequestcount > 0){
          this.searchrequest.unsubscribe(); // To cancel the get request.
        }
        this.searchrequestcount+=1;
        
        this.searchrequest =  this.httpClient.post(this._global.domainURL+"getNearHospitals",{
                "userid": userid,
                "lat": this.lat,
                "lng": this.lng,
                "mile": this.mile,
                "hospital": this.hospital,
                "postcode": this.postcode,
                "page": this.page
            },httpOptions)
            .subscribe(
                (val:any) => {
                  this.searchrequestcount = 0;
                  if (typeof val.data != "undefined") {
                    
                      if(val.data.success == 1){

                        // Notification count
                        this.myapp.notifycount = val.data.countnotification;

                        this.hospitalList = this.hospitalList.concat(val.data.hospital);
                        this.page = val.data.page;
                       
                        this.hospitalList2 = this.hospitalList;
                        
                        if(this.hospitalList.length <= 0){
                          this.hiddennotfound = false;
                        }else{
                          this.hiddennotfound = true;
                        }
                       // console.log('response : ' + JSON.stringify(val.data.page) );

                      }                
                  }

                  this.hiddensearching = true;

                  if (infiniteScroll) {
                     infiniteScroll.target.complete();
                     infiniteScroll.target.disabled = false;
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

    getHospitalList2(){
      
      var token = this._global.token; 
        var userid = this._global.userid;
        
        const httpOptions = {
            headers: new HttpHeaders({
              'Accept': 'application/json',
              'Authorization': 'Bearer ' + token
            })
        };

        this.page = 1;
            this.hospitalList = [];
            this.hospitalList2 = [];

        if(this.searchrequestcount > 0){
          this.searchrequest.unsubscribe(); // To cancel the get request.
        }
        this.searchrequestcount+=1;
        this.searchrequest = this.httpClient.post(this._global.domainURL+"getNearHospitals",{
                "userid": userid,
                "lat": this.lat,
                "lng": this.lng,
                "mile": this.mile,
                "hospital": this.hospital,
                "postcode": this.postcode,
                "page": this.page
            },httpOptions)
            .subscribe(
                (val:any) => {
                  this.searchrequestcount = 0;
                  if (typeof val.data != "undefined") {
                  
                      if(val.data.success == 1){

                        // Notification count
                        this.myapp.notifycount = val.data.countnotification;

                        this.hospitalList = val.data.hospital;
                        this.page = val.data.page;
                       
                        this.hospitalList2 = this.hospitalList;
                        
                        if(this.hospitalList.length <= 0){
                          this.hiddennotfound = false;
                        }else{
                          this.hiddennotfound = true;
                        }
                       // console.log('response : ' + JSON.stringify(val.data.page) );

                      }                
                  }

                  this.hiddensearching = true;

                },
                response => {
                    console.log("Get call in error", response);
                },
                () => {
                    console.log("The Get observable is now completed.");
              }
            );
     
        
    }

    loadMore(infiniteScroll) {
   
      this.getHospitalList(infiniteScroll);
     
      infiniteScroll.target.disabled = true;
      
    }

  	filterHospital(event) {

      if(this.postcode != ''){
          this.hospitalList = this.hospitalList2;
          const val = event.target.value;
          if (val && val.trim() != '') {

              this.hospitalList =  this.hospitalList.filter(item => {
                return item.name.toLowerCase().indexOf(val.toLowerCase()) > -1;
              });

          }

          if(this.hospitalList.length <= 0){
            this.hiddennotfound = false;
          }else{
            this.hiddennotfound = true;
          }
      }else{
          
          this.hospital = event.target.value;

          if(this.hospital.trim() != ''){
            this.hiddensearching = false;
            this.hiddennotfound = true;
          }else{
            this.hiddensearching = true;
            this.hiddennotfound = false;
          }
          
          this.page = 1;
          this.hospitalList = [];
          this.hospitalList2 = [];

          //console.log("len : " + this.hospitalList.length + ", hospital : " + this.hospital);
          
          if(this.hospital != '')
          this.getHospitalList2();
      }

      if(this.postcode == '' && this.hospital == ''){
          this.hiddennearyourpostcode = false;
          this.getHospitalList2();
      }else{
          this.hiddennearyourpostcode = true;
      } 
	}

	selectDistance(){
    this.page = 1;
      this.hospitalList = [];
      this.hospitalList2 = [];

		this.getCurrentPosition();
	}

  viewrequests(name,id,count){

      if(count == 0){
          // Alert message (start)
          let alert = this.alertCtrl.create({
               
              message: "This hospital hasn't got any requests pending",
              buttons: ['OK']
          });
          alert.then((_alert: any)=> {
              _alert.present();
          })
          // Alert message (end)
      }else{
          this.router.navigateByUrl('/viewrequests/'+id+'/'+name);
      }
      
  }
}
