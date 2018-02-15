/**
 * Created by imittal on 11/24/17.
 */

import {Component, Inject} from "@angular/core";
import {Candidate} from "../main-page/candidate";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'cv-dialog',
  templateUrl: './cv-dialog.component.html'
})

export class CvDialogComponent {
  selectedCandidate:Candidate;

  constructor(
    public dialogRef: MatDialogRef<CvDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }


}
