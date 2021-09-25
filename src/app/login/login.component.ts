import { Component, ElementRef, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // passwordFlag: boolean = false


  user = { email: '', password: '' };
  public username: string = "";
  public password:string = "";
  public isLogIn: boolean = false;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void { }
  login() {
    this.userService.login(this.username, this.password).subscribe(resp => {
      localStorage.setItem("token", resp.token);
      this.isLogIn = true;
      this.router.navigate(['/home']);
    })
  }
}
