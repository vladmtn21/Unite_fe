import { Component, Input, OnInit } from '@angular/core';
import { __importDefault } from 'tslib';
import { Follower } from '../followers-list/followers-list.component';

@Component({
  selector: 'app-follower-card',
  templateUrl: './follower-card.component.html',
  styleUrls: ['./follower-card.component.css']
})
export class FollowerCardComponent implements OnInit {
@Input() follower: Follower;

  constructor() { }

  ngOnInit(): void {
  }

}
