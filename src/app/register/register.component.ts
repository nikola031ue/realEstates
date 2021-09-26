import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user = { email: '', password: '' };
  public username: string = "";
  public password: string = "";
  public error: boolean = false;
  constructor(private userService: UserService, private route:Router) { }

  ngOnInit(): void { }
  register() {
    if (this.username == '' || this.password == '') {
      this.error = true;
      return;
    }
    
    this.userService.register(this.username, this.password).subscribe(resp => {
      alert(resp.msg);
      this.route.navigate(['/login']);
    })
  }


}