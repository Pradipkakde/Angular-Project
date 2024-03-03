import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-landing',
  templateUrl: './admin-landing.component.html',
  styleUrls: ['./admin-landing.component.css']
})
export class AdminLandingComponent {
 @ViewChild('myForm')
  form!: NgForm;
  onSubmit(){
    console.log(this.form);

  }
 
}

