/*  ---------------------------------------------------------------------------
 *    Windlass v1.0.0 - Typography Elements
 *    Source code for all Windlass typography elements, including typography 
 *      properties, body text, headings, lists and more. Use typography to 
 *      present your content in a clear, accessible manner in accordance with 
 *      the HTML5 specification.
 *    Copyright 2020 Timothy Martin
 *    Licensed under MIT (LICENSE)
 *  ---------------------------------------------------------------------------  */

// Imports
    const {
        ALIGN_VALUES,
        DEFAULT_PROPERTIES,
        DISPLAY_VALUES,
        TRANSFORM_VALUES,
    } = require("../default/default");
    const { isValidColor } = require("../color/color");

//  Typography
    // Typography Properties
        class TYPOGRAPHY_PROPERTIES extends DEFAULT_PROPERTIES {
            constructor(props) {
                super(props);
                //  align
                    try {
                        if (props.align === undefined) {
                            this.align = undefined;
                        } else if (Object.values(ALIGN_VALUES).includes(props.align)) {
                            this.align = `text-align: ${props.align};`;
                        } else {
                            throw new TypeError(`${props.align} on TYPOGRAPHY_PROPERTIES.align is not a valid ALIGN_VALUES type.`)
                        }
                    } catch (e) {
                        console.error(`${e.name}: ${e.message}`);
                    }

                //  color
                    try {
                        if (props.color === undefined) {
                            this.color = undefined;
                        } else if (isValidColor(props.color)) {
                            this.color = `color: ${props.color};`;
                        } else {
                            throw new TypeError(`${props.color} on TYPOGRAPHY_PROPERTIES.color is not a valid COLOR type.`)
                        }
                    } catch (e) {
                        console.error(`${e.name}: ${e.message}`);
                    }

                //  display
                    try {
                        if (props.display === undefined) {
                            this.display = undefined;
                        } else if (Object.values(DISPLAY_VALUES).includes(props.display)) {
                            this.display = `display: ${props.display};`;
                        } else {
                            throw new TypeError(`${props.display} on TYPOGRAPHY_PROPERTIES.display is not a valid DISPLAY_VALUES type.`)
                        }
                    } catch (e) {
                        console.error(`${e.name}: ${e.message}`);
                    }
                
                //  noWrap
                    try {
                        if (props.noWrap === undefined) {
                            this.noWrap = undefined;
                        } else if ((typeof props.noWrap === "boolean") || (props.noWrap instanceof Boolean)) {
                            this.noWrap = (props.noWrap) ? (`white-space: nowrap; overflow: hidden; text-overflow: ellipsis;`) : (``);
                        } else {
                            throw new TypeError(`${props.noWrap} on TYPOGRAPHY_PROPERTIES.noWrap is not a valid Boolean type.`)
                        }
                    } catch (e) {
                        console.error(`${e.name}: ${e.message}`);
                    }

                //  paragraph
                    try {
                        if (props.paragraph === undefined) {
                            this.paragraph = false;
                        } else if ((typeof props.paragraph === "boolean") || (props.paragraph instanceof Boolean)) {
                            this.paragraph = props.paragraph;
                        } else {
                            throw new TypeError(`${props.paragraph} on TYPOGRAPHY_PROPERTIES.paragraph is not a valid Boolean type.`)
                        }
                    } catch (e) {
                        console.error(`${e.name}: ${e.message}`);
                    }

                //  transform
                    try {
                        if (props.transform === undefined) {
                            this.transform = undefined;
                        } else if (Object.values(TRANSFORM_VALUES).includes(props.transform)) {
                            this.transform = `text-transform: ${props.transform};`;
                        } else {
                            throw new TypeError(`${props.transform} on TYPOGRAPHY_PROPERTIES.transform is not a valid TRANSFORM_VALUES type.`)
                        }
                    } catch (e) {
                        console.error(`${e.name}: ${e.message}`);
                    }

                //  combinedStyle
                    if (
                        this.align === undefined &&
                        this.color === undefined &&
                        this.display === undefined &&
                        this.noWrap === undefined &&
                        this.style === undefined &&
                        this.transform === undefined
                    ) { this.combinedStyle = ``; } else {
                        this.combinedStyle = `style="${(this.align === undefined) ? (``) : (this.align)}${(this.color === undefined) ? (``) : (this.color)}${(this.display === undefined) ? (``) : (this.display)}${(this.noWrap === undefined) ? (``) : (this.noWrap)}${(this.transform === undefined) ? (``) : (this.transform)}${(this.style === undefined) ? (``) : (this.style)}"`;
                    }
            }
        }

    //  Text
        //  Text Variants
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
            }
            Object.freeze(TEXT_VARIANTS);
        
        //  Text Properties
            class TEXT_PROPERTIES extends TYPOGRAPHY_PROPERTIES {
                constructor(props) {
                    super(props);
                    //  variant
                        try {
                            if (props.variant === undefined) {
                                this.variant = TEXT_VARIANTS.DEFAULT;
                            } else if (Object.values(TEXT_VARIANTS).includes(props.variant)) {
                                this.variant = props.variant;
                            } else {
                                throw new TypeError(`${props.variant} on TEXT_PROPERTIES.variant is not a valid TEXT_VARIANTS type.`)
                            }
                        } catch (e) {
                            console.error(`${e.name}: ${e.message}`);
                        }
                }
            }
        
        function Text(props) {
            try {
                if (typeof props !== "object") {
                    throw new TypeError(`${props} on Text is not a valid Object type.`)
                } else {
                    (props instanceof TEXT_PROPERTIES) ? (this.props = props) : (this.props = new TEXT_PROPERTIES(props));
                    return `${(this.props.paragraph) ? (`<p>`) : (``)}<${this.props.variant} ${this.props.id} ${this.props.class} ${this.props.title} ${this.props.language} ${this.props.direction} ${this.props.combinedStyle}>${this.props.content}</${this.props.variant}>${(this.props.paragraph) ? (`</p>`) : (``)}`;
                }
            } catch (e) {
                console.error(`${e.name}: ${e.message}`);
            }
        }

    //  Heading
        //  Heading Variants
            const HEADING_VARIANTS = {
                DEFAULT:    "h1",
                HEADING_1:  "h1",
                HEADING_2:  "h2",
                HEADING_3:  "h3",
                HEADING_4:  "h4",
                HEADING_5:  "h5",
                HEADING_6:  "h6",
            }
            Object.freeze(HEADING_VARIANTS);
        
        //  Heading Properties
            class HEADING_PROPERTIES extends TYPOGRAPHY_PROPERTIES {
                constructor(props) {
                    super(props);
                    //  variant
                        try {
                            if (props.variant === undefined) {
                                this.variant = HEADING_VARIANTS.DEFAULT;
                            } else if (Object.values(HEADING_VARIANTS).includes(props.variant)) {
                                this.variant = props.variant;
                            } else {
                                throw new TypeError(`${props.variant} on HEADING_PROPERTIES.variant is not a valid HEADING_VARIANTS type.`)
                            }
                        } catch (e) {
                            console.error(`${e.name}: ${e.message}`);
                        }
                }
            }
        
        function Heading(props) {
            try {
                (props instanceof HEADING_PROPERTIES) ? (this.props = props) : (this.props = new HEADING_PROPERTIES(props));
                return `${(this.paragraph) ? (`<p>`) : (``)}<${this.props.variant} ${this.props.id} ${this.props.class} ${this.props.title} ${this.props.language} ${this.props.direction} ${this.props.combinedStyle}>${this.props.content}</${this.props.variant}>${(this.paragraph) ? (`</p>`) : (``)}`;
            } catch (e) {
                console.error(`${e.name}: ${e.message}`);
            }
        }

        function HeadingGroup(props) {
            try {
                (props instanceof DEFAULT_PROPERTIES) ? (this.props = props) : (this.props = new DEFAULT_PROPERTIES(props));
                return `<hgroup ${this.props.id} ${this.props.class} ${this.props.title} ${this.props.language} ${this.props.direction} ${(this.props.style === undefined) ? (``) : (`style="${this.props.style}"`)}>${this.props.content}</hgroup>`;
            } catch (e) {
                console.error(`${e.name}: ${e.message}`);
            }
        }

    //  Link
        //  Link Variants
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
            }
            Object.freeze(LINK_VARIANTS);

        //  Link Properties
            class LINK_PROPERTIES extends TYPOGRAPHY_PROPERTIES {
                constructor(props) {
                    super(props);
                    //  download
                        try {
                            if (props.download === undefined) {
                                this.download = undefined;
                            } else if ((typeof props.download === "string") || (props.download instanceof String)) {
                                this.download = `download="${props.download}"`;
                            } else {
                                throw new TypeError(`${props.download} on LINK_PROPERTIES.download is not a valid String type.`)
                            }
                        } catch (e) {
                            console.error(`${e.name}: ${e.message}`);
                        }

                    //  link
                        try {
                            if (props.link === undefined) {
                                this.link = undefined;
                            } else if ((typeof props.link === "string") || (props.link instanceof String)) {
                                this.link = `href="${props.link}"`;
                            } else {
                                throw new TypeError(`${props.link} on LINK_PROPERTIES.link is not a valid String type.`)
                            }
                        } catch (e) {
                            console.error(`${e.name}: ${e.message}`);
                        }

                    //  variants
                        try {
                            if (props.variant === undefined) {
                                this.variant = LINK_VARIANTS.DEFAULT;
                            } else if (Object.values(LINK_VARIANTS).includes(props.variant)) {
                                this.variant = `rel=${props.variant}"`;
                            } else {
                                throw new TypeError(`${props.variant} on LINK_PROPERTIES.variant is not a valid LINK_VARIANTS type.`)
                            }
                        } catch (e) {
                            console.error(`${e.name}: ${e.message}`);
                        }
                }
            }

        function Link(props) {
            try {
                (props instanceof LINK_PROPERTIES) ? (this.props = props) : (this.props = new LINK_PROPERTIES(props));
                return `${(this.paragraph) ? (`<p>`) : (``)}<a ${this.props.id} ${this.props.class} ${this.props.title} ${this.props.language} ${this.props.direction} ${this.props.variant} ${this.props.downlaod} ${this.props.link} ${this.props.combinedStyle}>${this.props.content}</a>${(this.paragraph) ? (`</p>`) : (``)}`;
            } catch (e) {
                console.error(`${e.name}: ${e.message}`);
            }
        }

    //  Quote
        //  Quote Properties
            class QUOTE_PROPERTIES extends TYPOGRAPHY_PROPERTIES {
                constructor(props) {
                    super(props);
                    //  source
                        try {
                            if (props.source === undefined) {
                                this.source = undefined;
                            } else if ((typeof props.source === "string") || (props.source instanceof String)) {
                                this.source = `cite="${props.source}"`;
                            } else {
                                throw new TypeError(`${props.source} on QUOTE_PROPERTIES.source is not a valid String type.`)
                            }
                        } catch (e) {
                            console.error(`${e.name}: ${e.message}`);
                        }
                }
            }

        //  Inline Quote
            function Quote(props) {
                try {
                    (props instanceof QUOTE_PROPERTIES) ? (this.props = props) : (this.props = new QUOTE_PROPERTIES(props));
                    return `<q ${this.props.id} ${this.props.class} ${this.props.title} ${this.props.language} ${this.props.direction} ${this.props.source} ${this.props.combinedStyle}>${this.props.content}</q>`;
                } catch (e) {
                    console.error(`${e.name}: ${e.message}`);
                }
            }

        //  Blockquote
            function Blockquote(props) {
                try {
                    (props instanceof QUOTE_PROPERTIES) ? (this.props = props) : (this.props = new QUOTE_PROPERTIES(props));
                    return `<blockquote ${this.props.id} ${this.props.class} ${this.props.title} ${this.props.language} ${this.props.direction} ${this.props.source} ${this.props.combinedStyle}>${this.props.content}</blockquote>`;
                } catch (e) {
                    console.error(`${e.name}: ${e.message}`);
                }
            }

        //  Citation
            function Cite(props) {
                try {
                    (props instanceof TYPOGRAPHY_PROPERTIES) ? (this.props = props) : (this.props = new TYPOGRAPHY_PROPERTIES(props));
                    return `<cite ${this.props.id} ${this.props.class} ${this.props.title} ${this.props.language} ${this.props.direction} ${this.props.combinedStyle}>${this.props.content}</cite>`;
                } catch (e) {
                    console.error(`${e.name}: ${e.message}`);
                }
            }

    //  Code
        //  Inline
            function Code(props) {
                try {
                    (props instanceof TYPOGRAPHY_PROPERTIES) ? (this.props = props) : (this.props = new TYPOGRAPHY_PROPERTIES(props));
                    return `<code ${this.props.id} ${this.props.class} ${this.props.title} ${this.props.language} ${this.props.direction} ${this.props.combinedStyle}>${this.props.content}</code>`;
                } catch (e) {
                    console.error(`${e.name}: ${e.message}`);
                }
            }

        //  Code Block
            function CodeBlock(props) {
                try {
                    (props instanceof TYPOGRAPHY_PROPERTIES) ? (this.props = props) : (this.props = new TYPOGRAPHY_PROPERTIES(props));
                    return `<pre ${this.props.id} ${this.props.class} ${this.props.title} ${this.props.language} ${this.props.direction} ${this.props.combinedStyle}><code>${this.props.content}</code></pre>`;
                } catch (e) {
                    console.error(`${e.name}: ${e.message}`);
                }
            }

        //  Keyboard
            function Keyboard(props) {
                try {
                    (props instanceof TYPOGRAPHY_PROPERTIES) ? (this.props = props) : (this.props = new TYPOGRAPHY_PROPERTIES(props));
                    return `<kbd ${this.props.id} ${this.props.class} ${this.props.title} ${this.props.language} ${this.props.direction} ${this.props.combinedStyle}>${this.props.content}</kbd>`;
                } catch (e) {
                    console.error(`${e.name}: ${e.message}`);
                }
            }

        //  Output
            function Output(props) {
                try {
                    (props instanceof TYPOGRAPHY_PROPERTIES) ? (this.props = props) : (this.props = new TYPOGRAPHY_PROPERTIES(props));
                    return `<samp ${this.props.id} ${this.props.class} ${this.props.title} ${this.props.language} ${this.props.direction} ${this.props.combinedStyle}>${this.props.content}</samp>`;
                } catch (e) {
                    console.error(`${e.name}: ${e.message}`);
                }
            }

        //  Variable
            function Variable(props) {
                try {
                    (props instanceof TYPOGRAPHY_PROPERTIES) ? (this.props = props) : (this.props = new TYPOGRAPHY_PROPERTIES(props));
                    return `<var ${this.props.id} ${this.props.class} ${this.props.title} ${this.props.language} ${this.props.direction} ${this.props.combinedStyle}>${this.props.content}</var>`;
                } catch (e) {
                    console.error(`${e.name}: ${e.message}`);
                }
            }

    //  List
        //  List Variants
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

        //  List Properties
            class LIST_PROPERTIES extends TYPOGRAPHY_PROPERTIES {
                constructor(props) {
                    super(props);
                    //  variant
                        try {
                            if (props.variant === undefined) {
                                this.variant = ``;
                            } else if ((typeof props.variant === "string") || (props.variant instanceof String)) {
                                this.variant = `style="list-style-type: '${props.variant}';"`;
                            } else if (Object.values(LIST_VARIANTS).includes(props.variant)) {
                                this.variant = `style="list-style-type: ${props.variant};"`;
                            } else {
                                throw new TypeError(`${props.variant} on LIST_PROPERTIES.variant is not a valid String or LIST_VARIANTS type.`)
                            }
                        } catch (e) {
                            console.error(`${e.name}: ${e.message}`);
                        }
                }
            }

        //  Unordered List
            function UnorderedList(props) {
                try {
                    (props instanceof LIST_PROPERTIES) ? (this.props = props) : (this.props = new LIST_PROPERTIES(props));
                    return `<ul role="list" ${this.props.id} ${this.props.class} ${this.props.title} ${this.props.language} ${this.props.direction} ${this.props.variant} ${this.props.combinedStyle}>${this.props.content}</ul>`;
                } catch (e) {
                    console.error(`${e.name}: ${e.message}`);
                }
            }

        //  Ordered List
            function OrderedList(props) {
                try {
                    (props instanceof LIST_PROPERTIES) ? (this.props = props) : (this.props = new LIST_PROPERTIES(props));
                    return `<ul role="list" ${this.props.id} ${this.props.class} ${this.props.title} ${this.props.language} ${this.props.direction} ${this.props.variant} ${this.props.combinedStyle}>${this.props.content}</ul>`;
                } catch (e) {
                    console.error(`${e.name}: ${e.message}`);
                }
            }

        //  List Item
            function ListItem(props) {
                try {
                    (props instanceof LIST_PROPERTIES) ? (this.props = props) : (this.props = new LIST_PROPERTIES(props));
                    return `<li role="listitem" ${this.props.id} ${this.props.class} ${this.props.title} ${this.props.language} ${this.props.direction} ${this.props.variant} ${this.props.combinedStyle}>${this.props.content}</li>`;
                } catch (e) {
                    console.error(`${e.name}: ${e.message}`);
                }
            }
        
        //  Descriptive List
            function DescriptiveList(props) {
                try {
                    (props instanceof TYPOGRAPHY_PROPERTIES) ? (this.props = props) : (this.props = new TYPOGRAPHY_PROPERTIES(props));
                    return `<dl role="list" ${this.props.id} ${this.props.class} ${this.props.title} ${this.props.language} ${this.props.direction} ${this.props.combinedStyle}>${this.props.content}</dl>`;
                } catch (e) {
                    console.error(`${e.name}: ${e.message}`);
                }
            }

        //  Descriptive Details
            function DescriptiveDetails(props) {
                try {
                    (props instanceof TYPOGRAPHY_PROPERTIES) ? (this.props = props) : (this.props = new TYPOGRAPHY_PROPERTIES(props));
                    return `<dd role="listitem" ${this.props.id} ${this.props.class} ${this.props.title} ${this.props.language} ${this.props.direction} ${this.props.combinedStyle}>${this.props.content}</dd>`;
                } catch (e) {
                    console.error(`${e.name}: ${e.message}`);
                }
            }

        //  Descriptive Term
            function DescriptiveTerm(props) {
                try {
                    (props instanceof TYPOGRAPHY_PROPERTIES) ? (this.props = props) : (this.props = new TYPOGRAPHY_PROPERTIES(props));
                    return `<dt role="listitem" ${this.props.id} ${this.props.class} ${this.props.title} ${this.props.language} ${this.props.direction} ${this.props.combinedStyle}>${this.props.content}</dt>`;
                } catch (e) {
                    console.error(`${e.name}: ${e.message}`);
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
