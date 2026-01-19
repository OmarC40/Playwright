import { PlaywrightTestConfig } from '@playwright/test';


const config: PlaywrightTestConfig={
  testMatch:["tests/windows.test.ts"],
  use:{
    headless: false,
    screenshot:"on",
    video:"on",
    launchOptions:{
      slowMo:1000
    }
  },
  retries:0,
  reporter: [
    ["html", { open: "never" }],
    ["json", { outputFile: "jsonReports/jsonReport.json" }],
    ["dot"]
]
}

export default config;