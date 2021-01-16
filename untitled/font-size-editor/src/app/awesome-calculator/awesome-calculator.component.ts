import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-awesome-calculator',
  templateUrl: './awesome-calculator.component.html',
  styleUrls: ['./awesome-calculator.component.css']
})
export class AwesomeCalculatorComponent implements OnInit {
  firstNumber: number | string | undefined;
  secondNumber: number | string | undefined;
  addition: string = "+";
  subtraction: string = "-";
  multiplication: string = "*";
  division: string = "/";
  result: any = null;
  error: boolean = false;

  checkNum(num: any): any {
    if (typeof num === 'number') {
      return true;
    }
    this.error = true;
    return false;
  }

  calculator(operator: string): any {
    this.checkNum(this.firstNumber);
    this.checkNum(this.secondNumber);
    try {
      this.result = eval(this.firstNumber + operator + this.secondNumber);
      if (this.secondNumber == 0) {
        throw "Second number cannot 0";
      }
    } catch (err) {
      console.log(err);
    }
    //console.log(this.result);
  }


  constructor() {
  }

  ngOnInit(): void {
  }

}
