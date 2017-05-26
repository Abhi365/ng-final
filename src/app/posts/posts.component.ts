import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  isLoadingPosts=true;
  isLoadingComment=true;
  posts=[];
  users=[];
  comments=[];
  currentpost;
  constructor(private _postService:PostService,private _userService:UserService) { }

  ngOnInit() {
    this._postService.getPosts().subscribe(data => {
      this.isLoadingPosts=false;
      this.posts=data});

       this._userService.getUsers().subscribe(data => {
      this.users=data});
      
  }

  view(post){
    this.currentpost=post;
    this._postService.getPost(post.id).subscribe(data => {
      this.currentpost=data[0]});

      this._postService.getComments(post.id).subscribe(data => {
        this.isLoadingComment=false;
      this.comments=data});
  }

  reloadposts(id){
    this._userService.getUserPosts(id).subscribe(data => {
      this.isLoadingPosts=false;
      this.posts=data});
  }
  

}
