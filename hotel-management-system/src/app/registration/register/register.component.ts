import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HotelformComponent } from './hotelform/hotelform.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private dialog:MatDialog){

  }
openHotelForm(){
  this.dialog.open(HotelformComponent)

}
}
