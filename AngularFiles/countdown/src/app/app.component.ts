import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-component-template';
  countdownMsg = '';
  countdownAliasMsg = '';
  // tslint:disable-next-line:typedef
  finishCountdown() {
    this.countdownMsg = 'Finished!';
  }

  endCountdown() {
    this.countdownAliasMsg = 'Ended!';
  }

  onRateChange(value: any) {
    console.log(value);
    console.log(222);

  }
}
