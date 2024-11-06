import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddVoyageComponent } from './add-voyage/add-voyage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { voyagesComponent } from './voyages/voyages.component';
import { UpdateVoyageComponent } from './update-voyage/update-voyage.component';
import { HttpClientModule } from '@angular/common/http';
import { RechercheParCategorieComponent } from './recherche-par-categorie/recherche-par-categorie.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { ListeCategoriesComponent } from './liste-categories/liste-categories.component';
import { UpdateCategorieComponent } from './update-categorie/update-categorie.component';
import { LoginComponent } from './login/login.component';
//import { AuthService } from './services/auth.service';
import { AuthService } from './services/auth.service';
import { RegisterComponent } from './register/register.component';
import { VerifEmailComponent } from './verif-email/verif-email.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { ToastrModule } from 'ngx-toastr';
//import { AuthService } from './services/auth.service';
//import { RegisterComponent } from './register/register.component';





@NgModule({
  declarations: [
    AppComponent,
    voyagesComponent,
    AddVoyageComponent,
    UpdateVoyageComponent,
    RechercheParCategorieComponent,
    RechercheParNomComponent,
    SearchFilterPipe,
    ListeCategoriesComponent,
    UpdateCategorieComponent,
    LoginComponent,
    RegisterComponent,
    VerifEmailComponent,
    ForbiddenComponent



    
    

  ],
 
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(), 

    


    ],    
    providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
