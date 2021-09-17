import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRealEstateComponent } from './add-real-estate/add-real-estate.component';
import { RealEstateComponent } from './real-estate/real-estate.component';
import { ViewRealEstateComponent } from './view-real-estate/view-real-estate.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: RealEstateComponent },
  { path: 'add-real-estate', component: AddRealEstateComponent },
  { path: 'home/:id', component: ViewRealEstateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
