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
const {
  SecurityHelpers,
  TypeHelpers,
} = require("../../utilities/utilities").Server;

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
      SecurityHelpers.sanitiseHTML(`class="${props.class}"`)
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
      SecurityHelpers.sanitiseHTML(`dir="${props.direction}"`)
    );

    // display
    TypeHelpers.typeCheckValue(
      this,
      props,
      "display",
      DISPLAY_VALUES,
      undefined,
      SecurityHelpers.sanitiseCSS(`display: ${props.display};`)
    );

    // id
    TypeHelpers.typeCheckPrimative(
      this,
      props,
      "id",
      TypeHelpers.PRIMATIVES.STRING,
      "",
      SecurityHelpers.sanitiseHTML(`id="${props.id}"`)
    );

    // language
    TypeHelpers.typeCheckPrimative(
      this,
      props,
      "language",
      TypeHelpers.PRIMATIVES.STRING,
      "",
      SecurityHelpers.sanitiseHTML(`lang="${props.language}"`)
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

    // title
    TypeHelpers.typeCheckPrimative(
      this,
      props,
      "title",
      TypeHelpers.PRIMATIVES.STRING,
      "",
      SecurityHelpers.sanitiseHTML(
        `title="${props.title}" aria-label="${props.title}"`
      )
    );

    // stylelist
    this.styleList = [];
  }
}

// Export Defaults
module.exports = {
  ALIGN_VALUES,
  DEFAULT_PROPERTIES,
  DIRECTION_VALUES,
  DISPLAY_VALUES,
  TRANSFORM_VALUES,
};
