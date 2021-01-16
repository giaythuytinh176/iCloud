import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-fontsizeeditor',
  templateUrl: './fontsizeeditor.component.html',
  styleUrls: ['./fontsizeeditor.component.css']
})
export class FontsizeeditorComponent implements OnInit {
  public fontSize: string = "14";

  user = {
    name: 'Ab1212c',
    addr: 'Địa chỉ abc'
  }

  onChange(event: any) {
    var element: HTMLInputElement = event.target; // Lấy được phần tử DOM
    this.fontSize = element.value;
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
