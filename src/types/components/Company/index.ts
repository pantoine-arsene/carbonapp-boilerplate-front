import { Contact } from '..';
import { Common } from '../Common';

export interface Company extends Common {
  name: string;
  siren: string;
  address: string;
  zip: string;
  city: string;
  contact: Contact;
}
