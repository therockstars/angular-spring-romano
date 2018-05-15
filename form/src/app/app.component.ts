import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';


function emailValidator(email: FormControl) {
  const regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (regexp.test(email.value)) {
    console.log('valid');
    return null;
  } else {
    console.log('not valid');
    return {error: 'not valid email'};
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registration Form';
  signUpForm: FormGroup;

  userName = new FormControl('', Validators.required);

  password = new FormControl('', [Validators.required,
    Validators.minLength(3),
    Validators.maxLength(5)]);

  email = new FormControl('', emailValidator);

  constructor(private fb: FormBuilder) {
    this.signUpForm = this.fb.group({
      username: this.userName,
      password: this.password,
      email: this.email,
    });

    const usernameControl = this.signUpForm.get('username');
    usernameControl.valueChanges.forEach(
      (value: string) => console.log('Change...', value)
    );
  }

  public onSubmit(event: any) {
    console.log(this.signUpForm.value);
  }

}
