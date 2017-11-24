import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, ParamMap} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {Observable} from 'rxjs/Observable';
/*import {SMDialogue} from "./sm-dialogue";*/
import {SMGameService} from "./sm-game.service";
import {Candidate} from "../main-page/candidate";

@Component({
  selector: 'sm-game',
  templateUrl: './sm-game.component.html',
  styleUrls: ['./sm-game.component.css']
})

export class SimulatedMeetingComponent implements OnInit {

  /*candidateDialogues$:Observable<SMDialogue[]>;*/
  //private dialogues:SMDialogue[];
  /*private selectedDialogue:SMDialogue;*/
  private selectedId:number;
  private selectedCandidate:Candidate;
  private candidates:Candidate[];
  private options:string[];
  private answer:string;

  constructor(private service:SMGameService,
              private route:ActivatedRoute) {

  }

  /*getDialogues():void {
    this.service.getCandidateDialogues().then(dialogues => {
      this.dialogues = dialogues;
      this.selectedDialogue = this.dialogues[0];
    });

  }*/


  ngOnInit() {

    //this.getDialogues();

    this.options = ["He's been told several times to get grants in core areas. I see too little substance in materials science-oriented research.",
      "I choose to remain silent at this point in the conversation.",
      "Forming bridges to other disciplines is as important as bringing money into our department. The number of interdisciplinary grants confirms the value of his research.",
      "Are we discussing scholarship or funding?"];

  }
}
