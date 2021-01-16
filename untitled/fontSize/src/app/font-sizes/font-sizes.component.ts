import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-font-sizes',
  templateUrl: './font-sizes.component.html',
  styleUrls: ['./font-sizes.component.css']
})
export class FontSizesComponent implements OnInit {
  fontSize = 14;
  onChange(value: number) {
    this.fontSize = value;
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
