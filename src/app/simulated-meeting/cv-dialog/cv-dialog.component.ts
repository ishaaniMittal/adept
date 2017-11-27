/**
 * Created by imittal on 11/24/17.
 */

import {Component} from "@angular/core";
import {Candidate} from "../main-page/candidate";

@Component({
  selector: 'cv-dialog',
  templateUrl: './cv-dialog.component.html'
})

export class CvDialogComponent {
  selectedCandidate:Candidate;

}
