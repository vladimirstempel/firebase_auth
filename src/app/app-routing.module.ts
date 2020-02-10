import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@guards/auth.guard';
import { GuestGuard } from '@guards/guest.guard';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
      },
      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule',
        canActivateChild: [AuthGuard]
      },
      {
        path: 'auth',
        loadChildren: './auth/auth.module#AuthModule',
        canActivateChild: [GuestGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
