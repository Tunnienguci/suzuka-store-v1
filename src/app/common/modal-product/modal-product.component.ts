import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { distinctUntilChanged } from 'rxjs/operators';
import { CloudinaryService } from 'src/app/services/cloudinary.service';
import { CategoryService } from 'src/app/services/category.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'szk-modal-product',
  templateUrl: './modal-product.component.html',
  styleUrls: ['./modal-product.component.scss'],
})
export class ModalProductComponent implements OnInit {
  @Input() payload: any; // Consider using a specific interface
  @Input() modalSettings: any;
  isLoading: boolean = false;

  productForm: FormGroup = new FormGroup({});
  categories: any[] = [];
  subCategories: any[] = [];
  imageList: string[] = [];
  imageTemp: string[] = [];
  avatar: string = '';
  description: string = '';
  public Editor = ClassicEditor;
  public data: any;

  private initializeData() {
    this.data = {
      product_name: '',
      sku: '',
      barcode: '',
      price: '',
      category: '',
      sub_category: '',
      description: this.description,
      discount: 0,
      start_date: '',
      end_date: '',
      provider: '',
      made_in: '',
      brand: '',
      images: [],
    };
  }

  constructor(
    private cloudinary: CloudinaryService,
    private categoryService: CategoryService,
    private productService: ProductService
  ) {
    this.initForm();
  }

  ngOnInit(): void {
    this.fetchCategories();
    this.initializeData();
  }

  private initForm() {
    this.productForm = new FormGroup({
      product_name: new FormControl('', Validators.required),
      sku: new FormControl('', Validators.required),
      barcode: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      sub_category: new FormControl('', Validators.required),
      discount: new FormControl(0),
      start_date: new FormControl(''),
      end_date: new FormControl(''),
      provider: new FormControl('', Validators.required),
      made_in: new FormControl('', Validators.required),
      brand: new FormControl('', Validators.required),
    });

    this.productForm.valueChanges
      .pipe(distinctUntilChanged())
      .subscribe((data) => {
        // Handle form value changes
        this.data = {
          product_name: data.product_name,
          sku: data.sku,
          barcode: data.barcode,
          price: data.price,
          category: data.category,
          sub_category: data.sub_category,
          discount: data.discount,
          start_date: data.start_date,
          end_date: data.end_date,
          provider: data.provider,
          made_in: data.made_in,
          brand: data.brand,
          images: this.imageList,
        };
      });
  }

  private fetchCategories() {
    this.categoryService.getAllCategory().subscribe((res) => {
      this.categories = res;
    });
  }

  public onReady(editor: any) {
    // Handle CKEditor ready
    editor.data.set(this.description);
  }

  public onChange({ editor }: ChangeEvent) {
    // Handle CKEditor change
    this.description = editor.data.get();
  }

  updateSubCategories(e: any) {
    // Update subcategories logic
    const categoryId = e.target.value;
    const selectedCategory = this.categories.find(
      (category) => category.id === Number(categoryId)
    );
    this.subCategories = selectedCategory ? selectedCategory.subCategories : [];
  }

  onFileChangeAvatar(event: any) {
    if (event.target.files && event.target.files.length === 1) {
      const file = event.target.files[0];
      const data = new FormData();
      data.append('file', file);
      data.append('upload_preset', 'suzuka');
      data.append('cloud_name', 'suzuka');

      this.isLoading = true;

      this.cloudinary.uploadAvatarImage(data).subscribe((res) => {
        if (res) {
          this.avatar = res.secure_url;
          this.isLoading = false;
        }
      });
    }
  }

  onFileChange(event: any) {
    const files = event.target.files;
    if (files && files.length > 0 && files.length <= 5) {
      for (let i = 0; i < files.length; i++) {
        const data = new FormData();
        data.append('file', files[i]);
        data.append('upload_preset', 'suzuka');
        data.append('cloud_name', 'suzuka');

        this.isLoading = true;
        this.cloudinary.uploadImage(data).subscribe((res) => {
          if (res) {
            this.imageList.push(res.secure_url);
            this.isLoading = false;
          }
        });
      }
    }
  }

  onSubmit() {
    if (this.imageList.length === 0) {
      alert('Please upload at least one image');
      return;
    }

    if (this.productForm.valid) {
      //Find obj subCategoryId => subCategoryName
      const selectedCategory = this.categories.find(
        (category) => category.id === Number(this.data.category)
      );
      const selectedSubCategory = selectedCategory.subCategories.find(
        (subCategory: any) =>
          subCategory.subCategoryId === Number(this.data.sub_category)
      );

      this.data.sub_category_id = {
        subCategoryName: selectedSubCategory.subCategoryName,
        id: Number(this.data.sub_category),
        categoryId: {
          categoryName: selectedCategory.categoryName,
          id: Number(this.data.category),
        },
      };

      const payload = {
        sku: this.data.sku,
        barcode: this.data.barcode,
        product_name: this.data.product_name,
        product_description: this.description,
        origin: this.data.made_in,
        sub_category_id: this.data.sub_category_id,
        price: this.data.price,
        discount: this.data.discount,
        brand: this.data.brand,
        discount_start_time: this.data.start_date,
        discount_end_time: this.data.end_date,
        avatar: this.avatar,
        images: this.imageList,
      };

      this.isLoading = true;

      this.productService.createProduct(payload).subscribe((res) => {
        if (res) {
          this.isLoading = false;
          alert('Create product successfully');
          window.location.reload();
        }
      });
    }
  }
}
