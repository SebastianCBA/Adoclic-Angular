import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductDetailModalComponent } from './product-detail-modal.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ProductDetailModalComponent', () => {
  let component: ProductDetailModalComponent;
  let fixture: ComponentFixture<ProductDetailModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductDetailModalComponent],
      providers: [NgbActiveModal],
      schemas: [NO_ERRORS_SCHEMA] 
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailModalComponent);
    component = fixture.componentInstance;
    component.product = { title: 'Test Product', description: 'Test Description' };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
