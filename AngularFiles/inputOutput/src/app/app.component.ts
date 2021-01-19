import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <table class="table">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
        </tr>
        </thead>
        <tbody>
        <tr *ngFor="let ls of list_student">
          <th scope="row">{{ ls.id }}</th>
          <td class="product" (click)="setSelectStudent(ls)">{{ ls.name }} </td>
        </tr>
        </tbody>
      </table>
      <div *ngIf="selectStudent">
        <p>Có chọn 1 student {{ selectStudent.name }}</p>
        <!--            <script>-->
        <!--              console.log(selectStudent)-->
        <!--            </script>-->
        <app-show-detail-student
          (xemChiTietEvent)="notifyMessage($event)">
        </app-show-detail-student>
        <div *ngIf="mgs">
          {{ mgs }}
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'inputOutput';

  // tslint:disable-next-line:variable-name
  list_student: student_oj[] = [
    {
      id: 1,
      name: 'Nguyen Van A',
    },
    {
      id: 2,
      name: 'Le Van B',
    },
    {
      id: 3,
      name: 'Le Van D',
    },
    {
      id: 4,
      name: 'Tran Van c',
    },
  ];

  selectStudent: any;
  mgs?: string;

  // tslint:disable-next-line:typedef
  setSelectStudent(p: any) {
    this.selectStudent = p;
  }

  notifyMessage($event: student_oj[]): void {
    this.mgs = '';
    // @ts-ignore
    // tslint:disable-next-line:variable-name
    const event_string = JSON.stringify($event);
    // tslint:disable-next-line:variable-name
    const event_json = JSON.parse(event_string);
    for (const e of event_json) {
      // console.log(this.selectStudent.id);
      if (e.id === this.selectStudent.id) {
        this.mgs = `Chi tiet sinh vien: ${e.class} ${e.address}`; // console.log('data', e)
        break;
      }
    }
  }

}

// tslint:disable-next-line:class-name
export interface student_oj {
  id: number;
  name: string;
}
