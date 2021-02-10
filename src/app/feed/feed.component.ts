import { Component, OnInit } from '@angular/core';

export class UserPost {
  title: string;
  description: string;
  userName: string;
  id: number;

  constructor(id: number, userName: string, title: string, description: string) {
    this.id=id;
    this.userName=userName;
    this.title=title;
    this.description=description;
  }
}

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  userPosts: UserPost[]=[
    new UserPost(1,"Vlad", "Postare", "Postare despre ceva"),
    new UserPost(2,"Ioana", "Postare1", "Postare despre ceva si alceva"),
    new UserPost(3,"Silvia", "Postare2", "Postare despre ceva semnificativ"),
    new UserPost(4,"Mihai", "Postare3", "Postare despre ceva nesemnificativ"),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}


