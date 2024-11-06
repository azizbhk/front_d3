import { Categorie } from "./categorie.model";
import { Image } from "./image.model"; // Assuming Image is defined in image.model.ts

export class voyage {
    voyage: any;
idCat: any;
    rechercherParNom(nomvoyage: string) {
      throw new Error('Method not implemented.');
    }
    listevoyage() {
      throw new Error('Method not implemented.');
    }
    idvoyage! : number;
    nomvoyage! : string;
    prixvoyage!: number;
    dateCreation! : Date ;
    categorie! : Categorie;
    image! : Image ;
    imageStr!:string
    images!: Image[];

    }