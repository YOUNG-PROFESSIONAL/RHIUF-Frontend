import { Bio } from "../../page-dashboard/biographies/shared/models/Bio.model";
import { BioState } from "../../page-dashboard/biographies/shared/states/bio.state";

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
     apiData:{datas: Bio[],data: Bio};
}
