import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SearchService {
  baseUrl = `http://localhost:3001/products/`;
  constructor(private http: HttpClient) { }
  getProducts(queryString: string) {
    const _URL = this.baseUrl + queryString;
    return this.http.get(_URL);
  }
}
