import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import { BudgetPlannerModule } from '../budget-planner.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  
})
export class LoginComponent {
  loginForm:any;
  registerForm:any;
  activeForm:'login'|'register'='login';
  router: any;
  snackBar: any;
  constructor(private fb:FormBuilder){

  }
  ngOnInit(){
    this.loginForm=this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required]
    })
    this.registerForm=this.fb.group({
      username:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required]
    });
    
  }
toggleForm(form:'login'|'register'){
  this.activeForm=form;
}
login(){
  if(this.loginForm.valid){
    console.log("Login info==>",this.loginForm.value);
    this.router.navigate(['/budget-planner/dashboard']);
  }else
  {
this.snackBar.open('Invalid email or passwrod!','Close',{duration:3000});
  }
}
register(){
  if(this.registerForm.valid){
    console.log("Register info==>>",this.registerForm.value);
    setTimeout(()=>{
      window.location.reload();
    },2000);
    this.router.navigate(['./budget-planner/login'])
  }else{
    this.snackBar.open('Please fill in all fields correctly!',{duration:3000});
  }
}
}
