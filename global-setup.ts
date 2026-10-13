import {chromium,FullConfig} from '@playwright/test';

async function globalSetup(config: FullConfig){

    console.log("Global Setup Started")

    const browser=await chromium.launch();
    const page=await browser.newPage();

    await page.goto("http://www.facebook.com");
    
    console.log("Global Setup completed");

    
}

export default globalSetup;