import {MainPageService} from './main-page.service';
import {Candidate} from './candidate';
import {OnInit, Component} from "@angular/core";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material";
import {PanelistDialogComponent} from "../panelist-dialog/panelist-dialog.component";

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


  openDialog(name:string, description:string) {
    const dialogRef = this.dialog.open(PanelistDialogComponent, {
      disableClose: false
    });
    const instance = dialogRef.componentInstance;
    instance.name = name;
    instance.description = description;
  }

  setCommitteeMember(committeeMember):void {
    this.selectedCommitteeMember = committeeMember - 1;
    this.openDialog(this.selectedCandidate.committee_members[this.selectedCommitteeMember].name,
      this.selectedCandidate.committee_members[this.selectedCommitteeMember].description);
  }

  onSelect(candidate:Candidate):void {
    this.selectedCandidate = candidate;
    this.selectedCommitteeMember = 0;
  }

  goToNextPage() {
    this.router.navigate(['/simulated-meeting', this.selectedCandidate.candidate_id]);
  }
}
