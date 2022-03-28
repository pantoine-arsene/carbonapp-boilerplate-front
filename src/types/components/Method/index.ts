import { Sector } from '..';
import { Common } from '../Common';

export interface Method extends Common {
  name: string;
  image: string;
  standard: string;
  projectDuration: number;
  sector: Sector;
}
