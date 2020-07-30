/*  ---------------------------------------------------------------------------
 *    Windlass v1.0.0 - Typography Components
 *    Source code for all Windlass typography components, including typography
 *      properties, body text, headings, lists and more. Use typography to
 *      present your content in a clear, accessible manner in accordance with
 *      the HTML5 specification.
 *    Copyright 2020 Timothy Martin
 *    Licensed under MIT (https://github.com/Niten001/windlass/blob/master/LICENSE)
 *  ---------------------------------------------------------------------------  */

// Imports
const {
  ALIGN_VALUES,
  DEFAULT_PROPERTIES,
  DISPLAY_VALUES,
  TRANSFORM_VALUES,
} = require("../default/default");
const { isValidColor } = require("../color/color");
const {
  SecurityHelpers,
  StringHelpers,
  StyleHelpers,
} = require("../../utilities/utilities").Server;

// Typography
// [wl_aWVfK] Typography Properties
class TYPOGRAPHY_PROPERTIES extends DEFAULT_PROPERTIES {
  constructor(props) {
    super(props);
    // align
    try {
      if (props.align === undefined) {
        this.align = undefined;
      } else if (Object.values(ALIGN_VALUES).includes(props.align)) {
        this.align = SecurityHelpers.sanitiseCSS(`text-align: ${props.align};`);
      } else {
        throw new TypeError(
          `${props.align} on TYPOGRAPHY_PROPERTIES.align is not a valid ALIGN_VALUES type.`
        );
      }
    } catch (e) {
      console.error(e);
    }

    // color
    try {
      if (props.color === undefined) {
        this.color = undefined;
      } else if (isValidColor(props.color)) {
        this.color = SecurityHelpers.sanitiseCSS(`color: ${props.color};`);
      } else {
        throw new TypeError(
          `${props.color} on TYPOGRAPHY_PROPERTIES.color is not a valid COLOR type.`
        );
      }
    } catch (e) {
      console.error(e);
    }

    // display
    try {
      if (props.display === undefined) {
        this.display = undefined;
      } else if (Object.values(DISPLAY_VALUES).includes(props.display)) {
        this.display = SecurityHelpers.sanitiseCSS(
          `display: ${props.display};`
        );
      } else {
        throw new TypeError(
          `${props.display} on TYPOGRAPHY_PROPERTIES.display is not a valid DISPLAY_VALUES type.`
        );
      }
    } catch (e) {
      console.error(e);
    }

    // noWrap
    try {
      if (props.noWrap === undefined) {
        this.noWrap = false;
      } else if (
        typeof props.noWrap === "boolean" ||
        props.noWrap instanceof Boolean
      ) {
        this.noWrap = props.noWrap
          ? "white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"
          : "";
      } else {
        throw new TypeError(
          `${props.noWrap} on TYPOGRAPHY_PROPERTIES.noWrap is not a valid Boolean type.`
        );
      }
    } catch (e) {
      console.error(e);
    }

    // paragraph
    try {
      if (props.paragraph === undefined) {
        this.paragraph = false;
      } else if (
        typeof props.paragraph === "boolean" ||
        props.paragraph instanceof Boolean
      ) {
        this.paragraph = props.paragraph;
      } else {
        throw new TypeError(
          `${props.paragraph} on TYPOGRAPHY_PROPERTIES.paragraph is not a valid Boolean type.`
        );
      }
    } catch (e) {
      console.error(e);
    }

    // transform
    try {
      if (props.transform === undefined) {
        this.transform = undefined;
      } else if (Object.values(TRANSFORM_VALUES).includes(props.transform)) {
        this.transform = SecurityHelpers.sanitiseCSS(
          `text-transform: ${props.transform};`
        );
      } else {
        throw new TypeError(
          `${props.transform} on TYPOGRAPHY_PROPERTIES.transform is not a valid TRANSFORM_VALUES type.`
        );
      }
    } catch (e) {
      console.error(e);
    }

    // styleList
    this.styleList = this.styleList.concat([
      this.align,
      this.color,
      this.display,
      this.noWrap,
      this.transform,
    ]);
  }
}

// [wl_bMurR] Text Variants
const TEXT_VARIANTS = {
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
};
Object.freeze(TEXT_VARIANTS);

// [wl_l42Im] Text Properties
class TEXT_PROPERTIES extends TYPOGRAPHY_PROPERTIES {
  constructor(props) {
    super(props);
    // variant
    try {
      if (props.variant === undefined) {
        this.variant = TEXT_VARIANTS.DEFAULT;
      } else if (Object.values(TEXT_VARIANTS).includes(props.variant)) {
        this.variant = props.variant;
      } else {
        throw new TypeError(
          `${props.variant} on TEXT_PROPERTIES.variant is not a valid TEXT_VARIANTS type.`
        );
      }
    } catch (e) {
      console.error(e);
    }
  }
}

// [wl_ObnZD] Text
function Text(props) {
  try {
    if (typeof props === "object" || props instanceof Object) {
      props instanceof TEXT_PROPERTIES
        ? (this.props = props)
        : (this.props = new TEXT_PROPERTIES(props));
      return `${this.props.paragraph ? "<p>" : ""}<${
        this.props.variant
      } ${StringHelpers.combineStrings([
        this.props.id,
        this.props.class,
        this.props.title,
        this.props.language,
        this.props.direction,
        StyleHelpers.combineStyles(this.props.styleList, this.props.style),
      ])}>${this.props.content}</${this.props.variant}>${
        this.props.paragraph ? "</p>" : ""
      }`;
    } else {
      throw new TypeError(`${props} on Text is not a valid Object type.`);
    }
  } catch (e) {
    console.error(e);
  }
}

// [wl_8JS8I] Heading Variants
const HEADING_VARIANTS = {
  DEFAULT: "h1",
  HEADING_1: "h1",
  HEADING_2: "h2",
  HEADING_3: "h3",
  HEADING_4: "h4",
  HEADING_5: "h5",
  HEADING_6: "h6",
};
Object.freeze(HEADING_VARIANTS);

// [wl_Qtw13] Heading Properties
class HEADING_PROPERTIES extends TYPOGRAPHY_PROPERTIES {
  constructor(props) {
    super(props);
    // variant
    try {
      if (props.variant === undefined) {
        this.variant = HEADING_VARIANTS.DEFAULT;
      } else if (Object.values(HEADING_VARIANTS).includes(props.variant)) {
        this.variant = props.variant;
      } else {
        throw new TypeError(
          `${props.variant} on HEADING_PROPERTIES.variant is not a valid HEADING_VARIANTS type.`
        );
      }
    } catch (e) {
      console.error(e);
    }
  }
}

// [wl_bjrVc] Heading
function Heading(props) {
  try {
    if (typeof props === "object" || props instanceof Object) {
      props instanceof HEADING_PROPERTIES
        ? (this.props = props)
        : (this.props = new HEADING_PROPERTIES(props));
      return `${this.paragraph ? "<p>" : ""}<${
        this.props.variant
      } ${StringHelpers.combineStrings([
        this.props.id,
        this.props.class,
        this.props.title,
        this.props.language,
        this.props.direction,
        StyleHelpers.combineStyles(this.props.styleList, this.props.style),
      ])}>${this.props.content}</${this.props.variant}>${
        this.paragraph ? "</p>" : ""
      }`;
    } else {
      throw new TypeError(`${props} on Heading is not a valid Object type.`);
    }
  } catch (e) {
    console.error(e);
  }
}

// [wl_gWlze] Link Variants
const LINK_VARIANTS = {
  ALTERNATE: "alternate",
  AUTHOR: "author",
  BOOKMARK: "bookmark",
  EXTERNAL: "external",
  HELP: "help",
  LICENSE: "license",
  NEXT: "next",
  NO_FOLLOW: "nofollow",
  NO_OPENER: "noopener",
  NO_REFERRER: "noreferrer",
  PREV: "prev",
  SEARCH: "search",
  TAG: "tag",
};
Object.freeze(LINK_VARIANTS);

// [wl_Ok39p] Link Properties
class LINK_PROPERTIES extends TYPOGRAPHY_PROPERTIES {
  constructor(props) {
    super(props);
    // download
    try {
      if (props.download === undefined) {
        this.download = "";
      } else if (
        typeof props.download === "string" ||
        props.download instanceof String
      ) {
        this.download = SecurityHelpers.sanitiseHTML(
          `download="${props.download}"`
        );
      } else {
        throw new TypeError(
          `${props.download} on LINK_PROPERTIES.download is not a valid String type.`
        );
      }
    } catch (e) {
      console.error(e);
    }

    // link
    try {
      if (props.link === undefined) {
        this.link = "";
      } else if (
        typeof props.link === "string" ||
        props.link instanceof String
      ) {
        this.link = SecurityHelpers.sanitiseHTML(`href="${props.link}"`);
      } else {
        throw new TypeError(
          `${props.link} on LINK_PROPERTIES.link is not a valid String type.`
        );
      }
    } catch (e) {
      console.error(e);
    }

    // variant
    try {
      if (props.variant === undefined) {
        this.variant = "";
      } else if (Object.values(LINK_VARIANTS).includes(props.variant)) {
        this.variant = SecurityHelpers.sanitiseHTML(`rel="${props.variant}"`);
      } else {
        throw new TypeError(
          `${props.variant} on LINK_PROPERTIES.variant is not a valid LINK_VARIANTS type.`
        );
      }
    } catch (e) {
      console.error(e);
    }
  }
}

// [wl_3bint] Link
function Link(props) {
  try {
    if (typeof props === "object" || props instanceof Object) {
      props instanceof LINK_PROPERTIES
        ? (this.props = props)
        : (this.props = new LINK_PROPERTIES(props));
      return `${this.paragraph ? "<p>" : ""}<a ${StringHelpers.combineStrings([
        this.props.id,
        this.props.class,
        this.props.title,
        this.props.language,
        this.props.direction,
        this.props.variant,
        this.props.download,
        this.props.link,
        StyleHelpers.combineStyles(this.props.styleList, this.props.style),
      ])}>${this.props.content}</a>${this.paragraph ? "</p>" : ""}`;
    } else {
      throw new TypeError(`${props} on Link is not a valid Object type.`);
    }
  } catch (e) {
    console.error(e);
  }
}

// [wl_etNkx] Quote Properties
class QUOTE_PROPERTIES extends TYPOGRAPHY_PROPERTIES {
  constructor(props) {
    super(props);
    // source
    try {
      if (props.source === undefined) {
        this.source = "";
      } else if (
        typeof props.source === "string" ||
        props.source instanceof String
      ) {
        this.source = SecurityHelpers.sanitiseHTML(`cite="${props.source}"`);
      } else {
        throw new TypeError(
          `${props.source} on QUOTE_PROPERTIES.source is not a valid String type.`
        );
      }
    } catch (e) {
      console.error(e);
    }
  }
}

// [wl_6uXaS] Inline Quote
function Quote(props) {
  try {
    if (typeof props === "object" || props instanceof Object) {
      props instanceof QUOTE_PROPERTIES
        ? (this.props = props)
        : (this.props = new QUOTE_PROPERTIES(props));
      return `<q ${StringHelpers.combineStrings([
        this.props.id,
        this.props.class,
        this.props.title,
        this.props.language,
        this.props.direction,
        this.props.source,
        StyleHelpers.combineStyles(this.props.styleList, this.props.style),
      ])}>${this.props.content}</q>`;
    } else {
      throw new TypeError(`${props} on Quote is not a valid Object type.`);
    }
  } catch (e) {
    console.error(e);
  }
}

// [wl_ZYWeZ] Blockquote
function Blockquote(props) {
  try {
    if (typeof props === "object" || props instanceof Object) {
      props instanceof QUOTE_PROPERTIES
        ? (this.props = props)
        : (this.props = new QUOTE_PROPERTIES(props));
      return `<blockquote ${StringHelpers.combineStrings([
        this.props.id,
        this.props.class,
        this.props.title,
        this.props.language,
        this.props.direction,
        this.props.source,
        StyleHelpers.combineStyles(this.props.styleList, this.props.style),
      ])}>${this.props.content}</blockquote>`;
    } else {
      throw new TypeError(`${props} on Blockquote is not a valid Object type.`);
    }
  } catch (e) {
    console.error(e);
  }
}

// [wl_2VWOQ] Citation
function Cite(props) {
  try {
    if (typeof props === "object" || props instanceof Object) {
      props instanceof TYPOGRAPHY_PROPERTIES
        ? (this.props = props)
        : (this.props = new TYPOGRAPHY_PROPERTIES(props));
      return `<cite ${StringHelpers.combineStrings([
        this.props.id,
        this.props.class,
        this.props.title,
        this.props.language,
        this.props.direction,
        StyleHelpers.combineStyles(this.props.styleList, this.props.style),
      ])}>${this.props.content}</cite>`;
    } else {
      throw new TypeError(`${props} on Cite is not a valid Object type.`);
    }
  } catch (e) {
    console.error(e);
  }
}

// [wl_pnrIT] Inline Code
function Code(props) {
  try {
    if (typeof props === "object" || props instanceof Object) {
      props instanceof TYPOGRAPHY_PROPERTIES
        ? (this.props = props)
        : (this.props = new TYPOGRAPHY_PROPERTIES(props));
      return `<code ${StringHelpers.combineStrings([
        this.props.id,
        this.props.class,
        this.props.title,
        this.props.language,
        this.props.direction,
        StyleHelpers.combineStyles(this.props.styleList, this.props.style),
      ])}>${this.props.content}</code>`;
    } else {
      throw new TypeError(`${props} on Code is not a valid Object type.`);
    }
  } catch (e) {
    console.error(e);
  }
}

// [wl_R5EKV] Code Block
function CodeBlock(props) {
  try {
    if (typeof props === "object" || props instanceof Object) {
      props instanceof TYPOGRAPHY_PROPERTIES
        ? (this.props = props)
        : (this.props = new TYPOGRAPHY_PROPERTIES(props));
      return `<pre ${StringHelpers.combineStrings([
        this.props.id,
        this.props.class,
        this.props.title,
        this.props.language,
        this.props.direction,
        StyleHelpers.combineStyles(this.props.styleList, this.props.style),
      ])}><code>${this.props.content}</code></pre>`;
    } else {
      throw new TypeError(`${props} on CodeBlock is not a valid Object type.`);
    }
  } catch (e) {
    console.error(e);
  }
}

// [wl_0dHQT] Keyboard
function Keyboard(props) {
  try {
    if (typeof props === "object" || props instanceof Object) {
      props instanceof TYPOGRAPHY_PROPERTIES
        ? (this.props = props)
        : (this.props = new TYPOGRAPHY_PROPERTIES(props));
      return `<kbd ${StringHelpers.combineStrings([
        this.props.id,
        this.props.class,
        this.props.title,
        this.props.language,
        this.props.direction,
        StyleHelpers.combineStyles(this.props.styleList, this.props.style),
      ])}>${this.props.content}</kbd>`;
    } else {
      throw new TypeError(`${props} on Keyboard is not a valid Object type.`);
    }
  } catch (e) {
    console.error(e);
  }
}

// [wl_XpUeE] Output
function Output(props) {
  try {
    if (typeof props === "object" || props instanceof Object) {
      props instanceof TYPOGRAPHY_PROPERTIES
        ? (this.props = props)
        : (this.props = new TYPOGRAPHY_PROPERTIES(props));
      return `<samp ${StringHelpers.combineStrings([
        this.props.id,
        this.props.class,
        this.props.title,
        this.props.language,
        this.props.direction,
        StyleHelpers.combineStyles(this.props.styleList, this.props.style),
      ])}>${this.props.content}</samp>`;
    } else {
      throw new TypeError(`${props} on Output is not a valid Object type.`);
    }
  } catch (e) {
    console.error(e);
  }
}

// [wl_CmkOr] Variable
function Variable(props) {
  try {
    if (typeof props === "object" || props instanceof Object) {
      props instanceof TYPOGRAPHY_PROPERTIES
        ? (this.props = props)
        : (this.props = new TYPOGRAPHY_PROPERTIES(props));
      return `<var ${StringHelpers.combineStrings([
        this.props.id,
        this.props.class,
        this.props.title,
        this.props.language,
        this.props.direction,
        StyleHelpers.combineStyles(this.props.styleList, this.props.style),
      ])}>${this.props.content}</var>`;
    } else {
      throw new TypeError(`${props} on Variable is not a valid Object type.`);
    }
  } catch (e) {
    console.error(e);
  }
}

// [wl_ktd0C] List Variants
const LIST_VARIANTS = {
  DEFAULT: "disc",
  NONE: "none",
  INHERIT: "inherit",
  CIRCLE: "circle",
  DISC: "disc",
  SQUARE: "square",
  ARMENIAN: "armenian",
  CJK_IDEOGRAPHIC: "cjk-ideographic",
  DECIMAL: "decimal",
  DECIMAL_LEADING_ZERO: "decimal-leading-zero",
  GEORGIAN: "georgian",
  HEBREW: "hebrew",
  HIRAGANA: "hiragana",
  HIRAGANA_IROHA: "hiragana-iroha",
  KATAKANA: "katakana",
  KATAKANA_IROHA: "katakana-iroha",
  LOWER_ALPHA: "lower-alpha",
  LOWER_GREEK: "lower-greek",
  LOWER_LATIN: "lower-latin",
  LOWER_ROMAN: "lower-roman",
  UPPER_ALPHA: "upper-alpha",
  UPPER_GREEK: "upper-greek",
  UPPER_LATIN: "upper-latin",
  UPPER_ROMAN: "upper-roman",
};
Object.freeze(LIST_VARIANTS);

// [wl_k6p3w] List Properties
class LIST_PROPERTIES extends TYPOGRAPHY_PROPERTIES {
  constructor(props) {
    super(props);
    // variant
    try {
      if (props.variant === undefined) {
        this.variant = "";
      } else if (
        typeof props.variant === "string" ||
        props.variant instanceof String
      ) {
        this.variant = SecurityHelpers.sanitiseCSS(
          `list-style-type: "${props.variant}";`
        );
      } else if (Object.values(LIST_VARIANTS).includes(props.variant)) {
        this.variant = SecurityHelpers.sanitiseCSS(
          `list-style-type: ${props.variant};`
        );
      } else {
        throw new TypeError(
          `${props.variant} on LIST_PROPERTIES.variant is not a valid String or LIST_VARIANTS type.`
        );
      }
    } catch (e) {
      console.error(e);
    }

    // styleList
    this.styleList.concat([this.variant]);
  }
}

// [wl_E0boS] Unordered List
function UnorderedList(props) {
  try {
    if (typeof props === "object" || props instanceof Object) {
      props instanceof LIST_PROPERTIES
        ? (this.props = props)
        : (this.props = new LIST_PROPERTIES(props));
      return `<ul role="list" ${StringHelpers.combineStrings([
        this.props.id,
        this.props.class,
        this.props.title,
        this.props.language,
        this.props.direction,
        this.props.variant,
        StyleHelpers.combineStyles(this.props.styleList, this.props.style),
      ])}>${this.props.content}</ul>`;
    } else {
      throw new TypeError(
        `${props} on UnorderedList is not a valid Object type.`
      );
    }
  } catch (e) {
    console.error(e);
  }
}

// [wl_5Nhro] Ordered List
function OrderedList(props) {
  try {
    if (typeof props === "object" || props instanceof Object) {
      props instanceof LIST_PROPERTIES
        ? (this.props = props)
        : (this.props = new LIST_PROPERTIES(props));
      return `<ul role="list" ${StringHelpers.combineStrings([
        this.props.id,
        this.props.class,
        this.props.title,
        this.props.language,
        this.props.direction,
        this.props.variant,
        StyleHelpers.combineStyles(this.props.styleList, this.props.style),
      ])}>${this.props.content}</ul>`;
    } else {
      throw new TypeError(
        `${props} on OrderedList is not a valid Object type.`
      );
    }
  } catch (e) {
    console.error(e);
  }
}

// [wl_hik03] List Item
function ListItem(props) {
  try {
    if (typeof props === "object" || props instanceof Object) {
      props instanceof LIST_PROPERTIES
        ? (this.props = props)
        : (this.props = new LIST_PROPERTIES(props));
      return `<li role="listitem" ${StringHelpers.combineStrings([
        this.props.id,
        this.props.class,
        this.props.title,
        this.props.language,
        this.props.direction,
        this.props.variant,
        StyleHelpers.combineStyles(this.props.styleList, this.props.style),
      ])}>${this.props.content}</li>`;
    } else {
      throw new TypeError(
        `${props} on OrderedList is not a valid Object type.`
      );
    }
  } catch (e) {
    console.error(e);
  }
}

// [wl_2FBq8] Descriptive List
function DescriptiveList(props) {
  try {
    if (typeof props === "object" || props instanceof Object) {
      props instanceof TYPOGRAPHY_PROPERTIES
        ? (this.props = props)
        : (this.props = new TYPOGRAPHY_PROPERTIES(props));
      return `<dl role="list" ${StringHelpers.combineStrings([
        this.props.id,
        this.props.class,
        this.props.title,
        this.props.language,
        this.props.direction,
        StyleHelpers.combineStyles(this.props.styleList, this.props.style),
      ])}>${this.props.content}</dl>`;
    } else {
      throw new TypeError(
        `${props} on DescriptiveList is not a valid Object type.`
      );
    }
  } catch (e) {
    console.error(e);
  }
}

// [wl_h5v9B] Descriptive Details
function DescriptiveDetails(props) {
  try {
    if (typeof props === "object" || props instanceof Object) {
      props instanceof TYPOGRAPHY_PROPERTIES
        ? (this.props = props)
        : (this.props = new TYPOGRAPHY_PROPERTIES(props));
      return `<dd role="listitem" ${StringHelpers.combineStrings([
        this.props.id,
        this.props.class,
        this.props.title,
        this.props.language,
        this.props.direction,
        StyleHelpers.combineStyles(this.props.styleList, this.props.style),
      ])}>${this.props.content}</dd>`;
    } else {
      throw new TypeError(
        `${props} on DescriptiveDetails is not a valid Object type.`
      );
    }
  } catch (e) {
    console.error(e);
  }
}

// [wl_wstml] Descriptive Term
function DescriptiveTerm(props) {
  try {
    if (typeof props === "object" || props instanceof Object) {
      props instanceof TYPOGRAPHY_PROPERTIES
        ? (this.props = props)
        : (this.props = new TYPOGRAPHY_PROPERTIES(props));
      return `<dt role="listitem" ${StringHelpers.combineStrings([
        this.props.id,
        this.props.class,
        this.props.title,
        this.props.language,
        this.props.direction,
        StyleHelpers.combineStyles(this.props.styleList, this.props.style),
      ])}>${this.props.content}</dt>`;
    } else {
      throw new TypeError(
        `${props} on DescriptiveTerm is not a valid Object type.`
      );
    }
  } catch (e) {
    console.error(e);
  }
}

// Export Typography
module.exports = {
  TEXT_VARIANTS,
  TEXT_PROPERTIES,
  Text,
  HEADING_VARIANTS,
  HEADING_PROPERTIES,
  Heading,
  LINK_VARIANTS,
  LINK_PROPERTIES,
  Link,
  Quote,
  Blockquote,
  Cite,
  Code,
  CodeBlock,
  Keyboard,
  Output,
  Variable,
  LIST_VARIANTS,
  LIST_PROPERTIES,
  UnorderedList,
  OrderedList,
  ListItem,
  DescriptiveList,
  DescriptiveDetails,
  DescriptiveTerm,
};
