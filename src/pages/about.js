import { AboutMainPost } from '../components/about/aboutMainPost/aboutMainPost';

export async function createAboutPage() {
  new aboutPage();
}
class aboutPage {
  constructor() {
    this.init();
  }

  init() {
    new AboutMainPost();
  }
}
