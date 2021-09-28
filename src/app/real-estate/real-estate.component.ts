import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RealEstate } from '../models/realEstate';
import { RealEstateService } from '../service/real-estate.service';
import { Router } from '@angular/router';
import { max } from 'rxjs/operators';

@Component({
  selector: 'app-real-estate',
  templateUrl: './real-estate.component.html',
  styleUrls: ['./real-estate.component.css']
})
export class RealEstateComponent implements OnInit {
  
  public realEstates$: RealEstate[] = [];
  errorMsg: any;
  public minPrice: any;
  public maxPrice: any;
  public empty: boolean = false;
  isSearch: boolean;
  public searchRealEstates: RealEstate[] = [];

  constructor(private _realEstate: RealEstateService, private router: Router) { }

  ngOnInit(): void {
    this._realEstate.getRealEstates()
      .subscribe(data => {
        this.realEstates$ = data;
      });
  }

  search() {
    
    for (let re of this.realEstates$) {
      if (re.price >= this.minPrice && re.price <= this.maxPrice) {
        this.searchRealEstates.push(re);
      }
    }
    if (this.searchRealEstates.length == 0) {
        this.empty = true;
    } else {
      this.realEstates$ = this.searchRealEstates;
    }

  }

  cancel() {
    this._realEstate.getRealEstates()
      .subscribe(data => {
        this.realEstates$ = data;
      });
    
    this.minPrice = 0;
    this.maxPrice = 0;
  }

  onSelect(re:any) {
    this.router.navigate(['/home', re._id]);
  }
}
