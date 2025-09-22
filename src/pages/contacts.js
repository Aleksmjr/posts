import { ContactInfo } from '../components/contacts/contactsInfo/contactInfo';

export async function createContactsPage() {
  new contactPage();
}
class contactPage {
  constructor() {
    this.init();
  }

  init() {
    new ContactInfo();
  }
}
