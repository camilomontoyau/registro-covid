require('dotenv').config();
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
  const btnSiguiente1Selector = 'button[name="data[page1Siguiente]"]';
  const btnSiguiente2Selector = 'button[name="data[page2Finalizar]"]';
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
  

  await page.waitForSelector(btnSiguiente1Selector);
  await page.click(btnSiguiente1Selector);

  await page.waitForSelector(btnSiguiente2Selector);
  await page.click(btnSiguiente2Selector);
  await browser.close();
})();
