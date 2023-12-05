import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  createProduct(data: any) {
    return this.http.post(`${environment.apiUrl}/product/create-product`, data);
  }

  getAllProducts(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/product/get-all`);
  }
}
