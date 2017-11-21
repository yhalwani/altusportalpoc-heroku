import { AltusPortalPOCPage } from './app.po';

describe('altus-portal-poc App', () => {
  let page: AltusPortalPOCPage;

  beforeEach(() => {
    page = new AltusPortalPOCPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
