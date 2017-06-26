import { XianPage } from './app.po';

describe('xian App', () => {
  let page: XianPage;

  beforeEach(() => {
    page = new XianPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
