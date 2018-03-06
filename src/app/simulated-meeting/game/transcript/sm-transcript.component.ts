import {Component, OnInit, Inject} from "@angular/core";
import {SMDialog} from "../../sm-dialog";
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material/dialog";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'sm-transcript',
  templateUrl: './sm-transcript.component.html',
  styleUrls: ['./sm-transcript.component.css']
})

export class SimulatedMeetingTranscriptComponent {
  name:string;
  maxLength:number;
  currentId:number;
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
  completed: boolean;
  private router: Router;
  private route: ActivatedRoute;

  constructor(
    public dialogRef: MatDialogRef<SimulatedMeetingTranscriptComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, router:Router, route: ActivatedRoute) { 
    this.router = router;
    this.route = route;
  }

  onNoClick(): void {
    if(this.completed == true){
      this.router.navigate(['/simulated-meeting']);
    }
    this.dialogRef.close();
  }


  changeState(dialog:SMDialog) {
    console.log(dialog);
    if (dialog.clicked == true) {
      dialog.clicked = false;
    }
    else if (dialog.clicked == null || dialog.clicked == false)
      dialog.clicked = true;
  }

}
