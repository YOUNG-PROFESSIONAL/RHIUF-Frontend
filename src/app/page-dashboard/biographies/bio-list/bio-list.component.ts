import { BIO_ACTION_GET_ALL } from './../shared/states/bio.action';
import { STATUS } from 'src/app/shared/state/app.state';
import { AppState } from './../../../shared/state/app.state';
import { BioFormComponent } from './bio-form/bio-form.component';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Bio } from '../shared/models/Bio.model';
import { Observable } from 'rxjs';
import { BioState } from '../shared/states/bio.state';

@Component({
  selector: 'app-bio-list',
  templateUrl: './bio-list.component.html',
  styleUrls: ['./bio-list.component.css']
})
export class BioListComponent implements OnInit {
  data$: Observable<BioState> = <Observable<BioState>>{};
  readonly status = STATUS;
  constructor(
    private store: Store<AppState>
  ){}

  ngOnInit(): void {
    this.store.dispatch(BIO_ACTION_GET_ALL());
    this.data$ = this.store.select(store => store.bioData!)
  }
}
