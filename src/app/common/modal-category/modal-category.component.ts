import { Component, Input } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from '../../services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'szk-modal-category',
  templateUrl: './modal-category.component.html',
  styleUrls: ['./modal-category.component.scss'],
})
export class ModalCategoryComponent {
  @Input() payload: any;
  @Input() modalSettings: any;
  isLoading: boolean = false;
  categoryForm: FormGroup;

  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) {
    this.categoryForm = new FormGroup({
      category_name: new FormControl('', Validators.required),
      sub_category: new FormArray([]),
    });
  }

  get subCategory() {
    return this.categoryForm.get('sub_category') as FormArray;
  }

  addMoreSubCategory() {
    const subCategory = this.categoryForm.get('sub_category') as FormArray;
    subCategory.push(new FormControl('', Validators.required));
  }

  removeSubCategory(index: number) {
    const subCategory = this.categoryForm.get('sub_category') as FormArray;
    subCategory.removeAt(index);
  }

  onSubmit() {
    if (this.categoryForm.invalid) {
      return;
    } else {
      const { category_name, sub_category } = this.categoryForm.value;

      const subCategories = sub_category.map((sub: string) => {
        return sub.trim();
      });

      const data = {
        categoryName: category_name,
        subCategoryName: subCategories,
      };

      this.categoryService.createCategory(data).subscribe((res) => {
        this.categoryForm.reset();
        window.location.reload();
      });
    }
  }
}
