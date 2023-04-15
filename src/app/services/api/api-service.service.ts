import { User } from '../../models/users/user.model'
import { Product } from '../../models/products/products.model'
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  url = 'http://localhost:3000';

  constructor(private http:HttpClient) { }

  //Users - Admin
  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}/user`)
  }

  getUserById(id:string): Observable<User> {
    return this.http.get<User>(`${this.url}/user/${id}`);
  }

  deleteUserById(id:string): Observable<User> {
    return this.http.delete<User>(`${this.url}/user/${id}`);
  }

  addNewUser(username: string, email: string, pass: string): Observable<User> {
    return this.http.post<User>(`${this.url}/user`,{
      username: username,
      email: email,
      password: pass,
    })
  }

  editUser(id:string, username: string, email: string): Observable<User>{
    return this.http.patch<User>(`${this.url}/user/${id}`, {
      username:username,
      email:email,
    })
  }

  //Authentication
  signup(username: string, email: string, password: string): Observable<any> {
    console.log("service signup",username,email,password);
    return this.http.post(`${this.url}/auth/signup`, {
      username:username,
      email:email,
      password:password,
    })
  }

  login(email: string, password: string ): Observable<any> {
    return this.http.post(`${this.url}/auth/login`, {
      email: email,
      password: password,
    })
  }

  //products- Admin
  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.url}/product`);
  }

  getProductById(id: string): Observable<Product>{
    return this.http.get<Product>(`${this.url}/product/${id}`);
  }

  deleteProductById(id: string): Observable<Product>{
    // console.log(id);
    return this.http.delete<Product>(`${this.url}/product/${id}`);
  }

  addNewProduct(type: string, brand: string, desc: string): Observable<Product> {
    return this.http.post<Product>(`${this.url}/product`, {
      product_type: type,
      brand_name: brand,
      description: desc,
    })
  }

  editProduct(id: string, type: string, brand: string, desc: string): Observable<Product> {
    return this.http.post<Product>(`${this.url}/product/${id}`, {
      product_type: type,
      brand_name: brand,
      description: desc,
    })
  }

  //wish-list

  getWishList(id: string): Observable<Product[]> {
    console.log(id,"This is id")
    return this.http.get<Product[]>(`${this.url}/wish-list/${id}`);
  }

  addToWishList(user_id: string, product_id: string): Observable<Product> {
    return this.http.post<Product>(`${this.url}/wish-list/${user_id}`, {
      product_id : product_id
    });
  }

  deleteFromWishList(id: string, product_id: string): Observable<Product> {
    return this.http.delete<Product>(`${this.url}/wish-list/delete_product/${id}`, {
      body : { product_id: product_id }
    })
  }

  deleteWishList(id: string): Observable<Product> {
    return this.http.delete<Product>(`${this.url}/wish-list/${id}`);
  }

  //Add to cart
  getCart(id: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.url}/cart/${id}`);
  }

  addToCart(user_id: string, product_id: string): Observable<Product> {
    return this.http.post<Product>(`${this.url}/cart/${user_id}`, {
      product_id: product_id
    });
  }

  deleteFromCart(id: string, product_id: string): Observable<Product> {
    return this.http.delete<Product>(`${this.url}/cart/delete_product/${id}`, {
      body:  { product_id: product_id}
    });
  }

  // emptyCart(id: string): Observable<Product> {
  //   return this.http.delete<Product>(`${this.url}/cart/${id}`);
  // }

  emptyCart(id: string){
    return this.http.delete(`${this.url}/cart/empty_cart/${id}`);
  }
}