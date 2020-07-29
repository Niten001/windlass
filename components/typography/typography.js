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
const { combineStyles } = require("../../utilities/utilities").Server.Style;

// Typography
// Typography Properties
class TYPOGRAPHY_PROPERTIES extends DEFAULT_PROPERTIES {
    constructor(props) {
        super(props);
        // align
        try {
            if (props.align === undefined) {
                this.align = undefined;
            } else if (Object.values(ALIGN_VALUES).includes(props.align)) {
                this.align = `text-align: ${props.align};`;
            } else {
                throw new TypeError(`${props.align} on TYPOGRAPHY_PROPERTIES.align is not a valid ALIGN_VALUES type.`);
            }
        } catch (e) {
            console.error(e);
        }

        // color
        try {
            if (props.color === undefined) {
                this.color = undefined;
            } else if (isValidColor(props.color)) {
                this.color = `color: ${props.color};`;
            } else {
                throw new TypeError(`${props.color} on TYPOGRAPHY_PROPERTIES.color is not a valid COLOR type.`);
            }
        } catch (e) {
            console.error(e);
        }

        // display
        try {
            if (props.display === undefined) {
                this.display = undefined;
            } else if (Object.values(DISPLAY_VALUES).includes(props.display)) {
                this.display = `display: ${props.display};`;
            } else {
                throw new TypeError(`${props.display} on TYPOGRAPHY_PROPERTIES.display is not a valid DISPLAY_VALUES type.`);
            }
        } catch (e) {
            console.error(e);
        }
                
        // noWrap
        try {
            if (props.noWrap === undefined) {
                this.noWrap = undefined;
            } else if ((typeof props.noWrap === "boolean") || (props.noWrap instanceof Boolean)) {
                this.noWrap = (props.noWrap) ? ("white-space: nowrap; overflow: hidden; text-overflow: ellipsis;") : ("");
            } else {
                throw new TypeError(`${props.noWrap} on TYPOGRAPHY_PROPERTIES.noWrap is not a valid Boolean type.`);
            }
        } catch (e) {
            console.error(e);
        }

        // paragraph
        try {
            if (props.paragraph === undefined) {
                this.paragraph = false;
            } else if ((typeof props.paragraph === "boolean") || (props.paragraph instanceof Boolean)) {
                this.paragraph = props.paragraph;
            } else {
                throw new TypeError(`${props.paragraph} on TYPOGRAPHY_PROPERTIES.paragraph is not a valid Boolean type.`);
            }
        } catch (e) {
            console.error(e);
        }

        // transform
        try {
            if (props.transform === undefined) {
                this.transform = undefined;
            } else if (Object.values(TRANSFORM_VALUES).includes(props.transform)) {
                this.transform = `text-transform: ${props.transform};`;
            } else {
                throw new TypeError(`${props.transform} on TYPOGRAPHY_PROPERTIES.transform is not a valid TRANSFORM_VALUES type.`);
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

// Text
// Text Variants
const TEXT_VARIANTS = {
    DEFAULT:        "span",
    BOLD:           "b",
    DELETE:         "del",
    EMPHASIS:       "em",
    HIGHLIGHT:      "mark",
    INSERT:         "ins",
    ITALIC:         "i",
    SMALL:          "small",
    STRIKETHROUGH:  "s",
    STRONG:         "strong",
    SUBSCRIPT:      "sub",
    SUPERSCRIPT:    "sup",
    UNDERLINE:      "u",
};
Object.freeze(TEXT_VARIANTS);

// Text Properties
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
                throw new TypeError(`${props.variant} on TEXT_PROPERTIES.variant is not a valid TEXT_VARIANTS type.`);
            }
        } catch (e) {
            console.error(e);
        }
    }
}

function Text(props) {
    try {
        if (typeof props === "object" || props instanceof Object) {
            (props instanceof TEXT_PROPERTIES) ? (this.props = props) : (this.props = new TEXT_PROPERTIES(props));
            return `${(this.props.paragraph) ? ("<p>") : ("")}<${this.props.variant} ${this.props.id} ${this.props.class} ${this.props.title} ${this.props.language} ${this.props.direction} ${combineStyles(this.props.styleList, this.props.style)}>${this.props.content}</${this.props.variant}>${(this.props.paragraph) ? ("</p>") : ("")}`;
        } else {
            throw new TypeError(`${props} on Text is not a valid Object type.`);
        }
    } catch (e) {
        console.error(e);
    }
}

// Heading
// Heading Variants
const HEADING_VARIANTS = {
    DEFAULT:    "h1",
    HEADING_1:  "h1",
    HEADING_2:  "h2",
    HEADING_3:  "h3",
    HEADING_4:  "h4",
    HEADING_5:  "h5",
    HEADING_6:  "h6",
};
Object.freeze(HEADING_VARIANTS);

// Heading Properties
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
                throw new TypeError(`${props.variant} on HEADING_PROPERTIES.variant is not a valid HEADING_VARIANTS type.`);
            }
        } catch (e) {
            console.error(e);
        }
    }
}

function Heading(props) {
    try {
        if (typeof props === "object" || props instanceof Object) {
            (props instanceof HEADING_PROPERTIES) ? (this.props = props) : (this.props = new HEADING_PROPERTIES(props));
            return `${(this.paragraph) ? ("<p>") : ("")}<${this.props.variant} ${this.props.id} ${this.props.class} ${this.props.title} ${this.props.language} ${this.props.direction} ${combineStyles(this.props.styleList, this.props.style)}>${this.props.content}</${this.props.variant}>${(this.paragraph) ? ("</p>") : ("")}`;
        } else {
            throw new TypeError(`${props} on Heading is not a valid Object type.`);
        }        
    } catch (e) {
        console.error(e);
    }
}

function HeadingGroup(props) {
    try {
        (props instanceof DEFAULT_PROPERTIES) ? (this.props = props) : (this.props = new DEFAULT_PROPERTIES(props));
        return `<hgroup ${this.props.id} ${this.props.class} ${this.props.title} ${this.props.language} ${this.props.direction} ${combineStyles(this.props.styleList, this.props.style)}>${this.props.content}</hgroup>`;
    } catch (e) {
        console.error(e);
    }
}

// Link
// Link Variants
const LINK_VARIANTS = {
    ALTERNATE:      "alternate",
    AUTHOR:         "author",
    BOOKMARK:       "bookmark",
    EXTERNAL:       "external",
    HELP:           "help",
    LICENSE:        "license",
    NEXT:           "next",
    NO_FOLLOW:      "nofollow",
    NO_OPENER:      "noopener",
    NO_REFERRER:    "noreferrer",
    PREV:           "prev",
    SEARCH:         "search",
    TAG:            "tag",
};
Object.freeze(LINK_VARIANTS);

// Link Properties
class LINK_PROPERTIES extends TYPOGRAPHY_PROPERTIES {
    constructor(props) {
        super(props);
        // download
        try {
            if (props.download === undefined) {
                this.download = "";
            } else if ((typeof props.download === "string") || (props.download instanceof String)) {
                this.download = `download="${props.download}"`;
            } else {
                throw new TypeError(`${props.download} on LINK_PROPERTIES.download is not a valid String type.`);
            }
        } catch (e) {
            console.error(e);
        }

        // link
        try {
            if (props.link === undefined) {
                this.link = "";
            } else if ((typeof props.link === "string") || (props.link instanceof String)) {
                this.link = `href="${props.link}"`;
            } else {
                throw new TypeError(`${props.link} on LINK_PROPERTIES.link is not a valid String type.`);
            }
        } catch (e) {
            console.error(e);
        }

        // variants
        try {
            if (props.variant === undefined) {
                this.variant = "";
            } else if (Object.values(LINK_VARIANTS).includes(props.variant)) {
                this.variant = `rel="${props.variant}"`;
            } else {
                throw new TypeError(`${props.variant} on LINK_PROPERTIES.variant is not a valid LINK_VARIANTS type.`);
            }
        } catch (e) {
            console.error(e);
        }
    }
}

function Link(props) {
    try {
        if (typeof props === "object" || props instanceof Object) {
            (props instanceof LINK_PROPERTIES) ? (this.props = props) : (this.props = new LINK_PROPERTIES(props));
            return `${(this.paragraph) ? ("<p>") : ("")}<a ${this.props.id} ${this.props.class} ${this.props.title} ${this.props.language} ${this.props.direction} ${this.props.variant} ${this.props.download} ${this.props.link} ${combineStyles(this.props.styleList, this.props.style)}>${this.props.content}</a>${(this.paragraph) ? ("</p>") : ("")}`;
        } else {
            throw new TypeError(`${props} on Link is not a valid Object type.`);
        }
    } catch (e) {
        console.error(e);
    }
}

// Quote
// Quote Properties
class QUOTE_PROPERTIES extends TYPOGRAPHY_PROPERTIES {
    constructor(props) {
        super(props);
        // source
        try {
            if (props.source === undefined) {
                this.source = undefined;
            } else if ((typeof props.source === "string") || (props.source instanceof String)) {
                this.source = `cite="${props.source}"`;
            } else {
                throw new TypeError(`${props.source} on QUOTE_PROPERTIES.source is not a valid String type.`);
            }
        } catch (e) {
            console.error(e);
        }
    }
}

// Inline Quote
function Quote(props) {
    try {
        if (typeof props === "object" || props instanceof Object) {
            (props instanceof QUOTE_PROPERTIES) ? (this.props = props) : (this.props = new QUOTE_PROPERTIES(props));
            return `<q ${this.props.id} ${this.props.class} ${this.props.title} ${this.props.language} ${this.props.direction} ${this.props.source} ${combineStyles(this.props.styleList, this.props.style)}>${this.props.content}</q>`;
        } else {
            throw new TypeError(`${props} on Quote is not a valid Object type.`);
        }
    } catch (e) {
        console.error(e);
    }
}

// Blockquote
function Blockquote(props) {
    try {
        if (typeof props === "object" || props instanceof Object) {
            (props instanceof QUOTE_PROPERTIES) ? (this.props = props) : (this.props = new QUOTE_PROPERTIES(props));
            return `<blockquote ${this.props.id} ${this.props.class} ${this.props.title} ${this.props.language} ${this.props.direction} ${this.props.source} ${combineStyles(this.props.styleList, this.props.style)}>${this.props.content}</blockquote>`;
        } else {
            throw new TypeError(`${props} on Blockquote is not a valid Object type.`);
        }
    } catch (e) {
        console.error(e);
    }
}

// Citation
function Cite(props) {
    try {
        if (typeof props === "object" || props instanceof Object) {
            (props instanceof TYPOGRAPHY_PROPERTIES) ? (this.props = props) : (this.props = new TYPOGRAPHY_PROPERTIES(props));
            return `<cite ${this.props.id} ${this.props.class} ${this.props.title} ${this.props.language} ${this.props.direction} ${combineStyles(this.props.styleList, this.props.style)}>${this.props.content}</cite>`;
        } else {
            throw new TypeError(`${props} on Cite is not a valid Object type.`);
        }
    } catch (e) {
        console.error(e);
    }
}

// Code
// Inline
function Code(props) {
    try {
        if (typeof props === "object" || props instanceof Object) {
            (props instanceof TYPOGRAPHY_PROPERTIES) ? (this.props = props) : (this.props = new TYPOGRAPHY_PROPERTIES(props));
            return `<code ${this.props.id} ${this.props.class} ${this.props.title} ${this.props.language} ${this.props.direction} ${combineStyles(this.props.styleList, this.props.style)}>${this.props.content}</code>`;
        } else {
            throw new TypeError(`${props} on Code is not a valid Object type.`);
        }
    } catch (e) {
        console.error(e);
    }
}

// Code Block
function CodeBlock(props) {
    try {
        if (typeof props === "object" || props instanceof Object) {
            (props instanceof TYPOGRAPHY_PROPERTIES) ? (this.props = props) : (this.props = new TYPOGRAPHY_PROPERTIES(props));
            return `<pre ${this.props.id} ${this.props.class} ${this.props.title} ${this.props.language} ${this.props.direction} ${combineStyles(this.props.styleList, this.props.style)}><code>${this.props.content}</code></pre>`;
        } else {
            throw new TypeError(`${props} on CodeBlock is not a valid Object type.`);
        }
    } catch (e) {
        console.error(e);
    }
}

// Keyboard
function Keyboard(props) {
    try {
        if (typeof props === "object" || props instanceof Object) {
            (props instanceof TYPOGRAPHY_PROPERTIES) ? (this.props = props) : (this.props = new TYPOGRAPHY_PROPERTIES(props));
            return `<kbd ${this.props.id} ${this.props.class} ${this.props.title} ${this.props.language} ${this.props.direction} ${combineStyles(this.props.styleList, this.props.style)}>${this.props.content}</kbd>`;
        } else {
            throw new TypeError(`${props} on Keyboard is not a valid Object type.`);
        }
    } catch (e) {
        console.error(e);
    }
}

// Output
function Output(props) {
    try {
        if (typeof props === "object" || props instanceof Object) {
            (props instanceof TYPOGRAPHY_PROPERTIES) ? (this.props = props) : (this.props = new TYPOGRAPHY_PROPERTIES(props));
            return `<samp ${this.props.id} ${this.props.class} ${this.props.title} ${this.props.language} ${this.props.direction} ${combineStyles(this.props.styleList, this.props.style)}>${this.props.content}</samp>`;
        } else {
            throw new TypeError(`${props} on Output is not a valid Object type.`);
        }
    } catch (e) {
        console.error(e);
    }
}

// Variable
function Variable(props) {
    try {
        if (typeof props === "object" || props instanceof Object) {
            (props instanceof TYPOGRAPHY_PROPERTIES) ? (this.props = props) : (this.props = new TYPOGRAPHY_PROPERTIES(props));
            return `<var ${this.props.id} ${this.props.class} ${this.props.title} ${this.props.language} ${this.props.direction} ${combineStyles(this.props.styleList, this.props.style)}>${this.props.content}</var>`;
        } else {
            throw new TypeError(`${props} on Variable is not a valid Object type.`);
        }
    } catch (e) {
        console.error(e);
    }
}

// List
// List Variants
const LIST_VARIANTS = {
    DEFAULT:                "disc",
    NONE:                   "none",
    INHERIT:                "inherit",
    CIRCLE:                 "circle",
    DISC:                   "disc",
    SQUARE:                 "square",
    ARMENIAN:               "armenian",
    CJK_IDEOGRAPHIC:        "cjk-ideographic",
    DECIMAL:                "decimal",
    DECIMAL_LEADING_ZERO:   "decimal-leading-zero",
    GEORGIAN:               "georgian",
    HEBREW:                 "hebrew",
    HIRAGANA:               "hiragana",
    HIRAGANA_IROHA:         "hiragana-iroha",
    KATAKANA:               "katakana",
    KATAKANA_IROHA:         "katakana-iroha",
    LOWER_ALPHA:            "lower-alpha",
    LOWER_GREEK:            "lower-greek",
    LOWER_LATIN:            "lower-latin",
    LOWER_ROMAN:            "lower-roman",
    UPPER_ALPHA:            "upper-alpha",
    UPPER_GREEK:            "upper-greek",
    UPPER_LATIN:            "upper-latin",
    UPPER_ROMAN:            "upper-roman",
};
Object.freeze(LIST_VARIANTS);

// List Properties
class LIST_PROPERTIES extends TYPOGRAPHY_PROPERTIES {
    constructor(props) {
        super(props);
        // variant
        try {
            if (props.variant === undefined) {
                this.variant = "";
            } else if ((typeof props.variant === "string") || (props.variant instanceof String)) {
                this.variant = `list-style-type: '${props.variant}';`;
            } else if (Object.values(LIST_VARIANTS).includes(props.variant)) {
                this.variant = `list-style-type: ${props.variant};`;
            } else {
                throw new TypeError(`${props.variant} on LIST_PROPERTIES.variant is not a valid String or LIST_VARIANTS type.`);
            }
        } catch (e) {
            console.error(e);
        }

        // styleList
        this.styleList.concat([
            this.variant,
        ]);
    }
}

// Unordered List
function UnorderedList(props) {
    try {
        if (typeof props === "object" || props instanceof Object) {
            (props instanceof LIST_PROPERTIES) ? (this.props = props) : (this.props = new LIST_PROPERTIES(props));
            return `<ul role="list" ${this.props.id} ${this.props.class} ${this.props.title} ${this.props.language} ${this.props.direction} ${this.props.variant} ${combineStyles(this.props.styleList, this.props.style)}>${this.props.content}</ul>`;
        } else {
            throw new TypeError(`${props} on UnorderedList is not a valid Object type.`);
        }
    } catch (e) {
        console.error(e);
    }
}

// Ordered List
function OrderedList(props) {
    try {
        if (typeof props === "object" || props instanceof Object) {
            (props instanceof LIST_PROPERTIES) ? (this.props = props) : (this.props = new LIST_PROPERTIES(props));
            return `<ul role="list" ${this.props.id} ${this.props.class} ${this.props.title} ${this.props.language} ${this.props.direction} ${this.props.variant} ${combineStyles(this.props.styleList, this.props.style)}>${this.props.content}</ul>`;
        } else {
            throw new TypeError(`${props} on OrderedList is not a valid Object type.`);
        }
    } catch (e) {
        console.error(e);
    }
}

// List Item
function ListItem(props) {
    try {
        if (typeof props === "object" || props instanceof Object) {
            (props instanceof LIST_PROPERTIES) ? (this.props = props) : (this.props = new LIST_PROPERTIES(props));
            return `<li role="listitem" ${this.props.id} ${this.props.class} ${this.props.title} ${this.props.language} ${this.props.direction} ${this.props.variant} ${combineStyles(this.props.styleList, this.props.style)}>${this.props.content}</li>`;
        } else {
            throw new TypeError(`${props} on OrderedList is not a valid Object type.`);
        }
    } catch (e) {
        console.error(e);
    }
}
        
// Descriptive List
function DescriptiveList(props) {
    try {
        if (typeof props === "object" || props instanceof Object) {
            (props instanceof TYPOGRAPHY_PROPERTIES) ? (this.props = props) : (this.props = new TYPOGRAPHY_PROPERTIES(props));
            return `<dl role="list" ${this.props.id} ${this.props.class} ${this.props.title} ${this.props.language} ${this.props.direction} ${combineStyles(this.props.styleList, this.props.style)}>${this.props.content}</dl>`;
        } else {
            throw new TypeError(`${props} on DescriptiveList is not a valid Object type.`);
        }
    } catch (e) {
        console.error(e);
    }
}

// Descriptive Details
function DescriptiveDetails(props) {
    try {
        if (typeof props === "object" || props instanceof Object) {
            (props instanceof TYPOGRAPHY_PROPERTIES) ? (this.props = props) : (this.props = new TYPOGRAPHY_PROPERTIES(props));
            return `<dd role="listitem" ${this.props.id} ${this.props.class} ${this.props.title} ${this.props.language} ${this.props.direction} ${combineStyles(this.props.styleList, this.props.style)}>${this.props.content}</dd>`;
        } else {
            throw new TypeError(`${props} on DescriptiveDetails is not a valid Object type.`);
        }
    } catch (e) {
        console.error(e);
    }
}

// Descriptive Term
function DescriptiveTerm(props) {
    try {
        if (typeof props === "object" || props instanceof Object) {
            (props instanceof TYPOGRAPHY_PROPERTIES) ? (this.props = props) : (this.props = new TYPOGRAPHY_PROPERTIES(props));
            return `<dt role="listitem" ${this.props.id} ${this.props.class} ${this.props.title} ${this.props.language} ${this.props.direction} ${combineStyles(this.props.styleList, this.props.style)}>${this.props.content}</dt>`;
        } else {
            throw new TypeError(`${props} on DescriptiveTerm is not a valid Object type.`);
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
    HeadingGroup,
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
