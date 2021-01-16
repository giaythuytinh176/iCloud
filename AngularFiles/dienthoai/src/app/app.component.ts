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
      <p style="color : red;">
        Có chọn một sản phẩm: {{ selectedProduct.nameproduct }}
        <app-product-detail
          [product] = "selectedProduct"
          [title]="selectedProduct.nameproduct"
          (dathangEvent)="notifyMessage($event)">
        </app-product-detail>
      </p>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Product[] = Products;
  title = 'Điện Thoại';
  selectedProduct?: Product;
  mgs?:string;

  setSelectProduct(p: Product) {
    this.selectedProduct = p;
    //alert(1111);
    //console.log(Products);

  }

  notifyMessage($event: { nameproduct: string; }) {
    this.mgs = 'Có yêu cầu đặt hàng ' + $event.nameproduct;
  }
}
