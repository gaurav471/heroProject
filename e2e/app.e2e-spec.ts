import { HeroProjectPage } from './app.po';

describe('hero-project App', function() {
  let page: HeroProjectPage;

  beforeEach(() => {
    page = new HeroProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
