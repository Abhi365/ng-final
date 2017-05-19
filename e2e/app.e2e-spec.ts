import { Angular2FinalprojectPage } from './app.po';

describe('angular2-finalproject App', () => {
  let page: Angular2FinalprojectPage;

  beforeEach(() => {
    page = new Angular2FinalprojectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
