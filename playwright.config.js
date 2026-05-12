// @ts-check

import { defineConfig, devices } from "@playwright/test";

export default defineConfig({

  testDir: './tests',

  fullyParallel: false,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 1,

  workers: process.env.CI ? 2 : 4,

  reporter: [
    ['html'],
    ['line']
  ],

  use: {

    headless: false,

    trace: 'on',

    video: 'on',

    screenshot: 'on',
    
    actionTimeout: 10000,

    navigationTimeout: 30000,

    launchOptions:{

      slowMo: 500

    }
  },

  projects: [

    {
      name: 'chromium',
      use: {...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: {...devices['Desktop Firefox']},
    },

  ],
});