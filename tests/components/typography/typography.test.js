/*  ---------------------------------------------------------------------------
 *    Windlass v1.0.0 - Typography Tests
 *    Copyright 2020 Timothy Martin
 *    Licensed under MIT (https://github.com/Niten001/windlass/blob/master/LICENSE)
 *  ---------------------------------------------------------------------------  */

// Imports
const Typography = require("../../../src/windlass").Components.Typography;

// Typography Properties
// Test Default Behaviour

// Test Working

// Test new properties

// Text Values
// Test Accessible
test("Test that the TEXT_VALUES enum object is accessible", () => {
  expect(Typography.TEXT_VALUES.DEFAULT).toBe("span");
});

// Test Extensible
test("Test that the TEXT_VALUES enum object is extensible", () => {
  expect({
    TEST_VALUE: "test",
    ...Typography.TEXT_VALUES,
  }).toMatchObject({
    DEFAULT: "span",
    BOLD: "b",
    DELETE: "del",
    EMPHASIS: "em",
    HIGHLIGHT: "mark",
    INSERT: "ins",
    ITALIC: "i",
    SMALL: "small",
    STRIKETHROUGH: "s",
    STRONG: "strong",
    SUBSCRIPT: "sub",
    SUPERSCRIPT: "sup",
    UNDERLINE: "u",
    TEST_VALUE: "test",
  });
});

// Test Frozen
test("Test that the TEXT_VALUES enum object is not modifyable", () => {
  const value_1 = Typography.TEXT_VALUES.DEFAULT;
  Typography.TEXT_VALUES.DEFAULT = "test-frozen";
  expect(value_1).toBe(Typography.TEXT_VALUES.DEFAULT);
});

// Text Properties
// Test Default Behaviour
test("Test the default behaviour of TEXT_PROPERTIES", () => {
  expect(new Typography.TEXT_PROPERTIES({})).toMatchObject({
    class: "",
    content: "",
    direction: "",
    display: undefined,
    id: "",
    language: "",
    style: "",
    title: "",
    styleList: [undefined, undefined, undefined, false, undefined],
    align: undefined,
    color: undefined,
    noWrap: false,
    paragraph: false,
    transform: undefined,
    variant: "span",
  });
});

// Test Working
test("Test TEXT_PROPERTIES works as expected", () => {
  expect(
    new Typography.TEXT_PROPERTIES({
      id: "test",
      class: "test",
      content: "test",
      variant: Typography.TEXT_VALUES.HIGHLIGHT,
    })
  ).toMatchObject({
    class: 'class="test"',
    content: "test",
    direction: "",
    display: undefined,
    id: 'id="test"',
    language: "",
    style: "",
    title: "",
    styleList: [undefined, undefined, undefined, false, undefined],
    align: undefined,
    color: undefined,
    noWrap: false,
    paragraph: false,
    transform: undefined,
    variant: "mark",
  });
});

// Test new properties
test("Test the new properties added to TEXT_PROPERTIES", () => {
  expect(
    new Typography.TEXT_PROPERTIES({
      variant: Typography.TEXT_VALUES.HIGHLIGHT,
    })
  ).toMatchObject({
    class: "",
    content: "",
    direction: "",
    display: undefined,
    id: "",
    language: "",
    style: "",
    title: "",
    styleList: [undefined, undefined, undefined, false, undefined],
    align: undefined,
    color: undefined,
    noWrap: false,
    paragraph: false,
    transform: undefined,
    variant: "mark",
  });
});

// Text
// Test default generation
test("Test the default generation of Text", () => {
  expect(Typography.Text()).toBe("<span ></span>");
});

// Test paragraph wrapping
test("Test the paragraph wrapping of Text", () => {
  expect(Typography.Text({ paragraph: true })).toBe("<p><span ></span></p>");
});

// Test setting variant
test("Test setting the variant of Text", () => {
  expect(Typography.Text({ variant: Typography.TEXT_VALUES.HIGHLIGHT })).toBe(
    "<mark ></mark>"
  );
});

// Test setting attributes
test("Test setting the attributes of Text", () => {
  expect(
    Typography.Text({
      id: "test1",
      title: "test2",
      content: "test3",
      noWrap: true,
    })
  ).toBe(
    `<span id="test1" title="test2" aria-label="test2" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">test3</span>`
  );
});

// Test specifying props with new Text Properties object
test("Test setting props with new TEXT_PROPERTIES object for Text", () => {
  expect(
    Typography.Text(
      new Typography.TEXT_PROPERTIES({
        id: "test1",
        title: "test2",
        content: "test3",
        noWrap: true,
      })
    )
  ).toBe(
    `<span id="test1" title="test2" aria-label="test2" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">test3</span>`
  );
});
