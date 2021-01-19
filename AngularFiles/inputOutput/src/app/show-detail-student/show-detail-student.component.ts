import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-show-detail-student',
  template: `
    <button (click)="showDetail()">Xem</button>
  `,
  styleUrls: ['./show-detail-student.component.css']
})
export class ShowDetailStudentComponent implements OnInit {
  @Input() detailStudent: Array<any> = [
    {
      id: 1,
      class: 'C0920K1',
      address: 'Hanoi',
    },
    {
      id: 2,
      class: 'C0920K1',
      address: 'HCM',
    },
    {
      id: 3,
      class: 'C0920K1',
      address: 'Hanoi',
    },
    {
      id: 4,
      class: 'C0920K1',
      address: 'HCM',
    },
  ];
  @Output() xemChiTietEvent = new EventEmitter();

  // tslint:disable-next-line:typedef
  showDetail() {
    this.xemChiTietEvent.emit(this.detailStudent);
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
