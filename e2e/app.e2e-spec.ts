import { RecipeBoxNgCLIPage } from './app.po';

describe('recipe-box-ng-cli App', () => {
  let page: RecipeBoxNgCLIPage;

  beforeEach(() => {
    page = new RecipeBoxNgCLIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
