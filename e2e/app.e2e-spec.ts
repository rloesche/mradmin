import { MradminPage } from './app.po';

describe('mradmin App', () => {
  let page: MradminPage;

  beforeEach(() => {
    page = new MradminPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
