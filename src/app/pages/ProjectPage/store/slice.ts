import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { projectSaga } from './saga';
import { ErrorProject, ProjectState } from '../types';
import { Project } from 'types/components/Project';

export const initialState: ProjectState = {
  project: undefined,
  error: null,
  loading: false,
};

const slice = createSlice({
  name: 'projectState',
  initialState,
  reducers: {
    loadProject(state, action: PayloadAction<string | undefined>) {
      state.loading = true;
      state.error = null;
      state.project = undefined;
    },
    projectLoaded(state, action: PayloadAction<Project>) {
      const project = action.payload;
      state.project = project;
      state.loading = false;
    },
    projectError(state, action: PayloadAction<ErrorProject>) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { actions: projectActions, reducer } = slice;

export const useProjectSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: projectSaga });
  return { actions: slice.actions };
};
