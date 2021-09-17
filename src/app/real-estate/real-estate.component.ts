import { Component, OnInit } from '@angular/core';
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

  constructor(private _realEstate: RealEstateService, private router: Router) { }

  ngOnInit(): void {
    this._realEstate.getRealEstates()
      .subscribe(data => {
        this.realEstates$ = data;
      });


  }

  onSelect(re) {
    this.router.navigate(['/home', re._id]);
  }
}
