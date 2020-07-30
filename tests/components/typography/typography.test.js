/*  ---------------------------------------------------------------------------
 *    Windlass v1.0.0 - Typography Tests
 *    Copyright 2020 Timothy Martin
 *    Licensed under MIT (https://github.com/Niten001/windlass/blob/master/LICENSE)
 *  ---------------------------------------------------------------------------  */

// Imports
const { Typography } = require("../../../src/windlass").Components;

// Typography
// Text
test("Test the generation of a Text Component", () => {
  expect(
    Typography.Text({
      content: "This is a test of the generation of a Text Component",
    })
  ).toBe("<span >This is a test of the generation of a Text Component</span>");
});
