/*  ---------------------------------------------------------------------------
 *    Windlass v1.0.0 - Layout Elements
 *
 *    Copyright 2020 Timothy Martin
 *    Licensed under MIT (link to LICENSE)
 *  ---------------------------------------------------------------------------  */

// Imports
const {
  ALIGN_VALUES,
  WIDTH_VALUES,
  DEFAULT_PROPERTIES,
} = require("../default/default");
const {
  SecurityHelpers,
  StringHelpers,
  StyleHelpers,
  TypeHelpers,
} = require("../../utilities/utilities").Server;

// Layout
// Layout Properties
class LAYOUT_PROPERTIES extends DEFAULT_PROPERTIES {
  constructor(props) {
    super(props);
    // align
    TypeHelpers.typeCheckValue(
      this,
      props,
      "align",
      ALIGN_VALUES,
      undefined,
      SecurityHelpers.sanitiseCSS(`align: ${props.align};`)
    );

    // color
    TypeHelpers.typeCheckColor(
      this,
      props,
      "color",
      undefined,
      SecurityHelpers.sanitiseCSS(`background-color: ${props.color};`)
    );

    // border
    TypeHelpers.typeCheckPrimative(
      this,
      props,
      "border",
      TypeHelpers.PRIMATIVES.BOOLEAN,
      undefined,
      SecurityHelpers.sanitiseCSS(
        props.border ? `border: solid 1px currentcolor;` : ``
      )
    );

    // fluid
    TypeHelpers.typeCheckPrimative(
      this,
      props,
      "fluid",
      TypeHelpers.PRIMATIVES.BOOLEAN,
      false,
      SecurityHelpers.sanitiseCSS(
        `${
          props.fluid
            ? `width: 100%;`
            : `min-width: ${WIDTH_VALUES.EXTRA_SMALL}; width: fit-content(100%);`
        };`
      )
    );

    // margin
    TypeHelpers.typeCheckValue(
      this,
      props,
      "margin",
      MARGIN_VALUES,
      undefined,
      SecurityHelpers.sanitiseCSS(`margin: ${props.margin};`)
    );

    // maxWidth
    TypeHelpers.typeCheckValue(
      this,
      props,
      "maxWidth",
      WIDTH_VALUES,
      undefined,
      SecurityHelpers.sanitiseCSS(`max-width: ${props.maxWidth};`)
    );

    // padding
    TypeHelpers.typeCheckValue(
      this,
      props,
      "padding",
      PADDING_VALUES,
      undefined,
      SecurityHelpers.sanitiseCSS(`padding: ${props.padding};`)
    );

    // visibility
    TypeHelpers.typeCheckPrimative(
      this,
      props,
      "visibility",
      TypeHelpers.PRIMATIVES.BOOLEAN,
      false,
      SecurityHelpers.sanitiseCSS(
        props.visibility ? `visibility: visible;` : `visibility: hidden;`
      )
    );

    // zIndex
    TypeHelpers.typeCheckValue(
      this,
      props,
      "zIndex",
      ZINDEX_VALUES,
      undefined,
      SecurityHelpers.sanitiseCSS(`z-index: ${props.zIndex};`)
    );

    // styleList
    this.styleList = this.styleList.concat([
      this.align,
      this.color,
      this.border,
      this.fluid,
      this.margin,
      this.maxWidth,
      this.padding,
      this.visibility,
      this.zIndex,
    ]);
  }
}

const CONTAINER_VALUES = {
  DEFAULT: "div",
  ADDRESS: "address",
  ARTICLE: "article",
  ASIDE: "aside",
  CONTAINER: "div",
  FOOTER: "footer",
  HEADER: "header",
  HEADING_GROUP: "hgroup",
  MAIN: "main",
  NAVIGATION: "nav",
  SECTION: "section",
};
Object.freeze(CONTAINER_VALUES);

//  Container Properties
class CONTAINER_PROPERTIES extends LAYOUT_PROPERTIES {
  constructor(props) {
    super(props);
    // variant
    TypeHelpers.typeCheckValue(
      this,
      props,
      "variant",
      CONTAINER_VALUES,
      CONTAINER_VALUES.DEFAULT,
      SecurityHelpers.sanitiseHTML(`${props.value}`)
    );
  }
}

// Container
function Container(props) {
  try {
    props === undefined ? (props = {}) : null;
    if (typeof props === "object" || props instanceof Object) {
      props instanceof LAYOUT_PROPERTIES
        ? (this.props = props)
        : (this.props = new LAYOUT_PROPERTIES(props));
      return `<${this.props.variant} ${StringHelpers.combineStrings([
        this.props.id,
        this.props.class,
        this.props.title,
        this.props.language,
        this.props.direction,
        StyleHelpers.combineStyles(this.props.styleList, this.props.style),
      ])}>${this.props.content}</${this.props.variant}>`;
    } else {
      throw new TypeError(`${props} on Container is not a valid Object type.`);
    }
  } catch (e) {
    console.error(e);
  }
}

// Figure Properties
class FIGURE_PROPERTIES extends LAYOUT_PROPERTIES {
  constructor(props) {
    super(props);
    // caption
    TypeHelpers.typeCheckPrimative(
      this,
      props,
      "caption",
      TypeHelpers.PRIMATIVES.STRING,
      "",
      SecurityHelpers.sanitiseHTML(`<figcaption>${props.download}</figcaption>`)
    );
  }
}

// Figure
function Figure(props) {
  try {
    props === undefined ? (props = {}) : null;
    if (typeof props === "object" || props instanceof Object) {
      props instanceof FIGURE_PROPERTIES
        ? (this.props = props)
        : (this.props = new FIGURE_PROPERTIES(props));
      return `<figure ${StringHelpers.combineStrings([
        this.props.id,
        this.props.class,
        this.props.title,
        this.props.language,
        this.props.direction,
        StyleHelpers.combineStyles(this.props.styleList, this.props.style),
      ])}>${this.props.content}${this.props.caption}</figure>`;
    } else {
      throw new TypeError(`${props} on Figure is not a valid Object type.`);
    }
  } catch (e) {
    console.error(e);
  }
}

// Grid Properties
class GRID_PROPERTIES extends LAYOUT_PROPERTIES {
  constructor(props) {
    super(props);
  }
}
// Grid
function Grid(props) {
  try {
    props === undefined ? (props = {}) : null;
    if (typeof props === "object" || props instanceof Object) {
      props instanceof FIGURE_PROPERTIES
        ? (this.props = props)
        : (this.props = new FIGURE_PROPERTIES(props));
      return `<div ${StringHelpers.combineStrings([
        this.props.id,
        this.props.class,
        this.props.title,
        this.props.language,
        this.props.direction,
        StyleHelpers.combineStyles(this.props.styleList, this.props.style),
      ])}>${this.props.content}</div>`;
    } else {
      throw new TypeError(`${props} on Figure is not a valid Object type.`);
    }
  } catch (e) {
    console.error(e);
  }
}

// Export Layout
module.exports = {
  LAYOUT_PROPERTIES,
  CONTAINER_VALUES,
  CONTAINER_PROPERTIES,
  Container,
  FIGURE_PROPERTIES,
  Figure,
  GRID_PROPERTIES,
  Grid,
};
