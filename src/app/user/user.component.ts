import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  isLoading = true;
  users=[];
  constructor(private _userService:UserService) { 
     
    }

  ngOnInit() {
      this._userService.getUsers().subscribe(data =>{
        this.isLoading=false;
        this.users=data;
        console.log(this.users);
        
    }
       );
  }

}
