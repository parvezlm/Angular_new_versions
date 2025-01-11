import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { Product } from "../common/product";


@Injectable({
    providedIn: 'root',
})
export class DataService {
    private readonly BASE_URL: string = 'https://fakestoreapi.com/';

    constructor(private http: HttpClient) { }

    // get all categories
    getCategories() {
        return this.http.get(this.BASE_URL + 'products/categories');
    }

    // get all products by category
    getCategoryProducts(category: string): Observable<Product> {
        return this.http.get<Product>(this.BASE_URL + `products/category/${category}`);
    }

    //get all products
    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(this.BASE_URL + 'products');
    }

    //get product details
    getProductDetails(id: number): Observable<Product> {
        return this.http.get<Product>(this.BASE_URL + `products/${id}`);
    }
}