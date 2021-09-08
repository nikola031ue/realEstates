import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { RealEstateComponent } from '../real-estate/real-estate.component';

@Component({
  selector: 'app-add-real-estate',
  templateUrl: './add-real-estate.component.html',
  styleUrls: ['./add-real-estate.component.css']
})
export class AddRealEstateComponent implements OnInit {
  
  // realEstate = new RealEstateComponent();
  submitted = false;
  constructor() { }

  ngOnInit(): void {
  }

  // createProduct(product: Product): Observable<Product> {
  //   return this.httpClient.post<Product>(this.BACKEND_BASE + '/api/product', product);
  // }
  onSubmit() {
    this.submitted = true;
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
