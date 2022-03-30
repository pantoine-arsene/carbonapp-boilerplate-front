import { Project } from 'types/components/Project';

export interface ProjectState {
  project: Project | undefined;
  error: ErrorProject | null;
  loading: boolean;
}

export enum ErrorProject {
  ERROR_AMOUNT_CARBON,
  ERROR_LOCATION,
  ERROR_NO_PROJECT,
  ERROR_NOT_FOUND,
  ERROR_UNKNOWN,
}
