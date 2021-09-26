import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RealEstate } from '../models/realEstate';
import { RealEstateService } from '../service/real-estate.service';
import { Router } from '@angular/router';

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
  constructor(private _realEstate: RealEstateService, private router: Router) { }

  ngOnInit(): void {
    this._realEstate.getRealEstates()
      .subscribe(data => {
        this.realEstates$ = data;
      });
  }

  search() {
    this._realEstate.search(this.minPrice, this.maxPrice).subscribe(data => {
      console.log(data);
      this.realEstates$ = data;
    },
      error => this.errorMsg = error);
    
    if (!this.realEstates$) {
      this.empty = true;
    }
  }

  onSelect(re:any) {
    this.router.navigate(['/home', re._id]);
  }
}
