import { ReturnStatement } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../services/account.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  submittedPressed = false;


  constructor(private formBuilder: FormBuilder, private accountService: AccountService, private userService:UserService) { }

  ngOnInit(): void {
    this.createForm();
    //this.prefillForm();
  }

  createForm() {
    this.loginForm=this.formBuilder.group({
      email:[null, [Validators.required, Validators.email]],
      password:[null, Validators.required],
    });
  }

  prefillForm() {
    this.loginForm.patchValue({
      email:"some_email@google.com",
    //  password:"123456789",
    });
    this.password.patchValue("12345678")
  }

  submit() {
    if(this.loginForm.invalid){
      return;
    }
    localStorage.setItem("token","response"); // To Do backend-login response should return first nam too
    this.userService.addFirstName("Vlad");
    this.accountService.login(this.loginForm.value).subscribe((response: any)=>{
      console.log(response);
      localStorage.setItem("token", response.token); // To Do backend-login response should return first nam too
      this.userService.addFirstName(response.firstName);
    })
    
  }

  get email() {
    return this.loginForm.get("email");
  }

  get password() {
    return this.loginForm.get("password");
  }

}
