import {RouterModule, Routes} from '@angular/router';
import {NgModule} from "@angular/core";
import {ActivitiesComponent} from "./activities/activities.component";
import {MainPageComponent} from "./simulated-meeting/main-page/main-page.component";
import {SimulatedMeetingComponent} from "./simulated-meeting/game/sm-game.component";
import {NYCMainPageComponent} from "./nyc/main-page/nyc-main-page.component";
import {NYCComponent} from "./nyc/game/nyc-game.component";

const appRoutes: Routes = [
  {path: 'activity', component: ActivitiesComponent},
  {path: 'simulated-meeting', component: MainPageComponent},
  {path: 'simulated-meeting/:id', component: SimulatedMeetingComponent},
  {path: 'nyc/:id', component: NYCComponent},
  {path: 'nyc', component: NYCMainPageComponent},
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
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: false} // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}

