import { Injectable } from '@angular/core';
import { Categorie } from '../model/categorie.model';
import { voyage } from '../model/voyage.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CategorieWrapper } from '../model/CategorieWrapped';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class voyageService {

  apiURL: string = 'http://localhost:8090/voyages/api';
  apiURLCat: string = 'http://localhost:8090/voyages/api/cat';

  constructor(private http: HttpClient, public authService: AuthService) {}

  // Get JWT token and add to headers
  private getAuthHeaders(): HttpHeaders {
    let jwt = this.authService.getToken();
    jwt = 'Bearer ' + jwt;
    return new HttpHeaders({ Authorization: jwt, 'Content-Type': 'application/json' });
  }

  // Get all voyages
  listevoyage(): Observable<voyage[]> {
    console.log(this.getAuthHeaders());

    return this.http.get<voyage[]>(`${this.apiURL}/all`, { headers: this.getAuthHeaders() });

  }

  // Add a new voyage
  ajoutervoyage(voyage: voyage): Observable<voyage> {
    return this.http.post<voyage>(`${this.apiURL}/addvoyage`, voyage, { headers: this.getAuthHeaders() });
  }

  // Delete a voyage by ID
  supprimervoyage(id: number): Observable<void> {
    const url = `${this.apiURL}/deletevoyage/${id}`;
    return this.http.delete<void>(url, { headers: this.getAuthHeaders() });
  }

  // Get a specific voyage by ID
  consultervoyage(id: number): Observable<voyage> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<voyage>(url, { headers: this.getAuthHeaders() });
  }
  updatevoyage(voyage: voyage): Observable<voyage> {
    return this.http.put<voyage>(`${this.apiURL}/updatevoyage`, voyage, { headers: this.getAuthHeaders() });
  }
  

  // Get list of categories
  listeCategories(): Observable<CategorieWrapper> {
    return this.http.get<CategorieWrapper>(this.apiURLCat, { headers: this.getAuthHeaders() });
  }

  // Search voyages by category ID
  rechercherParCategorie(idCat: number): Observable<voyage[]> {
    const url = `${this.apiURL}/voyageCat/${idCat}`;
    return this.http.get<voyage[]>(url, { headers: this.getAuthHeaders() });
  }

  // Search voyages by name
  rechercherParNom(nom: string): Observable<voyage[]> {
    const url = `${this.apiURL}/voysByName/${nom}`;
    return this.http.get<voyage[]>(url, { headers: this.getAuthHeaders() });
  }

  // Add a new category
  ajouterCategorie(cat: Categorie): Observable<Categorie> {
    return this.http.post<Categorie>(this.apiURLCat, cat, { headers: this.getAuthHeaders() });
  }
}
