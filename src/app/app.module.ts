import { BioEFFECTS } from './dashboard/biographies/states/bio.effect';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenubarComponent } from './menubar/menubar.component';
import { DashboardModule } from './routes/dashboard.module';
import { PageAcceuilComponent } from './page-acceuil/page-acceuil.component';
import { PageActualiteComponent } from './page-actualite/page-actualite.component';
import { PageEvenementComponent } from './page-evenement/page-evenement.component';
import { AcceuilComponent } from './dashboard/acceuil/acceuil.component';
import { ActualiteComponent } from './dashboard/actualite/actualite.component';
import { BiographiesComponent } from './dashboard/biographies/biographies.component';
import { EvenementComponent } from './dashboard/evenement/evenement.component';
import { MembresComponent } from './dashboard/membres/membres.component';
import { PagenotfoundComponent } from './page-not-found/pagenotfound.component';
import { StatistiquesComponent } from './dashboard/statistiques/statistiques.component';
import { BIO_REDUCER } from './dashboard/biographies/states/bio.reducer';
import { BioFormComponent } from './dashboard/biographies/bio-form/bio-form.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MenubarComponent,
    BiographiesComponent,
    PagenotfoundComponent,
    AcceuilComponent,
    ActualiteComponent,
    EvenementComponent,
    MembresComponent,
    PageAcceuilComponent,
    PageActualiteComponent,
    PageEvenementComponent,
    StatistiquesComponent,
    BioFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({bioData: BIO_REDUCER}),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([BioEFFECTS]),
    DashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
