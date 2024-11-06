import { Component, OnInit } from '@angular/core';
import { Categorie } from '../model/categorie.model';
import { voyageService } from '../services/voyage.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-liste-categories',
  templateUrl: './liste-categories.component.html',
  styles: []
})
export class ListeCategoriesComponent implements OnInit {

  categories: Categorie[] = []; // Initialisation du tableau de catégories
  ajout: boolean = true;
  updatedCat: Categorie = { idCat: 0, nomCat: '' };

  constructor(private voyageService: voyageService ,public authService: AuthService) { }

  ngOnInit(): void {
    this.chargerCategories();
  }

  chargerCategories() {
    this.voyageService.listeCategories().subscribe(
      cats => {
        console.log(cats); // Afficher tout l'objet retourné dans la console

        // Vérifier si cats est un tableau et y affecter les catégories
        if (Array.isArray(cats)) {
          this.categories = cats; // Assigner directement les catégories
        } else {
          console.error('La réponse de l\'API n\'est pas un tableau', cats);
        }
      },
      err => {
        console.error('Erreur lors du chargement des catégories', err);
      }
    );
  }

  categorieUpdated(cat: Categorie) {
    console.log('Catégorie mise à jour :', cat);
    this.voyageService.ajouterCategorie(cat).subscribe(() => this.chargerCategories());
  }

  updateCat(cat: Categorie) {
    this.updatedCat = cat;
    this.ajout = false;
  }
}
