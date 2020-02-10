import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '@shared/shared.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AuthModule } from './auth/auth.module';
import { AuthGuard } from '@guards/auth.guard';
import { AuthService } from '@services/auth.service';
import { GuestGuard } from '@guards/guest.guard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserAnimationsModule,
    SharedModule,
    DashboardModule,
    AuthModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    GuestGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
