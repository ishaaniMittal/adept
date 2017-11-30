import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'sm-transcript',
  templateUrl: './sm-transcript.component.html',
  styleUrls: ['./sm-transcript.component.css']
})

export class SimulatedMeetingTranscriptComponent implements OnInit {
  name:string;
  dialogSequence:[{ currentDialogContent:string,
    currentDialogSpeaker:number,
    currentDialogStatementKey:string,
    nextDialogStatementKey:string,
    panelImage:string,
    speaker_image:string}];

  constructor() {

  }
}
