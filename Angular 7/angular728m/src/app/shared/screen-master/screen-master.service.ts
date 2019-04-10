import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ScreenMaster } from 'src/app/models/screen-master';

@Injectable({
  providedIn: 'root'
})
export class ScreenMasterService {
 // private baseUrl = 'http://192.168.10.165:9991';
 private baseUrl = 'http://localhost:9991';

 // private baseUrl = 'http://192.168.8.105:9991';
  // Tomcat URL USIT OFFICE
  // private baseUrl = 'http://192.168.10.165:8082/oshopservice/';
 screenMaster =  new ScreenMaster();
  constructor(private _http:  HttpClient) { }

  getScreenMasterList() {
    console.log('Get screenmaster List');
    return this._http.get<ScreenMaster[]>(this.baseUrl + '/screenmaster/screenMasterList');

  }



  setScreenMaster(screenMaster: ScreenMaster) {
    console.log('in Service: set  screenMaster: ', screenMaster);
      this.screenMaster = screenMaster ;
  }
  getScreenMaster(): ScreenMaster {
    console.log('in Service: get screenMaster: ', this.screenMaster);

      return this.screenMaster;
  }
}
