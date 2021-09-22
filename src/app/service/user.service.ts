import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  BACKENDBASE = "http://localhost:3000";

  login(username: string, password: string): Observable<any> {
    return this.http.post(this.BACKENDBASE + "/users/login", {
      username: username,
      password: password
    }).pipe(map((resp: any) => {
      return resp;
    }))
  }

  register(username: string, password: string): Observable<any> {
    return this.http.post(this.BACKENDBASE + "/users/register", {
      username: username,
      password: password
    })
  }
}
