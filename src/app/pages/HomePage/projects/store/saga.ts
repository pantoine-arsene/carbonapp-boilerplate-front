import { call, put, takeLatest, delay } from 'redux-saga/effects';
import { request } from 'utils/request';
//import { selectLocation, selectAmountCarbon } from './selectors';
import { projectsActions as actions } from './slice';
import { ErrorProject } from '../types';
import { Project } from 'types/components/Project';

/**
 * Get projects from api
 */
export function* getProjects() {
  yield delay(500);
  // Select username from store
  //const location: string = yield select(selectLocation);
  //if (location.length === 0) {
  //  yield put(actions.projectError(ErrorProject.ERROR_LOCATION));
  //  return;
  //}
  //const amountCarbon: number = yield select(selectAmountCarbon);
  //if (!amountCarbon) {
  //  yield put(actions.projectError(ErrorProject.ERROR_AMOUNT_CARBON));
  //  return;
  //}
  const requestURL = `http://0.0.0.0:5000/projects`;

  try {
    // Call our request helper (see 'utils/request')
    const projects: Project[] = yield call(request, requestURL);
    if (projects?.length > 0) {
      yield put(actions.projectsLoaded(projects));
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
export function* projectsSaga() {
  yield takeLatest(actions.loadProjects.type, getProjects);
}
