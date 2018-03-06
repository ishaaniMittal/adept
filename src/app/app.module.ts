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
import {ExitDialogComponent} from "./exit/exit-component";
import {CompleteActivityDialogComponent} from "./complete-activity/complete-activity.component";
import {NYCMainPageService} from "./nyc/main-page/nyc-main-page.service";
import {NYCMainPageComponent} from "./nyc/main-page/nyc-main-page.component";
import {NYCTranscriptComponent} from "./nyc/game/transcript/nyc-transcript.component";
import {NYCGameService} from "./nyc/game/nyc-game.service";
import {NYCComponent} from "./nyc/game/nyc-game.component";
import {ExplanationDialog} from "./nyc/game/explanationDialog/explanation-dialog.component";
import {FinalDialog} from "./nyc/game/final-dialog/final-dialog.component";



@NgModule({
  declarations: [
    AppComponent,
    ActivitiesComponent,
    MainPageComponent,
    SimulatedMeetingComponent,
    PanelistDialogComponent,
    CvDialogComponent,
    CaseStudyDialogComponent,
    SimulatedMeetingTranscriptComponent,
    ExitDialogComponent,
    CompleteActivityDialogComponent,
    NYCMainPageComponent,
    NYCTranscriptComponent,
    NYCComponent,
    ExplanationDialog,
    FinalDialog


  ],
  entryComponents:[
    PanelistDialogComponent,
    CvDialogComponent,
    CaseStudyDialogComponent,
    SimulatedMeetingTranscriptComponent,
    ExitDialogComponent,
    CompleteActivityDialogComponent,
    ExplanationDialog,
    NYCTranscriptComponent,
    FinalDialog
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
  providers: [ActivitiesService, MainPageService, SMGameService, NYCMainPageService, NYCGameService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
