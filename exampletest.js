// exampletest.js
import { Builder } from 'selenium-webdriver';

(async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('http://127.0.0.1:8001/LoginPage.html'); // Pastikan port sesuai dengan server yang berjalan
        console.log("Page loaded successfully.");
    } catch (error) {
        console.error("Error loading page:", error);
    } finally {
        await driver.quit();
    }
})();
