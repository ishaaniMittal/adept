/**
 * Created by imittal on 11/24/17.
 */

import {Component, Inject} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'exit',
  templateUrl: './exit.component.html'
})

export class ExitDialogComponent {

  router: Router;
  route: ActivatedRoute;
  activity: number;

  constructor(public dialogRef: MatDialogRef<ExitDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, router: Router, route: ActivatedRoute) {
    this.router = router;
    this.route = route;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  goBack(): void {
    this.onNoClick();
    if (this.activity == 1) {
      this.router.navigate(['/simulated-meeting']);
    }
    else if (this.activity == 2) {
      this.router.navigate(['/nyc']);
    }
  }

}
