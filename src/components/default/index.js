/*  ---------------------------------------------------------------------------
 *    Windlass v1.0.0 - Default Components
 *    Source code for all Windlass default components, including alignment
 *      values, display values, global attribute properties and more. Use these
 *      defaults to present your content in a consistent, concise manner in
 *      accordance with the HTML5 specification.
 *    Copyright 2020 Timothy Martin
 *    Licensed under MIT (https://github.com/Niten001/windlass/blob/master/LICENSE)
 *  ---------------------------------------------------------------------------  */

// Imports
const { SecurityHelpers, TypeHelpers } = require("../../utilities").Server;

// [wl_IFUSr] Align Values
const ALIGN_VALUES = {
  INHERIT: "inherit",
  LEFT: "left",
  CENTER: "center",
  RIGHT: "right",
  JUSTIFY: "justify",
};
Object.freeze(ALIGN_VALUES);

// [wl_i9NPq] Direction Values
const DIRECTION_VALUES = {
  AUTO: "auto",
  LEFT_TO_RIGHT: "ltr",
  RIGHT_TO_LEFT: "rtl",
};
Object.freeze(DIRECTION_VALUES);

// [wl_GKg6F] Display Values
const DISPLAY_VALUES = {
  INITIAL: "initial",
  BLOCK: "block",
  INLINE: "inline",
};
Object.freeze(DISPLAY_VALUES);

// Margin Values
const MARGIN_VALUES = {
  0: "0px",
  0.5: "1px",
  1: "2px",
  1.5: "3px",
  2: "4px",
  2.5: "6px",
  3: "8px",
  3.5: "12px",
  4: "16px",
  4.5: "24px",
  5: "32px",
  5.5: "48px",
  6: "64px",
  6.5: "96px",
  7: "128px",
  7.5: "192px",
  8: "256px",
  8.5: "384px",
  9: "512px",
};
Object.freeze(MARGIN_VALUES);

// Padding Values
const PADDING_VALUES = {
  ...MARGIN_VALUES,
};
Object.freeze(PADDING_VALUES);

// [wl_bWc8v] Transform Values
const TRANSFORM_VALUES = {
  NONE: "none",
  INITIAL: "initial",
  INHERIT: "inherit",
  CAPITALIZE: "capitalize",
  UPPERCASE: "uppercase",
  LOWERCASE: "lowercase",
};
Object.freeze(TRANSFORM_VALUES);

// Width Values
const WIDTH_VALUES = {
  EXTRA_SMALL: "320px",
  SMALL: "600px",
  MEDIUM: "960px",
  LARGE: "1320px",
  EXTRA_LARGE: "1920px",
  FILL: "100%",
};
Object.freeze(WIDTH_VALUES);

// Z Values
const ZINDEX_VALUES = {
  0: 0,
  1: 100,
  2: 200,
  3: 300,
  4: 400,
  5: 500,
  6: 600,
  7: 700,
  8: 800,
  9: 900,
};
Object.freeze(ZINDEX_VALUES);

// [wl_EfQ6W] Default Properties
class DEFAULT_PROPERTIES {
  constructor(props) {
    // class
    TypeHelpers.typeCheckPrimative(
      this,
      props,
      "class",
      TypeHelpers.PRIMATIVES.STRING,
      "",
      `class="${SecurityHelpers.sanitiseHTML(props.class)}"`
    );

    // content
    TypeHelpers.typeCheckPrimative(
      this,
      props,
      "content",
      TypeHelpers.PRIMATIVES.STRING,
      "",
      String.raw`${props.content}`
    );

    // direction
    TypeHelpers.typeCheckValue(
      this,
      props,
      "direction",
      DIRECTION_VALUES,
      "",
      `dir="${SecurityHelpers.sanitiseHTML(props.direction)}"`
    );

    // display
    TypeHelpers.typeCheckValue(
      this,
      props,
      "display",
      DISPLAY_VALUES,
      undefined,
      `display: ${SecurityHelpers.sanitiseCSS(props.display)};`
    );

    // id
    TypeHelpers.typeCheckPrimative(
      this,
      props,
      "id",
      TypeHelpers.PRIMATIVES.STRING,
      "",
      `id="${SecurityHelpers.sanitiseHTML(props.id)}"`
    );

    // language
    TypeHelpers.typeCheckPrimative(
      this,
      props,
      "language",
      TypeHelpers.PRIMATIVES.STRING,
      "",
      `lang="${SecurityHelpers.sanitiseHTML(props.language)}"`
    );

    // style
    TypeHelpers.typeCheckPrimative(
      this,
      props,
      "style",
      TypeHelpers.PRIMATIVES.STRING,
      "",
      SecurityHelpers.sanitiseCSS(props.style)
    );

    // tabIndex
    TypeHelpers.typeCheckPrimative(
      this,
      props,
      "tabIndex",
      TypeHelpers.PRIMATIVES.NUMBER,
      "",
      `tabIndex="${SecurityHelpers.sanitiseHTML(`${props.tabIndex}`)}"`
    );

    // title
    TypeHelpers.typeCheckPrimative(
      this,
      props,
      "title",
      TypeHelpers.PRIMATIVES.STRING,
      "",
      `title="${SecurityHelpers.sanitiseHTML(
        props.title
      )}" aria-label="${SecurityHelpers.sanitiseHTML(props.title)}"`
    );

    // stylelist
    this.styleList = [this.display];
  }
}

// Export Defaults
module.exports = {
  ALIGN_VALUES,
  DEFAULT_PROPERTIES,
  DIRECTION_VALUES,
  DISPLAY_VALUES,
  WIDTH_VALUES,
  TRANSFORM_VALUES,
};
