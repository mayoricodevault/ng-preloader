import { NGpreloaderPage } from './app.po';

describe('n-gpreloader App', () => {
  let page: NGpreloaderPage;

  beforeEach(() => {
    page = new NGpreloaderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
