import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:3000/newsletters/welcome-to-sambodhi');
  
  // Wait for content to load
  await page.waitForSelector('.prose');
  
  const styles = await page.evaluate(() => {
    const el = document.querySelector('.prose p');
    if (!el) return 'No element found';
    const computed = window.getComputedStyle(el);
    return {
      color: computed.color,
      backgroundColor: computed.backgroundColor,
      opacity: computed.opacity,
      display: computed.display,
      parentBg: window.getComputedStyle(el.parentElement).backgroundColor
    };
  });
  
  console.log(JSON.stringify(styles, null, 2));
  
  await page.screenshot({ path: 'public/debug-styles.png' });
  await browser.close();
})();
