const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();
  const btnAutorizoSelector = 'button[name="data[page3SiAutorizo]"]';
  const inputIdentificacionSelector = 'input[name="data[identificacion_usuario]"]';
  const inputNombreSelector = 'input[name="data[nombre_usuario]"]';
  const identificacion = process.env.IDENTIFICACION;
  const nombre = process.env.NOMBRE;

  await page.goto(process.env.URL);
  
  await page.setViewport({ width: 1920, height: 978 });

  
  await page.waitForSelector(btnAutorizoSelector);
  await page.click(btnAutorizoSelector);

  await page.waitForSelector(inputIdentificacionSelector);
  await page.focus(inputIdentificacionSelector);
  await page.keyboard.type(identificacion);
  
  await page.waitForSelector(inputNombreSelector);
  await page.focus(inputNombreSelector);
  await page.keyboard.type(nombre);
  

  await page.waitForSelector('button[name="data[page1Siguiente]"]');
  await page.click('button[name="data[page1Siguiente]"]'); // acá

  await page.waitForSelector(
    ".formio-form > div > .wizard-page > #em6s2v4 > .btn"
  );
  await page.click(".formio-form > div > .wizard-page > #em6s2v4 > .btn");

  await browser.close();
})();
