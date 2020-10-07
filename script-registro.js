const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  
  await page.goto('https://www.medellin.gov.co/medellinmecuida')
  
  await page.setViewport({ width: 1920, height: 978 })
  
  await page.waitForSelector('.divContForm > #consultaCed #inpTipoDoc')
  await page.click('.divContForm > #consultaCed #inpTipoDoc')
  
  await page.select('.divContForm > #consultaCed #inpTipoDoc', '2')
  
  await page.waitForSelector('.divContForm > #consultaCed > #divCedulaExpedicion #inpCedulaExpedicion')
  await page.click('.divContForm > #consultaCed > #divCedulaExpedicion #inpCedulaExpedicion')
  
  await page.waitForSelector('.bodyFamilaExt > #ui-datepicker-div > .ui-datepicker-header > .ui-datepicker-title > .ui-datepicker-year')
  await page.click('.bodyFamilaExt > #ui-datepicker-div > .ui-datepicker-header > .ui-datepicker-title > .ui-datepicker-year')
  
  await page.select('.bodyFamilaExt > #ui-datepicker-div > .ui-datepicker-header > .ui-datepicker-title > .ui-datepicker-year', '1985')
  
  await page.waitForSelector('.bodyFamilaExt > #ui-datepicker-div > .ui-datepicker-header > .ui-datepicker-title > .ui-datepicker-month')
  await page.click('.bodyFamilaExt > #ui-datepicker-div > .ui-datepicker-header > .ui-datepicker-title > .ui-datepicker-month')
  
  await page.select('.bodyFamilaExt > #ui-datepicker-div > .ui-datepicker-header > .ui-datepicker-title > .ui-datepicker-month', '7')
  
  await page.waitForSelector('.ui-datepicker-calendar > tbody > tr > td > .ui-state-hover')
  await page.click('.ui-datepicker-calendar > tbody > tr > td > .ui-state-hover')
  
  await page.waitForSelector('.divContForm > #consultaCed > #divCedula #inpCedula')
  await page.click('.divContForm > #consultaCed > #divCedula #inpCedula')
  
  await page.waitForSelector('.bodyFamilaExt #inpBotonBuscar')
  await page.click('.bodyFamilaExt #inpBotonBuscar')
  
  await browser.close()
})()