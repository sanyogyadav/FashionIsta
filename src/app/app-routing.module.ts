import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminAuthComponent } from './admin-auth/admin-auth.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserLoginComponent } from './user-login/user-login.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
