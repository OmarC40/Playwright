import { PlaywrightTestConfig } from '@playwright/test';


const config: PlaywrightTestConfig={
  testMatch:["tests/alerts.test.ts"],
  use:{
    headless: false,
    screenshot:"on",
    video:"on"
  },
  retries:0,
  reporter: [
    ["html", { open: "always" }],
    ["json", { outputFile: "jsonReports/jsonReport.json" }],
    ["dot"]
]
}

export default config;