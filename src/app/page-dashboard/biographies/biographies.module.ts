import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BioEFFECTS } from './shared/states/bio.effect';
import { BIO_REDUCER } from './shared/states/bio.reducer';
import { BioListComponent } from './bio-list/bio-list.component';
import { BioFormComponent } from './bio-list/bio-form/bio-form.component';




@NgModule({
  declarations: [
    BioListComponent,
    BioFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({bioData: BIO_REDUCER}),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([BioEFFECTS])
  ],
  exports:[BioListComponent]
})
export class BiographiesModule { }
