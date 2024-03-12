import { Component,ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HotelformComponent } from './hotelform/hotelform.component';
import { ApicallService } from 'src/common/common-services/apicall.service';
import {MatPaginator, } from '@angular/material/paginator';
import {MatSort, } from '@angular/material/sort';
import {MatTableDataSource,} from '@angular/material/table';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  displayedColumns: string[] = ['id', 'hoteltype', 'hotelname', 'mobile','email','dor','facility','landmark','status','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor( private dialog:MatDialog,private apiservice:ApicallService){

  }
  ngOnInit(){
    this.getHotelList();

  }
  getHotelList(){
    this.apiservice.GetHotels().subscribe((res:any)=>{
      console.log(res)
      this.dataSource=new MatTableDataSource(res);
      this.dataSource.sort=this.sort;
      this.dataSource.paginator=this.paginator;
    })
  }
  deletehotel(id:number){
    console.log(id)
    this.apiservice.deletehotel(id).subscribe(res=>{
      alert('Hotel deleted successfully!');
      
      this.getHotelList();
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
openRegistrationForm(){
  const dialogRef= this.dialog.open(HotelformComponent);
  dialogRef.afterClosed().subscribe(res=>{
    if(res){
      this.getHotelList();
    }
  })

}
openEditHotel(data:any){
  const dialogRef= this.dialog.open(HotelformComponent,{
    data
  });
  dialogRef.afterClosed().subscribe(res=>{
    if(res){
      this.getHotelList();
    }
  })

}
}
