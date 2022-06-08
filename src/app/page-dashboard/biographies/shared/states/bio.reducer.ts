import { ApiResponse } from './../../../../shared/state/app.state';
import { INIT_BIO_STATE } from './bio.state';
import { BIO_ACTION_GET_ALL, BIO_ACTION_GET_ALL_SUCCESS, BIO_ACTION_GET_ALL_FAILURE, BIO_ACTION_UPDATE, BIO_ACTION_UPDATE_SUCCESS, BIO_ACTION_UPDATE_FAILURE } from './bio.action';
import { createReducer, on } from "@ngrx/store";
import { STATUS } from 'src/app/shared/state/app.state';

export const BIO_REDUCER = createReducer(
  INIT_BIO_STATE,

  //GET ALL BIOGRAPHIE
  on(BIO_ACTION_GET_ALL,
    (state) => ({
      ...state,
      status: STATUS.LOADING})),
  on(BIO_ACTION_GET_ALL_SUCCESS,
    (state,{data}) => ({
      ...state,
      dataBioState: data.apiData.datas!,
      msg: data.apiMessage,
      status: STATUS.LOADED})),
  on(BIO_ACTION_GET_ALL_FAILURE,
    (state, {error}) => ({
      ...state,
      msg: error.message,
      status: STATUS.ERROR})),

  //UPDATE
  //GET ALL BIOGRAPHIE
  on(BIO_ACTION_UPDATE,
    (state) => {
      return({
        ...state,
        status: STATUS.LOADING,
      })}),
  on(BIO_ACTION_UPDATE_SUCCESS,
    (state,data) =>{
     let states = state.dataBioState.map(
        bio => bio.bioId == data.data.apiData.data.bioId?data.data.apiData.data:bio
      )
     return ({
      ...state,
      dataBioState: states,
      msg:'',
      status: STATUS.LOADED
    })} ),
  on(BIO_ACTION_UPDATE_FAILURE,
    (state, {error}) => ({
      ...state,
      msg: error.message,
      status: STATUS.ERROR})),
    );

