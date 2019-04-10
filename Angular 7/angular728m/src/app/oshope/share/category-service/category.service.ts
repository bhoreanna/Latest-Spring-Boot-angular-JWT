import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../../models/category/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private baseUrl = 'http://localhost:9991';
 // private baseUrl = 'http://192.168.10.165:9991';
 // private baseUrl = 'http://192.168.8.105:9991';
 // Tomcat URL USIT OFFICE
// private baseUrl = 'http://192.168.10.165:8082/oshopservice/';

  constructor(private _http:  HttpClient) { }

 public  getCategoryList() {
    return this._http.get<Category[]>(this.baseUrl + '/categories/productCategoriesList');
  }
}

