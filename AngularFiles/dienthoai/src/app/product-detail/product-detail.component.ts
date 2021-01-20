import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../data.products';

@Component({
  selector: 'app-product-detail',
  template: `
    <script>console.log(titlebox)</script>
    <h2>{{titlebox}}</h2> {{product?.id}} - {{product?.nameproduct}}
    <button (click)="yeucaudathang()">Đặt hàng</button>
  `
})
export class ProductDetailComponent implements OnInit {
  @Input() product?: Product;
  @Input('title') titlebox?: string;
  @Output() dathangEvent = new EventEmitter<Product>();

  // tslint:disable-next-line:typedef
  yeucaudathang() {
    this.dathangEvent.emit(this.product);    // Phát sự kiện - có kèm dữ liệu this.product
    // console.log(this.product);
  }

  constructor() {
  }

  ngOnInit() {
  }

}
