import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ActualiteComponent } from './actualite/actualite.component';
import { BiographiesComponent } from './biographies/biographies.component';
import { EvenementComponent } from './evenement/evenement.component';
import { MembresComponent } from './membres/membres.component';
import { PageDashboardComponent } from './page-dashboard.component';
import { StatistiquesComponent } from './statistiques/statistiques.component';

const routes: Routes = [
  {path: 'tableau-de-bord',redirectTo:'tableau-de-bord/statistiques',pathMatch: 'full'},
  {path: 'tableau-de-bord', component: PageDashboardComponent, children :[
    {path: 'statistiques', component: StatistiquesComponent},
    {path: 'biographies', component: BiographiesComponent},
    {path: 'actualites', component: ActualiteComponent},
    {path: 'evenements', component: EvenementComponent},
    {path: 'membres', component: MembresComponent},
    ]}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class PageDashboardRoutingModule { }
