import { NgxPrismDemoPage } from './app.po';

describe('ngx-prism-demo App', () => {
  let page: NgxPrismDemoPage;

  beforeEach(() => {
    page = new NgxPrismDemoPage ();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
