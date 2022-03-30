import { call, put, takeLatest, delay } from 'redux-saga/effects';
import { request } from 'utils/request';
//import { selectLocation, selectAmountCarbon } from './selectors';
import { projectActions as actions } from './slice';
import { ErrorProject } from '../types';
import { Project } from 'types/components/Project';

/**
 * Get project from api
 */
export function* getProject(action) {
  yield delay(500);
  const requestURL = `http://0.0.0.0:5000/projects/${action.payload}`;

  try {
    const project: Project = yield call(request, requestURL);
    if (project) {
      yield put(actions.projectLoaded(project));
    } else {
      yield put(actions.projectError(ErrorProject.ERROR_NO_PROJECT));
    }
  } catch (err: any) {
    if (err.response?.status === 404) {
      yield put(actions.projectError(ErrorProject.ERROR_NOT_FOUND));
    } else {
      yield put(actions.projectError(ErrorProject.ERROR_UNKNOWN));
    }
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* projectSaga() {
  yield takeLatest(actions.loadProject.type, getProject);
}
