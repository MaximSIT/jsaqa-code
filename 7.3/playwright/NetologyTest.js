const { chromium } = require("playwright");
const mail = require("./user.js");
const password = require("./user.js");

(async () => {
  const browser = await chromium.launch({
    headless: false,
    slowMo: 5000,
    devtools: true,
  });
  const page = await browser.newPage();
  await page.goto("https://netology.ru");
  await page.click("text=Войти");
  await page.click('[placeholder="Email"]');
  await page.fill('[placeholder="Email"]', mail);
  await page.click('[placeholder="Пароль"]');
  await page.fill('[placeholder="Пароль"]', password);

  //await page.pause();
  await browser.close();
})();
