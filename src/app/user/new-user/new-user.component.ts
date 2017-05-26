import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, NgForm } from '@angular/forms';
import { Router, CanDeactivate, ActivatedRoute } from '@angular/router';
// import { NewUserValidators } from './new-user.validators';
import { UserService } from '../user.service';
import { User,Address } from '../user';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit,OnDestroy{

  form: FormGroup;
  title: string;
  user= new User();
  id;
  subscription;
  constructor(fb: FormBuilder,private _userService: UserService,private _router:Router, private _route:ActivatedRoute) {
    this.form=fb.group({
      name: ["",Validators.required],
      email: ["",Validators.compose([Validators.required])],
      phone: [""],
      address: fb.group ({
      street: [""],
      suite: [""],
      city: [""],
      zip: [""],
      })
    })
   }

  ngOnInit() {
    this.subscription= this._route.params.subscribe(params => {
      this.id = +params["id"];
   

    this.title = this.id ? "Edit User" : "New User";

    if(!this.id)
    return;

    this._userService.getUser(this.id).subscribe(user => {
      this.user=user;
      console.log(this.user);
    },
    response => {
      if(response.status == 404) {
        this._router.navigate(['not-found']);
      }
    })
     });
  }

   save() {
var result;
        if (this.user.id) 
            result = this._userService.updateUser(this.user);
        else
            result = this._userService.addUser(this.user);
            
		result.subscribe(x => {
           this.form.markAsPristine();
            this._router.navigate(['user']);
        });

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
