import { StatistiquesComponent } from './../dashboard/statistiques/statistiques.component';
import { MembresComponent } from './../dashboard/membres/membres.component';
import { EvenementComponent } from './../dashboard/evenement/evenement.component';
import { ActualiteComponent } from './../dashboard/actualite/actualite.component';
import { PageAcceuilComponent } from './../page-acceuil/page-acceuil.component';
import { PagenotfoundComponent } from '../page-not-found/pagenotfound.component';
import { BiographiesComponent } from '../dashboard/biographies/biographies.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: PageAcceuilComponent},
  {path: 'dashboard', component: DashboardComponent, children :[
    {path: '', component: StatistiquesComponent},
    {path: 'manage/biographies', component: BiographiesComponent},
    {path: 'manage/actualites', component: ActualiteComponent},
    {path: 'manage/evenements', component: EvenementComponent},
    {path: 'manage/membres', component: MembresComponent},
  ]},
  {path: '**', component: PagenotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
