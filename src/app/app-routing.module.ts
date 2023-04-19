import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AdminAuthComponent } from './components/admin-auth/admin-auth.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

const routes: Routes = [
  {
    component: HomeComponent,
    path: ''
  },
  {
    component: AdminAuthComponent,
    path: 'admin-auth'
  },
  {
    component: UserRegistrationComponent,
    path: 'user-registration'
  },
  {
    component: UserLoginComponent,
    path: 'user-login'
  },
  {
    component: AboutUsComponent,
    path: 'about-us'
  },
  {
    component: ProductsComponent,
    path: 'products-list'
  },
  {
    component: CartComponent,
    path: 'cart'
  },
  {
    component: WishlistComponent,
    path: 'wishlist'
  },
  {
    component: AdminLayoutComponent,
    path: 'admin-layout'
  },
  {
    component: CheckoutComponent,
    path: 'checkout'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
