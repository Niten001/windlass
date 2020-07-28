/*  ---------------------------------------------------------------------------
 *    Windlass v1.0.0 - Default Components
 *    Source code for all Windlass default components, including alignment 
 *      values, display values, global attribute properties and more. Use these 
 *      defaults to present your content in a consistent, concise manner in 
 *      accordance with the HTML5 specification.
 *    Copyright 2020 Timothy Martin
 *    Licensed under MIT (https://github.com/Niten001/windlass/blob/master/LICENSE)
 *  ---------------------------------------------------------------------------  */

// Align Values
const ALIGN_VALUES = {
    INHERIT:    "inherit",
    LEFT:       "left",
    CENTER:     "center",
    RIGHT:      "right",
    JUSTIFY:    "justify",
};
Object.freeze(ALIGN_VALUES);

// Direction Values
const DIRECTION_VALUES = {
    AUTO:           "auto",
    LEFT_TO_RIGHT:  "ltr",
    RIGHT_TO_LEFT:  "rtl",
};
Object.freeze(DIRECTION_VALUES);

// Display Values
const DISPLAY_VALUES = {
    INITIAL:    "initial",
    BLOCK:      "block",
    INLINE:     "inline",
};
Object.freeze(DISPLAY_VALUES);

// Transform Values
const TRANSFORM_VALUES = {
    NONE:       "none",
    INITIAL:    "initial",
    INHERIT:    "inherit",
    CAPITALIZE: "capitalize",
    UPPERCASE:  "uppercase",
    LOWERCASE:  "lowercase",
};
Object.freeze(TRANSFORM_VALUES);

// Default Properties
class DEFAULT_PROPERTIES {
    constructor(props) {
        // class
        try {
            if (props.class === undefined) {
                this.class = "";
            } else if ((typeof props.class === "string") || (props.class instanceof String)) {
                this.class = `class="${props.class}"`;
            } else {
                throw new TypeError(`${props.class} on DEFAULT_PROPERTIES.class is not a valid String type.`);
            }
        } catch (e) {
            console.error(`${e.name}: ${e.message}`);
        }

        // content
        try {
            if (props.content === undefined) {
                this.content = "";
            } else if ((typeof props.content === "string") || (props.content instanceof String)) {
                this.content = String.raw`${props.content}`;
            } else {
                throw new TypeError(`${props.content} on DEFAULT_PROPERTIES.content is not a valid String type.`);
            }
        } catch (e) {
            console.error(`${e.name}: ${e.message}`);
        }
            
        // direction
        try {
            if (props.direction === undefined) {
                this.direction = "";
            } else if (Object.values(DIRECTION_VALUES).includes(props.direction)) {
                this.direction = `dir="${props.direction}"`;
            } else {
                throw new TypeError(`${props.direction} on DEFAULT_PROPERTIES.direction is not a valid DIRECTION_VALUES type.`);
            }
        } catch (e) {
            console.error(`${e.name}: ${e.message}`);
        }

        // id
        try {
            if (props.id === undefined) {
                this.id = "";
            } else if ((typeof props.id === "string") || (props.id instanceof String)) {
                this.id = `id="${props.id}"`;
            } else {
                throw new TypeError(`${props.id} on DEFAULT_PROPERTIES.id is not a valid String type.`);
            }
        } catch (e) {
            console.error(`${e.name}: ${e.message}`);
        }

        // language
        try {
            if (props.language === undefined) {
                this.language = "";
            } else if ((typeof props.language === "string") || (props.language instanceof String)) {
                this.language = `lang="${props.language}"`;
            } else {
                throw new TypeError(`${props.language} on DEFAULT_PROPERTIES.language is not a valid String type.`);
            }
        } catch (e) {
            console.error(`${e.name}: ${e.message}`);
        }

        // style
        try {
            if (props.style === undefined) {
                this.style = undefined;
            } else if ((typeof props.style === "string") || (props.style instanceof String)) {
                this.style = props.style;
            } else {
                throw new TypeError(`${props.style} on DEFAULT_PROPERTIES.style is not a valid String type.`);
            }
        } catch (e) {
            console.error(`${e.name}: ${e.message}`);
        }

        // title
        try {
            if (props.title === undefined) {
                this.title = "";
            } else if ((typeof props.title === "string") || (props.title instanceof String)) {
                this.title = `title="${props.title}" aria-label="${props.title}"`;
            } else {
                throw new TypeError(`${props.title} on DEFAULT_PROPERTIES.title is not a valid String type.`);
            }
        } catch (e) {
            console.error(`${e.name}: ${e.message}`);
        }

        // stylelist
        this.styleList = [];
    }

    // Combine Styles function
    combineStyles() {
        try {
            if (this.styleList.constructor === Array) {
                if (this.styleList.some((style) => {return (typeof style === "string" || style instanceof String);})) {
                    return `style="${this.styleList.filter((style) => {return style != null;}).join(" ")}${this.style ? ` ${this.style}` : ""}"`;
                } else {
                    return "";
                }
            } else {
                throw new TypeError(`${this.styleList} on combineStyles() is not a valid Array type.`);
            }
        } catch (e) {
            console.error(`${e.name}: ${e.message}`);
        }
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