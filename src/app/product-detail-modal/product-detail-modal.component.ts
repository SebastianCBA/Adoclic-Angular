import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-product-detail-modal',
  templateUrl: './product-detail-modal.component.html',
  styleUrls: ['./product-detail-modal.component.css']
})
export class ProductDetailModalComponent {
  @Input() product: any;

  constructor(public modal: NgbActiveModal) {}
}
