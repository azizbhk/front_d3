import { Categorie } from './categorie.model'; 
export class CategorieWrapper{ _embedded!: {
  cats: Categorie[]; categories: Categorie[]
}; }