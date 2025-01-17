	
import { Component, OnInit } from '@angular/core';
import { voyage } from '../model/voyage.model';
import { voyageService } from '../services/voyage.service';
import { AuthService } from '../services/auth.service';
import { Image } from '../model/image.model'; // Import the correct Image type
	

	@Component({
	  selector: 'app-voyages',
	  templateUrl: './voyages.component.html'
	})
	export class voyagesComponent implements OnInit {


	    voyages! : voyage[]; //un tableau de voyages
voyage: any;

	  constructor(private voyageService: voyageService,public authService: AuthService) {
	   //this.voyages=[];
	     }

	  ngOnInit(): void {
		// this.voyageService.listevoyages().subscribe(voys => { console.log(voys); this.voyages = voys; });
		// console.log(this.voyages);
		this.chargervoyages();
		
	  }
	  chargervoyages(){
		this.voyageService.listevoyage().subscribe(prods => {
		this.voyages = prods;
		this.voyages.forEach((prod) => {
		this.voyageService
		.loadImage(prod.image.idImage)
		.subscribe((img: Image) => {
		prod.imageStr = 'data:' + img.type + ';base64,' + img.image;
		});
		});
		});
		}
		 
	 supprimervoyage(p: voyage) { let conf = confirm("Etes-vous sûr ?"); 
	 if (conf) this.voyageService.supprimervoyage(p.idvoyage).subscribe(() => { console.log("voyage supprimé"); 
	 this.chargervoyages(); }); }
	 // supprimervoyage(p: voyage) { 
		
	  //console.log(p); 
	  //this.voyageService.supprimervoyage(p);
	 //let conf = confirm("Etes-vous sûr ?");
	 //if (conf)
	 //this.voyageService.supprimervoyage(p); }

	//  // supprimervoyage(p: voyage)
	//     {
	//      // console.log(p);
	//       let conf = confirm("Etes-vous sûr ?");
	//       if (conf)
	//         this.voyageService.supprimervoyage(p);
	//     } //
	// updatevoyage(v: voyage) {
	//   console.log(v);
	//   }
	

	}
