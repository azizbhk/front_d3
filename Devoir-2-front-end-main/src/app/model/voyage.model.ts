import { Categorie } from "./categorie.model";

export class voyage {
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

    }