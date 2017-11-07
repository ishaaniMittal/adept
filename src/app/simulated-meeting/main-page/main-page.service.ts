import {Injectable} from '@angular/core';
import {Candidate} from './candidate';
import {CANDIDATES} from './candidates';

@Injectable()
export class MainPageService {
  getCandidates():Promise<Candidate[]> {
    return Promise.resolve(CANDIDATES);
  }
  
}
