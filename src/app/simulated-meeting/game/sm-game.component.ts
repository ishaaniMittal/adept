import {Component, OnInit} from "@angular/core";
import {Router, ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {SMGameService} from "./sm-game.service";
import {Candidate} from "../main-page/candidate";
import {SMDialogue} from "./sm-dialogue";
import {MainPageService} from "../main-page/main-page.service";
import {CvDialogComponent} from "../cv-dialog/cv-dialog.component";
import {MatDialog} from "@angular/material";
import {CaseStudyDialogComponent} from "../casestudy-dialog/casestudy-dialog.component";

@Component({
  selector: 'sm-game',
  templateUrl: './sm-game.component.html',
  styleUrls: ['./sm-game.component.css']
})

export class SimulatedMeetingComponent implements OnInit {
  progressValue:number;
  progressStep:number;
  answer:{
    "statementKey":string;
    "speaker":number;
    "next":string;
    "text":string;
  };
  panelImage:string;
  candidates:Candidate[];
  selectedCandidate:Candidate;
  router:Router;
  selectedCommitteeMember:number;
  dialogesForPanelist:SMDialogue;
  dialoges:SMDialogue[];
  selectedPanelist:number;
  currentDialog:{
    currentDialogContent:string,
    currentDialogSpeaker:number,
    currentDialogStatementKey:string,
    nextDialogStatementKey:string,
    panelImage:string
  };
  dialogSequence:[{
    currentDialogContent:string,
    currentDialogSpeaker:number,
    currentDialogStatementKey:string,
    nextDialogStatementKey:string,
    panelImage:string
  }];
  currentDialogContent:string;
  currentDialogSpeaker:number;
  currentDialogStatementKey:string;
  nextDialogStatementKey:string;
  previousDialogStatementKey:string;
  service:SMGameService;
  answerOptions:[
    {
      "statementKey":string;
      "speaker":number;
      "next":string;
      "text":string;
    }];
  states:string[];
  id:number;
  route:ActivatedRoute;
  candidateService:MainPageService;
  candidate:Candidate;

  constructor(service:SMGameService, router:Router, route:ActivatedRoute, candidateService:MainPageService,
              public dialog:MatDialog) {
    this.router = router;
    this.route = route;
    this.candidateService = candidateService;
    this.service = service;
  }

  ngOnInit():void {

    this.progressValue = 0;
    this.states = [];
    this.id = +this.route.snapshot.paramMap.get('id');
    this.selectedPanelist = this.id - 1;
    this.getDialoguesForPanelist();
    this.getCandidate();
  }

  getCandidate():void {
    this.candidateService.getCandidates().then(candidates=> {
      this.candidate = candidates[this.selectedPanelist];
    });

  }

  getDialoguesForPanelist():void {
    this.service.getDialogues().then(dialoges=> {
      this.dialoges = dialoges;
      this.dialogesForPanelist = this.dialoges[this.selectedPanelist];
      console.log("selectedPanelist" + this.selectedPanelist);
      //    this.previousDialogStatementKey = null;

      this.currentDialogStatementKey = this.dialogesForPanelist.conversation[0].statementKey;
      this.currentDialogContent = this.dialogesForPanelist.conversation[0].statement[0].text;
      this.currentDialogSpeaker = this.dialogesForPanelist.conversation[0].speaker;
      this.nextDialogStatementKey = this.dialogesForPanelist.conversation[0].statement[0].next;
      this.panelImage = this.dialogesForPanelist.conversation[0].statement[0].image;
      this.answerOptions = [];
      this.dialogSequence = [];
      this.dialogSequence.push({
        "currentDialogContent": this.currentDialogContent,
        "currentDialogSpeaker": this.currentDialogSpeaker,
        "currentDialogStatementKey": this.currentDialogStatementKey,
        "nextDialogStatementKey": this.nextDialogStatementKey,
        "panelImage": this.panelImage
      })
      ;
      this.progressStep = 100 / this.dialogesForPanelist.conversation.length;
      console.log("this.currentDialogStatementKey " + this.currentDialogStatementKey);
      console.log("this.currentDialogContent " + this.currentDialogContent);
      console.log("this.currentDialogSpeaker " + this.currentDialogSpeaker);
      console.log("nextDialogStatementKey " + this.nextDialogStatementKey);
    });
  }


  clickOnNextButton():void {
    this.progressValue = this.progressValue + this.progressStep;
    // this.answerOptions = null;
    // this.previousDialogStatementKey = this.currentDialogStatementKey;
    this.currentDialogStatementKey = this.nextDialogStatementKey;

    this
      .createOptionsList();
  }

  private
  createOptionsList() {
    this.answerOptions = [];
    for (let conversation of this.dialogesForPanelist.conversation) {
      if (conversation.statementKey === this.currentDialogStatementKey) {
        this.currentDialogContent = conversation.statement[0].text;
        this.currentDialogSpeaker = conversation.speaker;
        this.nextDialogStatementKey = conversation.statement[0].next;
        this.panelImage = conversation.statement[0].image;
        if (conversation.statement.length != 1) {
          this.currentDialogContent = null;
          for (let i of conversation.statement) {
            this.answerOptions.push(i);
          }
        }
      }

    }

    console.log("this.currentDialogStatementKey " + this.currentDialogStatementKey);
    console.log("this.currentDialogContent " + this.currentDialogContent);
    console.log("this.currentDialogSpeaker " + this.currentDialogSpeaker);
    console.log("nextDialogStatementKey " + this.nextDialogStatementKey);
    console.log(this.answerOptions);
    
    this.dialogSequence.push({
      "currentDialogContent": this.currentDialogContent,
      "currentDialogSpeaker": this.currentDialogSpeaker,
      "currentDialogStatementKey": this.currentDialogStatementKey,
      "nextDialogStatementKey": this.nextDialogStatementKey,
      "panelImage": this.panelImage
    });
  }

  clickOnBackButton():void {
    // this.answerOptions = [];
    console.log(this.dialogSequence);
    this.dialogSequence.pop();

    const previousDialog = this.dialogSequence.pop();

    console.log(previousDialog);
    this.progressValue = this.progressValue - this.progressStep;
    this.nextDialogStatementKey = previousDialog.nextDialogStatementKey;
    this.currentDialogStatementKey = previousDialog.currentDialogStatementKey;
    this.createOptionsList();
  }

  submitAnswer():void {
    // this.answerOptions = [];
    this.progressValue = this.progressValue + this.progressStep;
    // this.previousDialogStatementKey = this.currentDialogStatementKey;
    this.currentDialogStatementKey = this.answer.next;
    this.createOptionsList();
  }


  openCvDialog() {
    const dialogRef = this.dialog.open(CvDialogComponent, {});
    const instance = dialogRef.componentInstance;
    instance.selectedCandidate = this.candidate;
  }

  openCasestudyDialog() {
    const dialogRef = this.dialog.open(CaseStudyDialogComponent, {});
    const instance = dialogRef.componentInstance;
    instance.selectedCandidate = this.candidate;
  }

}
