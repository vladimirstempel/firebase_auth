import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@services/auth.service';
import { NotificationsService } from '@services/notifications.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private notificationsService: NotificationsService
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]]
    })
  }

  public onSubmit() {
    if (this.form.invalid) {
      return;
    }
    this.authService.signIn(this.form.value)
      .then(() => {
        this.notificationsService.success('You are successfully signed in.');
      })
      .catch(err => {
        this.notificationsService.error(err.message);
      });
  }

}
