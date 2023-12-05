import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  getAllCategory(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/category/get-all`);
  }

  createCategory(data: any): Observable<any> {
    return this.http.post(
      `${environment.apiUrl}/category/create-category`,
      data
    );
  }

  deleteCategory(data: {
    categoryId: number;
    subCategoryId: number;
  }): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/category/delete-category`, {
      params: new HttpParams()
        .set('categoryId', data.categoryId)
        .set('subCategoryId', data.subCategoryId),
    });
  }
}
