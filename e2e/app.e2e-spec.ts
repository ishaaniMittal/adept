import { MyAdeptPage } from './app.po';

describe('my-adept App', () => {
  let page: MyAdeptPage;

  beforeEach(() => {
    page = new MyAdeptPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
