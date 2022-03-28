import { Project } from 'types/components/Project';

export interface ProjectsState {
  projects: Array<Project>;
  error: ErrorProject | null;
  loading: boolean;
  location: string;
  amountCarbon: number;
}

export enum ErrorProject {
  ERROR_AMOUNT_CARBON,
  ERROR_LOCATION,
  ERROR_NO_PROJECT,
  ERROR_NOT_FOUND,
  ERROR_UNKNOW,
}
