import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '@shared/shared.module';
import { AuthComponent } from './auth.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';



@NgModule({
  declarations:
    [
      SigninComponent,
      SignupComponent,
      AuthComponent
    ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule { }
