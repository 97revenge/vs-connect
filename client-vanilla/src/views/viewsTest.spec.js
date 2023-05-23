import { JSDOM } from "jsdom";

describe("header", () => {
  const header = new JSDOM("<header></header>");
  global.document = header.window.document;

  it("header na DOM", () => {
    const header = document.querySelector("header");
    expect(header.innerHTML).toBe(true);
  });
});
