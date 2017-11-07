import {ActivitiesService} from './activities.service';
import {Activity} from './activity';
import {OnInit, Component} from "@angular/core";

@Component({
  selector: 'activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})

export class ActivitiesComponent implements OnInit {
  activities:Activity[];
  selectedActivity:Activity;

  constructor(private activitiesService:ActivitiesService) {

  }

  getActivities():void {
    this.activitiesService.getActivities().then(activities => this.activities = activities);
  }

  ngOnInit():void {
    this.getActivities();
  }

  onSelect(activity:Activity):void {
    this.selectedActivity = activity;
  }

  goToNextPage(){
    //here we need to write code to redirect to different part based on the selectedActivityCode
  }
}
