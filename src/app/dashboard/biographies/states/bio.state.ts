import { STATUS, ApiResponse } from './../../../state/app.state';

export  interface BioState{
  dataBioState?: ApiResponse;
  msg: string;
  status: STATUS;
}
export const INIT_BIO_STATE: BioState = {
  dataBioState: {
    apiData: {datas:[]},
    apiMessage:"",
    apiStatus:"",
    apiTimestamp:new Date()},
  msg:"",
  status: STATUS.INIT
}
