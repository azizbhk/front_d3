import { Injectable } from '@angular/core';
import { Categorie } from '../model/categorie.model';
import { voyage } from '../model/voyage.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CategorieWrapper } from '../model/CategorieWrapped';
import { Image } from '../model/image.model'; 
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class voyageService {
  private apiURL: string = 'http://localhost:8090/voyages/api';
  private apiURLCat: string = 'http://localhost:8090/voyages/api/cat';

  constructor(private http: HttpClient, public authService: AuthService) {}

  // Create headers with JWT
  private createHttpHeaders(): HttpHeaders {
    const jwt = `Bearer ${this.authService.getToken()}`;
    return new HttpHeaders({ Authorization: jwt, 'Content-Type': 'application/json' });
  }

  // Get all voyages
  listevoyage(): Observable<voyage[]> {
    return this.http.get<voyage[]>(`${this.apiURL}/all`, { headers: this.createHttpHeaders() });
  }

  // Add a new voyage
  ajoutervoyage(voyage: voyage): Observable<voyage> {
    return this.http.post<voyage>(`${this.apiURL}/addvoyage`, voyage, { headers: this.createHttpHeaders() });
  }

  // Delete a voyage by ID
  supprimervoyage(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}/deletevoyage/${id}`, { headers: this.createHttpHeaders() });
  }

  // Upload an image
  uploadImage(file: File, filename: string): Observable<Image> {
    const imageFormData = new FormData();
    imageFormData.append('image', file, filename);
    return this.http.post<Image>(`${this.apiURL}/image/upload`, imageFormData, { headers: this.createHttpHeaders() });
  }

  // Load an image
  loadImage(id: number): Observable<Image> {
    return this.http.get<Image>(`${this.apiURL}/image/get/info/${id}`, { headers: this.createHttpHeaders() });
  }

  // Get a specific voyage by ID
  consultervoyage(id: number): Observable<voyage> {
    return this.http.get<voyage>(`${this.apiURL}/${id}`, { headers: this.createHttpHeaders() });
  }

  // Update a voyage
  updatevoyage(voyage: voyage): Observable<voyage> {
    return this.http.put<voyage>(`${this.apiURL}/updatevoyage`, voyage, { headers: this.createHttpHeaders() });
  }

  // Get list of categories
  listeCategories(): Observable<CategorieWrapper> {
    return this.http.get<CategorieWrapper>(this.apiURLCat, { headers: this.createHttpHeaders() });
  }

  // Search voyages by category ID
  rechercherParCategorie(idCat: number): Observable<voyage[]> {
    return this.http.get<voyage[]>(`${this.apiURL}/voyageCat/${idCat}`, { headers: this.createHttpHeaders() });
  }

  // Search voyages by name
  rechercherParNom(nom: string): Observable<voyage[]> {
    return this.http.get<voyage[]>(`${this.apiURL}/voysByName/${nom}`, { headers: this.createHttpHeaders() });
  }

  // Add a new category
  ajouterCategorie(cat: Categorie): Observable<Categorie> {
    return this.http.post<Categorie>(this.apiURLCat, cat, { headers: this.createHttpHeaders() });
  }

  // Remove an image by ID
  supprimerImage(idImage: number): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}/image/delete/${idImage}`, { headers: this.createHttpHeaders() });
  }

  // Upload an image for a voyage
  uploadImageVoyage(uploadedImage: File, name: string, idvoyage: number): Observable<any> {
    const imageFormData = new FormData();
    imageFormData.append('image', uploadedImage, name);
    return this.http.post(`${this.apiURL}/image/uploadImageVoyage/${idvoyage}`, imageFormData, { headers: this.createHttpHeaders() });
  }
}
