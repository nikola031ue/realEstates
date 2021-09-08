import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddRealEstateComponent } from './add-real-estate/add-real-estate.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RealEstateComponent } from './real-estate/real-estate.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewRealEstateComponent } from './view-real-estate/view-real-estate.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { RealEstateService } from './service/real-estate.service';

@NgModule({
  declarations: [
    AppComponent,
    AddRealEstateComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    RealEstateComponent,
    ViewRealEstateComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [RealEstateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
