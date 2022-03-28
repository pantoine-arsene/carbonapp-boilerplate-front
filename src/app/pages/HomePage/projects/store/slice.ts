import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { projectsSaga } from './saga';
import { ErrorProject, ProjectsState } from '../types';
import { Project } from 'types/components/Project';

export const initialState: ProjectsState = {
  projects: [],
  error: null,
  loading: false,
  location: '',
  amountCarbon: 0,
};

const slice = createSlice({
  name: 'projectsState',
  initialState,
  reducers: {
    changeAmountCarbon(state, action: PayloadAction<number>) {
      state.amountCarbon = action.payload;
    },
    changeLocation(state, action: PayloadAction<string>) {
      state.location = action.payload;
    },
    loadProjects(state) {
      state.loading = true;
      state.error = null;
      state.projects = [];
    },
    projectsLoaded(state, action: PayloadAction<Project[]>) {
      const projects = action.payload;
      state.projects = projects;
      state.loading = false;
    },
    projectError(state, action: PayloadAction<ErrorProject>) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { actions: projectsActions, reducer } = slice;

export const useProjectsSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: projectsSaga });
  return { actions: slice.actions };
};
