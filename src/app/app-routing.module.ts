import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

/*const routes: Routes = [
  { path: '', redirectTo: '/activities', pathMatch: 'full' },
  { path: 'activity/:id', component: DashboardComponent },
  { path: 'simulatedMeeting/:id', component: HeroDetailComponent },
  { path: 'navigateYourCareer/:id', component: HeroesComponent }
];*/

export class AppRoutingModule {

}
