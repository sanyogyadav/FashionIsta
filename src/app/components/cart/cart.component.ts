import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api/api-service.service';
import { LoggedinServiceService } from 'src/app/services/loggedin/loggedin-service.service';
import { Product } from 'src/app/models/products/products.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products: Product[] = [];
  userID: string ='';
  isLogedIn: boolean = false;

  constructor(private api: ApiServiceService, private router: Router, private loggedin : LoggedinServiceService) { }

  ngOnInit(): void {
    
    this.isLogedIn = this.loggedin.isLogedIn();
    if(this.isLogedIn){
      // console.log("hi",this.isLogedIn);
      this.userID = this.loggedin.getUserId();
      // console.log("checking id of user",this.userID);
      this.api.getCart(this.userID).subscribe((result:Product[]) => {
        this.products = result
      console.log(this.userID,this.products.length,"just checking")
      })
    }
      else{
        this.router.navigate(['user-login']);
      }
  }

  deleteFromCart(userid : string, productid : string) {
    this.api.deleteFromCart(userid,productid).subscribe((result : any) => {
      // console.log(result);
      window.location.reload();
    })
  }
}