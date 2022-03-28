export enum DossierType {
  INDIVIDUAL = 'individual',
  COLLECTIVE = 'collective',
}

export enum DossierStatus {
  TO_NOTIFY = 'to_notify',
  NOTIFIED = 'notified',
  LABELLED = 'labelled',
}

export interface Dossier {
  name: string;
  type: DossierType;
  depositDate: Date;
  validationDate: Date;
  status: DossierStatus;
}
