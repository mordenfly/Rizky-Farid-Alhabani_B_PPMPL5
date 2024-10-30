import { Builder, By, Key, until } from 'selenium-webdriver';
import assert from 'assert';

let driver;

describe("UI Testing using Selenium", function () {
  this.timeout(30000); // Batas waktu Mocha untuk keseluruhan pengujian

  before(async function () {
    driver = await new Builder().forBrowser('chrome').build();
  });

  it("should input username and password using CSS Selector", async function () {
    await driver.get("http://localhost:8002/LoginPage.html");
    // Tambahkan langkah uji lainnya sesuai dengan kebutuhan
  });

  after(async function () {
    if (driver) { // Pastikan driver sudah terinisialisasi sebelum dipanggil quit
      await driver.quit();
    }
  });
});
