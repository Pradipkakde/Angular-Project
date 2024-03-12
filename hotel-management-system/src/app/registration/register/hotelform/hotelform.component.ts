import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ApicallService } from 'src/common/common-services/apicall.service';

@Component({
  selector: 'app-hotelform',
  templateUrl: './hotelform.component.html',
  styleUrls: ['./hotelform.component.css']
})
export class HotelformComponent {
  
registerForm:FormGroup;
constructor(private fb:FormBuilder,private apicallservice:ApicallService,
  private dialogRef:MatDialogRef<HotelformComponent>,
  
   @Inject(MAT_DIALOG_DATA)public data:any){
  this.registerForm=this.fb.group({
hoteltype:'',
hotelname:'',
mobile:'',
email:'',
dor:'',
facility:'',
address:'',
landmark:'',
status:''
  });
}
ngOnInit(){
  this.registerForm.patchValue(this.data)
}
onFormSubmit(){
  if(this.registerForm.valid){
    if(this.data)
    {
      this.apicallservice.updateHotel(this.data.id,this.registerForm.value).subscribe(res=>{
        alert("Hotel updated succesfully!");
        
        this.dialogRef.close(true);
  
      })
    }
    else
    {
      console.log(this.registerForm.value)
    this.apicallservice.addHotel(this.registerForm.value).subscribe(res=>{
     alert("Hotel added succesfully");
     
      this.dialogRef.close(true);

    })
    }
    
  }
}
}
