import { Component, OnInit } from '@angular/core';
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

  constructor(private produitService: ProduitService) { }

  ngOnInit(): void {
    this.produitService.getProduits().subscribe(data => {
      this.produits = data;
  });
}

deleteProduit(id: number): void {
  this.produitService.deleteProduit(id).subscribe(() => {
    this.produits = this.produits.filter(produit => produit.id !== id);
  });
}

}
