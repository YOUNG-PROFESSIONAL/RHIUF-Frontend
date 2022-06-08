import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageDashboardRoutingModule } from './page-dashboard-routing.module';
import { BiographiesModule } from './biographies/biographies.module';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ActualiteComponent } from './actualite/actualite.component';
import { EvenementComponent } from './evenement/evenement.component';
import { MembresComponent } from './membres/membres.component';
import { BiographiesComponent } from './biographies/biographies.component';
import { StatistiquesComponent } from './statistiques/statistiques.component';



@NgModule({
  declarations: [
    AcceuilComponent,
    ActualiteComponent,
    BiographiesComponent,
    EvenementComponent,
    MembresComponent,
    StatistiquesComponent
  ],
  imports: [
    CommonModule,
    PageDashboardRoutingModule,
    BiographiesModule
  ],
  exports:[]
})
export class PageDashboardModule { }
