import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ProductListComponent } from './product-list.component';
import { ProductService } from '../product.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';

// Mock de ProductService
class MockProductService {
  
  getProducts() {
    return of([
      { id: 1, title: 'Product 1', category: 'Category 1', price: 10 },
      { id: 2, title: 'Product 2', category: 'Category 2', price: 20 }
    ]);
  }
}

// Mock de NgbModal
class MockNgbModal {
  open() {
    return { componentInstance: {} };
  }
}

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let productService: ProductService;
  let modalService: NgbModal;
  let mockProductService: any;

  beforeEach(async () => {
    mockProductService = jasmine.createSpyObj(['getProducts']);
    mockProductService.getProducts.and.returnValue(of([{ id: 1, title: 'Product 1' }, { id: 2, title: 'Product 2' }]));

    await TestBed.configureTestingModule({
      declarations: [ProductListComponent],
      providers: [
        { provide: ProductService, useClass: MockProductService },
        { provide: NgbModal, useClass: MockNgbModal }
      ],
      schemas: [NO_ERRORS_SCHEMA] 
    }).compileComponents();

    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    productService = TestBed.inject(ProductService);
    modalService = TestBed.inject(NgbModal);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  


});
