import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAcceuilComponent } from './page-acceuil/page-acceuil.component';
import { PagenotfoundComponent } from './page-not-found/pagenotfound.component';
import { PageDashboardComponent } from './page-dashboard/page-dashboard.component';
import { PageActualiteComponent } from './page-actualite/page-actualite.component';
import { PageEvenementComponent } from './page-evenement/page-evenement.component';

const routes: Routes = [
  {path:'',redirectTo:'acceuil',pathMatch:'full'},
  {path: 'acceuil', component: PageAcceuilComponent},
  {path: 'actualites', component: PageActualiteComponent},
  {path: 'evenements', component: PageEvenementComponent},
  {path: '**', component: PagenotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
