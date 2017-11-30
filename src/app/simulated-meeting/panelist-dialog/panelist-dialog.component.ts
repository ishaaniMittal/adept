/**
 * Created by imittal on 11/24/17.
 */

import {Component} from "@angular/core";

@Component({
  selector: 'panelist-dialog',
  templateUrl: './panelist-dialog.component.html'
})

export class PanelistDialogComponent {

  committee_members:[{
    "committee_id":number,
    "name":string,
    "image":string,
    "description":string
  }]

}
