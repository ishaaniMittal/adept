/**
 * Created by imittal on 11/24/17.
 */

import {Component} from "@angular/core";
import {Candidate} from "../main-page/candidate";

@Component({
  selector: 'casestudy-dialog',
  templateUrl: './casestudy-dialog.component.html'
})

export class CaseStudyDialogComponent {
  selectedCandidate:Candidate;

}
