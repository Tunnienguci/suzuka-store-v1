import { Component } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  countProduct: number = 0;
  countCategory: number = 0;
  countSubCategory: number = 0;
  countDiscount: number = 0;
  constructor(
    private ProductServce: ProductService,
    private categoryService: CategoryService
  ) {
    this.ProductServce.getAllProducts().subscribe((res) => {
      this.countProduct = res.length;
    });

    this.categoryService.getAllCategory().subscribe((res) => {
      this.countCategory = res.length;
      this.countSubCategory = res
        .map((category: any) => category.subCategories.length)
        .reduce((a: number, b: number) => a + b, 0);
    });
  }
}
