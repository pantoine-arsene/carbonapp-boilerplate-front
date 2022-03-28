import { Common } from "../Common";

export enum MediaType {
  PHOTO = 'photo',
  VIDEO = 'video',
}

export interface Media extends Common {
  type: string;
  url: string;
}
