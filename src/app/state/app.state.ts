import { Bio } from "../dashboard/biographies/models/Bio.model";
import { BioState } from "../dashboard/biographies/states/bio.state";

export enum STATUS{
  INIT,
  LOADING,
  LOADED,
  ERROR
}
export interface AppState{
  bioData: BioState;
}

export interface ApiResponse {
     apiTimestamp: Date;
     apiStatus: string;
     apiMessage: string;
     apiData:{datas?: Bio[],data?: Bio};
}
