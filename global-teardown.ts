import {Browser} from '@playwright/test';
export async function globalTeardown(browser: Browser){

    console.log("Global Teardown Started")

    
    
    console.log("Global Teardown completed");
}

export default globalTeardown;