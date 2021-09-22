import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RealEstate } from '../models/realEstate';
import { Observable } from 'rxjs';
import { Re } from '../models/re';

@Injectable({
  providedIn: 'root'
})
export class RealEstateService {
  BACKEND_BASE = "http://localhost:3000";
  
  
  constructor(private http: HttpClient) { }

  getRealEstates(): Observable<RealEstate[]> {
    return this.http.get<RealEstate[]>(this.BACKEND_BASE + "/realEstates/listAll");
  }

  getRealEstate(_id): Observable<RealEstate> {
    return this.http.get<RealEstate>(this.BACKEND_BASE + "/realEstates/listById/" + _id).pipe(res => { return res;});
  }
  
  addRealEstate(realEstate: any): Observable<any> {
    return this.http.post<any>(this.BACKEND_BASE + "/realEstates/add", realEstate);
  }
}
