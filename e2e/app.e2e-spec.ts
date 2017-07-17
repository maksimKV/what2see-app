import { What2seeAppPage } from './app.po';

describe('what2see-app App', () => {
  let page: What2seeAppPage;

  beforeEach(() => {
    page = new What2seeAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
