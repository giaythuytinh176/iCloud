import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <app-progress-bar width="{{ percent }}"></app-progress-bar>
      <div class="input-group">
        <input type="button" value="-" class="button-minus" (click)="minus()" data-field="quantity">
        <input type="text" step="1" max="" value="{{ percent }}" [(ngModel)]="percent" name="quantity" class="quantity-field">
        <input type="button" value="+" class="button-plus" (click)="plus()" data-field="quantity">
      </div>
    </div>
  `,
  styles: [`
    .progress {
      height: 20px;
    }
  `]
})
export class AppComponent {
  title = 'ProgressBar';
  percent  = 50;

  minus() {
    this.percent--;
    console.log(1);
  }
  plus() {
    this.percent++;
    console.log(2);
  }
}
