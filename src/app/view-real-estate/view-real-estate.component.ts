import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RealEstate } from '../models/realEstate';
import { RealEstateComponent } from '../real-estate/real-estate.component';
import { RealEstateService } from '../service/real-estate.service';

@Component({
  selector: 'app-view-real-estate',
  templateUrl: './view-real-estate.component.html',
  styleUrls: ['./view-real-estate.component.css']
})
export class ViewRealEstateComponent implements OnInit {
  
  public _id;
  public realEstates$: RealEstate[] = [];
  errorMsg: any;

  constructor(private res: RealEstateService, private route: ActivatedRoute ) { }
  re = this.res.getRealEstates()
    .subscribe(data => this.realEstates$ = data,
    error => this.errorMsg = error);
  
      
  
  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this._id = id;
    console.log(this.errorMsg);

    console.log(this._id);
    console.log(this.re);
  }


  
}
