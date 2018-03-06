import {Component, OnInit} from "@angular/core";
import {Router, ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {NYCGameService} from "./nyc-game.service";
import {Candidate} from "../main-page/candidate";
import {NYCQuestion} from "./nyc-question";
import {NYCMainPageService} from "../main-page/nyc-main-page.service";
import {CvDialogComponent} from "../../simulated-meeting/cv-dialog/cv-dialog.component";
import {MatDialog} from "@angular/material";
import {CaseStudyDialogComponent} from "../../simulated-meeting/casestudy-dialog/casestudy-dialog.component";
import {PanelistDialogComponent} from "../../simulated-meeting/panelist-dialog/panelist-dialog.component";
import {NYCTranscriptComponent} from "./transcript/nyc-transcript.component";
import {ExitDialogComponent} from "../../exit/exit-component";
import {CompleteActivityDialogComponent} from "../../complete-activity/complete-activity.component";
import {ExplanationDialog} from "./explanationDialog/explanation-dialog.component";
import {FinalDialog} from "./final-dialog/final-dialog.component";
import {Question} from "../question";

@Component({
  selector: 'nyc-game',
  templateUrl: './nyc-game.component.html',
  styleUrls: ['./nyc-game.component.css']
})

export class NYCComponent implements OnInit {
  progressValue: number;
  progressStep: number;

  candidates: Candidate[];
  selectedCandidate: Candidate;


  selectedPerson: NYCQuestion;
  questions: NYCQuestion[];
  selectedPersonId: number;

  researchProgressValue: number;
  researchProgressStep: number;
  teachingProgressValue: number;
  teachingProgressStep: number;
  alliesProgressValue: number;
  alliesProgressStep: number;
  healthProgressValue: number;
  healthProgressStep: number;
  serviceProgressValue: number;
  serviceProgressStep: number;

  buttonText = "Submit";

  answer: { id: number; option: string; health: number; research: number; allies: number; service: number; teaching: number };

  questionInstruction: string;
  id: number;
  candidate: Candidate;
  router: Router;
  route: ActivatedRoute;
  service: NYCGameService;
  selectedPersonQuestions: [{ id: number; prompt: string; maxPoints: { health: number; research: number; allies: number; service: number; teaching: number }; options: [{ id: number; option: string; health: number; research: number; allies: number; service: number; teaching: number }]; response: string }];
  selectedPersonTenQuestions: { id: number; prompt: string; maxPoints: { health: number; research: number; allies: number; service: number; teaching: number }; options: [{ id: number; option: string; health: number; research: number; allies: number; service: number; teaching: number }]; response: string }[];
  question: any;
  answerOptions: [{ id: number; option: string; health: number; research: number; allies: number; service: number; teaching: number }];
  counter: number;
  researchTotal: number;
  healthTotal: number;
  alliedTotal: number;
  serviceTotal: number;
  teachingTotal: number;
  submit: boolean;
  response: string;
  mapDescription: string;
  mapImage: string;
  mapPresuccessor: string;
  counterInString: string;
  private clicked: boolean;

  constructor(service: NYCGameService, router: Router, route: ActivatedRoute,
              public dialog: MatDialog) {
    this.router = router;
    this.route = route;
    this.service = service;
  }

  ngOnInit(): void {
    this.initializeVariables();
    this.id = +this.route.snapshot.paramMap.get('id');
    this.selectedPersonId = this.id - 1;
    this.mapDescription = "Question 1";
    this.mapPresuccessor = "./../../../assets/nyc/";

    this.getQuestions();
    this.getCandidate();
    this.counterInString = (this.counter + 1).toString();
    this.mapImage = this.mapPresuccessor + this.counterInString + ".png";
    console.log(this.mapImage);


  }

  private initializeVariables() {
    this.clicked = false;
    this.counter = 0;
    this.progressValue = 0;
    this.researchTotal = 0;
    this.healthTotal = 0;
    this.alliedTotal = 0;
    this.serviceTotal = 0;
    this.teachingTotal = 0;
    this.healthProgressStep = 0;
    this.researchProgressStep = 0;
    this.alliesProgressStep = 0;
    this.serviceProgressStep = 0;
    this.teachingProgressStep = 0;
    this.healthProgressValue = 0;
    this.serviceProgressValue = 0;
    this.teachingProgressValue = 0;
    this.alliesProgressValue = 0;
    this.researchProgressValue = 0;
  }

  getCandidate(): void {
    this.service.getCandidates().then(candidates => {
      this.candidate = candidates[this.selectedPersonId];
    });

  }


  shuffleInPlace<T>(array: T[]): T[] {
    // if it's 1 or 0 items, just return
    if (array.length <= 1) return array;

    // For each index in array
    for (let i = 0; i < array.length; i++) {

      // choose a random not-yet-placed item to place there
      // must be an item AFTER the current item, because the stuff
      // before has all already been placed
      const randomChoiceIndex = this.getRandom(i, array.length - 1);

      // place our random choice in the spot by swapping
      [array[i], array[randomChoiceIndex]] = [array[randomChoiceIndex], array[i]];
    }

    return array;
  }

  getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

  getQuestions(): void {
    this.service.getQuestions().then(questions => {
      this.questions = questions;
      this.selectedPerson = this.questions[this.selectedPersonId];
      this.selectedPersonQuestions = this.selectedPerson.questions;
      this.shuffleInPlace(this.selectedPersonQuestions);

      this.selectedPersonTenQuestions = this.selectedPersonQuestions.slice(0, 10);

      this.questionInstruction = this.selectedPersonTenQuestions[0].prompt;
      this.answerOptions = this.selectedPersonTenQuestions[0].options;

      this.progressStep = 10;
      this.calculateCategoryStepValues();
    });
  }

  private calculateCategoryStepValues() {
    //TODO:for loop to calculate max points possible for each category
    var i = 0;


    while (i < 10) {
      this.researchTotal += this.selectedPersonQuestions[i].maxPoints.research;
      this.healthTotal += this.selectedPersonQuestions[i].maxPoints.health;
      this.alliedTotal += this.selectedPersonQuestions[i].maxPoints.allies;
      this.serviceTotal += this.selectedPersonQuestions[i].maxPoints.service;
      this.teachingTotal += this.selectedPersonQuestions[i].maxPoints.teaching;
      console.log(this.researchTotal);
      i++;
    }


    this.healthProgressStep = 100 / this.healthTotal;
    this.researchProgressStep = 100 / this.researchTotal;
    this.alliesProgressStep = 100 / this.alliedTotal;
    this.serviceProgressStep = 100 / this.serviceTotal;
    this.teachingProgressStep = 100 / this.teachingTotal;

    console.log(this.healthProgressStep);

  }

  showError() {
    return this.buttonText == "Submit" && this.answer == null && this.clicked == true;
  }

  submitAnswer(): void {
    this.clicked = true;
    if (this.buttonText == "Next") {
      this.clickNext();
    }

    else {

      if (this.answer != null) {
        this.submit = true;
        if (this.counter == 9) {
          this.progressValue += this.progressStep;
          this.healthProgressValue += this.answer.health * this.healthProgressStep;
          this.serviceProgressValue += this.answer.service * this.serviceProgressStep;
          this.teachingProgressValue += this.answer.teaching * this.teachingProgressStep;
          this.alliesProgressValue += this.answer.allies * this.alliesProgressStep;
          this.researchProgressValue += this.answer.research * this.researchProgressStep;
          this.openFinalDialog();
        }
        else {
          this.progressValue += this.progressStep;
          this.healthProgressValue += this.answer.health * this.healthProgressStep;
          this.serviceProgressValue += this.answer.service * this.serviceProgressStep;
          this.teachingProgressValue += this.answer.teaching * this.teachingProgressStep;
          this.alliesProgressValue += this.answer.allies * this.alliesProgressStep;
          this.researchProgressValue += this.answer.research * this.researchProgressStep;
          this.response = this.selectedPersonTenQuestions[this.counter].response;
          this.answer = null;
          this.clicked = false;
          this.buttonText = "Next";


        }
      }
    }

  }

  ifButtonTextIsSubmit() {
    if (this.buttonText == "Submit") {
      return true;
    }
    else return false;
  }

  private clickNext() {
    this.clicked = false;
    this.buttonText = "Submit";
    this.counter++;
    this.counterInString = (this.counter + 1).toString();
    this.mapImage = this.mapPresuccessor + this.counterInString + ".png";
    this.questionInstruction = this.selectedPersonTenQuestions[this.counter].prompt;
    this.answerOptions = this.selectedPersonTenQuestions[this.counter].options;

  }

  private openExplanationDialog() {

    const dialogRef = this.dialog.open(ExplanationDialog, {});
    const instance = dialogRef.componentInstance;
    instance.explanation = this.selectedPersonTenQuestions[this.counter].response;

    dialogRef.afterClosed().subscribe(result => {
      this.counter++;
      this.questionInstruction = this.selectedPersonTenQuestions[this.counter].prompt;
      this.answerOptions = this.selectedPersonTenQuestions[this.counter].options;


    });

  }

  openFinalDialog() {
    const dialogRef = this.dialog.open(FinalDialog, {disableClose: true});
    const instance = dialogRef.componentInstance;
    instance.questions = this.selectedPersonTenQuestions.slice(0, 10);
    instance.name = this.selectedPerson.name;
    instance.counter = this.counter;
  }


  openTranscriptDialog() {
    const dialogRef = this.dialog.open(NYCTranscriptComponent, {});
    const instance = dialogRef.componentInstance;
    instance.questions = this.selectedPersonTenQuestions.slice(0, this.counter);
    instance.counter = this.counter;
    instance.name = this.selectedPerson.name;
  }

  openPanelistBio() {
    const dialogRef = this.dialog.open(PanelistDialogComponent, {});
    const instance = dialogRef.componentInstance;
    instance.committee_members = this.candidate.committee_members;
  }


  openExitDialog() {
    const dialogRef = this.dialog.open(ExitDialogComponent, {});
    const instance = dialogRef.componentInstance;
    instance.activity = 2;
  }


  openCasestudyDialog() {
    const dialogRef = this.dialog.open(CaseStudyDialogComponent, {});
    const instance = dialogRef.componentInstance;
    instance.selectedCandidate = this.candidate;
  }


  goBack() {
    this.router.navigate(['/nyc']);
  }
}
