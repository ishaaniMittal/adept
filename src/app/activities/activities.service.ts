import {Injectable} from '@angular/core';
import {Activity} from './activity';
import {ACTIVITIES} from './activities';

@Injectable()
export class ActivitiesService {
  getActivities():Promise<Activity[]> {
    return Promise.resolve(ACTIVITIES);
  }
}
