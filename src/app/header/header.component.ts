import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  public show: boolean = false;
  
  public showLogOut: boolean = true;
  
  constructor(private log: LoginComponent) { }

  ngOnInit(): void {
    this.show = this.log.isLogIn;
  }
  
  logOut():void {
    if (localStorage.getItem("token")) {
      localStorage.removeItem("token");
    }
  }

}
