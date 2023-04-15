import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api/api-service.service';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/products/products.model';
import { LoggedinServiceService } from 'src/app/services/loggedin/loggedin-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  userID: string = '';
  isLogedIn: boolean = false;

  constructor(private api: ApiServiceService, private router: Router, private loggedin: LoggedinServiceService) { }

  ngOnInit(): void {

    this.api.getAllProducts().subscribe((result: Product[]) => {
      console.log(result)
      this.products = result;
      // console.log("hi", this.products)
    })

    this.isLogedIn = this.loggedin.isLogedIn();
    if (this.isLogedIn) {
      this.userID = this.loggedin.getUserId();
      console.log(this.userID);
    }
  }

  addToCart(product_id: string) {
    if (this.isLogedIn) {
      // this.userID = this.loggedin.getUserId();
      this.api.addToCart(this.userID, product_id).subscribe(result => {
        console.log("after adding", result);
      });
    } else {
      this.router.navigate(['user-login']);
    }
  }

  addToWishlist(product_id: string) {
    if (this.isLogedIn) {
      // this.userID = this.loggedin.getUserId();
      this.api.addToWishList(this.userID, product_id).subscribe(result => {
        console.log(result);
      });
    } else
      this.router.navigateByUrl("/user-login");
  }
}
