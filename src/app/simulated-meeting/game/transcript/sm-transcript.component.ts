import {Component, OnInit} from "@angular/core";
import {SMDialog} from "../../sm-dialog";

@Component({
  selector: 'sm-transcript',
  templateUrl: './sm-transcript.component.html',
  styleUrls: ['./sm-transcript.component.css']
})

export class SimulatedMeetingTranscriptComponent {
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
    }],
    clicked:boolean
  }];


  changeState(dialog:SMDialog) {
    console.log(dialog);
    if (dialog.clicked == true) {
      dialog.clicked = false;
    }
    else if (dialog.clicked == null || dialog.clicked == false)
      dialog.clicked = true;
  }

}
