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
  TRANSFORM_VALUES,
} = require("../default/default");
const {
  SecurityHelpers,
  StringHelpers,
  StyleHelpers,
  TypeHelpers,
} = require("../../utilities/utilities").Server;

// [wl_aWVfK] Typography Properties
class TYPOGRAPHY_PROPERTIES extends DEFAULT_PROPERTIES {
  constructor(props) {
    super(props);
    // align
    TypeHelpers.typeCheckValue(
      this,
      props,
      "align",
      ALIGN_VALUES,
      undefined,
      SecurityHelpers.sanitiseCSS(`text-align: ${props.align};`)
    );

    // color
    TypeHelpers.typeCheckColor(
      this,
      props,
      "color",
      undefined,
      SecurityHelpers.sanitiseCSS(`color: ${props.color};`)
    );

    // noWrap
    TypeHelpers.typeCheckPrimative(
      this,
      props,
      "noWrap",
      TypeHelpers.PRIMATIVES.BOOLEAN,
      false,
      props.noWrap
        ? "white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"
        : ""
    );

    // paragraph
    TypeHelpers.typeCheckPrimative(
      this,
      props,
      "paragraph",
      TypeHelpers.PRIMATIVES.BOOLEAN,
      false,
      props.paragraph
    );

    // transform
    TypeHelpers.typeCheckValue(
      this,
      props,
      "transform",
      TRANSFORM_VALUES,
      undefined,
      SecurityHelpers.sanitiseCSS(`text-transform: ${props.transform};`)
    );

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

// [wl_bMurR] Text Values
const TEXT_VALUES = {
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
Object.freeze(TEXT_VALUES);

// [wl_l42Im] Text Properties
class TEXT_PROPERTIES extends TYPOGRAPHY_PROPERTIES {
  constructor(props) {
    super(props);
    // variant
    TypeHelpers.typeCheckValue(
      this,
      props,
      "variant",
      TEXT_VALUES,
      TEXT_VALUES.DEFAULT,
      props.variant
    );
  }
}

// [wl_ObnZD] Text
function Text(props) {
  try {
    props === undefined ? (props = {}) : null;
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

// [wl_8JS8I] Heading Values
const HEADING_VALUES = {
  DEFAULT: "h1",
  HEADING_1: "h1",
  HEADING_2: "h2",
  HEADING_3: "h3",
  HEADING_4: "h4",
  HEADING_5: "h5",
  HEADING_6: "h6",
};
Object.freeze(HEADING_VALUES);

// [wl_Qtw13] Heading Properties
class HEADING_PROPERTIES extends TYPOGRAPHY_PROPERTIES {
  constructor(props) {
    super(props);
    // variant
    TypeHelpers.typeCheckValue(
      this,
      props,
      "variant",
      HEADING_VALUES,
      HEADING_VALUES.DEFAULT,
      props.variant
    );
  }
}

// [wl_bjrVc] Heading
function Heading(props) {
  try {
    props === undefined ? (props = {}) : null;
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

// [wl_gWlze] Link Values
const LINK_VALUES = {
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
Object.freeze(LINK_VALUES);

// [wl_Ok39p] Link Properties
class LINK_PROPERTIES extends TYPOGRAPHY_PROPERTIES {
  constructor(props) {
    super(props);
    // download
    TypeHelpers.typeCheckPrimative(
      this,
      props,
      "download",
      TypeHelpers.PRIMATIVES.STRING,
      "",
      SecurityHelpers.sanitiseHTML(`download="${props.download}"`)
    );

    // link
    TypeHelpers.typeCheckPrimative(
      this,
      props,
      "link",
      TypeHelpers.PRIMATIVES.STRING,
      "",
      SecurityHelpers.sanitiseHTML(`href="${props.link}"`)
    );

    // value
    TypeHelpers.typeCheckValue(
      this,
      props,
      "value",
      LINK_VALUES,
      "",
      SecurityHelpers.sanitiseHTML(`rel="${props.value}"`)
    );
  }
}

// [wl_3bint] Link
function Link(props) {
  try {
    props === undefined ? (props = {}) : null;
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
        this.props.value,
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
    TypeHelpers.typeCheckPrimative(
      this,
      props,
      "source",
      string,
      "",
      SecurityHelpers.sanitiseHTML(`cite="${props.source}"`)
    );
  }
}

// [wl_6uXaS] Inline Quote
function Quote(props) {
  try {
    props === undefined ? (props = {}) : null;
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
    props === undefined ? (props = {}) : null;
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
    props === undefined ? (props = {}) : null;
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
    props === undefined ? (props = {}) : null;
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
    props === undefined ? (props = {}) : null;
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
    props === undefined ? (props = {}) : null;
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
    props === undefined ? (props = {}) : null;
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
    props === undefined ? (props = {}) : null;
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

// [wl_ktd0C] List Values
const LIST_VALUES = {
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
Object.freeze(LIST_VALUES);

// [wl_k6p3w] List Properties
class LIST_PROPERTIES extends TYPOGRAPHY_PROPERTIES {
  constructor(props) {
    super(props);
    // value
    TypeHelpers.typeCheckValue(
      this,
      props,
      "value",
      LIST_VALUES,
      "",
      SecurityHelpers.sanitiseCSS(`list-style-type: ${props.value};`)
    );

    // styleList
    this.styleList.concat([this.value]);
  }
}

// [wl_E0boS] Unordered List
function UnorderedList(props) {
  try {
    props === undefined ? (props = {}) : null;
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
        this.props.value,
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
    props === undefined ? (props = {}) : null;
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
        this.props.value,
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
    props === undefined ? (props = {}) : null;
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
        this.props.value,
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
    props === undefined ? (props = {}) : null;
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
    props === undefined ? (props = {}) : null;
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
    props === undefined ? (props = {}) : null;
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
  TEXT_VALUES,
  TEXT_PROPERTIES,
  Text,
  HEADING_VALUES,
  HEADING_PROPERTIES,
  Heading,
  LINK_VALUES,
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
  LIST_VALUES,
  LIST_PROPERTIES,
  UnorderedList,
  OrderedList,
  ListItem,
  DescriptiveList,
  DescriptiveDetails,
  DescriptiveTerm,
};
