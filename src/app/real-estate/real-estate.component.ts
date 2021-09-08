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
      .subscribe(data => this.realEstates$ = data,
        error => this.errorMsg = error);


  }

  onSelect(re) {
    this.router.navigate(['/home', re.id]);
  }

  

    // u ngOnInit-u
    // this.realEstates.push({
    //   id: 1,
    //   title: "Stan na prodaju",
    //   imageUrl: "https://img.nekretnine.rs/foto/NTc2eDQzMi9jZW50ZXIvbWlkZGxlL2ZpbHRlcnM6cXVhbGl0eSg4MCk=/nek/nk_orig_16483578_phpnBFiPn.jpg?st=wTxkQse0wEr3aUaWmckIGF8z8TNVBzRzP-5k1qnZqUo&ts=1594061618&e=0",
    //   address: "Nemanjina 104",
    //   city: "Uzice",
    //   contact: "555333",
    //   price: 20000,
    //   category: "apartman",
    //   floor: 4,
    //   area: 45,
    //   rooms: 2,
    //   bathrooms: 1,
    //   totalFlors: 5,
    //   elevator: true,
    //   balcony: true,
    //   description: "Nov stan"
    // })
    
    // this.realEstates.push({
    //   id: 2,
    //   title: "Delux stan na prodaju",
    //   imageUrl: "https://img.halooglasi.com/slike/oglasi/Thumbs/190812/m/sun-city-deluxe-izuzetan-stan-id-10663-5425634720188-71789087178.jpg",
    //   address: "Nikole Pasica 2",
    //   city: "Uzice",
    //   contact: "511411",
    //   price: 80000,
    //   category: "duplex",
    //   floor: 8,
    //   area: 100,
    //   rooms: 4,
    //   bathrooms: 2,
    //   totalFlors: 5,
    //   elevator: true,
    //   balcony: true,
    //   description: "Luksuzni stan na prodaju"
    // })
}
