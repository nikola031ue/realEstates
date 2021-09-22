import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRealEstateComponent } from './add-real-estate/add-real-estate.component';
import { LoginComponent } from './login/login.component';
import { RealEstateComponent } from './real-estate/real-estate.component';
import { RegisterComponent } from './register/register.component';
import { ViewRealEstateComponent } from './view-real-estate/view-real-estate.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: RealEstateComponent },
  { path: 'add-real-estate', component: AddRealEstateComponent },
  { path: 'home/:id', component: ViewRealEstateComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
