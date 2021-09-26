import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RealEstate } from '../models/realEstate';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RealEstateService {
  BACKEND_BASE = "http://localhost:3000";
  
  // setGroupFilter = new Subject<any>();
  // getGroupFilter = this.setGroupFilter.asObservable();

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

  // fetchRealEstates(): Observable<any>{
  //   return this.http.get<RealEstate[]>(this.BACKEND_BASE + "/realEstates/listByCategory");
  // }

}
