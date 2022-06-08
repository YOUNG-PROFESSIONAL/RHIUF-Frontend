import { Bio } from "src/app/page-dashboard/biographies/shared/models/Bio.model";
import { STATUS } from "src/app/shared/state/app.state";

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
