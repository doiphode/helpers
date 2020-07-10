import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import {AlertController, MenuController, LoadingController,IonInfiniteScroll  } from "@ionic/angular";
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';
import { GlobalService } from '../../global.service';
import {AppComponent} from '../../app.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-myhelplist',
  templateUrl: './myhelplist.page.html',
  styleUrls: ['./myhelplist.page.scss'],
})
export class MyhelplistPage implements OnInit {
//
  	public id = "";
  	public itemsList: any=[];
  	public hiddennotfound = true;
    public hiddenrequestfound = true;
    public hiddenrequestnotfound = true;
    public otherchecked = true;
  	public otheritem = "";
  	public readymeal = "";

  	public name = "";
  	public request_date = "-";
  	public hospitalname = "-";
  	public contactno = "-";

  	constructor(private alertCtrl: AlertController,public menuCtrl:  MenuController,private router: Router,private _global: GlobalService,private httpClient:HttpClient,public loadingController:LoadingController,private activatedRoute: ActivatedRoute,public myapp: AppComponent) {
      
       	
    }

	  ngOnInit() {
	  }
    ionViewDidEnter(){
        this.myapp.aboutmenu = 0;
        this.getDetails();
    }

	  getDetails(){

  		var token = this._global.token; 
      var userid = this._global.userid;
        
        if(userid > 0){
            const httpOptions = {
              	headers: new HttpHeaders({
                	'Accept': 'application/json',
                	'Authorization': 'Bearer ' + token
              	})
            };

            this.httpClient.post(this._global.domainURL+"myhelplist",{
                "userid": userid,
            },httpOptions)
            .subscribe(
              	(val:any) => {
           
                	if (typeof val.data != "undefined") {
                      
                    	if(val.data.status == 1){
                    			
                        // Notification count
                        this.myapp.notifycount = val.data.countnotification;

    		                this.itemsList = val.data.list;
    		                
                        if(this.itemsList.length == 0){
                            this.hiddennotfound = false;

                            this.hiddenrequestnotfound = false;
                            this.hiddenrequestfound = true;

                        }else{
                            this.hiddennotfound = true;

                            this.hiddenrequestfound = false;
                            this.hiddenrequestnotfound = true;
                        }
                        //this.timeRemain();
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

        }else{
            this.hiddennotfound = false;

            this.hiddenrequestnotfound = false;
            this.hiddenrequestfound = true;
        }
  	}

    back(){
        this.router.navigateByUrl('/searchhospitals');
    }

    timeRemain(){
        var temp = this;
        this._global.helpertimer = setInterval(function(){

            for(var i=0;i<temp.itemsList.length;i++){


                var type = temp.itemsList[i]['type'];
                var status = Number(temp.itemsList[i]['status']);
                var timeremain = Number(temp.itemsList[i]['seconds']);

                if(type != 'Childcare' && timeremain > 0 && status == 1){
                    timeremain = timeremain - 1;
                   //  console.log('run : ' + type + ", timeremain : " + timeremain);
                    temp.itemsList[i]['remain'] = temp.secondsToHms(timeremain);
                    temp.itemsList[i]['seconds'] = timeremain;
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

    viewrequest(type,id){

        if(type == 'Food'){
          this.foodrequestDetails(id);
        }
        if(type == 'Essentials'){
          this.essentialsrequestDetails(id);
        }
        if(type == 'Childcare'){
          this.childcarerequestDetails(id);
        }
    }
    foodrequestDetails(id){
      this.router.navigateByUrl('/foodrequestdetails/'+id+'/1');
    }

    essentialsrequestDetails(id){
      this.router.navigateByUrl('/essentialsrequestdetails/'+id + '/1');
    }

    childcarerequestDetails(id){
      this.router.navigateByUrl('/childcarerequestdetails/'+id +'/1');
    }

}
