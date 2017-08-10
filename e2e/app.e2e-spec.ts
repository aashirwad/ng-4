import { MyNewNg4AppPage } from './app.po';

describe('my-new-ng4-app App', function() {
  let page: MyNewNg4AppPage;

  beforeEach(() => {
    page = new MyNewNg4AppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
