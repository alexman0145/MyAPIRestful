import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ProduitService } from '../../services/produit.service';
import { Produit } from '../../models/produit.model';

@Component({
  selector: 'app-modifier-produit',
  standalone: false,
  
  templateUrl: './modifier-produit.component.html',
  styleUrl: './modifier-produit.component.css'
})
export class ModifierProduitComponent implements	OnInit {
  produit: Produit = {
    id: undefined,
    nom: '',
    prix: 0,
    description: ''
  };
  constructor(private produitService: ProduitService, private route: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
    this.produitService.getProduit(id).subscribe({
      next: (data) => {
        this.produit = data;
      },
      error: (error) => {
        console.error('Une erreur est survenue: ' + error.message);
        }
      });
    }
  }
  onSubmit() {
    if (!this.produit.id !== undefined) {
      console.error('Id du produit à modifier est undefined');
    this.produitService.updateProduit(this.produit).subscribe({
      next: (response) => {
        console.log('Produit modifié avec succès', response);
      },
      error: (error) => {
        console.error('Erreur lors de la modification du produit', error);
      }
    });
  }
  }

  backToList(): void {
    window.history.back();
  }

}
