import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  hello = "Name Card";

  @Input() cardName!: string;
  @Input() email!: string;
  @Input() phone!: string;

}
