import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
    <app-name-card cardName="Professional Dev" email="prodev@abc.xyz" phone="0123456789"></app-name-card>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NameCard';


}
