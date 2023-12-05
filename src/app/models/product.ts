export interface Product {
  id: number;
  sku: string;
  barcode: string;
  productName: string;
  price: number;
  productDescription: string;
  discount: number;
  discountStartTime: string;
  discountEndTime: string;
  brand: string;
  origin: string;
  avatar: string;
  subCategory: SubCategory;
}

export interface SubCategory {
  id: number;
  subCategoryName: string;
  categoryId: CategoryId;
}

export interface CategoryId {
  id: number;
  categoryName: string;
}

export interface ProductRes {
  id: number;
  sku: string;
  barcode: string;
  productName: string;
  price: number;
  productDescription: string;
  discount: number;
  discountStartTime: string;
  discountEndTime: string;
  brand: string;
  origin: string;
  avatar: string;
  subCategory: string;
  category: string;
}
