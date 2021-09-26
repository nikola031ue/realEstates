import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthGuard } from '../guard/auth.guard';
import { RealEstate } from '../models/realEstate';
import { RealEstateComponent } from '../real-estate/real-estate.component';
import { RealEstateService } from '../service/real-estate.service';

@Component({
  selector: 'app-view-real-estate',
  templateUrl: './view-real-estate.component.html',
  styleUrls: ['./view-real-estate.component.css']
})
export class ViewRealEstateComponent implements OnInit {
  
  public id: string;
  errorMsg: any;
  public re: RealEstate;
  afterChange: RealEstate;
  public change: boolean = false;
  public newPrice: any;
  
  constructor(private res: RealEstateService, private http: HttpClient,
    private route: ActivatedRoute, private router: Router, private authGuard: AuthGuard) {}
  
   
  ngOnInit(): void {
    var idP = this.route.snapshot.paramMap.get('id');
    this.id = idP;
    this.res.getRealEstate(this.id)
      .subscribe(data => {
        this.re = data;
      }, 
        error => this.errorMsg = error);
  }

  changePrice() {
    this.change = false;
    this.res.changePrice(this.id, this.newPrice).subscribe(data => {
      this.afterChange = data;
    }, 
      error => this.errorMsg = error);
    
      this.res.getRealEstate(this.id)
      .subscribe(data => {
        this.re = data;
      }, 
        error => this.errorMsg = error);
    this.router.navigate(['/home/:id', this.id]);
  }

  delete() {
    if(this.authGuard.canActivate(this.route.snapshot)) {
      this.res.deleteRealEstate(this.id).subscribe(data => {
        console.log(data + "obrisan");
      });
      this.router.navigate(['/home']);
    }
  }

  
  
}
