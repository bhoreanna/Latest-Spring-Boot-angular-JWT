import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product/product';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';
import { Subscription } from 'rxjs';
import { ProductsService } from '../share/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {

  products: Product[] = [];
  filteredProducts: Product[] = [];
  categories$: Observable<any[]>;
  category: string;
  testResult = false;
  cart: any;
  subscription: Subscription;
   cart$: Observable<any> ;
  constructor(private productService: ProductsService,  private route: ActivatedRoute) {
   this.subscription = this.productService.getProductList().subscribe(product => {
      this.products = product;
      console.log('Product List: ', this.products  );
    });


  }
  ngOnInit() {

  }

  // async ngOnInit() {
  //   this.subscription = (await this.shoppingCartService.getCart())
  //   .subscribe(cart => this.cart = cart);
  // }



    ngOnDestroy() {
      console.log('Destroy subscription');
      this.subscription.unsubscribe();
    }

}
