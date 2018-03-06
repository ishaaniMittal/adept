import {NYCMainPageService} from './nyc-main-page.service';
import {Candidate} from './candidate';
import {OnInit, Component} from "@angular/core";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material";
import {PanelistDialogComponent} from "../../simulated-meeting/panelist-dialog/panelist-dialog.component";
import {CvDialogComponent} from "../../simulated-meeting/cv-dialog/cv-dialog.component";
import {CaseStudyDialogComponent} from "../../simulated-meeting/casestudy-dialog/casestudy-dialog.component";

@Component({
  selector: 'main-page-nyc',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class NYCMainPageComponent implements OnInit {
  candidates:Candidate[];
  selectedCandidate:Candidate;
  router:Router;
  selectedCommitteeMember:number;

  constructor(private service:NYCMainPageService, router:Router, public dialog:MatDialog) {
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
    this.router.navigate(['/nyc', this.selectedCandidate.candidate_id]);
  }

  goBack() {
    this.router.navigate(['/activity']);
  }
}
