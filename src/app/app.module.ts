import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ActivitiesComponent} from "./activities/activities.component";
import {ActivitiesService} from "./activities/activities.service";
import {MainPageService} from "./simulated-meeting/main-page/main-page.service";
import {MainPageComponent} from "./simulated-meeting/main-page/main-page.component";
import {Routes, RouterModule} from "@angular/router";

const appRoutes:Routes = [
  {path: 'activity', component: ActivitiesComponent},
  {path: 'simulated-meeting', component: MainPageComponent},
 /* {path: 'simulated-meeting/:id', component: MainPageComponent},*/
  /* { path: 'hero/:id',      component: HeroDetailComponent },
   {
   path: 'heroes',
   component: HeroListComponent,
   data: { title: 'Heroes List' }
   },*/
  {
    path: '',
    redirectTo: '/activity',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ActivitiesComponent,
    MainPageComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes),
    BrowserModule
  ],
  providers: [ActivitiesService, MainPageService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
