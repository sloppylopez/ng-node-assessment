import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display an empty autocomplete input', () => {
    page.navigateTo();
    expect(page.getInputText()).toEqual('');
  });

  it('should search for 1111111 and display the autocomplete with matching value', () => {
    page.addSearch('1111111');
    expect(page.getAutoCompleteLayout()).toEqual('id: 1111111 name: Name 2522');
  });

  it('should display the table with correct headers', () => {
    expect(page.getAutoCompleteTableHeader()).toEqual('ID\nNAME\nBRAND\nPRICE\nAVAILABILITY\nDESCRIPTION\nCATEGORY\nBEST RATING');
  });

  it('should display the table with correct values', () => {
    expect(page.getAutoCompleteTableRows())
      .toEqual(['1111111', 'Name 2522', 'brand 2322', '4', '0', 'Description 6224', 'category 822', '3']);
  });

  it('should clear the input', () => {
    page.clickResetButton();
    expect(page.getInputText()).toEqual('');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
