import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ProductDetailModalComponent } from '../product-detail-modal/product-detail-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  filteredProducts: any[] = [];
  categories: string[] = [];
  selectedCategory: string = 'all'; 
  limits: number[] = [5, 10, 15, 20];
  selectedLimit: number = 10; 
  displayedColumns: string[] = ['id', 'title', 'category', 'price', 'action'];

  constructor(private productService: ProductService, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
      this.filteredProducts = data;
      this.categories = [...Array.from(new Set(data.map(p => p.category)))];
      this.applyFilter();
    });
  }

  applyFilter(): void {
    let filtered = this.products;

    if (this.selectedCategory && this.selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === this.selectedCategory);
    }

    this.filteredProducts = filtered.slice(0, this.selectedLimit);
  }

  changeItemsPerPage(event: any): void {
    this.selectedLimit = parseInt(event.value, 10);
    this.applyFilter();
  }

  logout(): void {
    localStorage.removeItem('isLoggedIn');
    window.location.href = '/login';
  }

  openProductModal(product: any): void {
    const modalRef = this.modalService.open(ProductDetailModalComponent);
    modalRef.componentInstance.product = product;
  }
}
