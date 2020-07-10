import { Component, OnInit } from '@angular/core';
import {AlertController, MenuController, LoadingController } from "@ionic/angular";
import { GlobalService } from '../../global.service';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';
import {AppComponent} from '../../app.component';
@Component({
  selector: 'app-requests',
  templateUrl: './requests.page.html',
  styleUrls: ['./requests.page.scss'],
})
export class RequestsPage implements OnInit {

  	constructor(private alertCtrl: AlertController,public menuCtrl: 	MenuController,private router: Router,private _global: GlobalService,private httpClient:HttpClient,public loadingController:LoadingController,public myapp: AppComponent) {
  		
  		  this.menuCtrl.enable(true);
  	}

  	ngOnInit() {
  	}

    ionViewDidEnter(){
        this.myapp.aboutmenu = 0;
    }
    
  	foodrequest(){
      this.router.navigateByUrl('/foodrequest/0/0/0');
  	}

  	essentialsrequest(){
  		this.router.navigateByUrl('/essentialsrequest/0/0/0');
  	}

  	childcarerequest(){
  		this.router.navigateByUrl('/childcarerequest/0/0/0');
  	}

}
