import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/shared/state/app.state';
import { BioState } from './bio.state';
export const selectBio = (bio: AppState) => bio.bioData;

export const selectAllBio$ = createSelector(
  selectBio,
  (bio : BioState) => bio
);
