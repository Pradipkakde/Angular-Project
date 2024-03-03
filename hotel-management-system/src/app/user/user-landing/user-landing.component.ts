import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-landing',
  templateUrl: './user-landing.component.html',
  styleUrls: ['./user-landing.component.css']
})
export class UserLandingComponent {
  @ViewChild('myForm')
  form!: NgForm;
  onSubmit(){
    console.log(this.form);

  }
}
