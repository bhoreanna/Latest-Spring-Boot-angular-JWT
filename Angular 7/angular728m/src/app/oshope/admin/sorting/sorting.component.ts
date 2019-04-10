import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from '../../models/product/product';
import { MatTableDataSource, MatSort, Sort } from '@angular/material';
import { ProductsService } from '../../share/products/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss']
})
export class SortingComponent implements OnInit {

  products: Product [] = [];
  sortedDataed: Product [] = [];
  constructor(private productsService: ProductsService,
    private router: Router) { }
  ngOnInit() {
    this.productsService.getProductList().subscribe(product => {
      this.products = product;
      this.sortedDataed = this.products;
  });
}



sortData(sort: Sort) {
  const data = this.products.slice();
  if (!sort.active || sort.direction === '') {
    this.sortedDataed = data;
    return;
  }


  this.sortedDataed = data.sort((a, b) => {
    const isAsc = sort.direction === 'asc';
    switch (sort.active) {
      case 'productId': return compare(a.productId, b.productId, isAsc);
      case 'price': return compare(a.price, b.price, isAsc);
      case 'title': return compare(a.title, b.title, isAsc);
      default: return 0;
    }
  });



function compare(a: number | string, b: number | string, isAsc: boolean) {
return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

}
}
