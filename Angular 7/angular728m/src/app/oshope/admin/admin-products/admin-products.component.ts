import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from '../../models/product/product';
import { ProductsService } from '../../share/products/products.service';
import { Router } from '@angular/router';
import {MatSort, MatTableDataSource, MatPaginator, MatDialogConfig, MatDialog} from '@angular/material';
import { ProductFormComponent } from '../product-form/product-form.component';
import { NotificationService } from '../../share/notification.service';
import { DialogService } from '../../share/dialog.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements OnInit {
  products: Product [] = [];
  filteredProducts: Product[];


  dataSource:  MatTableDataSource<Product>;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = ['productId', 'title' , 'categoryId' , 'actions'];
  constructor(private productsService: ProductsService,
    private router: Router,
   private notificationService: NotificationService,
  private dialogService: DialogService,
    private dialog: MatDialog) { }


  ngOnInit() {
    this.productsService.getProductList().subscribe(product => {
        this.products = product;
       this.dataSource = new  MatTableDataSource(this.products);
       this.filteredProducts = this.products;
       this.dataSource .sort = this.sort;
       this.dataSource.paginator = this.paginator;
    });
  }

  onCreate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(ProductFormComponent , dialogConfig);
  }

  // filter(query: string) {
  //   // console.log(query);
  //   this.filteredProducts = (query) ?
  //   this.products.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) : this.products;
  // }


  filter(query: string) {
    // console.log(query);
    this.filteredProducts = (query) ?
    this.products.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) : this.products;
    this.dataSource = new  MatTableDataSource( this.filteredProducts );
    this.dataSource .sort = this.sort;
    this.dataSource.paginator = this.paginator;


    }


  onDelete(productId: number) {

    // if (confirm('Are you sure to delete this record ?')) {
    //     console.log('productId: ', productId);
    //     this.notificationService.warn('! SucessFully Deleted This Product: ' + productId);
    // }
    this.dialogService.openConfirmDialog(' Are You Sure Delete This Product ID: ' + productId).afterClosed().subscribe(res => {
      console.log('Return Result: ' + res);
          this.notificationService.warn('! SucessFully Deleted This Product: ' + productId);


    });
}

onEdit(product: Product) {
    console.log('Product in Edit: ', product);
    this.productsService.setProduct(product);

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(ProductFormComponent, dialogConfig);



}
}
