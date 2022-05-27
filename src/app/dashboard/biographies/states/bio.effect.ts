import { Bio } from './../models/Bio.model';
import { BioService } from './../services/bio.service';
import { BIO_ACTION_GET_ALL, BIO_ACTION_GET_ALL_SUCCESS, BIO_ACTION_GET_ALL_FAILURE } from './bio.action';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, from, map, of, switchMap } from 'rxjs';

@Injectable()
export class BioEFFECTS {
  constructor(
    private bioEffectActions$: Actions,
    private service: BioService

  ){}
  BIO_EFFECT_GET_ALL$ = createEffect(
    () => this.bioEffectActions$.pipe(
      ofType(BIO_ACTION_GET_ALL),
      switchMap(
        () => from(this.service.get_all_bio()).pipe(
          map((res) => BIO_ACTION_GET_ALL_SUCCESS({data: res})),
          catchError((error) => of(BIO_ACTION_GET_ALL_FAILURE({error})))
        ))));

}
