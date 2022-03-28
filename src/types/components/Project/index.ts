import { Method, Company, Dossier, Cobenefit, Media } from '..';

export enum ProjectStatus {
  TO_FUND = 'to_fund',
  PARTIALLY_FUNDED = 'partially_funded',
  FUNDED = 'funded',
}

export interface Project {
  name: string;
  shortDescription: string;
  longDescription: string;
  method: Method;
  location: string;
  tonnage: number;
  netbackPrice: number;
  projectHolder: Company;
  partner: Company;
  intermediary: Company;
  funder: Company;
  dossier: Dossier;
  status: ProjectStatus;
  cobenefits: Array<Cobenefit>;
  mainMedia: Media;
  medias: Array<Media>;
  banner: string;
}
