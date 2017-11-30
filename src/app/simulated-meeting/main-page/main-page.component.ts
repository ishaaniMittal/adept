import {MainPageService} from './main-page.service';
import {Candidate} from './candidate';
import {OnInit, Component} from "@angular/core";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material";
import {PanelistDialogComponent} from "../panelist-dialog/panelist-dialog.component";
import {CvDialogComponent} from "../cv-dialog/cv-dialog.component";
import {CaseStudyDialogComponent} from "../casestudy-dialog/casestudy-dialog.component";

@Component({
  selector: 'main-page-sm',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent implements OnInit {
  candidates:Candidate[];
  selectedCandidate:Candidate;
  router:Router;
  selectedCommitteeMember:number;

  constructor(private service:MainPageService, router:Router, public dialog:MatDialog) {
    this.router = router;
  }

  getCandidates():void {
    this.service.getCandidates().then(candidates => {
      this.candidates = candidates;
      this.selectedCandidate = this.candidates[0];
    });


  }

  ngOnInit():void {
    this.getCandidates();

  }

  openCvDialog() {
    const dialogRef = this.dialog.open(CvDialogComponent, {});
    const instance = dialogRef.componentInstance;
    instance.selectedCandidate = this.selectedCandidate;
  }

  openCasestudyDialog() {
    const dialogRef = this.dialog.open(CaseStudyDialogComponent, {});
    const instance = dialogRef.componentInstance;
    instance.selectedCandidate = this.selectedCandidate;
  }

  openDialog() {
    const dialogRef = this.dialog.open(PanelistDialogComponent, {});
    const instance = dialogRef.componentInstance;
    instance.committee_members = this.selectedCandidate.committee_members;
  }

  setCommitteeMember(committeeMember):void {
    this.selectedCommitteeMember = committeeMember - 1;
    this.openDialog();
  }

  onSelect(candidate:Candidate):void {
    this.selectedCandidate = candidate;
    this.selectedCommitteeMember = null;
  }

  goToNextPage() {
    this.router.navigate(['/simulated-meeting', this.selectedCandidate.candidate_id]);
  }

  goBack() {
    this.router.navigate(['/activity']);
  }
}
