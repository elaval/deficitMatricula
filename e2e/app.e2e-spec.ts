import { DeficitMatriculaPage } from './app.po';

describe('deficit-matricula App', () => {
  let page: DeficitMatriculaPage;

  beforeEach(() => {
    page = new DeficitMatriculaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
