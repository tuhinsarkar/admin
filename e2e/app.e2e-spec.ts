import { Angular4SeedPage } from './app.po';

describe('core-ui App', function() {
  let page: Angular4SeedPage;

  beforeEach(() => {
    page = new Angular4SeedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
