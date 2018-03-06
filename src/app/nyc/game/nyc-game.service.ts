import {Injectable} from '@angular/core';
import {NYCQuestion} from "./nyc-question";
import {CANDIDATES} from "../main-page/candidates";
import {Candidate} from "../main-page/candidate";
import {NYCQUESTIONS} from "./nyc-questions";

@Injectable()
export class NYCGameService {

 getCandidates():Promise<Candidate[]>{
   return Promise.resolve(CANDIDATES);
 }

  getQuestions():Promise<NYCQuestion[]>{
    return Promise.resolve(NYCQUESTIONS);
  }
}
