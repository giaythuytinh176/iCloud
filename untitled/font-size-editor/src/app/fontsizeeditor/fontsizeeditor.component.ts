import {Component, Input, OnInit, Output} from '@angular/core';
// @ts-ignore
import * as EventEmitter from "events";


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


  log(a : any){
    console.log(a);
  }

  // Khai báo mảng chứa các tháng
  months : Array<string> = ["Tháng 1", "Tháng 2", "Tháng 3",
    "Tháng 4", "Tháng 5", "Tháng 6",
    "Tháng 7", "Tháng 8", "Tháng 9",
    "Tháng 10", "Tháng 11", "Tháng 12"];

  month  = 'Tháng 1';
  is_available = false; // Declare varialbe is_available

  onChange(event: any) {
    var element: HTMLInputElement = event.target; // Lấy được phần tử DOM
    this.fontSize = element.value;
  }

  constructor() {
    this.log(this);
  }

  ngOnInit(): void {
  }

  @Input() size: number | string  = 14;
  @Output() sizeChange = new EventEmitter<number>();

  dec() {
    this.resize(-1);
  }

  inc() {
    this.resize(+1);
  }

  resize(delta: number) {
    // @ts-ignore
    this.size = Math.min(40, Math.max(8, +this.size + delta));
    this.sizeChange.emit(this.size);
  }
}
