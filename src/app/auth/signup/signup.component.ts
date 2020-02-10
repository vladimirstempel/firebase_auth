import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@services/auth.service';
import { NotificationsService } from '@services/notifications.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private notificationsService: NotificationsService
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      firstName: [null],
      lastName: [null],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]]
    })
  }

  public onSubmit() {
    if (this.form.invalid) {
      return;
    }
    this.authService.signUp(this.form.value)
      .then(() => {
        this.notificationsService.success('Your account has been created successfully.');
      })
      .catch(err => {
        this.notificationsService.error(err.message);
      });
  }

}
