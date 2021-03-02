import { chromium, Browser, Page } from "playwright-chromium";

describe("Sandbox", () => {
  test("should be on the sandbox", async () => {
    await page.goto("https://e2e-boilerplate.github.io/sandbox/", {
      waitUntil: "networkidle",
    });
    await page.waitForSelector("h1");
    const title = await page.$eval(
      "h1",
      (el: { textContent: any }) => el.textContent
    );

    expect(await page.title()).toEqual("Sandbox");
    expect(title).toEqual("Sandbox");
  });
});
