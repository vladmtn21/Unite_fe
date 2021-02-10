import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-followers-list',
  templateUrl: './followers-list.component.html',
  styleUrls: ['./followers-list.component.css']
})
export class FollowersListComponent implements OnInit {

  followersList:Follower[];
  filters={
    page:0,
    size:2,
    lastIndex:2,
    sortOption:SortOption.FIRST_NAME
  }

  followers:Follower[]=[
    new Follower("Silviu", "Andrei", "https://cdn.pixabay.com/photo/2016/10/09/15/21/business-man-1725976_960_720.png"),
    new Follower("Mihai", "Valentin", "https://cdn.pixabay.com/photo/2016/10/09/15/21/business-man-1725976_960_720.png"),
    new Follower("Marius", "Anton", "https://cdn.pixabay.com/photo/2016/10/09/15/21/business-man-1725976_960_720.png"),
    new Follower("Iuda", "Andreas", "https://cdn.pixabay.com/photo/2016/10/09/15/21/business-man-1725976_960_720.png"),
    
  ];

  constructor() { }

  ngOnInit(): void {
    this.followersList=this.followers.slice(0,this.filters.lastIndex);
  }

  loadMore() {
    this.filters.page++;
    this.followersList=this.followersList.concat(this.followers.slice(this.filters.lastIndex,this.filters.lastIndex+this.filters.size));
    this.filters.lastIndex=this.filters.lastIndex+this.filters.size;
  }

}

export enum SortOption{
  FIRST_NAME,
  LAST_NAME
}

export class Follower {
  firstName: string;
  lastName: string;
  profilePicture: string;

  constructor(firstName: string, lastName: string, profilePicture: string) {
    this.firstName=firstName;
    this.lastName=lastName;
    this.profilePicture=profilePicture;
  }
}
