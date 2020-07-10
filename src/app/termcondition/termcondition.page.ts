import { Component, OnInit } from '@angular/core';
import {AlertController, MenuController, LoadingController } from "@ionic/angular";
import { GlobalService } from '../global.service';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';
import {AppComponent} from '../app.component';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-termcondition',
  templateUrl: './termcondition.page.html',
  styleUrls: ['./termcondition.page.scss'],
})
export class TermconditionPage implements OnInit {

	  constructor(private alertCtrl: AlertController,public menuCtrl: 	MenuController,private router: Router,private _global: GlobalService,private httpClient:HttpClient,public loadingController:LoadingController,public myapp: AppComponent,private nativeStorage: NativeStorage) {
	  	//this.menuCtrl.enable(false);
  	}
    ionViewDidEnter(){
        this.myapp.aboutmenu = 0;
        //this.menuCtrl.enable(false);
    }

  	ngOnInit() {
        

       // this.myapp.checklogin();
  	}

  	logintype(){
  		this.router.navigateByUrl('/logintype');
  	}

    register(){
      this.router.navigateByUrl('/register');
    }

    readKey(){

    }

}
