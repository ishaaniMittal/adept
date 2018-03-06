import {ActivitiesService} from './activities.service';
import {Activity} from './activity';
import {OnInit, Component} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  selector: 'activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})

export class ActivitiesComponent implements OnInit {
  router:Router;
  activities:Activity[];
  selectedActivity:Activity;

  constructor(private activitiesService:ActivitiesService, router:Router) {
    this.router = router;
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

  goToNextPage(activity) {
    if (activity.activityId == 1) {
      this.router.navigate(['/simulated-meeting']);
    } else if (activity.activityId == 2) {
      this.router.navigate(['/nyc']);
    } else {
      this.router.navigate(['/annotated-vita']);
    }
    //here we need to write code to redirect to different part based on the selectedActivityCode
  }
}
