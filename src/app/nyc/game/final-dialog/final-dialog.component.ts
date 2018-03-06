/**
 * Created by imittal on 11/24/17.
 */

import {Component, Inject} from "@angular/core";
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material/dialog";
import {MatDialog} from "@angular/material";
import {NYCTranscriptComponent} from "../transcript/nyc-transcript.component";

@Component({
  selector: 'final-dialog',
  templateUrl: './final-dialog.component.html'
})

export class FinalDialog {
  explanation: string;
  questions: { id: number; prompt: string; maxPoints: { health: number; research: number; allies: number; service: number; teaching: number }; options: [{ id: number; option: string; health: number; research: number; allies: number; service: number; teaching: number }]; response: string }[];
  name: string;
  counter:number;

  constructor(public dialogRef: MatDialogRef<FinalDialog>,
              @Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  openTranscriptDialog() {
    console.log("im here",this.counter);
    this.dialogRef.close();
    const dialogRef = this.dialog.open(NYCTranscriptComponent, {});
    const instance = dialogRef.componentInstance;
    instance.questions = this.questions;
    instance.name = this.name;
    instance.counter = this.counter;

  }


}
