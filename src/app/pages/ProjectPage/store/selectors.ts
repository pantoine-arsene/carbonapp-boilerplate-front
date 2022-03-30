import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

// First select the relevant part from the state
const selectDomain = (state: RootState) => state.projectState || initialState;

export const selectProject = createSelector(
  [selectDomain],
  projectState => projectState.project,
);

export const selectLoading = createSelector(
  [selectDomain],
  projectState => projectState.loading,
);

export const selectError = createSelector(
  [selectDomain],
  projectState => projectState.error,
);
