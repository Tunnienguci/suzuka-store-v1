import { Component } from '@angular/core';
import { Product, ProductRes } from 'src/app/models/product';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  productSetting = {
    modalName: 'createProduct',
    size: 'xl',
    modalTitle: 'Thêm Sản Phẩm',
    btnSave: 'Tạo Mới',
    btnClose: 'Đóng',
    type: 'product',
    data: {},
  };

  productHeader = [
    {
      key: 'sku',
      label: 'SKU',
      type: 'text',
    },
    {
      key: 'barcode',
      label: 'Barcode',
      type: 'text',
    },
    {
      key: 'productName',
      label: 'Tên Sản Phẩm',
      type: 'text',
    },
    {
      key: 'price',
      label: 'Giá',
      type: 'price',
    },
    {
      key: 'subCategory',
      label: 'Danh Mục Phụ',
      type: 'text',
    },
    {
      key: 'category',
      label: 'Danh Mục Chính',
      type: 'text',
    },
    {
      key: 'avatar',
      label: 'Ảnh Đại Diện',
      type: 'image',
    },
    {
      key: 'brand',
      label: 'Thương Hiệu',
      type: 'text',
    },
    {
      key: 'origin',
      label: 'Xuất Xứ',
      type: 'text',
    },
    {
      key: 'discount',
      label: 'Giảm Giá',
      type: 'discount',
    },
    {
      key: 'preview',
      label: 'View',
      type: 'button',
    },
    {
      key: 'delete',
      label: 'Delete',
      type: 'button',
    },
  ];

  productData: ProductRes[] = [];

  constructor(private productService: ProductService) {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productService.getAllProducts().subscribe((res: Product[]) => {
      this.productData = res.map((product) => {
        return {
          id: product.id,
          sku: product.sku,
          barcode: product.barcode,
          productName: product.productName,
          price: product.price,
          productDescription: product.productDescription,
          discount: product.discount,
          discountStartTime: product.discountStartTime,
          discountEndTime: product.discountEndTime,
          brand: product.brand,
          origin: product.origin,
          avatar: product.avatar,
          subCategory: product.subCategory.subCategoryName,
          category: product.subCategory.categoryId.categoryName,
        };
      });
    });
  }
}
