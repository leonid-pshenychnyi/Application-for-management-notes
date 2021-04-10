import {AppPage} from './app.po';

describe('App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should be translated to english by default', () => {
    page.navigateTo();
    expect(page.getNotesButton().getText()).toEqual('Notes');
  })
});
