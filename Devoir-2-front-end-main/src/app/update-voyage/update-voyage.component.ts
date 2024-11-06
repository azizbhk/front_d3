import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { voyage } from '../model/voyage.model'; 
import { voyageService } from '../services/voyage.service'; 
import { Categorie } from '../model/categorie.model';

@Component({
  selector: 'app-update-voyage',
  templateUrl: './update-voyage.component.html',
})
export class UpdateVoyageComponent implements OnInit {
  currentVoyage = new voyage();
  categories!: Categorie[];
  updatedCatId!: number; // ID of the updated category

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private voyageService: voyageService
  ) {}

  ngOnInit(): void {
    // Fetch categories
    this.voyageService.listeCategories().subscribe(
      (cats) => {
        if (Array.isArray(cats)) {
          this.categories = cats;
        } else {
          console.error('Unexpected response format:', cats);
        }
      },
      (error) => {
        console.error('Error fetching categories:', error);
      }
    );

    // Fetch the voyage details by ID
    this.voyageService.consultervoyage(this.activatedRoute.snapshot.params['id'])
      .subscribe(
        (prod) => {
          this.currentVoyage = prod;

          // Initialize the selected category ID with the current voyage's category ID
          if (this.currentVoyage.categorie) {
            this.updatedCatId = this.currentVoyage.categorie.idCat;
          } else {
            console.error('Category not found for this voyage:', prod);
          }
        },
        (error) => {
          console.error('Error fetching voyage:', error);
        }
      );
  }
  updatevoyage() {
    this.currentVoyage.categorie = this.categories.find(lig => lig.idCat == this.updatedCatId)!;
    console.log('Voyage to be updated:', this.currentVoyage);
  
    this.voyageService.updatevoyage(this.currentVoyage).subscribe(
      () => {
        console.log('Voyage updated successfully');
        this.router.navigate(['voyages']);
      },
      (error) => {
        console.error('Error during update:', error);
      }
    );
  }
  
}
