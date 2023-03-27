import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AdminAuthComponent } from './admin-auth/admin-auth.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import { ProductsComponent } from './products/products.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { HttpClientModule } from '@angular/common/http';
import { UserLoginComponent } from './user-login/user-login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdminAuthComponent,
    HomeComponent,
    ProductsComponent,
    UserRegistrationComponent,
    UserLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
