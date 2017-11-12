import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ActivitiesComponent} from "./activities/activities.component";
import {ActivitiesService} from "./activities/activities.service";
import {MainPageService} from "./simulated-meeting/main-page/main-page.service";
import {MainPageComponent} from "./simulated-meeting/main-page/main-page.component";
import {Routes, RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {SimulatedMeetingComponent} from "./simulated-meeting/game/sm-game.component";
import {SMGameService} from "./simulated-meeting/game/sm-game.service";



@NgModule({
  declarations: [
    AppComponent,
    ActivitiesComponent,
    MainPageComponent,
    SimulatedMeetingComponent

  ],
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  providers: [ActivitiesService, MainPageService, SMGameService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
