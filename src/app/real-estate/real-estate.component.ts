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

  @Input() groupFilters: Object;
  @Input() searchByKeyword: string;
  realEstates: any[] = [];
  filteredRealEstates: any[] = [];
  isSearch: boolean;
  constructor(private _realEstate: RealEstateService, private router: Router) { }

  ngOnInit(): void {
    this._realEstate.getRealEstates()
      .subscribe(data => {
        this.realEstates$ = data;
      });
    
    // this.loadRealEstates();
  }

  // filterRealEstatesList(filters: any, realEstates: any): void {
  //   this.filteredRealEstates = this.realEstates;
  //   const keys = Object.keys(filters);
  //   const filterRealEstate = realEstate => {
  //     let result = keys.map(key => {
  //       if (!~key.indexOf('area')) {
  //         if (realEstate[key]) {
  //           return String(realEstate[key]).toLowerCase().startsWith(String(filters[key]).toLowerCase())
  //         } else {
  //           return false;
  //         }
  //       }
  //     });
  //     result = result.filter(it => it !== undefined);
  //     if (filters['areaTo'] && filters['areaFrom']) {
  //       if (realEstate['area']) {
  //         if (+realEstate['area'] >= +filters['areaFrom'] && +realEstate['area'] <= +filters['areaTo']) {
  //           result.push(true);
  //         } else {
  //           result.push(false);
  //         }
  //       } else {
  //         result.push(false);
  //       }
  //     }
  //     return result.reduce((acc, cur: any) => { return acc & cur }, 1)
  //   }
  //   this.filteredRealEstates = this.realEstates.filter(filterRealEstate);
  // }

  // loadRealEstates(): void{
  //   this._realEstate.fetchRealEstates().subscribe(realEstates => this.realEstates = realEstates);
  //   this.filteredRealEstates = this.filteredRealEstates.length > 0 ? this.filteredRealEstates : this.realEstates;
  // }


  onSelect(re) {
    this.router.navigate(['/home', re._id]);
  }
}
