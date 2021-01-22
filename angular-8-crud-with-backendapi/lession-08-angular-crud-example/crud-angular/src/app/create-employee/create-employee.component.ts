import {EmployeeService} from '../employee.service';
import {Employee} from '../employee';
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  submitted = false;
  // tslint:disable-next-line:variable-name
  error_msg = '';

  constructor(private employeeService: EmployeeService,
              private router: Router) {
  }

  ngOnInit() {
  }

  newEmployee(): void {
    this.submitted = false;
    this.employee = new Employee();
  }

  save(): void {
    // console.log(this.submitted);
    console.log(this.employee);
    this.employeeService
      .createEmployee(this.employee)
      .subscribe((data: any) => {
        if (data.status !== undefined && data.status !== 'undefined') {
          if (data.status.includes('Authorization Token not found')) {
            this.error_msg = 'Authorization Token not found';
          } else if (data.status.includes('Token is Invalid')) {
            this.error_msg = 'Token is Invalid';
          }
        }

        this.employee = new Employee();
        this.gotoList();
      },
      (error: any) => console.log(error));
  }

  onSubmit(): void {
    // console.log(this);
    this.submitted = true;
    this.save();
  }

  gotoList(): void {
    this.router.navigate(['/employees']);
  }
}
