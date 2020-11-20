import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators} from '@angular/forms';

export class RegisterData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  gender: string;

  constructor(firstName: string, lastName: string, email: string, password: string, gender: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.gender = gender;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  registerForm: FormGroup;
  submittedPressed = false;

  constructor(
    private formBuilder: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.registerForm = this.formBuilder.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      passwords: this.formBuilder.group({
        password: [null, [Validators.required, Validators.minLength(8)]],
        confPassword: [null, [Validators.required]],
      }, {validators: this.confPasswordMatchesValidator()}),
      gender: [null, [Validators.required]]
    });

    // this.firstName.valueChanges.subscribe((value) => {
    //   console.log(value);
    // });
  }

  confPasswordMatchesValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      return control.get('password').value !== control.get('confPassword').value
        ? {confPass: true}
        : null;
    };
  }

  submit(): void {
    this.submittedPressed = true;
    if (this.registerForm.invalid) {
      return;
    }

    const registerData1: RegisterData = new RegisterData(
      this.firstName.value,
      this.lastName.value,
      this.email.value,
      this.password.value,
      this.gender.value
    );
    // const registerData2: RegisterData = new RegisterData(
    //  this.registerForm.value.firstName,
    //   this.registerForm.value.lastName,
    //   this.registerForm.value.email,
    //   this.registerForm.value.passwords.password,
    //   this.registerForm.value.gender,
    // );
    // console.log(registerData2);
    console.log(registerData1);
  }

  get firstName(): AbstractControl {
    return this.registerForm.get('firstName');
  }

  get lastName(): AbstractControl {
    return this.registerForm.get('lastName');
  }

  get email(): AbstractControl {
    return this.registerForm.get('email');
  }

  get passwords(): AbstractControl {
    return this.registerForm.get('passwords');
  }

  get password(): AbstractControl {
    return this.registerForm.get('passwords').get('password');
  }

  get confPassword(): AbstractControl {
    return this.registerForm.get('passwords').get('confPassword');
  }

  get gender(): AbstractControl {
    return this.registerForm.get('gender');
  }
}
