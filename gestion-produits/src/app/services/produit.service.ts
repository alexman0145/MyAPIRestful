import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produit } from '../models/produit.model';


@Injectable({
  providedIn: 'root'
})

export class ProduitService {

  public apiUrl = 'http://localhost:5145/api/produits';

  constructor(public http: HttpClient) { }

  public getProduits(): Observable<Produit[]> {
    return this.http.get<Produit[]>(this.apiUrl);
  }

 public getProduit(id: number): Observable<Produit> {
    return this.http.get<Produit>(`${this.apiUrl}/${id}`);
  }

  public addProduit(produit: Produit): Observable<Produit> {
    return this.http.post<Produit>(this.apiUrl, produit);
  }

  public updateProduit(produit: Produit): Observable<Produit> {
    return this.http.put<Produit>(`${this.apiUrl}/${produit.id}`, produit);
  }

  public deleteProduits(): Observable<Produit[]> {
    return this.http.delete<Produit[]>(this.apiUrl);
  }

  public deleteProduit(id: number): Observable<Produit> {
    return this.http.delete<Produit>(`${this.apiUrl}/${id}`);
  }
}
