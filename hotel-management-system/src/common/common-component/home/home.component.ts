import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  
  @ViewChild('myForm')
  sform!: NgForm;
  @ViewChild('loginForm')
  lform!: NgForm;
  constructor(){   
  }
  signup(){
    console.log(this.sform);
  }
  login(){
    console.log(this.lform)
  }
  
}