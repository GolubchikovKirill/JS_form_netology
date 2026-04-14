import puppeteer from 'puppeteer';

describe('Popover Widget', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: "new",
      args: ['--no-sandbox']
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  test('should show and hide popover on button click', async () => {
    await page.goto('http://localhost:8080');

    const btn = await page.$('.btn');
    await btn.click();

    await page.waitForSelector('.popover');

    await btn.click();
    const popover = await page.$('.popover');
    expect(popover).toBeNull();
  });
});
