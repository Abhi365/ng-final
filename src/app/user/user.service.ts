import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from './user';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/forkJoin';

@Injectable()
export class UserService {

  constructor(private _http:Http) { }

  getUsers():Observable<User[]>{
      return this._http.get('http://jsonplaceholder.typicode.com/users').map(res => res.json());
    }

  createUser(user: User){
    return this._http.post('http://jsonplaceholder.typicode.com/users',JSON.stringify(user)).map(res => res.json());
  }
}
