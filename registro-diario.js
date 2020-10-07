const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();

  await page.goto(process.env.URL);
  
  await page.setViewport({ width: 1920, height: 978 });

  await page.waitForSelector('button[name="data[page3SiAutorizo]"]');
  await page.click('button[name="data[page3SiAutorizo]"]');

  await page.waitForSelector('input[name="data[identificacion_usuario]"]');
  await await page.$eval('input[name="data[identificacion_usuario]"]', el => el.value = process.env.IDENTIFICACION);

  await page.waitForSelector('input[name="data[nombre_usuario]"]');
  await await page.$eval('input[name="data[nombre_usuario]"]', el => el.value = process.env.NOMBRE); // acá

  await page.waitForSelector('button[name="data[page1Siguiente]"]');
  await page.click('button[name="data[page1Siguiente]"]');

  await page.waitForSelector(
    ".formio-form > div > .wizard-page > #em6s2v4 > .btn"
  );
  await page.click(".formio-form > div > .wizard-page > #em6s2v4 > .btn");

  await browser.close();
})();
