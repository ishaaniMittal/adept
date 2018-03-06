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
import {ExitDialogComponent} from "../../exit/exit-component";
import {CompleteActivityDialogComponent} from "../../complete-activity/complete-activity.component";

@Component({
  selector: 'sm-game',
  templateUrl: './sm-game.component.html',
  styleUrls: ['./sm-game.component.css']
})

export class SimulatedMeetingComponent implements OnInit {
  progressValue: number;
  progressStep: number;
  panelSpeakerName: string;
  answer: {
    "statementKey": string;
    "speaker": number;
    "next": string;
    "text": string;
  };
  panelImage: string;
  speakerImage: string;
  candidates: Candidate[];
  selectedCandidate: Candidate;
  router: Router;
  selectedCommitteeMember: number;
  dialogesForPanelist: SMDialogue;
  dialoges: SMDialogue[];
  selectedPanelist: number;
  dialogSequence: [{
    currentDialogContent: string,
    currentDialogSpeaker: number,
    currentDialogStatementKey: string,
    nextDialogStatementKey: string,
    panelImage: string,
    speaker_image: string,
    currentId: number,
    reference: [{
      url: string,
      desc: string
    }]
  }];
  currentId: number;
  currentDialogContent: string;
  currentDialogSpeaker: number;
  currentDialogStatementKey: string;
  nextDialogStatementKey: string;
  reference: [
    {
      url: string,
      desc: string
    }
    ];
  service: SMGameService;
  answerOptions: [
    {
      "statementKey": string;
      "speaker": number;
      "next": string;
      "text": string;
    }];
  id: number;
  route: ActivatedRoute;
  candidateService: MainPageService;
  candidate: Candidate;
  private clicked: boolean;

  constructor(service: SMGameService, router: Router, route: ActivatedRoute, candidateService: MainPageService,
              public dialog: MatDialog) {
    this.router = router;
    this.route = route;
    this.candidateService = candidateService;
    this.service = service;
  }

  ngOnInit(): void {
    this.clicked = false;
    this.progressValue = 0;
    this.id = +this.route.snapshot.paramMap.get('id');
    this.selectedPanelist = this.id - 1;
    this.getDialoguesForPanelist();
    this.getCandidate();
    this.getSpeakerName(this.currentDialogSpeaker);

  }

  getCandidate(): void {
    this.candidateService.getCandidates().then(candidates => {
      this.candidate = candidates[this.selectedPanelist];
    });

  }

  getDialoguesForPanelist(): void {
    this.service.getDialogues().then(dialoges => {
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
      this.dialogSequence = [{
        currentDialogContent: "",
        currentDialogSpeaker: undefined,
        currentDialogStatementKey: undefined,
        nextDialogStatementKey: undefined,
        panelImage: undefined,
        speaker_image: undefined,
        currentId: undefined,
        reference: [{
          url: undefined,
          desc: undefined
        }]
      }];
      this.dialogSequence.pop();
      this.dialogSequence.push({
        "currentDialogContent": this.currentDialogContent,
        "currentDialogSpeaker": this.currentDialogSpeaker,
        "currentDialogStatementKey": this.currentDialogStatementKey,
        "nextDialogStatementKey": this.nextDialogStatementKey,
        "panelImage": this.panelImage,
        "reference": this.reference,
        "speaker_image": this.speakerImage,
        "currentId": this.currentId
      })
      ;
      this.progressStep = 100 / this.dialogesForPanelist.conversation.length;
      this.progressValue = this.currentId * this.progressStep;
      this.getSpeakerName(this.currentDialogSpeaker);

    });
  }

  getSpeakerName(currentDialogSpeaker: number) {
    if (this.selectedPanelist == 0) {
      if (currentDialogSpeaker == 1) {
        this.panelSpeakerName = "Speaker is Al Smith";
      }
      else if (currentDialogSpeaker == 2) {
        this.panelSpeakerName = "Speaker is Jason";
      }
      else if (currentDialogSpeaker == 3) {
        this.panelSpeakerName = "Speaker is Karen";
      }
      else if (currentDialogSpeaker == 0) {
        this.panelSpeakerName = "You are the speaker";
      }
    }
    else if (this.selectedPanelist == 2) {
      if (currentDialogSpeaker == 1) {
        this.panelSpeakerName = "Speaker is Georgia Green";
      }
      else if (currentDialogSpeaker == 2) {
        this.panelSpeakerName = "Speaker is Caroline Wong";
      }
      else if (currentDialogSpeaker == 3) {
        this.panelSpeakerName = "Speaker is Susan Tomie";
      }
      else if (currentDialogSpeaker == 0) {
        this.panelSpeakerName = "You are the speaker";
      }
    } else if (this.selectedPanelist == 1) {
      if (currentDialogSpeaker == 1) {
        this.panelSpeakerName = "Speaker is Katherine Sloan";
      }
      else if (currentDialogSpeaker == 2) {
        this.panelSpeakerName = "Speaker is Joe Wynn";
      }
      else if (currentDialogSpeaker == 3) {
        this.panelSpeakerName = "Speaker is Mohammad Shaban";
      }
      else if (currentDialogSpeaker == 0) {
        this.panelSpeakerName = "You are the speaker";
      }
    }

  }

  clickOnNextButton(): void {

    if (this.currentId === this.dialogesForPanelist.conversation.length) {
      this.openCompleteActivityDialog();
    }
    this.currentDialogStatementKey = this.nextDialogStatementKey;

    this
      .createOptionsList();
    this.getSpeakerName(this.currentDialogSpeaker);
  }

  createOptionsList() {
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
        this.answerOptions = [{
          "statementKey": "",
          "speaker": undefined,
          "next": "",
          "text": ""
        }];
        this.answerOptions.pop();
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

  clickOnBackButton(): void {

    this.dialogSequence.pop();

    const previousDialog = this.dialogSequence.pop();

    this.nextDialogStatementKey = previousDialog.nextDialogStatementKey;
    this.currentDialogStatementKey = previousDialog.currentDialogStatementKey;
    this.createOptionsList();
    this.getSpeakerName(this.currentDialogSpeaker);
  }

  showError() {
    return this.answer == null && this.clicked == true;
  }

  submitAnswer(): void {
    this.clicked = true;
    if (this.answer != null) {
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
      this.getSpeakerName(this.currentDialogSpeaker);
      this.clicked = false;
      this.answer = null;
    }
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

  openExitDialog() {
    const dialogRef = this.dialog.open(ExitDialogComponent, {});
    const instance = dialogRef.componentInstance;
    instance.activity = 1;
  }

  openCompleteActivityDialog() {
    const dialogRef = this.dialog.open(CompleteActivityDialogComponent, {});
    const instance = dialogRef.componentInstance;
    this.dialogSequence.pop();
    instance.completed = true;
    instance.dialogSequence = this.dialogSequence;
    instance.name = this.candidate.name;
    instance.currentId = this.currentId;
    instance.maxLength = this.dialogesForPanelist.conversation.length;
  }

  openCasestudyDialog() {
    const dialogRef = this.dialog.open(CaseStudyDialogComponent, {});
    const instance = dialogRef.componentInstance;
    instance.selectedCandidate = this.candidate;
  }


  goBack() {
    this.router.navigate(['/simulated-meeting']);
  }
}
