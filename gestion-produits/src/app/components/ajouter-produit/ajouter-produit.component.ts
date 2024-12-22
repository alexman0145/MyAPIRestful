import { Component } from '@angular/core';
import { ProduitService } from '../../services/produit.service';
import { Produit } from '../../models/produit.model';

@Component({
  selector: 'app-ajouter-produit',
  standalone: false,
  
  templateUrl: './ajouter-produit.component.html',
  styleUrl: './ajouter-produit.component.css'
})
export class AjouterProduitComponent {
produit: Produit = {
  nom: '',
  prix: 0,
  description: ''
};

constructor(private produitService: ProduitService) { }

onSubmit() {
  this.produitService.addProduit(this.produit).subscribe({
  next: (response) => {
    console.log('Produit créer abec succès',response);

  },
  error: (error) => {
    console.error('Erreur lors de la création du produit',error);
    }
  });

}

}
