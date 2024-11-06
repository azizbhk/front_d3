import { Categorie } from './../model/categorie.model';

import { Component, OnInit } from '@angular/core';
import { voyage } from '../model/voyage.model';
import { voyageService } from '../services/voyage.service';

import { Router } from '@angular/router';


@Component({
  selector: 'app-add-voyage',
  templateUrl: './add-voyage.component.html'
})
export class AddVoyageComponent implements OnInit {
  newvoyage = new voyage();
  categories!: Categorie[];
  newIdCat!: number;
  voyages!: voyage[];

  constructor(private voyageservice : voyageService,private router :Router) { }


 
  ngOnInit(): void {
    this.voyageservice.listeCategories().subscribe(
      (cats) => {
        // Directly assign the cats if it's an array
        if (Array.isArray(cats)) {
          this.categories = cats; // Assign the array directly
        } else {
          console.error('Unexpected response format:', cats);
        }
      },
      (error) => {
        console.error('Error fetching categories:', error);
      }
    );
  }
  addvoyage(){
    this.newvoyage.categorie = this.categories.find(cat => cat.idCat == this.newIdCat)!;
    this.voyageservice.ajoutervoyage(this.newvoyage)
    .subscribe(voy=> {
    console.log(voy);
    this.router.navigate(['voyages']);
    });
    }




  }

    
    


