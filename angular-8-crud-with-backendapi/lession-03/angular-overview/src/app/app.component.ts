import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-overview';

  months = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];

  isavailable = false;

  myClickFunction(event: any) {
    //just added console.log which will display the event details in browser on click of the button.
    alert("Button is clicked");
    //document.write(this.months[0]);
    console.log(this);
  }

  // ########## Example 01 change font size ##########
  fontSize = 15;
  onChange(value: number) {
    this.fontSize = value;
  }


}
