import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Re } from '../models/re';
import { RealEstate } from '../models/realEstate';
import { RealEstateComponent } from '../real-estate/real-estate.component';
import { RealEstateService } from '../service/real-estate.service';

@Component({
  selector: 'app-add-real-estate',
  templateUrl: './add-real-estate.component.html',
  styleUrls: ['./add-real-estate.component.css']
})
export class AddRealEstateComponent implements OnInit {
  

  // public id: string = "112121";
  // public title: string = "";
  // public imageUrl: string = "";
  // public address: string = "";
  // public city: string = "";
  // public contact: string = "";
  // public price: number = 0;
  // public category: string = "";
  // public floor: number = 0;
  // public area: number = 0;
  // public rooms: number = 0;
  // public bathrooms: number = 0;
  // public totalFloors: number = 0;
  // public elevator: boolean = false;
  // public balcony: boolean = false;
  // public description: string  = "";

  
  re = new Re();
  private resJson;
  submitted = false;
  constructor(private service: RealEstateService) { }
  ngOnInit(): void {
  }

  newRealEstate(): void {
    this.submitted = false;
    this.re = new Re();
  }

  addRe() {
    this.submitted = true;
    this.save();
  }

  goBack(): void{
    
  }

  private save(): void {
    console.log("Nakon klika");
    console.log(this.re);
    this.resJson = JSON.stringify(this.re);
    console.log(this.resJson);
    this.service.addRealEstate(this.re).subscribe(res => { console.log(res);});
  }
  
  onSubmit() {
    // this.re.id = this.id;
    // this.re.title = this.title;
    // this.re.imageUrl = this.imageUrl;
    // this.re.address = this.address;
    // this.re.city = this.city;
    // this.re.contact = this.contact;
    // this.re.price = this.price;
    // this.re.category = this.category;
    // this.re.floor = this.floor;
    // this.re.area = this.area;
    // this.re.rooms = this.rooms;
    // this.re.bathrooms = this.bathrooms;
    // this.re.totalFlors = this.totalFlors;
    // this.re.elevator = this.elevator;
    // this.re.balcony = this.balcony;
    // this.re.description = this.description;
    // this.re = {
    //   "id": this.id,
    //   "title": this.title,
    //   "imageUrl": this.imageUrl,
    //   "address": this.address,
    //   "city": this.city,
    //   "contact": this.contact,
    //   "price": this.price,
    //   "category": this.category,
    //   "floor": this.floor,
    //   "area": this.area,
    //   "rooms": this.rooms,
    //   "bathrooms": this.bathrooms,
    //   "totalFloors": this.totalFloors,
    //   "elevator": this.elevator,
    //   "balcony": this.balcony,
    //   "description":this.description
    // };
    // console.log(this.re);
    // this.service.addRealEstate(this.re).subscribe((res) => {
    //   console.log(res);
    // });
  
    // this.submitted = true;
  }
  
  // profileForm = this.fb.group({
  //   firstName: ['', Validators.required],
  //   lastName: [''],
  //   address: this.fb.group({
  //     street: [''],
  //     city: [''],
  //     state: [''],
  //     zip: ['']
  //   }),
  //   aliases: this.fb.array([
  //     this.fb.control('')
  //   ])
  // });


  // updateProfile() {
  //   this.profileForm.patchValue({
  //     firstName: 'Nancy',
  //     address: {
  //       street: '123 Drew Street'
  //     }
  //   });
  // }

  // realEstateForm() {

  // }
  

}
