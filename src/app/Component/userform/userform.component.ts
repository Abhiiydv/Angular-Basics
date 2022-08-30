import { Component, OnInit } from '@angular/core';
import User from 'src/app/entity/User';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {

  title="Fill all the details below"
  user: User = new User();
 
  Users: User[]=[];
save(){
  const observable = this.userService.createUser(this.user);
  observable.subscribe(
    (
      response:any)=>{
      console.log(response);
      },
      function(error){
        console.log(error);
        alert("Something went wrong please try again later!")
      }
  )

    }

  constructor(public userService: UserService) { }

  ngOnInit(): void {

    const promise = this.userService.getUsers();
    promise.subscribe((response)=>{
      console.log(response);
      this.Users = response as User[];
    })
  }
}
