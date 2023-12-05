import { Component } from '@angular/core';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent {
  isLoading: boolean = false;
  categoryData = [];

  categorySetting = {
    modalName: 'createCategory',
    size: 'lg',
    modalTitle: 'Thêm Danh Mục',
    btnSave: 'Tạo Mới',
    btnClose: 'Đóng',
    type: 'category',
    data: {},
  };

  categoryHeader = [
    {
      key: 'id',
      label: 'ID Danh Mục Chính',
      type: 'text',
    },
    {
      key: 'categoryName',
      label: 'Danh Mục Chính',
      type: 'text',
    },
    {
      key: 'categorySlug',
      label: 'Tên Đường Dẫn Chính',
      type: 'text',
    },
    {
      key: 'subCategoryId',
      label: 'ID Danh Mục Phụ',
      type: 'text',
    },
    {
      key: 'subCategoryName',
      label: 'Danh Mục Phụ',
      type: 'text',
    },
    {
      key: 'subCategorySlug',
      label: 'Tên Đường Dẫn Phụ',
      type: 'text',
    },
    {
      key: 'action',
      label: 'Delete',
      type: 'button',
    },
  ];

  constructor(private categoryService: CategoryService) {
    this.categoryService.getAllCategory().subscribe((res) => {
      const transformedData = res
        .map((category: any) => {
          return category.subCategories.map((subCategory: any) => {
            return {
              id: category.id,
              categoryName: category.categoryName,
              subCategoryId: subCategory.subCategoryId,
              subCategoryName: subCategory.subCategoryName,
              categorySlug: category.categorySlug,
              subCategorySlug: subCategory.subCategorySlug,
            };
          });
        })
        .flat();

      this.categoryData = transformedData;
    });
  }

  receiveEvent(event: any) {
    console.log(event);
    if (event.action === 'Delete') {
      const data = {
        categoryId: event.data.id,
        subCategoryId: event.data.subCategoryId,
      };

      this.isLoading = true;

      this.categoryService.deleteCategory(data).subscribe((res: any) => {
        if (res) {
          // Update UI
          this.categoryData = this.categoryData.filter(
            (item: any) => item.subCategoryId !== event.data.subCategoryId
          );
          this.isLoading = false;
        }
      });
    }
  }
}
