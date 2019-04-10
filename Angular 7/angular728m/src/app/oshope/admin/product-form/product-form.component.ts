import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { CategoryService } from '../../share/category-service/category.service';
import { Category } from '../../models/category/category';
import { Subscription } from 'rxjs';
import { Product } from '../../models/product/product';
import { ProductsService } from '../../share/products/products.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialogRef } from '@angular/material';
import { NotificationService } from '../../share/notification.service';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit , OnDestroy , OnChanges {
categories: Category[] = [];
subscription: Subscription;
subscription1: Subscription;

product: Product = new Product();
date: Date = new Date();
    settings = {
        bigBanner: true,
        timePicker: false,
        format: 'dd-MM-yyyy',
        defaultOpen: false
    };

  constructor(private categoryService: CategoryService, private productsService: ProductsService,
     private router: Router  , private route: ActivatedRoute,
      public dialogRef: MatDialogRef<ProductFormComponent> , private notificationService: NotificationService) {

      this.product = this.productsService.getEditProduct();
      console.log('this.product in Product Form: ' , this.product);
     }

  ngOnInit() {
  this.subscription =  this.categoryService.getCategoryList().subscribe( data  => {
    this.categories = data;
    console.log('this.categories' , this.categories);
    });


    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    console.log('Product Id: ', id);
    if (id) {
     this. subscription1 =   this.productsService.getProduct(id).subscribe(product => {
         this.product = product;
         console.log('product ', product);
       });


       // Change Logic
    }
  }



  onSubmit( ) {
    console.log(this.product);

    this.productsService.saveProduct(this.product).subscribe (res => {
    console.log('Result: ' , res);
    this.notificationService.success(':: Submitted successfully');
    this.onClose();
    this.router.navigate(['/shopping/admin-products']);
    });

    }

    ngOnDestroy () {
        this.subscription.unsubscribe();
       // this. subscription1.unsubscribe();
    }
    ngOnChanges() {
      console.log('Date: ', this.date );
    }

    onClose() {
      this.dialogRef.close();
      this.productsService.setProduct(new Product());
    }
}
