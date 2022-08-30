import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const BASE_URL="http://localhost:3000/users";

@Injectable({
  providedIn: 'root'
})


export class UserService {

  createUser(user:{
    firstname:string;
    lastname:string;
    age:number;
    Gender:string;
  }){
  return this.http.post(BASE_URL,user);
  }
  getUsers(){
    return this.http.get(BASE_URL);

  }

  constructor(public http: HttpClient) { }
}
