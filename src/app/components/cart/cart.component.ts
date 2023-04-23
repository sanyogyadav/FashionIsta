import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api/api-service.service';
import { LoggedinServiceService } from 'src/app/services/loggedin/loggedin-service.service';
import { Product } from 'src/app/models/products/products.model';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products: Product[] = [];
  userID: string ='';
  isLogedIn: boolean = false;

  constructor(private _snackbar: MatSnackBar, private api: ApiServiceService, private router: Router, private loggedin : LoggedinServiceService) { }

  ngOnInit(): void {
    
    this.isLogedIn = this.loggedin.isLogedIn();
    if(this.isLogedIn){

      this.userID = this.loggedin.getUserId();
      this.api.getCart(this.userID).subscribe((result:Product[]) => {
      this.products = result
      })
    }
      else{
      this.router.navigate(['user-login']);
    }
  }

  deleteFromCart(userid : string, productid : string) {
    this.api.deleteFromCart(userid,productid).subscribe((result : any) => {
      this._snackbar.open(result["message"],"ok")
      this.ngOnInit();
    })
  }
}