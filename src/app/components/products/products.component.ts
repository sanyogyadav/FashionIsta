import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api/api-service.service';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/products/products.model';
import { LoggedinServiceService } from 'src/app/services/loggedin/loggedin-service.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  userID: string = '';
  isLogedIn: boolean;

  constructor(private _snackbar: MatSnackBar, private api: ApiServiceService, private router: Router, private loggedin: LoggedinServiceService) { }

  ngOnInit(): void {
      this.api.getAllProducts().subscribe((result: Product[]) => {
      this.products = result;
    })

    this.isLogedIn = this.loggedin.isLogedIn();
    if(this.isLogedIn) {
      console.log(this.isLogedIn);
      this.userID = this.loggedin.getUserId();
      console.log(this.userID);
    }else {
      console.log("Cannot login");
    }
  }

  addToCart(product_id: string) {
    if (this.isLogedIn) {
      this.api.addToCart(this.userID,product_id).subscribe(result => {
        this._snackbar.open(result["message"],"Ok");
      });
    } else {
      this.router.navigate(['user-login']);
    }
  }

  addToWishlist(product_id: string) {
    if (this.isLogedIn) {
      this.api.addToWishList(this.userID, product_id).subscribe(result => {
        this._snackbar.open(result["message"],"Ok");
      });
    } else
      this.router.navigateByUrl("/user-login");
  }
}