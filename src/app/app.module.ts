import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatDialogModule} from '@angular/material/dialog';

import {AppComponent} from './app.component';
import {ActivitiesComponent} from "./activities/activities.component";
import {ActivitiesService} from "./activities/activities.service";
import {MainPageService} from "./simulated-meeting/main-page/main-page.service";
import {MainPageComponent} from "./simulated-meeting/main-page/main-page.component";

import {AppRoutingModule} from "./app-routing.module";
import {SimulatedMeetingComponent} from "./simulated-meeting/game/sm-game.component";
import {SMGameService} from "./simulated-meeting/game/sm-game.service";
import {FormsModule} from "@angular/forms";
import {PanelistDialogComponent} from "./simulated-meeting/panelist-dialog/panelist-dialog.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CvDialogComponent} from "./simulated-meeting/cv-dialog/cv-dialog.component";
import {CaseStudyDialogComponent} from "./simulated-meeting/casestudy-dialog/casestudy-dialog.component";
import {MatProgressBarModule} from "@angular/material";
import {SimulatedMeetingTranscriptComponent} from "./simulated-meeting/game/transcript/sm-transcript.component";



@NgModule({
  declarations: [
    AppComponent,
    ActivitiesComponent,
    MainPageComponent,
    SimulatedMeetingComponent,
    PanelistDialogComponent,
    CvDialogComponent,
    CaseStudyDialogComponent,
    SimulatedMeetingTranscriptComponent

  ],
  entryComponents:[
    PanelistDialogComponent,
    CvDialogComponent,
    CaseStudyDialogComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    MatRadioModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatProgressBarModule
  ],
  providers: [ActivitiesService, MainPageService, SMGameService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
