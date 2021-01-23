import {EmployeeDetailsComponent} from '../employee-details/employee-details.component';
import {Observable} from 'rxjs';
import {EmployeeService} from '../employee.service';
import {Employee} from '../employee';
import {Component, Inject, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees!: Observable<Employee[]>;
  first_name!: string;

  constructor(private employeeService: EmployeeService,
              private router: Router,
              public dialog: MatDialog,
              private toasrt: ToastrService,
  ) {
  }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(): void {
    this.employees = this.employeeService.getEmployeesList();
    // console.log(this.employees);
  }

  deleteEmployee(id: number): void {
    this.employeeService.deleteEmployee(id)
      .subscribe(
        data => {
          console.log(data);
          if ((data.status || []).indexOf('Token is Invalid') !== -1) {
            this.toasrt.warning(data.status, 'Error happing while deleting!');
          } else {
            this.reloadData();
            this.toasrt.success('Deleted successfully', 'Xoá thành công');
          }
        },
        error => {
          console.log(error);
          this.toasrt.warning('Có lỗi xảy ra, không thể xoá được file.', 'Error happing while deleting!');
        });
  }

  employeeDetails(id: number): void {
    this.router.navigate(['details', id]);
  }

  getEmployeesByName(): void {
    console.log('here');
    this.employees = this.employeeService.getEmployeesByName(this.first_name);
  }

  openDialog(id: number, firstName: string, lastName: string): void {
    const dialogRef = this.dialog.open(DialogEmployeeDelete, {
      data: {id: id, firstName: firstName, lastName: lastName}
    });
    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
      // console.log(id);
      if (result) {
        console.log(result);
        this.deleteEmployee(id);
      }
      // console.log(this);
      // this.animal = result;
    });
  }
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dialog-employees-delete',
  templateUrl: 'dialog-employees-delete.html',
})
// tslint:disable-next-line:component-class-suffix
export class DialogEmployeeDelete {
  constructor(
    public dialogRef: MatDialogRef<DialogEmployeeDelete>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    // console.log(this.data);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

export interface DialogData {
  id: number;
  firstName: string;
  lastName: string;
}
