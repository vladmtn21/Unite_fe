import { Component, Input, OnInit } from '@angular/core';
import { UserPost } from '../feed/feed.component';
import { Router } from '@angular/router'

@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.css']
})
export class UserPostComponent implements OnInit {
@Input() userPost: UserPost;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goToUserPostDetails() {
    this.router.navigate(["user-post-details/"+this.userPost.id]);
  }

}
