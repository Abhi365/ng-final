import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
 import { User, Address } from './user';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/forkJoin';


@Injectable()
export class UserService {

  constructor(private _http:Http) { }

  getUsers():Observable<User[]>{
      return this._http.get('http://jsonplaceholder.typicode.com/users').map(res => res.json());
    }

  addUser(user: User){
    return this._http.post('http://jsonplaceholder.typicode.com/users',JSON.stringify(user)).map(res => res.json());
  }
  updateUser(user: User){
    return this._http.put('http://jsonplaceholder.typicode.com/users',JSON.stringify(user)).map(res => res.json());
  }
  deleteUser(id : number){
    return this._http.delete('http://jsonplaceholder.typicode.com/users?id='+id)
			.map(res => res.json());
  }
  getUser(id : number){
      return this._http.get('http://jsonplaceholder.typicode.com/users?id='+id).map(res => res.json());
    }     
     getUserPosts(id : string){
       if(id != " ")
      return this._http.get('http://jsonplaceholder.typicode.com/posts?userId='+id).map(res => res.json());

       return this._http.get('http://jsonplaceholder.typicode.com/posts').map(res => res.json());
    }     
}
