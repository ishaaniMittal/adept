import {Injectable} from '@angular/core';
/*import {SMDialogue} from "./sm-dialogue";*/
import {CANDIDATES} from "../main-page/candidates";
import {Candidate} from "../main-page/candidate";
/*import {SMDIALOGUES} from "./sm-dialogues";*/

@Injectable()
export class SMGameService {
  /*getCandidateDialogues():Promise<SMDialogue[]> {
    return Promise.resolve(SMDIALOGUES);
  }*/

 getCandidates():Promise<Candidate[]>{
   return Promise.resolve(CANDIDATES);
 }
}
