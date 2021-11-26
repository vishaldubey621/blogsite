import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class BlogService {

  
  constructor(private _http:HttpClient ) { 
  }

  // function Add data to in table
  public addblog(data:any)
  {
    
   return this._http.post('http://localhost:3000/blog',data);  //post data to db.json(user)
   
  }

  //Get all data for display value
  public getblog()
  {
    return this._http.get('http://localhost:3000/blog')  //get data from db.json(user)
  }
}
