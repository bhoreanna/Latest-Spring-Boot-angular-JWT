import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../models/product/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
product = new Product();
  private baseUrl = 'http://localhost:9991';
  //private baseUrl = 'http://192.168.10.165:9991';
 // private baseUrl = 'http://192.168.8.105:9991';

  // Tomcat URL USIT OFFICE
 // private baseUrl = 'http://192.168.10.165:8082/oshopservice/';


  constructor(private _http:  HttpClient) { }

 public  getProductList() {
    return this._http.get<Product[]>(this.baseUrl + '/products/productsList');
  }


  saveProduct(product: Product) {
    console.log(' in prductService', product );


  return this._http.post(this.baseUrl + '/products/saveProduct', product);

}

getProduct(productId: number) {
  console.log('In Product Service Product Id: ', productId );
  return this._http.post<Product>(this.baseUrl + '/products/getProduct', productId);
}

setProduct(product: Product ) {
this.product = product;
console.log('Product is Set: ', this.product);
}

public getEditProduct() {
  console.log('Product is Return: ');
  return this.product;
}
}
