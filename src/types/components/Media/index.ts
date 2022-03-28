export enum MediaType {
  PHOTO = 'photo',
  VIDEO = 'video',
}

export interface Media {
  type: string;
  url: string;
}
