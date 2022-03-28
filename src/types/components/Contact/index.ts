import { Common } from "../Common";

export interface Contact extends Common {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
}
