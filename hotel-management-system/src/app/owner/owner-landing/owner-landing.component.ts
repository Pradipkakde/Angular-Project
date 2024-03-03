import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-owner-landing',
  templateUrl: './owner-landing.component.html',
  styleUrls: ['./owner-landing.component.css']
})
export class OwnerLandingComponent {
  @ViewChild('myForm')
  form!: NgForm;
  onSubmit(){
    console.log(this.form);

  }

}
