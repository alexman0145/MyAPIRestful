import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProduitService } from '../../services/produit.service';
import { Produit } from '../../models/produit.model';

@Component({
  selector: 'app-liste-produits',
  standalone: false,
  
  templateUrl: './liste-produits.component.html',
  styleUrl: './liste-produits.component.css'
})
export class ListeProduitsComponent implements OnInit {
  produits: Produit[] = [];

  constructor(private produitService: ProduitService, private router: Router) { }

  ngOnInit(): void {
    this.produitService.getProduits().subscribe({
      next: (data) => {
      this.produits = data;
      },
      error: (error) => {
        console.error('Une erreur est survenue: ' + error.message);
      }
  });
}

deleteProduit(id: number | undefined): void{
  if (id === undefined) {
    console.error('Id du produit à supprimer est undefined');
    return;
  }
this.produitService.deleteProduit(id).subscribe({
  next: () => {
    this.produits = this.produits.filter(produit => produit.id !== id);
    console.log('Produit supprimé avec succès');
  },
  error: (error) => {
    console.error('Erreur lors de la suppression du produit', error);
  }
});
}

editProduit(id: number | undefined): void {
  if (id !== undefined) {
    this.router.navigate(['/produits/modifier', id]);
  
    }
  }

  addProduit(): void {
    this.router.navigate(['/produits/ajouter']);
  }
}