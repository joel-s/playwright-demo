import { Browser, Page } from "playwright-chromium";

declare global {
  const page: Page;
  const browser: Browser;
  const browserName: string;
}
