import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  template: `
    <h2>Progress Bar</h2>
    <div class="progress-bar-container" [style.backgroundColor]="backgroundColor">
      <div class="progress" [ngStyle]="{
        backgroundColor: progressColor,
        width: width + '%'}">
      </div>
    </div>
  `,
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
  @Input() backgroundColor = '#D9D9D9';
  @Input() progressColor = '#4CAF50';
  @Input() width = 50;

  constructor() {
  }

  ngOnInit(): void {
  }

}
