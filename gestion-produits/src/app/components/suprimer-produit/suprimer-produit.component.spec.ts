import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuprimerProduitComponent } from './suprimer-produit.component';

describe('SuprimerProduitComponent', () => {
  let component: SuprimerProduitComponent;
  let fixture: ComponentFixture<SuprimerProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SuprimerProduitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuprimerProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
