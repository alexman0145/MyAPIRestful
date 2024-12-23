import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeProduitsComponent } from './components/liste-produits/liste-produits.component';
import { AjouterProduitComponent } from './components/ajouter-produit/ajouter-produit.component';
import { ModifierProduitComponent } from './components/modifier-produit/modifier-produit.component';
import { SuprimerProduitComponent } from './components/suprimer-produit/suprimer-produit.component';
import { provideHttpClient } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    ListeProduitsComponent,
    AjouterProduitComponent,
    ModifierProduitComponent,
    SuprimerProduitComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(withEventReplay()),
    [provideHttpClient()]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
