import { TestRoutePage } from './app.po';

describe('test-route App', () => {
  let page: TestRoutePage;

  beforeEach(() => {
    page = new TestRoutePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
