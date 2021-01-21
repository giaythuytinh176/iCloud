import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-rootx',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit {

  constructor(private toastr: ToastrService) { }

  ngOnInit() {

  }

  showToaster(): void{
    // tslint:disable-next-line:typedef
    // setTimeout(function(this: any) {
    //   this.toastr.success('Hello, I\'m the toastr message.');
    // }, 1000);
    setTimeout(() => {
      this.toastr.success('Hello, I\'m the toastr message.');
    }, 1000);
  }

}
