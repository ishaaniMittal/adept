import {MainPageService} from './main-page.service';
import {Candidate} from './candidate';
import {OnInit, Component} from "@angular/core";

@Component({
  selector: 'main-page-sm',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent implements OnInit {
  candidates:Candidate[];
  selectedCandidate:Candidate;

  constructor(private service:MainPageService) {

  }

  getCandidates():void {
    this.service.getCandidates().then(candidates => this.candidates = candidates);


  }

  ngOnInit():void {
    this.getCandidates();
    this.selectedCandidate = this.candidates[0];
  }

  onSelect(candidate:Candidate):void {
    this.selectedCandidate = candidate;
  }
}
