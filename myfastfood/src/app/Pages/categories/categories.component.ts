import { Component, OnInit } from '@angular/core';
import { MasterService } from 'src/app/Services/master.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categoryList:any[]=[];
  constructor(private masterSrv:MasterService){

  }
  ngOnInit(): void {
    this.loadAllFoodCategories()
    
  }
  loadAllFoodCategories(){
    this.masterSrv.getAllFoodCategory().subscribe((res:any)=>{
      this.categoryList=res.data;

    })
  }

}
