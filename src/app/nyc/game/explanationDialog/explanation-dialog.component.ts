/**
 * Created by imittal on 11/24/17.
 */

import {Component, Inject} from "@angular/core";
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'explanation-dialog',
  templateUrl: './explanation-dialog.component.html'
})

export class ExplanationDialog {
  explanation: string;

  constructor(public dialogRef: MatDialogRef<ExplanationDialog>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
