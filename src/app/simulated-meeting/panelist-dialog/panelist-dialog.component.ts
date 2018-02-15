/**
 * Created by imittal on 11/24/17.
 */

import {Component, Inject} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'panelist-dialog',
  templateUrl: './panelist-dialog.component.html'
})

export class PanelistDialogComponent {

  committee_members:[{
    "committee_id":number,
    "name":string,
    "image":string,
    "description":string
  }];

  constructor(
    public dialogRef: MatDialogRef<PanelistDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
