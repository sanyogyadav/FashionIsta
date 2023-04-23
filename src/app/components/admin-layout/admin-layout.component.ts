import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api/api-service.service';
import { LoggedinServiceService } from 'src/app/services/loggedin/loggedin-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/models/products/products.model';
import { User } from 'src/app/models/users/user.model';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {

  addition !: FormGroup;
  userAdd !: FormGroup;
  users : User[] =[];
  message: string = '';
  products: Product[] = [];
  updateKey: string = '';
  userKey: string = '';
  productObj: Product = new Product;

  constructor(private _snackbar: MatSnackBar, private fb: FormBuilder, private api: ApiServiceService, private logedin: LoggedinServiceService) { }

  ngOnInit(): void {
    this.updateKey = '';
    this.userKey = '';
    this.addition = this.fb.group({
      ptype: ['', [Validators.required]],
      bname: ['', [Validators.required]],
      pdescription: ['', [Validators.required, Validators.minLength(6)]],
      purl: [''],
      pprice: ['', [Validators.required]],
    })

    this.userAdd = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required]],
      pass: ['', [Validators.required, Validators.minLength(6)]],
    })

    this.api.getAllProducts().subscribe((result: any) => {
      this.products = result
      console.log(this.products);
    })

    this.api.getAllUsers().subscribe(result => {
      this.users = result
      console.log(this.users,"checking users details");
    })
  }

  addProduct() {
    if (this.addition.valid) {
      let ptype = this.addition.value.ptype
      let bname = this.addition.value.bname
      let pdescription = this.addition.value.pdescription
      let purl = this.addition.value.purl
      let pprice = this.addition.value.pprice

      this.api.addNewProduct(ptype, bname, pdescription, purl, pprice).subscribe(result => {
        this._snackbar.open("Product Added Successfully!!","ok");
        console.log(result);
        this.ngOnInit();
      })
    }
    else {
      this._snackbar.open("Invalid Product Details...","ok");
    }
  }

  deleteProduct(product_id: string) {
    this.api.deleteProductById(product_id).subscribe((result: any) => {
      this._snackbar.open("Selected product deleted successfully!!","ok");
      this.ngOnInit();
    })
  }

  updateProductCheck(product) {
    console.log(product);
    this.updateKey = 'UPDATEPRODUCT';
    this.productObj = product;
  }

  updateProductSubmit(ptype: string, bname: string,pdescription: string, purl: string, pprice: string ) {
    this.api.editProduct(this.productObj._id, ptype, bname, pdescription, purl, +pprice).subscribe(result => {
      this._snackbar.open("Selected product updated successfully!!","ok");
      this.ngOnInit();
    })
  }

  addUserCheck() {
    this.userKey = "Users";
  }

  addUser() {
    if (this.userAdd.valid) {
      let username = this.userAdd.value.username
      let email = this.userAdd.value.email
      let pass = this.userAdd.value.pass

      this.api.addNewUser(username, email, pass).subscribe(result => {
        this._snackbar.open("User added successfully!!","ok");
        this.ngOnInit();
      })
    }
    else {
      this._snackbar.open("Invalid user credentials","ok");
    }
  }

  deleteUser(user_id : string) {
    this.api.deleteUserById(user_id).subscribe((result: any) => {
      this._snackbar.open("User deleted successfully","ok");
      this.ngOnInit();
    })
  }

  deleteUserCheck() {
    this.ngOnInit();
  }
}