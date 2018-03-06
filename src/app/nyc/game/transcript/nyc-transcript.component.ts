import {Component, OnInit, Inject} from "@angular/core";
import {NYCQuestion} from "../nyc-question"
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'nyc-transcript',
  templateUrl: './nyc-transcript.component.html',
  styleUrls: ['./nyc-transcript.component.css']
})

export class NYCTranscriptComponent {
  questions: { id: number; prompt: string; maxPoints: { health: number; research: number; allies: number; service: number; teaching: number }; options: [{ id: number; option: string; health: number; research: number; allies: number; service: number; teaching: number }]; response: string }[];
  counter: number;
  name: string;
  router: Router;
  private route: ActivatedRoute;

  constructor(public dialogRef: MatDialogRef<NYCTranscriptComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, router: Router, route: ActivatedRoute,) {
    this.router = router;
    this.route = route;
  }

  onNoClick(): void {
    console.log(this.counter);
    if (this.counter == 9) {
      this.router.navigate(['/nyc']);
    }
    this.dialogRef.close();
  }


}
