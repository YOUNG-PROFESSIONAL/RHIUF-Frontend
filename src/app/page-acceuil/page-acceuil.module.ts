import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageAcceuilComponent } from './page-acceuil.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BioEFFECTS } from './shared/state/acc.effect';
import { BIO_REDUCER } from './shared/state/acc.reducer';



@NgModule({
  declarations: [
    PageAcceuilComponent,
  ],
  imports: [
    CommonModule,
    StoreModule.forRoot({bioData: BIO_REDUCER}),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([BioEFFECTS])
  ]
})
export class PageAcceuilModule { }
