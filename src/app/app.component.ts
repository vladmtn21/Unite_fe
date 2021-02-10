import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(){
    //window.localStorage.setItem("token","45465476456543");
    const token=window.localStorage.getItem("token");
    //window.localStorage.removeItem("token");
  }
}
