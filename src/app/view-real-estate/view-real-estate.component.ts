import { HttpClient } from '@angular/common/http';
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
  
  public id: string;
  errorMsg: any;
  public re: any;

  constructor(private res: RealEstateService, private http: HttpClient,
    private route: ActivatedRoute) {}
  
   
  ngOnInit(): void {
    var idP = this.route.snapshot.paramMap.get('id');
    this.id = idP;
    this.res.getRealEstate(this.id)
      .subscribe(data => {
        console.log(data);
        this.re = data;
      }, 
        error => this.errorMsg = error);
  }

  // getRealEstate() {
  //   var id = this.route.snapshot.params['id'];
  //   return this.http.get(this.baseURL + 'home/' + id).pipe(res => {return res});
  // }

  
  
}
