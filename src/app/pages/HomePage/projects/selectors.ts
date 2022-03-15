import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

// First select the relevant part from the state
const selectDomain = (state: RootState) => state.projectsState || initialState;

export const selectLocation = createSelector(
  [selectDomain],
  projectsState => projectsState.location,
);

export const selectAmountCarbon = createSelector(
  [selectDomain],
  projectsState => projectsState.amountCarbon,
);

export const selectProjects = createSelector(
  [selectDomain],
  projectsState => projectsState.projects,
);

export const selectLoading = createSelector(
  [selectDomain],
  projectsState => projectsState.loading,
);

export const selectError = createSelector(
  [selectDomain],
  projectsState => projectsState.error,
);
