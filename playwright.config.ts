import { PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    use: {
        headless: false,
        trace: 'on-first-retry',
        screenshot: 'on',
    },
    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        }
    ],
};
export default config;