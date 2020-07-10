import { Component, OnInit } from '@angular/core';
import {AlertController, MenuController, LoadingController } from "@ionic/angular";
import { GlobalService } from '../global.service';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';
import {AppComponent} from '../app.component';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

 	constructor(private alertCtrl: AlertController,public menuCtrl: 	MenuController,private router: Router,private _global: GlobalService,private httpClient:HttpClient,public loadingController:LoadingController,public myapp: AppComponent,private nativeStorage: NativeStorage) {
	  	this.menuCtrl.enable(true);
  	}

	ngOnInit() {
	}

  	ionViewDidEnter(){
  		this.myapp.aboutmenu = 1;

  	}

}
