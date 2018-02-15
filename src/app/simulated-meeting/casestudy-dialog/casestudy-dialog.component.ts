/**
 * Created by imittal on 11/24/17.
 */

import {Component, Inject} from "@angular/core";
import {Candidate} from "../main-page/candidate";
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'casestudy-dialog',
  templateUrl: './casestudy-dialog.component.html'
})

export class CaseStudyDialogComponent {
  selectedCandidate:Candidate;

  constructor(
    public dialogRef: MatDialogRef<CaseStudyDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
