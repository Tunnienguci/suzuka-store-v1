export interface Category {
  id: number;
  categoryName: string;
  categorySlug: string;
  subCategories: SubCategory[];
}

export interface SubCategory {
  subCategoryId: number;
  subCategoryName: string;
  subCategorySlug: string;
}
