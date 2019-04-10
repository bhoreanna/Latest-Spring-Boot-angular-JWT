import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ScreenModule } from 'src/app/models/screen-module';

@Injectable({
  providedIn: 'root'
})
export class ScreenModuleService {
  // private baseUrl = 'http://192.168.10.165:9991';
  // private baseUrl = 'http://192.168.8.105:9991';
  private baseUrl = 'http://localhost:9991';

  // Tomcat URL USIT OFFICE
 // private baseUrl = 'http://192.168.10.165:8082/oshopservice/';

  screenModule =  new ScreenModule();
  constructor(private _http:  HttpClient) { }

  getScreenModuleList() {
    console.log('Get ScreenModule List');
    return this._http.get<ScreenModule[]>(this.baseUrl + '/screenmodule/screenModuleList');
  }

  setscreenModule(screenModule: ScreenModule) {
    console.log('in Service: set  screenModule: ', screenModule);
      this.screenModule = screenModule ;
  }
  getScreenModule(): ScreenModule {
    console.log('in Service: get screenModule: ', this.screenModule);

      return this.screenModule;
  }
}
