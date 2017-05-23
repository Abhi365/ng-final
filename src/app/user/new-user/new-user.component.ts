import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router, CanDeactivate } from '@angular/router';
// import { NewUserValidators } from './new-user.validators';
import { UserService } from '../user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit{

  form: FormGroup;
  title: string;
  user={address: {} };

  constructor(fb: FormBuilder,private _userService: UserService,private _router:Router) {
    this.form=fb.group({
      name: ["",Validators.required],
      email: ["",Validators.compose([Validators.required])],
      phone: [],
      address: fb.group ({
      street: [],
      suite: [],
      city: [],
      zip: []
      })
    })
   }

  ngOnInit() {
  }

   save() {
    console.log(this.form.value);
    this._userService.createUser(this.form.value);
    this.form.markAsPristine();
    this._router.navigate(['user']);
  }

 

}
