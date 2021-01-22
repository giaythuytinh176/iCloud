import {Component} from '@angular/core';
// @ts-ignore
import {MatDialog} from '@angular/material/dialog';

/**
 * @title Dialog with header, scrollable content and actions
 */
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dialog-content-example',
  templateUrl: 'dialog-content-example-dialog.html',
})
// tslint:disable-next-line:component-class-suffix
export class DialogContentExample {
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
})
export class DialogContentExampleDialog {}
