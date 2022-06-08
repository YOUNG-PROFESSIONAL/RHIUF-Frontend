import { ApiResponse } from '../../../../shared/state/app.state';
import { Bio } from '../models/Bio.model';
import { createAction, props } from "@ngrx/store";
import { BioState } from './bio.state';

export enum BioActionTypes{
    GET_ALL_BIO = 'lister les biographies',
    GET_ALL_BIO_SUCCESS = 'lister les biographies avec succès',
    GET_ALL_BIO_FAILURE = 'lister les biographies avec erreur',
    UPDATE_BIO = 'mettre à jour le biographie',
    UPDATE_BIO_SUCCESS = 'biographie à maj avec succès',
    UPDATE_BIO_FAILURE = 'biographie à maj avec erreur'
}

// GET ALL BIO
export const BIO_ACTION_GET_ALL = createAction(
  BioActionTypes.GET_ALL_BIO);
export const BIO_ACTION_GET_ALL_SUCCESS = createAction(
  BioActionTypes.GET_ALL_BIO_SUCCESS,
  props<{data: ApiResponse}>());
export const BIO_ACTION_GET_ALL_FAILURE = createAction(
  BioActionTypes.GET_ALL_BIO_FAILURE,
  props<{error : Error}>());

  // UPDATE BIO
  export const BIO_ACTION_UPDATE = createAction(
    BioActionTypes.UPDATE_BIO,
    props<Bio>());
  export const BIO_ACTION_UPDATE_SUCCESS = createAction(
    BioActionTypes.UPDATE_BIO_SUCCESS,
    props<{data: ApiResponse}>());
  export const BIO_ACTION_UPDATE_FAILURE = createAction(
    BioActionTypes.UPDATE_BIO_FAILURE,
    props<{error : Error}>());
