import {Component} from '@angular/core';
import {Product, Products} from './data.products';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title }}</h1>
    <em *ngIf="mgs">{{mgs}}</em>
    <ul>
      <li *ngFor="let p of products" class="product" (click)="setSelectProduct(p)">
        ID {{p.id}}  - {{p.nameproduct}}
      </li>
    </ul>
    <div *ngIf="selectedProduct">
      <p>Có chọn một sản phẩm</p>
      <app-product-detail
        [product]="selectedProduct"
        [title]="selectedProduct.nameproduct"
        (dathangEvent)="notifyMessage($event)">
      </app-product-detail>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Product[] = Products;
  title = 'Điện Thoại';
  selectedProduct?: Product;
  mgs?: string;

  setSelectProduct(p: Product) {
    this.selectedProduct = p;
  }

  notifyMessage($event: { nameproduct: string | undefined; }) {
    console.log($event);
    this.mgs = 'Có yêu cầu đặt hàng ' + $event.nameproduct;
  }

}
