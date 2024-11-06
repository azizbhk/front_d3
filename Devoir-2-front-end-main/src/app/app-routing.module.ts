import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { voyagesComponent } from './voyages/voyages.component';
import { AddVoyageComponent } from './add-voyage/add-voyage.component';
import { UpdateVoyageComponent } from './update-voyage/update-voyage.component';
import { RechercheParCategorieComponent } from './recherche-par-categorie/recherche-par-categorie.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { ListeCategoriesComponent } from './liste-categories/liste-categories.component';
import { LoginComponent } from './login/login.component';





const routes: Routes = [
  {path: "voyages", component : voyagesComponent},
  {path: "add-voyages", component : AddVoyageComponent},
  {path: "updatevoyage/:id", component: UpdateVoyageComponent},
  {path: "rechercheParCategorie", component : RechercheParCategorieComponent},
  {path: "rechercheParNom", component : RechercheParNomComponent},
  {path: 'login', component: LoginComponent},
  {path: "listeCategories", component : ListeCategoriesComponent},
 

  {path: "", redirectTo: "voyages", pathMatch: "full" }
];

  


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
