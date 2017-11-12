import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ActivitiesComponent} from "./activities/activities.component";
import {ActivitiesService} from "./activities/activities.service";
import {MainPageService} from "./simulated-meeting/main-page/main-page.service";
import {MainPageComponent} from "./simulated-meeting/main-page/main-page.component";


@NgModule({
  declarations: [
    AppComponent,
    ActivitiesComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ActivitiesService, MainPageService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
