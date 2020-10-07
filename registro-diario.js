const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  await page.goto(process.env.URL);
  
  await page.setViewport({ width: 1920, height: 978 })
  
  await page.waitForSelector('.formio-form > div > .wizard-page > #ecjyais > .btn')
  await page.click('.formio-form > div > .wizard-page > #ecjyais > .btn')
  
  await page.waitForSelector('.choices > .form-control > .choices__list > .choices__item > span')
  await page.click('.choices > .form-control > .choices__list > .choices__item > span')
  
  await page.waitForSelector('div #ez6f39h-identificacion_usuario')
  await page.click('div #ez6f39h-identificacion_usuario')
  
  await page.waitForSelector('div #el8g9u9-nombre_usuario')
  await page.click('div #el8g9u9-nombre_usuario')
  
  await page.waitForSelector('.formio-form > div > .wizard-page > #ef2oluq > .btn')
  await page.click('.formio-form > div > .wizard-page > #ef2oluq > .btn')
  
  await page.waitForSelector('.formio-form > div > .wizard-page > #em6s2v4 > .btn')
  await page.click('.formio-form > div > .wizard-page > #em6s2v4 > .btn')
  
  await browser.close()
})()