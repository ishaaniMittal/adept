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
import {PanelistDialogComponent} from "../panelist-dialog/panelist-dialog.component";
import {SimulatedMeetingTranscriptComponent} from "./transcript/sm-transcript.component";

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
  speakerImage:string;
  candidates:Candidate[];
  selectedCandidate:Candidate;
  router:Router;
  selectedCommitteeMember:number;
  dialogesForPanelist:SMDialogue;
  dialoges:SMDialogue[];
  selectedPanelist:number;
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
  currentId:number;
  currentDialogContent:string;
  currentDialogSpeaker:number;
  currentDialogStatementKey:string;
  nextDialogStatementKey:string;
  reference:[
    {url:string,
      desc:string}
    ];
  service:SMGameService;
  answerOptions:[
    {
      "statementKey":string;
      "speaker":number;
      "next":string;
      "text":string;
    }];
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
      this.currentId = this.dialogesForPanelist.conversation[0].statement[0].id;
      this.currentDialogStatementKey = this.dialogesForPanelist.conversation[0].statementKey;
      this.currentDialogContent = this.dialogesForPanelist.conversation[0].statement[0].text;
      this.currentDialogSpeaker = this.dialogesForPanelist.conversation[0].speaker;
      this.nextDialogStatementKey = this.dialogesForPanelist.conversation[0].statement[0].next;
      this.panelImage = this.dialogesForPanelist.conversation[0].statement[0].image;
      this.reference = this.dialogesForPanelist.conversation[0].statement[0].reference;
      this.speakerImage = this.dialogesForPanelist.conversation[0].statement[0].speaker_image;
      this.answerOptions = [];
      this.dialogSequence = [];
      this.dialogSequence.push({
        "currentDialogContent": this.currentDialogContent,
        "currentDialogSpeaker": this.currentDialogSpeaker,
        "currentDialogStatementKey": this.currentDialogStatementKey,
        "nextDialogStatementKey": this.nextDialogStatementKey,
        "panelImage": this.panelImage,
        "reference": this.reference,
        "speaker_image": this.speakerImage
      })
      ;
      this.progressStep = 100 / this.dialogesForPanelist.conversation.length;
      this.progressValue = this.currentId * this.progressStep;
    });
  }


  clickOnNextButton():void {
    if (this.currentId === this.dialogesForPanelist.conversation.length) {
      this.openTranscriptDialog();
    }
    this.currentDialogStatementKey = this.nextDialogStatementKey;

    this
      .createOptionsList();
  }

  private
  createOptionsList() {
    this.answerOptions = [];
    for (let conversation of this.dialogesForPanelist.conversation) {
      if (conversation.statementKey === this.currentDialogStatementKey) {
        this.currentId = conversation.statement[0].id;
        this.progressValue = this.currentId * this.progressStep;
        this.currentDialogContent = conversation.statement[0].text;
        this.currentDialogSpeaker = conversation.speaker;
        this.nextDialogStatementKey = conversation.statement[0].next;
        this.panelImage = conversation.statement[0].image;
        this.reference = conversation.statement[0].reference;
        this.speakerImage = conversation.statement[0].speaker_image;
        if (conversation.statement.length != 1) {
          this.currentDialogContent = null;
          for (let i of conversation.statement) {
            this.answerOptions.push(i);
          }
        }
      }

    }

    this.dialogSequence.push({
      "currentDialogContent": this.currentDialogContent,
      "currentDialogSpeaker": this.currentDialogSpeaker,
      "currentDialogStatementKey": this.currentDialogStatementKey,
      "nextDialogStatementKey": this.nextDialogStatementKey,
      "panelImage": this.panelImage,
      "currentId": this.currentId,
      "reference": this.reference,
      "speaker_image": this.speakerImage
    })
    ;
  }

  clickOnBackButton():void {
    console.log(this.dialogSequence);
    this.dialogSequence.pop();

    const previousDialog = this.dialogSequence.pop();

    console.log(previousDialog);
    this.nextDialogStatementKey = previousDialog.nextDialogStatementKey;
    this.currentDialogStatementKey = previousDialog.currentDialogStatementKey;
    this.createOptionsList();
  }

  submitAnswer():void {
    this.currentDialogContent = this.answer.text;

    this.dialogSequence.pop();
    this.dialogSequence.push({
      "currentDialogContent": this.currentDialogContent,
      "currentDialogSpeaker": 0,
      "currentDialogStatementKey": this.currentDialogStatementKey,
      "nextDialogStatementKey": this.nextDialogStatementKey,
      "panelImage": this.panelImage,
      "currentId": this.currentId,
      "reference": this.reference,
      "speaker_image": this.speakerImage
    })
    ;
    this.currentDialogStatementKey = this.answer.next;
    this.createOptionsList();
  }

  openTranscriptDialog() {
    const dialogRef = this.dialog.open(SimulatedMeetingTranscriptComponent, {});
    const instance = dialogRef.componentInstance;
    instance.dialogSequence = this.dialogSequence;
    instance.name = this.candidate.name;
    instance.currentId = this.currentId;
    instance.maxLength = this.dialogesForPanelist.conversation.length;
  }

  openPanelistBio() {
    const dialogRef = this.dialog.open(PanelistDialogComponent, {});
    const instance = dialogRef.componentInstance;
    instance.committee_members = this.candidate.committee_members;
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

  toggleState() {
    this.state = this.state === 'active' ? 'inactive' : 'active';
  }

  goBack() {
    this.router.navigate(['/simulated-meeting']);
  }
}
