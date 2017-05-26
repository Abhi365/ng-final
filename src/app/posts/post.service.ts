import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Post } from './post';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/forkJoin';

 class Comment{
    postId? : number;
    id?: number;
    name:string;
    email:string;
    body:string;
}

@Injectable()
export class PostService {

  constructor(private _http:Http) { }

  getPosts():Observable<Post[]>{
      return this._http.get('http://jsonplaceholder.typicode.com/posts').map(res => res.json());
    }

     getPost(id : number):Observable<Post[]>{
      return this._http.get('http://jsonplaceholder.typicode.com/posts?id='+id).map(res => res.json());
    }

    getComments(id:number):Observable<Comment[]>{
       return this._http.get('http://jsonplaceholder.typicode.com/posts/'+id+'/comments').map(res => res.json());
    }

}
