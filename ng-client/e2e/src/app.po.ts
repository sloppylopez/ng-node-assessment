import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  addSearch(value: string): Promise<unknown> {
    return element(by.css('input')).sendKeys(value) as Promise<unknown>;
  }

  getAutoCompleteLayout(): Promise<string> {
    return element(by.css('.cdk-overlay-container span.mat-option-text')).getText() as Promise<string>;
  }

  getInputText(): Promise<string> {
    return element(by.css('input')).getText() as Promise<string>;
  }

  getAutoCompleteTableHeader(): Promise<string> {
    return element(by.css('tr')).getText() as Promise<string>;
  }

  getAutoCompleteTableRows(): Promise<string> {
    return element.all(by.css('td')).getText() as Promise<string>;
  }

  clickResetButton(): Promise<unknown> {
    return element(by.css('button')).click() as Promise<unknown>;
  }
}
