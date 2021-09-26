import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RealEstate } from '../models/realEstate';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RealEstateService {
  BACKEND_BASE = "http://localhost:3000";
  
 
  constructor(private http: HttpClient) { }

  
  getRealEstates(): Observable<RealEstate[]> {
    return this.http.get<RealEstate[]>(this.BACKEND_BASE + "/realEstates/listAll");
  }

  getRealEstate(_id: string): Observable<RealEstate> {
    return this.http.get<RealEstate>(this.BACKEND_BASE + "/realEstates/listById/" + _id)
    .pipe(res => { 
      return res;
    });
  }
  
  addRealEstate(realEstate: any): Observable<any> {
    return this.http.post<any>(this.BACKEND_BASE + "/realEstates/add", realEstate);
  }

  changePrice(_id: string, newPrice: number): Observable<any> {
    return this.http.patch(this.BACKEND_BASE + "/realEstates/update/" + _id, {
      price: newPrice
    });
  }

  deleteRealEstate(_id: string) {
    return this.http.delete(this.BACKEND_BASE + "/realEstates/delete/" + _id)
    .pipe(res => {
      return res
    });
  }

  search(min: number, max: number): Observable<any> {
    return this.http.post(this.BACKEND_BASE + "/realEstates/search", {
      minPrice: min,
      maxPrice: max
    });
    // return null;
  }

}
