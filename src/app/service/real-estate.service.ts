import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RealEstate } from '../models/realEstate';
import { Observable } from 'rxjs';

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
  
  addRealEstate(realEstate: RealEstate): Observable<RealEstate> {
    return this.http.post<RealEstate>(this.BACKEND_BASE + "/realEstates/add", realEstate);
  }
}
