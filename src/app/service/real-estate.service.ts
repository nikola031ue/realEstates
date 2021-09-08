import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { RealEstate } from '../models/realEstate';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RealEstateService {
  private _url = "../assets/data/data.json";

  constructor(private http: HttpClient) { }

  getRealEstates(): Observable<RealEstate[]> {
    return this.http.get<RealEstate[]>(this._url);
  }
  
}
