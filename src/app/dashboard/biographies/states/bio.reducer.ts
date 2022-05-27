import { INIT_BIO_STATE } from './bio.state';
import { BIO_ACTION_GET_ALL, BIO_ACTION_GET_ALL_SUCCESS, BIO_ACTION_GET_ALL_FAILURE } from './bio.action';
import { createReducer, on } from "@ngrx/store";
import { STATUS } from 'src/app/state/app.state';

export const BIO_REDUCER = createReducer(
  INIT_BIO_STATE,

  //GET ALL BIOGRAPHIE
  on(BIO_ACTION_GET_ALL,
    (state) => ({...state,status: STATUS.LOADING})),
  on(BIO_ACTION_GET_ALL_SUCCESS,
    (state,{data}) => ({...state, dataBioState: data,msg: data.apiMessage,status: STATUS.LOADED})),
  on(BIO_ACTION_GET_ALL_FAILURE,
    (state, {error}) => ({...state,msg: error.message, status: STATUS.ERROR})),
    );

