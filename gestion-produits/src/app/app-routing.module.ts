import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeProduitsComponent } from './components/liste-produits/liste-produits.component';
import { AjouterProduitComponent } from './components/ajouter-produit/ajouter-produit.component';
import { ModifierProduitComponent } from './components/modifier-produit/modifier-produit.component';
import { SuprimerProduitComponent } from './components/suprimer-produit/suprimer-produit.component';

const routes: Routes = [

  { path: '', redirectTo: '/produits', pathMatch: 'full' },
  { path: 'produits', component: ListeProduitsComponent },
  { path: 'produits/ajouter', component: AjouterProduitComponent },
  { path: 'produits/modifier/:id', component: ModifierProduitComponent },
  { path: 'produits/supprimer/:id', component: SuprimerProduitComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
