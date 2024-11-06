import { Component } from '@angular/core';
import { voyage } from '../model/voyage.model';
import { voyageService } from '../services/voyage.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
})
export class RechercheParNomComponent {
  nomvoyage! : string;
  voyages! : voyage[];
  allvoyages! : voyage[];
  searchTerm!: string;

  constructor(private voyageService:voyageService){
    
  }

  ngOnInit(): void { this.voyageService.listevoyage().subscribe(voys => { console.log(voys);
     this.voyages = voys; }); 

//   ngOnInit(): void {
//     this.voyageService.listevoyages().subscribe((voys) => {
//       console.log(voys);
//       this.voyages =voys;
//     });
    }
supprimervoyage(_t26: any) {
throw new Error('Method not implemented.'); 
}

recherchervoys() {
  this.voyageService.rechercherParNom(this.nomvoyage).subscribe(voys => {
  this.voyages = voys;
  console.log(voys)});}

  onKeyUp(filterText : string){ 
    this.voyages = this.allvoyages.filter(item => item.nomvoyage.toLowerCase().includes(filterText)); }

}