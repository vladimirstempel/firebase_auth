import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  dismissDuration = 3000;

  constructor(private matSnackBar: MatSnackBar) {
  }

  error(message: string): void {
    this.matSnackBar
      .open(message, '', {
        panelClass: 'error-notification',
        duration: this.dismissDuration
      })
  }

  success(message: string): void {
    this.matSnackBar
      .open(message, '', {
        panelClass: 'success-notification',
        duration: this.dismissDuration
      })
  }
}
