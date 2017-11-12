import {Component, OnInit} from "@angular/core";
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import {SMDialogues} from "./sm-dialogue";
import {SMGameService} from "./sm-game.service";

@Component({
  selector: 'sm-game',
  templateUrl: './sm-game.component.html',
  styleUrls: ['./sm-game.component.css']
})

export class SimulatedMeetingComponent  implements OnInit {

  candidateDialogues$: Observable<SMDialogues[]>;

  private selectedId: number;

  constructor(
    private service: SMGameService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.candidateDialogues$ = this.route.paramMap
      .switchMap((params: ParamMap) => {
        // (+) before `params.get()` turns the string into a number
        this.selectedId = +params.get('id');
        return this.service.getCandidateDialogues();
      });
  }
}
