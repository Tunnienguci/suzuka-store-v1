import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class CloudinaryService {
  keyCode: string = environment.cloudinary;
  constructor(private http: HttpClient) {}

  // [POST] Upload image to cloudinary
  uploadImage(data: any): Observable<any> {
    let url = `${this.keyCode}/image/upload`;
    return this.http.post(url, data);
  }

  uploadAvatarImage(data: any): Observable<any> {
    let url = `${this.keyCode}/image/upload`;
    return this.http.post(url, data);
  }
}
