import { Contact } from '..';

export interface Company {
  name: string;
  siren: string;
  address: string;
  zip: string;
  city: string;
  contact: Contact;
}
