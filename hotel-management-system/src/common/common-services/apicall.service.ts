import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {
  constructor(private http:HttpClient){}
    addHotel(data:any){
      return this.http.post('http://localhost:3000/admin',data);
    }
    updateHotel(id:number,data:any){
      return this.http.put(`http://localhost:3000/admin/${id}`,data);
    }
    GetHotels(){
      return this.http.get("http://localhost:3000/admin");
    }
    deletehotel(id:number){
      return this.http.delete(`http://localhost:3000/admin/${id}`)
    }
  
}
