import {EmployeeDetailsComponent} from '../employee-details/employee-details.component';
import {Observable} from 'rxjs';
import {EmployeeService} from '../employee.service';
import {Employee} from '../employee';
import {Component, Inject, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';

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
              public dialog: MatDialog
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
            this.reloadData();
          },
          error => console.log(error));
  }

  employeeDetails(id: number): void {
    this.router.navigate(['details', id]);
  }

  getEmployeesByName(): void {
    console.log('here');
    this.employees = this.employeeService.getEmployeesByName(this.first_name);
  }

  openDialog(id: number, firstName: string, lastName: string): void {
    const dialogRef = this.dialog.open(DialogElementsExampleDialog, {
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
  selector: 'dialog-elements-example-dialog',
  templateUrl: './dialog-elements-example-dialog.html',
})
// tslint:disable-next-line:component-class-suffix
export class DialogElementsExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogElementsExampleDialog>,
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
