import { Component, OnInit } from '@angular/core';
import {AlertController, MenuController, LoadingController } from "@ionic/angular";
import { GlobalService } from '../global.service';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';
import {AppComponent} from '../app.component';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-logintype',
  templateUrl: './logintype.page.html',
  styleUrls: ['./logintype.page.scss'],
})
export class LogintypePage implements OnInit {
    price: any = '';
    //
  	constructor(private alertCtrl: AlertController,
    public menuCtrl: 	MenuController,
    private router: Router,
    private _global: GlobalService,
    private httpClient:HttpClient,
    public loadingController:LoadingController,
    public myapp: AppComponent,
    private route: ActivatedRoute) {
  		  this.menuCtrl.enable(true);
  		  //this.price = this.route.snapshot.params['price'];
  	}

  	ngOnInit() {

  	}
    ionViewDidEnter(){
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
  	stafflogin(){
  		this.router.navigateByUrl('/login/0');

  	}

    staffrequests(){
      this._global.userrole = 2;
      this.myapp.staffmenunologin();
      this.router.navigateByUrl('/requests');
    }

  	helperlogin(){
  		this.router.navigateByUrl('/helperlogin');
  	}

    helperrequests(){
      this._global.userrole = 3;
      this.myapp.helpermenunologin();
      this.router.navigateByUrl('/searchhospitals');
    }
}
