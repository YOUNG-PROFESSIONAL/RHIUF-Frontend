import { STATUS, ApiResponse } from '../../../../shared/state/app.state';
import { Bio } from '../models/Bio.model';

export  interface BioState{
  dataBioState: Bio[];
  msg: string;
  status: STATUS;
}
export const INIT_BIO_STATE: BioState = {
  dataBioState: [],
  msg:"",
  status: STATUS.INIT
}
