import { MessagebusUiPage } from './app.po';

describe('messagebus-ui App', function() {
  let page: MessagebusUiPage;

  beforeEach(() => {
    page = new MessagebusUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
