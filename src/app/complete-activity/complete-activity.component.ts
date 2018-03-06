/**
 * Created by imittal on 11/24/17.
 */

import {Component, Inject} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef, MatDialog} from "@angular/material/dialog";
import {Router, ActivatedRoute} from "@angular/router";
import {SimulatedMeetingTranscriptComponent} from "../simulated-meeting/game/transcript/sm-transcript.component";

@Component({
  selector: 'complete-activity',
  templateUrl: './complete-activity.component.html'
})

export class CompleteActivityDialogComponent {
  name:string;
  maxLength:number;
  currentId;
  dialogSequence:[{
    currentDialogContent:string,
    currentDialogSpeaker:number,
    currentDialogStatementKey:string,
    nextDialogStatementKey:string,
    panelImage:string,
    speaker_image:string,
    currentId:number,
    reference:[{
      url:string,
      desc:string
    }]
  }];

  router:Router;
  route:ActivatedRoute;
  completed: boolean;

  constructor(public dialogRef:MatDialogRef<CompleteActivityDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data:any, router:Router, route:ActivatedRoute,public dialog:MatDialog) {
    this.router = router;
    this.route = route;
  }

  onNoClick():void {
    this.dialogRef.close();
  }
  viewTranscript():void {
    this.onNoClick();
    const dialogRef = this.dialog.open(SimulatedMeetingTranscriptComponent, {});
    const instance = dialogRef.componentInstance;
    instance.dialogSequence = this.dialogSequence;
    instance.name = this.name;
    instance.currentId = this.currentId;
    instance.maxLength = this.maxLength;
    instance.completed = this.completed;
  }

  goBack():void {
    this.onNoClick();
    this.router.navigate(['/simulated-meeting']);
  }

}
