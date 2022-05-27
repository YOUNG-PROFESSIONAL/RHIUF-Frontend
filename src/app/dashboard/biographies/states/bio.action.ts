import { ApiResponse } from './../../../state/app.state';
import { Bio } from './../models/Bio.model';
import { createAction, props } from "@ngrx/store";
import { BioState } from './bio.state';

export enum BioActionTypes{
    GET_ALL_BIO = 'lister les biographies',
    GET_ALL_BIO_SUCCESS = 'lister les biographies avec succès',
    GET_ALL_BIO_FAILURE = 'lister les biographies avec erreur',
    ADD_BIO = 'créer une biographies',
}

export const BIO_ACTION_GET_ALL = createAction(
  BioActionTypes.GET_ALL_BIO);
export const BIO_ACTION_GET_ALL_SUCCESS = createAction(
  BioActionTypes.GET_ALL_BIO_SUCCESS,
  props<{data: ApiResponse}>());
export const BIO_ACTION_GET_ALL_FAILURE = createAction(
  BioActionTypes.GET_ALL_BIO_FAILURE,
  props<{error : Error}>());

export const BIO_ACTION_ADD = createAction(BioActionTypes.ADD_BIO);
