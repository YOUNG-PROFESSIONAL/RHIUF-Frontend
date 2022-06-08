import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageDashboardComponent } from './page-dashboard/page-dashboard.component';
import { MenubarComponent } from './menubar/menubar.component';
import { PageAcceuilComponent } from './page-acceuil/page-acceuil.component';
import { PageActualiteComponent } from './page-actualite/page-actualite.component';
import { PageEvenementComponent } from './page-evenement/page-evenement.component';
import { PagenotfoundComponent } from './page-not-found/pagenotfound.component';
import { PageDashboardRoutingModule } from './page-dashboard/page-dashboard-routing.module';
import { PageDashboardModule } from './page-dashboard/page-dashboard.module';
import { PageAcceuilModule } from './page-acceuil/page-acceuil.module';


@NgModule({
  declarations: [
    AppComponent,
    PageDashboardComponent,
    MenubarComponent,
    PagenotfoundComponent,
    PageActualiteComponent,
    PageEvenementComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // Customer Module
    PageDashboardModule,
    PageDashboardRoutingModule,
    AppRoutingModule,
    PageAcceuilModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
