import { OnlineCartWebLatestPage } from './app.po';

describe('online-cart-web-latest App', function() {
  let page: OnlineCartWebLatestPage;

  beforeEach(() => {
    page = new OnlineCartWebLatestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
