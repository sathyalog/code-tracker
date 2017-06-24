import { HeliosTrackerPage } from './app.po';

describe('helios-tracker App', () => {
  let page: HeliosTrackerPage;

  beforeEach(() => {
    page = new HeliosTrackerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
